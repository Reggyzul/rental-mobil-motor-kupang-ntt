import React, { useState, useRef, useCallback } from 'react';
import {
  LayoutDashboard, Building2, Image, Car, MapPin, Palmtree, Star,
  LogOut, ChevronRight, Save, Plus, Trash2, Upload, X, Check,
  Wifi, WifiOff, RefreshCw, Menu, Home, Eye, AlertCircle, Copy, ExternalLink
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useData } from '../../context/DataContext';
import type { CarRow, RouteRow, TourRow, TestimonialRow } from '../../lib/supabase';

type Section = 'overview' | 'business' | 'hero' | 'cars' | 'routes' | 'tours' | 'testimonials' | 'setup';

const FULL_SCHEMA_SQL = `-- ============================================================
-- CV SRM MANDIRI - SUPABASE DATABASE SCHEMA
-- ============================================================

-- 1. SITE CONTENT
CREATE TABLE IF NOT EXISTS site_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  value_type TEXT DEFAULT 'text',
  label TEXT,
  section TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CARS
CREATE TABLE IF NOT EXISTS cars (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  price_per_day INT DEFAULT 0,
  price_display TEXT,
  image TEXT,
  seats INT DEFAULT 7,
  transmission TEXT DEFAULT 'Manual / Matic',
  fuel TEXT DEFAULT 'Bensin',
  include_list JSONB DEFAULT '[]',
  description TEXT,
  rating NUMERIC(3,1) DEFAULT 5.0,
  reviews_count INT DEFAULT 0,
  specifications JSONB DEFAULT '[]',
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ROUTES
CREATE TABLE IF NOT EXISTS routes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  from_city TEXT DEFAULT 'Medan',
  to_city TEXT NOT NULL,
  region TEXT,
  note TEXT,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TOURS
CREATE TABLE IF NOT EXISTS tours (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT,
  duration TEXT,
  image TEXT,
  badge TEXT,
  route_display TEXT,
  highlights JSONB DEFAULT '[]',
  includes_list JSONB DEFAULT '[]',
  excludes_list JSONB DEFAULT '[]',
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TESTIMONIALS
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role_id TEXT,
  role_en TEXT,
  text_id TEXT,
  text_en TEXT,
  rating INT DEFAULT 5,
  image TEXT,
  car_model TEXT,
  date_label TEXT,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read site_content" ON site_content FOR SELECT TO anon USING (true);
CREATE POLICY "Public read cars" ON cars FOR SELECT TO anon USING (true);
CREATE POLICY "Public read routes" ON routes FOR SELECT TO anon USING (true);
CREATE POLICY "Public read tours" ON tours FOR SELECT TO anon USING (true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT TO anon USING (true);

CREATE POLICY "Auth full access site_content" ON site_content FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access cars" ON cars FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access routes" ON routes FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access tours" ON tours FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access testimonials" ON testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- STORAGE BUCKET
INSERT INTO storage.buckets (id, name, public) VALUES ('srm-images', 'srm-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read srm-images" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'srm-images');
CREATE POLICY "Auth upload srm-images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'srm-images');
CREATE POLICY "Auth update srm-images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'srm-images');
CREATE POLICY "Auth delete srm-images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'srm-images');

-- SEED DATA
INSERT INTO site_content (key, value, value_type, label, section, sort_order) VALUES
('business_name', 'CV SRM MANDIRI', 'text', 'Nama Bisnis', 'business', 1),
('business_tagline', 'Melayani Perjalanan Anda Sepenuh Hati', 'text', 'Tagline Hero', 'hero', 2),
('business_description', 'CV SRM MANDIRI melayani jasa transportasi profesional dengan armada pilihan: Innova, Avanza, Sigra, dan Calya. Melayani rute Pulang-Pergi (PP) Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi, serta wisata favorit Berastagi, Parapat, dan Pulau Samosir (PP).', 'text', 'Deskripsi Bisnis', 'business', 3),
('hero_image', '/hero_sumut.jpg', 'image_url', 'Foto Background Hero', 'hero', 4),
('logo_image', '/logo.png', 'image_url', 'Logo Perusahaan', 'business', 5),
('contact_wa1', '085270607796', 'text', 'WhatsApp Admin 1 (Tanpa Kode Negara)', 'contact', 6),
('contact_phone2', '081262320086', 'text', 'Telepon Admin 2', 'contact', 7),
('contact_tiktok', '@hendry.manullang', 'text', 'Akun TikTok', 'contact', 8),
('contact_address', 'Simalingkar B, Medan, Sumatera Utara', 'text', 'Alamat Kantor', 'contact', 9),
('seo_title', 'CV SRM MANDIRI | Jasa Transportasi & Rental Mobil Medan - Sumatera', 'text', 'Judul SEO (Tab Browser)', 'seo', 10),
('seo_description', 'CV SRM MANDIRI melayani jasa transportasi terpercaya, rental mobil PP antar kota Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi & wisata Berastagi, Parapat, Pulau Samosir.', 'text', 'Meta Deskripsi SEO', 'seo', 11)
ON CONFLICT (key) DO NOTHING;

INSERT INTO cars (id, name, category, price_per_day, price_display, image, seats, transmission, fuel, include_list, description, rating, reviews_count, specifications, sort_order) VALUES
('toyota-innova', 'Toyota Innova', 'MPV Premium & Tangguh', 700000, 'Rp700.000', '/innova_reborn.avif', 7, 'Matic / Manual', 'Diesel / Bensin',
  '["Kabin Luas, Senyap & Sangat Nyaman","Suspensi Lembut & Performa Mesin Handal","Sangat Nyaman untuk Rute Jauh & Antar Kota","AC Double Blower Dingin Merata","Unit Selalu Bersih, Harum & Terawat"]',
  'Pilihan MPV premium andalan dengan kenyamanan kabin superior, suspensi empuk, dan mesin tangguh untuk rute antar kota (Medan, Dumai, Duri, Pekanbaru, Kerinci, Jambi) maupun wisata Berastagi dan Danau Toba.',
  5.0, 245, '[{"label":"Kapasitas","value":"7 Penumpang"},{"label":"Transmisi","value":"Matic / Manual"},{"label":"Kenyamanan","value":"Kabin Luas & Suspensi Lembut"},{"label":"Rute Layanan","value":"Medan, Riau, Jambi & Wisata Sumut"}]', 1),
('toyota-avanza', 'Toyota Avanza', 'Mobil Keluarga Favorit', 500000, 'Rp500.000', '/avanza.avif', 7, 'Manual / Matic', 'Bensin (Irit)',
  '["Mobil Keluarga Praktis, Nyaman & Luas","AC Dingin Double Blower","Hemat Konsumsi Bahan Bakar","Lincah dan Tangguh di Berbagai Medan Jalan","Cocok untuk Liburan Keluarga & Dinas Kantor"]',
  'Mobil keluarga terfavorit yang praktis, ekonomis, dan handal. Sangat cocok untuk perjalanan keliling kota Medan, kunjungan wisata ke Berastagi dan Parapat, maupun perjalanan dinas antar kota.',
  4.9, 310, '[{"label":"Kapasitas","value":"7 Penumpang"},{"label":"Transmisi","value":"Manual / Matic"},{"label":"Karakter","value":"Irit, Praktis & Handal"},{"label":"Rute Layanan","value":"Medan, Riau, Jambi & Sekitarnya"}]', 2),
('daihatsu-sigra', 'Daihatsu Sigra', 'Mobil Keluarga Ekonomis', 400000, 'Rp400.000', '/sigra_new.png', 7, 'Manual / Matic', 'Bensin (Super Irit)',
  '["Kapasitas 7 Kursi dengan Desain Kompak","Konsumsi BBM Sangat Efisien & Hemat","Tarif Rental Sangat Bersahabat","AC Dingin & Nyaman untuk Perjalanan","Unit Prima & Siap Jalan Jarak Jauh"]',
  'Pilihan mobil 7 penumpang yang sangat efisien dan ekonomis. Cocok untuk kebutuhan perjalanan hemat, antar jemput stasiun/bandara, keliling kota Medan, hingga carter luar kota.',
  4.8, 185, '[{"label":"Kapasitas","value":"7 Penumpang"},{"label":"Transmisi","value":"Manual / Matic"},{"label":"Kelebihan","value":"Super Irit & Tarif Terjangkau"},{"label":"Rute Layanan","value":"Medan & Rute Antar Kota"}]', 3),
('toyota-calya', 'Toyota Calya', 'MPV Kompak & Efisien', 400000, 'Rp400.000', '/calya_new.png', 7, 'Manual / Matic', 'Bensin (Super Irit)',
  '["Mobil 7 Penumpang Nyaman & Modern","Sangat Irit Konsumsi Bahan Bakar","Lincah bermanuver di perkotaan & jalan lintas","Kondisi Bersih, Wangi & Mesin Prima","Harga Sewa Terjangkau & Bersahabat"]',
  'Kendaraan MPV kompak 7 tempat duduk dengan efisiensi bahan bakar terbaik dan kenyamanan optimal untuk perjalanan keluarga, tugas operasional, maupun carter perjalanan di Sumatera.',
  4.9, 205, '[{"label":"Kapasitas","value":"7 Penumpang"},{"label":"Transmisi","value":"Manual / Matic"},{"label":"Efisiensi","value":"Hemat BBM & Performa Andal"},{"label":"Rute Layanan","value":"Medan, Riau, Jambi & Sekitarnya"}]', 4)
ON CONFLICT (id) DO NOTHING;

INSERT INTO routes (title, from_city, to_city, region, note, sort_order) VALUES
('Medan - Dumai (PP)', 'Medan', 'Dumai', 'Riau', 'Pelabuhan & Kawasan Industri', 1),
('Medan - Duri (PP)', 'Medan', 'Duri', 'Riau', 'Kawasan Migas & Perdagangan', 2),
('Medan - Kandis (PP)', 'Medan', 'Kandis', 'Riau', 'Jalur Lintas Strategis', 3),
('Medan - Garut (PP)', 'Medan', 'Garut', 'Jawa Barat', 'Layanan Antar Pulau / Khusus', 4),
('Medan - Pekanbaru (PP)', 'Medan', 'Pekanbaru', 'Riau', 'Ibukota Provinsi Riau', 5),
('Medan - Kerinci (PP)', 'Medan', 'Kerinci', 'Jambi', 'Wisata Alam & Pegunungan Kerinci', 6),
('Medan - Jambi (PP)', 'Medan', 'Jambi', 'Jambi', 'Pusat Kota & Kawasan Bisnis Jambi', 7),
('Medan & Sekitarnya (PP)', 'Medan', 'Medan', 'Sumatera Utara', 'City Tour, Operasional & Bandara KNO', 8);

INSERT INTO tours (id, title, location, duration, image, badge, route_display, highlights, includes_list, excludes_list, sort_order) VALUES
('tour-berastagi', 'Berastagi', 'Kabupaten Karo, Sumatera Utara (PP)', 'Full Day / 2D1N (PP)', '/tour_berastagi.jpg', 'Wisata Alam & Pegunungan (PP)', 'Medan - Berastagi - Bukit Gundaling - Sipiso-piso (PP)',
  '["Panorama memukau Gunung Sibayak & Gunung Sinabung dari Bukit Gundaling","Belanja buah segar, stroberi, dan sayuran di Pasar Buah Berastagi","Kemegahan Pagoda Emas Taman Alam Lumbini terbesar di Indonesia","Pemandangan spektakuler Air Terjun Sipiso-piso di bibir Danau Toba"]',
  '["Mobil AC Terawat Pulang Pergi (Innova / Avanza / Sigra / Calya)","Sopir Berpengalaman & Ramah","Bahan Bakar Minyak (BBM) PP","Penjemputan & Pengantaran Kembali ke Medan / Simalingkar B"]',
  '["Tiket Masuk Wahana Tambahan & Pengeluaran Pribadi"]', 1),
('tour-parapat', 'Parapat', 'Danau Toba, Simalungun, Sumatera Utara (PP)', 'Full Day / 2D1N (PP)', '/tour_parapat.jpg', 'Ikon Danau Toba (PP)', 'Medan - Siantar - Parapat Danau Toba (PP)',
  '["Menikmati keagungan pemandangan danau vulkanik terbesar di dunia","Santai sore di Pantai Bebas Parapat dengan panorama perbukitan hijau","Singgah mencicipi kuliner khas Roti Ganda & Selai di Pematang Siantar","Wisata kuliner ikan mas/nila bakar khas tepi Danau Toba"]',
  '["Armada Mobil Prima Full AC Pulang Pergi (PP)","Driver Profesional Menguasai Rute Lintas Sumatera","BBM & Biaya Operasional Kendaraan PP","Fleksibilitas Spot Kunjungan & Istirahat"]',
  '["Akomodasi Hotel & Pengeluaran Pribadi"]', 2),
('tour-samosir', 'Pulau Samosir', 'Pulau Samosir, Danau Toba, Sumatera Utara (PP)', '2D1N / 3D2N (PP)', '/tour_samosir.jpg', 'Budaya & Panorama Samosir (PP)', 'Medan - Parapat - Penyeberangan Tomok - Samosir (PP)',
  '["Mengenal sejarah Batak di Makam Raja Sidabutar & Tarian Sigale-Gale Tomok","Kunjungan bersejarah ke Perkampungan Kuno Batu Kursi Raja Siallagan Ambarita","Menikmati suasana tenang danau di kawasan resort tepi air Tuk-Tuk Siadong","Spot foto perbukitan sabana Bukit Holbung Samosir"]',
  '["Mobil AC Selama di Medan & Pulau Samosir (PP)","Driver Pendamping Wisata","BBM Kendaraan PP","Penjemputan & Pengantaran Kembali ke Medan / Simalingkar B"]',
  '["Tiket Kapal Ferry Penyeberangan Mobil & Pribadi"]', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO testimonials (name, role_id, role_en, text_id, text_en, rating, image, car_model, date_label, sort_order) VALUES
('Bpk. Hendra Manullang & Rekan', 'Perjalanan Carter - Pekanbaru ke Medan', 'Business Trip - Pekanbaru to Medan', 'Pelayanan CV SRM MANDIRI sangat memuaskan dan profesional! Kami sewa Toyota Innova untuk perjalanan carter Pekanbaru, Duri, Dumai sampai ke Medan. Mobilnya bersih, AC dingin, dan supir sangat berpengalaman di jalan lintas.', 'Outstanding service from CV SRM MANDIRI! We chartered Toyota Innova for a multi-city business trip covering Pekanbaru, Duri, Dumai, and back to Medan. Driver was polite, on-time, and unit was very clean.', 5, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', 'Toyota Innova', 'Agustus 2026', 1),
('Ibu Mariana & Keluarga Besar', 'Wisata Keluarga - Berastagi & Samosir', 'Family Tour - Berastagi & Lake Toba Samosir', 'Liburan keluarga ke Berastagi, Danau Toba Parapat, dan Pulau Samosir jadi seru dan nyaman dengan Toyota Avanza dari CV SRM MANDIRI. Perjalanan nanjak pegunungan lancar, supir ramah, dan harga sewanya sangat terjangkau.', 'We booked Toyota Avanza for our family holiday exploring Berastagi, Parapat, and Samosir Island. Super comfortable journey, smooth driving in mountain areas, and the admin response on WhatsApp was super fast!', 5, 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200', 'Toyota Avanza', 'Juli 2026', 2),
('Bpk. Siregar', 'Carter Antar Kota - Medan ke Jambi & Kerinci', 'Intercity Travel - Medan to Jambi & Kerinci', 'Sewa mobil di CV SRM MANDIRI dari Simalingkar B untuk rute Medan ke Jambi dan Kerinci. Mobil Calya sangat irit BBM, mesin prima, dan komunikasi via WhatsApp sangat ramah dan transparan. Terima kasih CV SRM MANDIRI!', 'Rented Toyota Calya for travel to Jambi and Kerinci. Fuel consumption was super economical, car was in top condition, and pickup from Simalingkar B was very punctual. Highly recommended!', 5, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', 'Toyota Calya', 'Juni 2026', 3);`;

