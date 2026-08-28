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

// Upload image to Supabase Storage
export async function uploadImage(file: File, folder = 'general'): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}_${Math.random().toString(36).slice(2)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('srm-images')
      .upload(fileName, file, { upsert: true, cacheControl: '3600' });
    
    if (error) {
      console.error('Upload error:', error);
      return null;
    }
    
    const { data: publicData } = supabase.storage.from('srm-images').getPublicUrl(data.path);
    return publicData.publicUrl;
  } catch (err) {
    console.error('Exception during upload:', err);
    return null;
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
