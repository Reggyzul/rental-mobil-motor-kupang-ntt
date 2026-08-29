import { createClient } from '@supabase/supabase-js';

const defaultUrl = 'https://hmptbsiuivyysffcmuys.supabase.co';
const defaultAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtcHRic2l1aXZ5eXNmZmNtdXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4Nzc1NDMsImV4cCI6MjEwMzQ1MzU0M30.0h0a3X-o69ZpJoV-KdR3brs_6CGSdvluFWmYOTC8lEY';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || defaultUrl;
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || defaultAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    storageKey: 'srm-admin-auth',
  },
});

export type SiteContent = {
  id: string;
  key: string;
  value: string;
  value_type: 'text' | 'image_url' | 'json';
  label: string;
  section: string;
  sort_order: number;
};

export type CarRow = {
  id: string;
  name: string;
  category: string;
  price_per_day: number;
  price_display: string;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
  include_list: string[];
  description: string;
  rating: number;
  reviews_count: number;
  specifications: { label: string; value: string }[];
  sort_order: number;
  is_active: boolean;
};

export type RouteRow = {
  id: string;
  title: string;
  from_city: string;
  to_city: string;
  region: string;
  note: string;
  sort_order: number;
  is_active: boolean;
};

export type TourRow = {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  badge: string;
  route_display: string;
  highlights: string[];
  includes_list: string[];
  excludes_list: string[];
  sort_order: number;
  is_active: boolean;
};

export type TestimonialRow = {
  id: string;
  name: string;
  role_id: string;
  role_en: string;
  text_id: string;
  text_en: string;
  rating: number;
  image: string;
  car_model: string;
  date_label: string;
  sort_order: number;
  is_active: boolean;
};

// Helper: Convert File to optimized Data URL
function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 1200;
        let width = img.width;
        let height = img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          try {
            resolve(canvas.toDataURL('image/webp', 0.8));
          } catch {
            resolve(canvas.toDataURL('image/jpeg', 0.85));
          }
        } else {
          resolve(reader.result as string);
        }
      };
      img.onerror = () => resolve(reader.result as string);
      img.src = e.target?.result as string;
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

// Upload image to Supabase Storage with automatic bucket creation & resilient base64 fallback
export async function uploadImage(file: File, folder = 'general'): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop() || 'jpg';
    const fileName = `${folder}/${Date.now()}_${Math.random().toString(36).slice(2)}.${fileExt}`;
    
    // 1. Attempt upload to Supabase Storage
    let { data, error } = await supabase.storage
      .from('srm-images')
      .upload(fileName, file, { upsert: true, cacheControl: '3600' });
    
    // 2. If bucket not found, attempt to create it on the fly
    if (error && (error.message.includes('not found') || error.message.includes('Bucket') || error.message.includes('bucket'))) {
      try {
        await supabase.storage.createBucket('srm-images', { public: true });
        const retry = await supabase.storage
          .from('srm-images')
          .upload(fileName, file, { upsert: true, cacheControl: '3600' });
        data = retry.data;
        error = retry.error;
      } catch (bucketErr) {
        console.warn('Auto-create bucket skipped:', bucketErr);
      }
    }

    // 3. If storage succeeded, return public CDN URL
    if (!error && data?.path) {
      const { data: publicData } = supabase.storage.from('srm-images').getPublicUrl(data.path);
      if (publicData?.publicUrl) {
        return publicData.publicUrl;
      }
    }
    
    // 4. Resilient Fallback: If storage bucket isn't enabled yet, convert to optimized Data URL
    console.info('Using optimized base64 image data URL fallback...');
    return await fileToDataUrl(file);
  } catch (err) {
    console.warn('Exception during upload, falling back to data URL:', err);
    return await fileToDataUrl(file);
  }
}

// Keep-alive ping
export async function pingSupabase(): Promise<boolean> {
  try {
    const { error } = await supabase.from('site_content').select('id').limit(1);
    return !error;
  } catch {
    return false;
  }
}
