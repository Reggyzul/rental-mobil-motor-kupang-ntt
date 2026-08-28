import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { supabase, pingSupabase, uploadImage } from '../lib/supabase';
import type { SiteContent, CarRow, RouteRow, TourRow, TestimonialRow } from '../lib/supabase';
import { CARS, TESTIMONIALS } from '../data/cars';
import { TOUR_PACKAGES } from '../data/packages';

// ─── Default fallback data (from static files) ──────────────────────────────
const DEFAULT_SITE_CONTENT: Record<string, string> = {
  business_name: 'CV SRM MANDIRI',
  business_tagline: 'Melayani Perjalanan Anda Sepenuh Hati',
  business_description: 'CV SRM MANDIRI melayani jasa transportasi profesional dengan armada pilihan: Innova, Avanza, Sigra, dan Calya. Melayani rute Pulang-Pergi (PP) Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi, serta wisata favorit Berastagi, Parapat, dan Pulau Samosir (PP).',
  hero_image: '/hero_sumut.jpg',
  logo_image: '/logo.png',
  contact_wa1: '085270607796',
  contact_phone2: '081262320086',
  contact_tiktok: '@hendry.manullang',
  contact_address: 'Simalingkar B, Medan, Sumatera Utara',
  seo_title: 'CV SRM MANDIRI | Jasa Transportasi & Rental Mobil Medan - Sumatera',
  seo_description: 'CV SRM MANDIRI melayani jasa transportasi terpercaya, rental mobil PP antar kota Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi & wisata Berastagi, Parapat, Pulau Samosir.',
};

const DEFAULT_ROUTES: RouteRow[] = [
  { id: '1', title: 'Medan - Dumai (PP)', from_city: 'Medan', to_city: 'Dumai', region: 'Riau', note: 'Pelabuhan & Kawasan Industri', sort_order: 1, is_active: true },
  { id: '2', title: 'Medan - Duri (PP)', from_city: 'Medan', to_city: 'Duri', region: 'Riau', note: 'Kawasan Migas & Perdagangan', sort_order: 2, is_active: true },
  { id: '3', title: 'Medan - Kandis (PP)', from_city: 'Medan', to_city: 'Kandis', region: 'Riau', note: 'Jalur Lintas Strategis', sort_order: 3, is_active: true },
  { id: '4', title: 'Medan - Garut (PP)', from_city: 'Medan', to_city: 'Garut', region: 'Jawa Barat', note: 'Layanan Antar Pulau / Khusus', sort_order: 4, is_active: true },
  { id: '5', title: 'Medan - Pekanbaru (PP)', from_city: 'Medan', to_city: 'Pekanbaru', region: 'Riau', note: 'Ibukota Provinsi Riau', sort_order: 5, is_active: true },
  { id: '6', title: 'Medan - Kerinci (PP)', from_city: 'Medan', to_city: 'Kerinci', region: 'Jambi', note: 'Wisata Alam & Pegunungan Kerinci', sort_order: 6, is_active: true },
  { id: '7', title: 'Medan - Jambi (PP)', from_city: 'Medan', to_city: 'Jambi', region: 'Jambi', note: 'Pusat Kota & Kawasan Bisnis Jambi', sort_order: 7, is_active: true },
  { id: '8', title: 'Medan & Sekitarnya (PP)', from_city: 'Medan', to_city: 'Medan', region: 'Sumatera Utara', note: 'City Tour, Operasional & Bandara KNO', sort_order: 8, is_active: true },
];

// ─── Context Types ──────────────────────────────────────────────────────────
type DataContextType = {
  isLoading: boolean;
  isConnected: boolean;
  siteContent: Record<string, string>;
  cars: CarRow[];
  routes: RouteRow[];
  tours: TourRow[];
  testimonials: TestimonialRow[];
  // Helpers
  getSiteValue: (key: string) => string;
  uploadImageToStorage: (file: File, folder?: string) => Promise<string | null>;
  // CRUD for admin
  updateSiteContent: (key: string, value: string) => Promise<void>;
  saveCar: (car: Partial<CarRow> & { id: string }) => Promise<void>;
  deleteCar: (id: string) => Promise<void>;
  saveRoute: (route: Partial<RouteRow> & { title: string; to_city: string }) => Promise<void>;
  deleteRoute: (id: string) => Promise<void>;
  saveTour: (tour: Partial<TourRow> & { id: string }) => Promise<void>;
  deleteTour: (id: string) => Promise<void>;
  saveTestimonial: (t: Partial<TestimonialRow> & { name: string }) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  refreshData: () => Promise<void>;
  lastPing: string | null;
};