function ImageUploader({
  currentUrl, onUploaded, folder = 'general', label = 'Gambar'
}: {
  currentUrl: string; onUploaded: (url: string) => void; folder?: string; label?: string;
}) {
  const { uploadImageToStorage } = useData();
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUrl);
  const [urlInput, setUrlInput] = useState('');
  const [error, setError] = useState('');

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) { setError('File harus berupa gambar'); return; }
    setUploading(true); setError('');
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    const uploadedUrl = await uploadImageToStorage(file, folder);
    if (uploadedUrl) {
      onUploaded(uploadedUrl);
      setPreview(uploadedUrl);
    } else {
      setError('Gagal upload. Pastikan bucket "srm-images" sudah dibuat di Supabase Storage.');
      setPreview(currentUrl);
    }
    setUploading(false);
  }, [uploadImageToStorage, folder, onUploaded, currentUrl]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleUrlSave = () => {
    if (urlInput.trim()) {
      setPreview(urlInput.trim());
      onUploaded(urlInput.trim());
      setUrlInput('');
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
      {/* Preview */}
      <div className="relative w-full h-44 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center group"
        onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}
      >
        {preview ? (
          <>
            <img src={preview} alt="Preview" className="w-full h-full object-cover" onError={() => setPreview('')} />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button onClick={() => ref.current?.click()} className="bg-white text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-sky-50">
                <Upload className="w-3.5 h-3.5" /> Ganti Foto
              </button>
            </div>
          </>
        ) : (
          <button onClick={() => ref.current?.click()} className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer hover:text-sky-600 transition-colors">
            <Upload className="w-8 h-8" />
            <span className="text-xs font-bold">Upload Gambar</span>
            <span className="text-[11px]">JPG, PNG, WEBP (Drag & Drop)</span>
          </button>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <span className="w-6 h-6 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
      {/* URL Input */}
      <div className="flex gap-2">
        <input
          type="text" placeholder="Atau paste URL gambar..." value={urlInput} onChange={(e) => setUrlInput(e.target.value)}
          className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <button onClick={handleUrlSave} className="bg-sky-600 text-white px-3 py-2 rounded-xl text-xs font-bold cursor-pointer hover:bg-sky-500 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> OK
        </button>
      </div>
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
}

function SaveButton({ onClick, saving }: { onClick: () => void; saving: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={saving}
      className="bg-sky-600 hover:bg-sky-500 disabled:bg-slate-300 text-white font-bold text-sm px-6 py-2.5 rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
    >
      {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
      {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
    </button>
  );
}

// ─── SECTION PANELS ─────────────────────────────────────────────────────────

function OverviewPanel({ onGoToSetup }: { onGoToSetup: () => void }) {
  const { cars, routes, tours, testimonials, isConnected, lastPing, refreshData, isLoading } = useData();
  const [copySuccess, setCopySuccess] = useState(false);

  const handleQuickCopySql = async () => {
    try {
      await navigator.clipboard.writeText(FULL_SCHEMA_SQL);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      onGoToSetup();
    }
  };

  const stats = [
    { label: 'Armada Mobil', value: cars.length, icon: Car, color: 'sky' },
    { label: 'Rute PP', value: routes.length, icon: MapPin, color: 'emerald' },
    { label: 'Destinasi Wisata', value: tours.length, icon: Palmtree, color: 'amber' },
    { label: 'Testimoni', value: testimonials.length, icon: Star, color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Dashboard Overview</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Ringkasan konten website CV SRM MANDIRI</p>
      </div>

      {/* Connection Status */}
      <div className={`p-5 rounded-2xl border ${isConnected ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'} space-y-3`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {isConnected ? <Wifi className="w-5 h-5 text-emerald-600 shrink-0" /> : <WifiOff className="w-5 h-5 text-rose-600 shrink-0" />}
            <div>
              <p className="text-sm font-black">{isConnected ? '✅ Terhubung ke Supabase' : '⚠️ Belum Terhubung ke Database Supabase'}</p>
              {isConnected && <p className="text-xs font-medium opacity-80 mt-0.5">Terakhir sync: {lastPing || 'baru saja'}</p>}
              {!isConnected && <p className="text-xs font-medium text-rose-600 mt-0.5">Tabel database di Supabase belum dibuat. Ikuti 2 langkah mudah di bawah:</p>}
            </div>
          </div>
          <button onClick={refreshData} disabled={isLoading} className="bg-white hover:bg-slate-50 border px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors">
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
          </button>
        </div>

        {!isConnected && (
          <div className="bg-white/90 p-4 rounded-xl border border-rose-200/80 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleQuickCopySql}
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copySuccess ? <><Check className="w-3.5 h-3.5" /> Berhasil Disalin!</> : <><Copy className="w-3.5 h-3.5" /> 1. Salin SQL Schema</>}
              </button>
              <a
                href="https://supabase.com/dashboard/project/hmptbsiuivyysffcmuys/sql/new"
                target="_blank"
                rel="noreferrer"
                className="bg-[#081836] hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                <span>2. Buka SQL Editor Supabase &amp; Run</span>
              </a>
              <button
                onClick={onGoToSetup}
                className="text-slate-600 hover:text-sky-600 text-xs font-bold underline px-2 py-2 cursor-pointer ml-auto"
              >
                Lihat Panduan Lengkap →
              </button>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              💡 <b>Caranya:</b> Klik tombol <i>"1. Salin SQL Schema"</i> di atas, lalu klik <i>"2. Buka SQL Editor Supabase"</i>, Paste kode di sana dan klik tombol <b>Run</b>. Setelah itu klik tombol <b>Refresh</b>.
            </p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-black text-slate-800">{s.value}</p>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
        <h3 className="font-bold text-sky-800 text-sm mb-3">🚀 Mulai Edit Website</h3>
        <div className="text-sm text-sky-700 space-y-1.5 font-medium">
          <p>• Pilih menu di sebelah kiri untuk mengedit bagian yang ingin diubah</p>
          <p>• Foto dapat diunggah langsung dari komputer atau paste URL gambar</p>
          <p>• Setiap perubahan tersimpan otomatis ke Supabase &amp; langsung tampil di website</p>
        </div>
      </div>

      {/* Keep-alive info */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h3 className="font-bold text-amber-800 text-sm mb-2">⏰ Sistem Keep-Alive Aktif</h3>
        <p className="text-xs text-amber-700 font-medium">Dashboard ini otomatis melakukan ping ke Supabase setiap 30 menit saat dibuka, sehingga proyek Supabase free Anda tidak akan dinonaktifkan. GitHub Action juga berjalan setiap 2 hari untuk jaga-jaga.</p>
      </div>
    </div>
  );
}

function BusinessPanel() {
  const { getSiteValue, updateSiteContent } = useData();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [fields, setFields] = useState({
    business_name: getSiteValue('business_name'),
    business_tagline: getSiteValue('business_tagline'),
    business_description: getSiteValue('business_description'),
    contact_wa1: getSiteValue('contact_wa1'),
    contact_phone2: getSiteValue('contact_phone2'),
    contact_tiktok: getSiteValue('contact_tiktok'),
    contact_address: getSiteValue('contact_address'),
  });

  const handleSave = async () => {
    setSaving(true);
    await Promise.all(Object.entries(fields).map(([k, v]) => updateSiteContent(k, v)));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Informasi Bisnis</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Edit nama bisnis, tagline, kontak, dan alamat</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
        {[
          { key: 'business_name', label: 'Nama Bisnis', placeholder: 'CV SRM MANDIRI' },
          { key: 'business_tagline', label: 'Tagline / Slogan Hero', placeholder: 'Melayani Perjalanan Anda Sepenuh Hati' },
        ].map(({ key, label, placeholder }) => (
          <div key={key} className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
            <input
              type="text" value={fields[key as keyof typeof fields]} placeholder={placeholder}
              onChange={(e) => setFields(f => ({ ...f, [key]: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800"
            />
          </div>
        ))}

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Deskripsi Bisnis</label>
          <textarea
            value={fields.business_description} rows={3}
            onChange={(e) => setFields(f => ({ ...f, business_description: e.target.value }))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800 resize-none"
          />
        </div>

        <div className="border-t border-slate-100 pt-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Kontak & Media Sosial</h3>
          {[
            { key: 'contact_wa1', label: '📱 WhatsApp Admin 1 (tanpa +62)', placeholder: '085270607796' },
            { key: 'contact_phone2', label: '📞 Telepon Admin 2 (tanpa +62)', placeholder: '081262320086' },
            { key: 'contact_tiktok', label: '🎵 Username TikTok', placeholder: '@hendry.manullang' },
            { key: 'contact_address', label: '📍 Alamat Kantor', placeholder: 'Simalingkar B, Medan, Sumatera Utara' },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
              <input
                type="text" value={fields[key as keyof typeof fields]} placeholder={placeholder}
                onChange={(e) => setFields(f => ({ ...f, [key]: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <SaveButton onClick={handleSave} saving={saving} />
          {saved && <span className="text-emerald-600 text-sm font-bold flex items-center gap-1"><Check className="w-4 h-4" /> Tersimpan!</span>}
        </div>
      </div>
    </div>
  );
}

function HeroPanel() {
  const { getSiteValue, updateSiteContent } = useData();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [heroImage, setHeroImage] = useState(getSiteValue('hero_image'));
  const [logoImage, setLogoImage] = useState(getSiteValue('logo_image'));
  const [seoTitle, setSeoTitle] = useState(getSiteValue('seo_title'));
  const [seoDesc, setSeoDesc] = useState(getSiteValue('seo_description'));

  const handleSave = async () => {
    setSaving(true);
    await Promise.all([
      updateSiteContent('hero_image', heroImage),
      updateSiteContent('logo_image', logoImage),
      updateSiteContent('seo_title', seoTitle),
      updateSiteContent('seo_description', seoDesc),
    ]);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Hero & Logo</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Ubah foto background hero, logo perusahaan, dan pengaturan SEO</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6">
        <ImageUploader
          currentUrl={heroImage} folder="hero" label="🖼️ Foto Background Hero (Banner Utama)"
          onUploaded={(url) => setHeroImage(url)}
        />
        <ImageUploader
          currentUrl={logoImage} folder="logo" label="🏢 Logo Perusahaan"
          onUploaded={(url) => setLogoImage(url)}
        />

        <div className="border-t border-slate-100 pt-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">SEO (Mesin Pencari)</h3>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Judul Halaman (Tab Browser)</label>
            <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Meta Deskripsi (Cuplikan di Google)</label>
            <textarea value={seoDesc} rows={2} onChange={(e) => setSeoDesc(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800 resize-none" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <SaveButton onClick={handleSave} saving={saving} />
          {saved && <span className="text-emerald-600 text-sm font-bold flex items-center gap-1"><Check className="w-4 h-4" /> Tersimpan!</span>}
        </div>
      </div>
    </div>
  );
}

function CarsPanel() {
  const { cars, saveCar } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [editFields, setEditFields] = useState<Partial<CarRow>>({});

  const startEdit = (car: CarRow) => {
    setEditingId(car.id);
    setEditFields({ ...car });
  };

  const handleSave = async () => {
    if (!editingId) return;
    setSaving(true);
    await saveCar({ ...editFields, id: editingId } as CarRow);
    setSaving(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Armada Mobil</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Edit informasi, harga, dan foto setiap kendaraan</p>
      </div>

      <div className="space-y-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {editingId === car.id ? (
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-800">{car.name}</h3>
                  <button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
                </div>

                <ImageUploader
                  currentUrl={editFields.image || car.image} folder="cars" label="Foto Mobil"
                  onUploaded={(url) => setEditFields(f => ({ ...f, image: url }))}
                />

                {[
                  { key: 'name', label: 'Nama Mobil' },
                  { key: 'category', label: 'Kategori' },
                  { key: 'price_display', label: 'Harga Tampil (contoh: Rp700.000)' },
                  { key: 'transmission', label: 'Transmisi' },
                  { key: 'fuel', label: 'Bahan Bakar' },
                ].map(({ key, label }) => (
                  <div key={key} className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
                    <input
                      type="text" value={String(editFields[key as keyof CarRow] ?? '')}
                      onChange={(e) => setEditFields(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>
                ))}

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deskripsi</label>
                  <textarea value={editFields.description ?? ''} rows={3}
                    onChange={(e) => setEditFields(f => ({ ...f, description: e.target.value }))}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <SaveButton onClick={handleSave} saving={saving} />
                  <button onClick={() => setEditingId(null)} className="px-5 py-2.5 rounded-2xl border border-slate-200 text-slate-600 text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 p-4">
                <img src={car.image} alt={car.name} className="w-20 h-14 object-cover rounded-xl shrink-0 bg-slate-100" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/80x56/e2e8f0/94a3b8?text=No+Image'; }} />
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm">{car.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{car.category}</p>
                  <p className="text-xs text-sky-600 font-bold mt-0.5">{car.price_display}</p>
                </div>
                <button onClick={() => startEdit(car)} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-4 py-2 rounded-xl border border-sky-200 cursor-pointer flex items-center gap-1.5">
                  ✏️ Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoutesPanel() {
  const { routes, saveRoute, deleteRoute } = useData();
  const [showAdd, setShowAdd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newRoute, setNewRoute] = useState({ title: '', to_city: '', region: '', note: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFields, setEditFields] = useState<Partial<RouteRow>>({});

  const handleAdd = async () => {
    if (!newRoute.title || !newRoute.to_city) return;
    setSaving(true);
    await saveRoute({ ...newRoute, from_city: 'Medan', is_active: true, sort_order: routes.length + 1 });
    setNewRoute({ title: '', to_city: '', region: '', note: '' });
    setShowAdd(false);
    setSaving(false);
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;
    setSaving(true);
    await saveRoute({ ...editFields, id: editingId, title: editFields.title || '', to_city: editFields.to_city || '' });
    setSaving(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-800">Rute PP (Antar Kota)</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Kelola rute Pulang-Pergi yang ditampilkan di website</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-2xl flex items-center gap-2 cursor-pointer">
          <Plus className="w-4 h-4" /> Tambah Rute
        </button>
      </div>

      {showAdd && (
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 space-y-4">
          <h3 className="font-bold text-sky-800 text-sm">➕ Tambah Rute Baru</h3>
          {[
            { key: 'title', label: 'Judul Rute', placeholder: 'Medan - Pematangsiantar (PP)' },
            { key: 'to_city', label: 'Kota Tujuan', placeholder: 'Pematangsiantar' },
            { key: 'region', label: 'Provinsi', placeholder: 'Sumatera Utara' },
            { key: 'note', label: 'Keterangan Singkat', placeholder: 'Jalur wisata & kota pelajar' },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
              <input type="text" value={newRoute[key as keyof typeof newRoute]} placeholder={placeholder}
                onChange={(e) => setNewRoute(f => ({ ...f, [key]: e.target.value }))}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
              />
            </div>
          ))}
          <div className="flex gap-3">
            <SaveButton onClick={handleAdd} saving={saving} />
            <button onClick={() => setShowAdd(false)} className="px-5 py-2.5 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {routes.map((route, idx) => (
          <div key={route.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm">
            {editingId === route.id ? (
              <div className="p-4 space-y-3">
                {[
                  { key: 'title', label: 'Judul Rute', placeholder: 'Medan - Dumai (PP)' },
                  { key: 'to_city', label: 'Kota Tujuan' },
                  { key: 'region', label: 'Provinsi' },
                  { key: 'note', label: 'Keterangan' },
                ].map(({ key, label, placeholder }) => (
                  <div key={key} className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
                    <input type="text" value={String(editFields[key as keyof RouteRow] ?? '')} placeholder={placeholder}
                      onChange={(e) => setEditFields(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>
                ))}
                <div className="flex gap-3">
                  <SaveButton onClick={handleSaveEdit} saving={saving} />
                  <button onClick={() => setEditingId(null)} className="px-5 py-2 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 p-4">
                <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 font-black text-sm flex items-center justify-center shrink-0">{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm">{route.title}</p>
                  <p className="text-xs text-slate-500 font-medium">{route.region} • {route.note}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setEditingId(route.id); setEditFields({ ...route }); }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-3 py-1.5 rounded-xl border border-sky-200 cursor-pointer">✏️</button>
                  <button onClick={() => deleteRoute(route.id)} className="bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs px-3 py-1.5 rounded-xl border border-red-200 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ToursPanel() {
  const { tours, saveTour } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFields, setEditFields] = useState<Partial<TourRow>>({});
  const [saving, setSaving] = useState(false);

  const startEdit = (tour: TourRow) => { setEditingId(tour.id); setEditFields({ ...tour }); };

  const handleSave = async () => {
    if (!editingId) return;
    setSaving(true);
    await saveTour({ ...editFields, id: editingId } as TourRow);
    setSaving(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Destinasi Wisata</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Edit paket wisata, foto, dan deskripsi destinasi</p>
      </div>

      <div className="space-y-4">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {editingId === tour.id ? (
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-800">{tour.title}</h3>
                  <button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
                <ImageUploader
                  currentUrl={editFields.image || tour.image} folder="tours" label="Foto Destinasi"
                  onUploaded={(url) => setEditFields(f => ({ ...f, image: url }))}
                />
                {[
                  { key: 'title', label: 'Nama Destinasi' },
                  { key: 'location', label: 'Lokasi Lengkap' },
                  { key: 'duration', label: 'Durasi Wisata' },
                  { key: 'badge', label: 'Label Badge' },
                  { key: 'route_display', label: 'Tampilan Rute' },
                ].map(({ key, label }) => (
                  <div key={key} className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
                    <input type="text" value={String(editFields[key as keyof TourRow] ?? '')}
                      onChange={(e) => setEditFields(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>
                ))}
                <div className="flex gap-3">
                  <SaveButton onClick={handleSave} saving={saving} />
                  <button onClick={() => setEditingId(null)} className="px-5 py-2.5 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 p-4">
                <img src={tour.image} alt={tour.title} className="w-20 h-14 object-cover rounded-xl shrink-0 bg-slate-100" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/80x56/e2e8f0/94a3b8?text=No+Image'; }} />
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm">{tour.title}</p>
                  <p className="text-xs text-slate-500 font-medium">{tour.location}</p>
                  <p className="text-xs text-sky-600 font-bold mt-0.5">{tour.duration}</p>
                </div>
                <button onClick={() => startEdit(tour)} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-4 py-2 rounded-xl border border-sky-200 cursor-pointer">✏️ Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsPanel() {
  const { testimonials, saveTestimonial, deleteTestimonial } = useData();
  const [showAdd, setShowAdd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newTesti, setNewTesti] = useState({ name: '', role_id: '', text_id: '', car_model: '', date_label: '', rating: 5, image: '', is_active: true });

  const handleAdd = async () => {
    if (!newTesti.name) return;
    setSaving(true);
    await saveTestimonial({ ...newTesti, sort_order: testimonials.length + 1 });
    setNewTesti({ name: '', role_id: '', text_id: '', car_model: '', date_label: '', rating: 5, image: '', is_active: true });
    setShowAdd(false);
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-800">Testimoni Pelanggan</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Kelola ulasan dan testimoni pelanggan</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-2xl flex items-center gap-2 cursor-pointer">
          <Plus className="w-4 h-4" /> Tambah
        </button>
      </div>

      {showAdd && (
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 space-y-4">
          <h3 className="font-bold text-sky-800 text-sm">➕ Tambah Testimoni</h3>
          {[
            { key: 'name', label: 'Nama Pelanggan', placeholder: 'Bpk. Budi Santoso' },
            { key: 'role_id', label: 'Jenis Perjalanan', placeholder: 'Carter Medan - Pekanbaru PP' },
            { key: 'text_id', label: 'Komentar', placeholder: 'Pelayanan sangat memuaskan...' },
            { key: 'car_model', label: 'Armada yang Disewa', placeholder: 'Toyota Innova' },
            { key: 'date_label', label: 'Tanggal', placeholder: 'Agustus 2026' },
            { key: 'image', label: 'URL Foto Profil (opsional)', placeholder: 'https://...' },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
              {key === 'text_id' ? (
                <textarea placeholder={placeholder} value={newTesti[key as keyof typeof newTesti] as string} rows={2}
                  onChange={(e) => setNewTesti(f => ({ ...f, [key]: e.target.value }))}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium resize-none"
                />
              ) : (
                <input type="text" placeholder={placeholder} value={String(newTesti[key as keyof typeof newTesti])}
                  onChange={(e) => setNewTesti(f => ({ ...f, [key]: e.target.value }))}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                />
              )}
            </div>
          ))}
          <div className="flex gap-3">
            <SaveButton onClick={handleAdd} saving={saving} />
            <button onClick={() => setShowAdd(false)} className="px-5 py-2 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-start gap-4">
            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-2xl object-cover bg-slate-100 shrink-0" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=e0f2fe&color=0369a1`; }} />
            <div className="flex-1 min-w-0">
              <p className="font-black text-slate-800 text-sm">{t.name}</p>
              <p className="text-xs text-sky-600 font-bold">{t.car_model} • {t.date_label}</p>
              <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2">{t.text_id}</p>
            </div>
            <button onClick={() => deleteTestimonial(t.id)} className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-xl border border-red-200 cursor-pointer shrink-0">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SetupPanel() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(FULL_SCHEMA_SQL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const steps = [
    { n: 1, title: 'Salin SQL Schema', desc: 'Klik tombol biru "Salin SQL Schema (1 Klik)" di bawah' },
    { n: 2, title: 'Buka Supabase SQL Editor', desc: 'Buka tautan https://supabase.com/dashboard/project/hmptbsiuivyysffcmuys/sql/new' },
    { n: 3, title: 'Paste & Klik RUN', desc: 'Paste kode SQL yang telah disalin ke dalam kotak query, lalu klik tombol RUN berwarna hijau' },
    { n: 4, title: 'Klik Refresh di Overview', desc: 'Kembali ke halaman Overview dashboard ini dan klik tombol Refresh untuk mulai mengedit' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Setup Database Supabase</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Panduan 1-klik untuk mengaktifkan database Supabase pertama kali</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-800 text-sm">Diperlukan hanya 1 kali saja!</h3>
            <p className="text-xs text-amber-700 font-medium mt-1">Jalankan SQL schema di Supabase untuk membuat tabel dan mengisi data awal. Setelah itu, semua konten bisa diedit langsung dari dashboard ini tanpa coding.</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.n} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center shrink-0">{step.n}</div>
            <div>
              <p className="font-bold text-slate-800 text-sm">{step.title}</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button onClick={handleCopy} className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-6 py-3.5 rounded-2xl flex items-center gap-2 cursor-pointer shadow-md">
          {copied ? <><Check className="w-4 h-4" /> SQL Schema Berhasil Disalin!</> : <><Copy className="w-4 h-4" /> Salin SQL Schema (1 Klik)</>}
        </button>
        <a href="https://supabase.com/dashboard/project/hmptbsiuivyysffcmuys/sql/new" target="_blank" rel="noreferrer"
          className="bg-[#081836] hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-2xl flex items-center gap-2 cursor-pointer shadow-md">
          <ExternalLink className="w-4 h-4 text-sky-400" /> Buka SQL Editor Supabase
        </a>
      </div>

      {/* SQL Preview Box */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Preview Kode SQL Schema:</label>
        <div className="relative">
          <textarea
            readOnly
            value={FULL_SCHEMA_SQL}
            rows={12}
            className="w-full p-4 rounded-2xl bg-slate-900 text-emerald-400 font-mono text-xs border border-slate-800 focus:outline-none resize-none selection:bg-sky-600 selection:text-white"
          />
        </div>
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD ──────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [section, setSection] = useState<Section>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.hash = '';
    window.location.pathname = '/';
    window.location.reload();
  };

  const navItems: { id: Section; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'business', label: 'Info Bisnis', icon: Building2 },
    { id: 'hero', label: 'Hero & Logo', icon: Image },
    { id: 'cars', label: 'Armada Mobil', icon: Car },
    { id: 'routes', label: 'Rute PP', icon: MapPin },
    { id: 'tours', label: 'Destinasi Wisata', icon: Palmtree },
    { id: 'testimonials', label: 'Testimoni', icon: Star },
    { id: 'setup', label: 'Setup Database', icon: AlertCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* ── Sidebar ── */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-0 lg:w-16'} shrink-0 transition-all duration-300 bg-white border-r border-slate-100 shadow-sm flex flex-col overflow-hidden relative z-20`}>
        {/* Logo */}
        <div className="px-4 py-5 flex items-center gap-3 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="Logo" className="h-6 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
          {sidebarOpen && (
            <div>
              <p className="font-black text-slate-800 text-sm leading-tight">SRM MANDIRI</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Admin Panel</p>
            </div>
          )}
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                section === id ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-sky-700'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {sidebarOpen && <span className="truncate">{label}</span>}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-slate-100 space-y-2">
          <button
            onClick={() => {
              window.location.hash = '';
              window.location.pathname = '/';
              window.location.reload();
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            <Home className="w-4 h-4 shrink-0" />
            {sidebarOpen && <span>Lihat Website</span>}
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 cursor-pointer">
            <LogOut className="w-4 h-4 shrink-0" />
            {sidebarOpen && <span>Keluar</span>}
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-100 px-4 sm:px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-500 hover:text-sky-600 cursor-pointer p-1 rounded-lg hover:bg-slate-50">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              {navItems.find(n => n.id === section)?.label || 'Dashboard'}
            </h1>
          </div>
          <button
            onClick={() => {
              window.location.hash = '';
              window.location.pathname = '/';
              window.location.reload();
            }}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:underline cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" /> Lihat Website
          </button>
          <button onClick={handleLogout} className="bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs px-3 py-1.5 rounded-xl border border-red-200 cursor-pointer flex items-center gap-1">
            <LogOut className="w-3.5 h-3.5" /> Keluar
          </button>
        </header>

        {/* Section Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {section === 'overview' && <OverviewPanel onGoToSetup={() => setSection('setup')} />}
            {section === 'business' && <BusinessPanel />}
            {section === 'hero' && <HeroPanel />}
            {section === 'cars' && <CarsPanel />}
            {section === 'routes' && <RoutesPanel />}
            {section === 'tours' && <ToursPanel />}
            {section === 'testimonials' && <TestimonialsPanel />}
            {section === 'setup' && <SetupPanel />}
          </div>
        </main>
      </div>
    </div>
  );
}
