export interface TourTier {
  carType: string;
  capacity: string;
  pricePerPerson: string;
  details: string;
  notes: string;
}

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  route: string[];
  routeDisplay: string;
  image: string;
  badge: string;
  minPrice: string;
  tiers: TourTier[];
  highlights: string[];
  includes: string[];
  excludes: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  // 1. WISATA BERASTAGI
  {
    id: 'tour-berastagi',
    title: 'PAKET WISATA BERASTAGI HIGHLANDS',
    location: 'Kabupaten Karo, Sumatera Utara',
    duration: 'Full Day / 2D1N',
    route: ['Medan / Simalingkar B', 'Taman Hutan Raya Sibolangit', 'Bukit Gundaling', 'Pasar Buah Berastagi', 'Pagoda Taman Alam Lumbini', 'Pemandian Air Panas Sidebuk-debuk', 'Air Terjun Sipiso-piso'],
    routeDisplay: 'Medan - Berastagi - Bukit Gundaling - Sipiso-piso',
    image: '/gallery_sipisopiso.avif',
    badge: 'Wisata Pegunungan & Alam',
    minPrice: 'Konsultasikan via WA',
    tiers: [
      {
        carType: 'Innova / Avanza / Calya / Sigra',
        capacity: '4 - 7 Orang',
        pricePerPerson: 'Hubungi WhatsApp Admin',
        details: 'Mobil AC Bersih + Driver Berpengalaman + BBM',
        notes: 'Udara Sejuk Pegunungan & Spot Foto Instagramable'
      }
    ],
    highlights: [
      'Panorama memukau Gunung Sibayak & Gunung Sinabung dari Bukit Gundaling',
      'Belanja buah segar, stroberi, dan sayuran di Pasar Buah Berastagi',
      'Kemegahan Pagoda Emas Taman Alam Lumbini terbesar di Indonesia',
      'Pemandangan spektakuler Air Terjun Sipiso-piso di bibir Danau Toba'
    ],
    includes: [
      'Mobil AC Terawat (Innova / Avanza / Sigra / Calya)',
      'Sopir Berpengalaman & Ramah',
      'Bahan Bakar Minyak (BBM)',
      'Penjemputan dari Medan / Simalingkar B / Bandara KNO'
    ],
    excludes: [
      'Tiket Masuk Wahana Tambahan & Pengeluaran Pribadi'
    ]
  },

  // 2. WISATA PARAPAT DANAU TOBA
  {
    id: 'tour-parapat',
    title: 'PAKET WISATA PARAPAT DANAU TOBA',
    location: 'Danau Toba, Simalungun, Sumatera Utara',
    duration: 'Full Day / 2D1N',
    route: ['Medan', 'Tebing Tinggi', 'Pematang Siantar', 'Parapat', 'Pantai Bebas Parapat', 'Bukit Senyum Danau Toba'],
    routeDisplay: 'Medan - Siantar - Parapat Danau Toba',
    image: '/dest_toba.avif',
    badge: 'Ikon Danau Toba',
    minPrice: 'Konsultasikan via WA',
    tiers: [
      {
        carType: 'Innova / Avanza / Calya / Sigra',
        capacity: '4 - 7 Orang',
        pricePerPerson: 'Hubungi WhatsApp Admin',
        details: 'Transportasi Nyaman Pulang Pergi + Driver',
        notes: 'Pintu Gerbang Utama Menikmati Keindahan Danau Toba'
      }
    ],
    highlights: [
      'Menikmati keagungan pemandangan danau vulkanik terbesar di dunia',
      'Santai sore di Pantai Bebas Parapat dengan panorama perbukitan hijau',
      'Singgah mencicipi kuliner khas Roti Ganda & Selai di Pematang Siantar',
      'Wisata kuliner ikan mas/nila bakar khas tepi Danau Toba'
    ],
    includes: [
      'Armada Mobil Prima Full AC',
      'Driver Profesional Menguasai Rute Lintas Sumatera',
      'BBM & Biaya Operasional Kendaraan',
      'Fleksibilitas Spot Kunjungan & Istirahat'
    ],
    excludes: [
      'Akomodasi Hotel & Pengeluaran Pribadi'
    ]
  },

  // 3. WISATA PULAU SAMOSIR
  {
    id: 'tour-samosir',
    title: 'PAKET WISATA EKSOTIS PULAU SAMOSIR',
    location: 'Pulau Samosir, Danau Toba, Sumatera Utara',
    duration: '2D1N / 3D2N',
    route: ['Parapat / Pelabuhan Ajibata', 'Ferry Penyeberangan Tomok', 'Desa Wisata Tomok', 'Tuk-Tuk Siadong', 'Batu Kursi Raja Siallagan', 'Bukit Holbung', 'Pusuk Buhit'],
    routeDisplay: 'Parapat - Penyeberangan Ferry - Tomok - Tuk-Tuk Samosir',
    image: '/dest_toba.jpg',
    badge: 'Budaya & Panorama Samosir',
    minPrice: 'Konsultasikan via WA',
    tiers: [
      {
        carType: 'Innova / Avanza / Calya / Sigra',
        capacity: '4 - 7 Orang',
        pricePerPerson: 'Hubungi WhatsApp Admin',
        details: 'Unit Mobil Ikut Menyeberang ke Pulau Samosir',
        notes: 'Eksplorasi Budaya Batak & Panorama Sabana Samosir'
      }
    ],
    highlights: [
      'Mengenal sejarah Batak di Makam Raja Sidabutar & Tarian Sigale-Gale Tomok',
      'Kunjungan bersejarah ke Perkampungan Kuno Batu Kursi Raja Siallagan Ambarita',
      'Menikmati suasana tenang danau di kawasan resort tepi air Tuk-Tuk Siadong',
      'Spot foto perbukitan sabana Bukit Holbung "Bukit Teletubbies" Samosir'
    ],
    includes: [
      'Mobil AC Selama di Medan & Pulau Samosir',
      'Driver Pendamping Wisata',
      'BBM Kendaraan',
      'Penjemputan & Pengantaran Kembali ke Medan / Simalingkar B'
    ],
    excludes: [
      'Tiket Kapal Ferry Penyeberangan Mobil & Pribadi'
    ]
  },

  // 4. PAKET KOMBINASI SUPER LENGKAP: MEDAN - BERASTAGI - PARAPAT - SAMOSIR
  {
    id: 'tour-super-toba',
    title: 'PAKET TOUR LENGKAP: MEDAN - BERASTAGI - PARAPAT - SAMOSIR',
    location: 'Sumatera Utara Grand Tour',
    duration: '3D2N / 4D3N',
    route: ['Medan (Simalingkar B / Bandara KNO)', 'Berastagi', 'Sipiso-piso', 'Simarjarunjung', 'Parapat', 'Pulau Samosir', 'Medan'],
    routeDisplay: 'Medan - Berastagi - Simarjarunjung - Parapat - Samosir',
    image: '/gallery_sipisopiso.avif',
    badge: 'Paket Terfavorit',
    minPrice: 'Konsultasikan via WA',
    tiers: [
      {
        carType: 'Toyota Innova / Avanza / Calya / Sigra',
        capacity: '4 - 7 Orang',
        pricePerPerson: 'Hubungi WhatsApp Admin',
        details: 'Private Tour Khusus Keluarga / Rombongan Anda',
        notes: 'Eksplorasi Seluruh Destinasi Terbaik Sumatera Utara'
      }
    ],
    highlights: [
      'Menggabungkan keindahan pegunungan Berastagi dan pesona Danau Toba & Samosir',
      'Singgah menikmati teh jahe & pisang goreng di Bukit Simarjarunjung',
      'Eksplorasi budaya leluhur Batak di Pulau Samosir',
      'Jadwal santai, fleksibel, ramah keluarga & didampingi supir berpengalaman'
    ],
    includes: [
      'Mobil Pribadi Full AC (Bebas Gabung Orang Lain)',
      'Driver Berpengalaman Sekaligus Pemandu Perjalanan',
      'Bahan Bakar Minyak (BBM)',
      'Penjemputan & Pengantaran Tepat Waktu'
    ],
    excludes: [
      'Hotel Penginapan & Konsumsi Pribadi'
    ]
  }
];