const DataContext = createContext<DataContextType | null>(null);

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
}

function mapCarsFromDB(dbCars: CarRow[]): CarRow[] {
  return dbCars.map((c) => ({
    ...c,
    include_list: Array.isArray(c.include_list) ? c.include_list : JSON.parse((c.include_list as unknown as string) || '[]'),
    specifications: Array.isArray(c.specifications) ? c.specifications : JSON.parse((c.specifications as unknown as string) || '[]'),
  }));
}

function mapToursFromDB(dbTours: TourRow[]): TourRow[] {
  return dbTours.map((t) => ({
    ...t,
    highlights: Array.isArray(t.highlights) ? t.highlights : JSON.parse((t.highlights as unknown as string) || '[]'),
    includes_list: Array.isArray(t.includes_list) ? t.includes_list : JSON.parse((t.includes_list as unknown as string) || '[]'),
    excludes_list: Array.isArray(t.excludes_list) ? t.excludes_list : JSON.parse((t.excludes_list as unknown as string) || '[]'),
  }));
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [siteContent, setSiteContent] = useState<Record<string, string>>(DEFAULT_SITE_CONTENT);
  const [cars, setCars] = useState<CarRow[]>(
    CARS.map((c, i) => ({
      id: c.id,
      name: c.name,
      category: c.category,
      price_per_day: c.pricePerDay,
      price_display: c.priceDisplay,
      image: c.image,
      seats: c.seats,
      transmission: c.transmission,
      fuel: c.fuel,
      include_list: c.includeList,
      description: c.description,
      rating: c.rating,
      reviews_count: c.reviewsCount,
      specifications: c.specifications,
      sort_order: i + 1,
      is_active: true,
    }))
  );
  const [routes, setRoutes] = useState<RouteRow[]>(DEFAULT_ROUTES);
  const [tours, setTours] = useState<TourRow[]>(
    TOUR_PACKAGES.map((p, i) => ({
      id: p.id,
      title: p.title,
      location: p.location,
      duration: p.duration,
      image: p.image,
      badge: p.badge,
      route_display: p.routeDisplay,
      highlights: p.highlights,
      includes_list: p.includes,
      excludes_list: p.excludes,
      sort_order: i + 1,
      is_active: true,
    }))
  );
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>(
    TESTIMONIALS.map((t, i) => ({
      id: t.id,
      name: t.name,
      role_id: t.roleID,
      role_en: t.roleEN,
      text_id: t.textID,
      text_en: t.textEN,
      rating: t.rating,
      image: t.image,
      car_model: t.carModelID,
      date_label: t.dateID,
      sort_order: i + 1,
      is_active: true,
    }))
  );
  const [lastPing, setLastPing] = useState<string | null>(null);

  const fetchAllData = useCallback(async () => {
    try {
      const [contentRes, carsRes, routesRes, toursRes, testiRes] = await Promise.all([
        supabase.from('site_content').select('*').order('sort_order'),
        supabase.from('cars').select('*').eq('is_active', true).order('sort_order'),
        supabase.from('routes').select('*').eq('is_active', true).order('sort_order'),
        supabase.from('tours').select('*').eq('is_active', true).order('sort_order'),
        supabase.from('testimonials').select('*').eq('is_active', true).order('sort_order'),
      ]);

      if (contentRes.error || carsRes.error || routesRes.error || toursRes.error || testiRes.error) {
        setIsConnected(false);
        return false;
      }

      setIsConnected(true);

      if (contentRes.data && contentRes.data.length > 0) {
        const map: Record<string, string> = { ...DEFAULT_SITE_CONTENT };
        for (const row of contentRes.data as SiteContent[]) {
          map[row.key] = row.value;
        }
        setSiteContent(map);
      }
      if (carsRes.data && carsRes.data.length > 0) setCars(mapCarsFromDB(carsRes.data as CarRow[]));
      if (routesRes.data && routesRes.data.length > 0) setRoutes(routesRes.data as RouteRow[]);
      if (toursRes.data && toursRes.data.length > 0) setTours(mapToursFromDB(toursRes.data as TourRow[]));
      if (testiRes.data && testiRes.data.length > 0) setTestimonials(testiRes.data as TestimonialRow[]);

      setLastPing(new Date().toLocaleTimeString('id-ID'));
      return true;
    } catch {
      setIsConnected(false);
      return false;
    }
  }, []);

  useEffect(() => {
    // Initial fetch — non-blocking (UI already has fallback data)
    setIsLoading(true);
    fetchAllData().finally(() => setIsLoading(false));

    // Keep-alive interval: ping every 2 days = 172800000ms (also every 30 min in foreground)
    const keepAliveInterval = setInterval(async () => {
      const ok = await pingSupabase();
      if (ok) setLastPing(new Date().toLocaleTimeString('id-ID'));
    }, 30 * 60 * 1000); // 30 minutes

    return () => clearInterval(keepAliveInterval);
  }, [fetchAllData]);

  const getSiteValue = useCallback((key: string) => siteContent[key] ?? DEFAULT_SITE_CONTENT[key] ?? '', [siteContent]);

  const uploadImageToStorage = useCallback((file: File, folder?: string) => uploadImage(file, folder), []);

  const updateSiteContent = useCallback(async (key: string, value: string) => {
    setSiteContent((prev) => ({ ...prev, [key]: value }));
    await supabase.from('site_content').upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: 'key' });
  }, []);

  const saveCar = useCallback(async (car: Partial<CarRow> & { id: string }) => {
    const { error } = await supabase.from('cars').upsert({ ...car, updated_at: new Date().toISOString() }, { onConflict: 'id' });
    if (!error) await fetchAllData();
  }, [fetchAllData]);

  const deleteCar = useCallback(async (id: string) => {
    await supabase.from('cars').update({ is_active: false }).eq('id', id);
    setCars((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const saveRoute = useCallback(async (route: Partial<RouteRow> & { title: string; to_city: string }) => {
    const { error } = await supabase.from('routes').upsert({ ...route, updated_at: new Date().toISOString() });
    if (!error) await fetchAllData();
  }, [fetchAllData]);

  const deleteRoute = useCallback(async (id: string) => {
    await supabase.from('routes').update({ is_active: false }).eq('id', id);
    setRoutes((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const saveTour = useCallback(async (tour: Partial<TourRow> & { id: string }) => {
    const { error } = await supabase.from('tours').upsert({ ...tour, updated_at: new Date().toISOString() }, { onConflict: 'id' });
    if (!error) await fetchAllData();
  }, [fetchAllData]);

  const deleteTour = useCallback(async (id: string) => {
    await supabase.from('tours').update({ is_active: false }).eq('id', id);
    setTours((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const saveTestimonial = useCallback(async (t: Partial<TestimonialRow> & { name: string }) => {
    const { error } = await supabase.from('testimonials').upsert({ ...t, updated_at: new Date().toISOString() });
    if (!error) await fetchAllData();
  }, [fetchAllData]);

  const deleteTestimonial = useCallback(async (id: string) => {
    await supabase.from('testimonials').update({ is_active: false }).eq('id', id);
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <DataContext.Provider value={{
      isLoading, isConnected, siteContent, cars, routes, tours, testimonials,
      getSiteValue, uploadImageToStorage,
      updateSiteContent, saveCar, deleteCar,
      saveRoute, deleteRoute,
      saveTour, deleteTour,
      saveTestimonial, deleteTestimonial,
      refreshData: fetchAllData,
      lastPing,
    }}>
      {children}
    </DataContext.Provider>
  );
}
