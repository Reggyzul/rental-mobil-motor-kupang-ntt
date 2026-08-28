-- ============================================================
-- CV SRM MANDIRI - SUPABASE DATABASE SCHEMA
-- Jalankan SQL ini di Supabase SQL Editor:
-- Dashboard Supabase > SQL Editor > New Query > Paste & Run
-- ============================================================

-- 1. SITE CONTENT (Business Info, Hero, Contacts)
CREATE TABLE IF NOT EXISTS site_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  value_type TEXT DEFAULT 'text', -- 'text' | 'image_url' | 'json'
  label TEXT, -- Label untuk Admin Dashboard
  section TEXT, -- 'hero' | 'contact' | 'business' | 'seo'
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CARS (Fleet / Armada)
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

-- 3. ROUTES (Rute Antar Kota - all PP)
CREATE TABLE IF NOT EXISTS routes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL, -- e.g. "Medan - Dumai (PP)"
  from_city TEXT DEFAULT 'Medan',
  to_city TEXT NOT NULL,
  region TEXT,
  note TEXT,
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TOURS (Destinasi Wisata)
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

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read (anon) for all tables
CREATE POLICY "Public read site_content" ON site_content FOR SELECT TO anon USING (true);
CREATE POLICY "Public read cars" ON cars FOR SELECT TO anon USING (true);
CREATE POLICY "Public read routes" ON routes FOR SELECT TO anon USING (true);
CREATE POLICY "Public read tours" ON tours FOR SELECT TO anon USING (true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT TO anon USING (true);

-- Allow authenticated users to do all CRUD
CREATE POLICY "Auth full access site_content" ON site_content FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access cars" ON cars FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access routes" ON routes FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access tours" ON tours FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access testimonials" ON testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- STORAGE BUCKET FOR IMAGES
-- ============================================================
INSERT INTO storage.buckets (id, name, public) VALUES ('srm-images', 'srm-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read srm-images" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'srm-images');
CREATE POLICY "Auth upload srm-images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'srm-images');
CREATE POLICY "Auth update srm-images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'srm-images');
CREATE POLICY "Auth delete srm-images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'srm-images');

-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON site_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cars_updated_at BEFORE UPDATE ON cars FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_routes_updated_at BEFORE UPDATE ON routes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tours_updated_at BEFORE UPDATE ON tours FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- SEED DATA - CV SRM MANDIRI
-- ============================================================

-- Site Content
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

-- Cars (Armada)
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

-- Routes (PP)
INSERT INTO routes (title, from_city, to_city, region, note, sort_order) VALUES
('Medan - Dumai (PP)', 'Medan', 'Dumai', 'Riau', 'Pelabuhan & Kawasan Industri', 1),
('Medan - Duri (PP)', 'Medan', 'Duri', 'Riau', 'Kawasan Migas & Perdagangan', 2),
('Medan - Kandis (PP)', 'Medan', 'Kandis', 'Riau', 'Jalur Lintas Strategis', 3),
('Medan - Garut (PP)', 'Medan', 'Garut', 'Jawa Barat', 'Layanan Antar Pulau / Khusus', 4),
('Medan - Pekanbaru (PP)', 'Medan', 'Pekanbaru', 'Riau', 'Ibukota Provinsi Riau', 5),
('Medan - Kerinci (PP)', 'Medan', 'Kerinci', 'Jambi', 'Wisata Alam & Pegunungan Kerinci', 6),
('Medan - Jambi (PP)', 'Medan', 'Jambi', 'Jambi', 'Pusat Kota & Kawasan Bisnis Jambi', 7),
('Medan & Sekitarnya (PP)', 'Medan', 'Medan', 'Sumatera Utara', 'City Tour, Operasional & Bandara KNO', 8);

-- Tours (Destinasi Wisata)
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

-- Testimonials
INSERT INTO testimonials (name, role_id, role_en, text_id, text_en, rating, image, car_model, date_label, sort_order) VALUES
('Bpk. Hendra Manullang & Rekan', 'Perjalanan Carter - Pekanbaru ke Medan', 'Business Trip - Pekanbaru to Medan', 'Pelayanan CV SRM MANDIRI sangat memuaskan dan profesional! Kami sewa Toyota Innova untuk perjalanan carter Pekanbaru, Duri, Dumai sampai ke Medan. Mobilnya bersih, AC dingin, dan supir sangat berpengalaman di jalan lintas.', 'Outstanding service from CV SRM MANDIRI! We chartered Toyota Innova for a multi-city business trip covering Pekanbaru, Duri, Dumai, and back to Medan. Driver was polite, on-time, and unit was very clean.', 5, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', 'Toyota Innova', 'Agustus 2026', 1),
('Ibu Mariana & Keluarga Besar', 'Wisata Keluarga - Berastagi & Samosir', 'Family Tour - Berastagi & Lake Toba Samosir', 'Liburan keluarga ke Berastagi, Danau Toba Parapat, dan Pulau Samosir jadi seru dan nyaman dengan Toyota Avanza dari CV SRM MANDIRI. Perjalanan nanjak pegunungan lancar, supir ramah, dan harga sewanya sangat terjangkau.', 'We booked Toyota Avanza for our family holiday exploring Berastagi, Parapat, and Samosir Island. Super comfortable journey, smooth driving in mountain areas, and the admin response on WhatsApp was super fast!', 5, 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200', 'Toyota Avanza', 'Juli 2026', 2),
('Bpk. Siregar', 'Carter Antar Kota - Medan ke Jambi & Kerinci', 'Intercity Travel - Medan to Jambi & Kerinci', 'Sewa mobil di CV SRM MANDIRI dari Simalingkar B untuk rute Medan ke Jambi dan Kerinci. Mobil Calya sangat irit BBM, mesin prima, dan komunikasi via WhatsApp sangat ramah dan transparan. Terima kasih CV SRM MANDIRI!', 'Rented Toyota Calya for travel to Jambi and Kerinci. Fuel consumption was super economical, car was in top condition, and pickup from Simalingkar B was very punctual. Highly recommended!', 5, 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', 'Toyota Calya', 'Juni 2026', 3);
