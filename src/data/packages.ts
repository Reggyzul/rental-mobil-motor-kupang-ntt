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
  // 1. BERASTAGI
  {
    id: 'tour-berastagi',
    title: 'Berastagi',
    location: 'Kabupaten Karo, Sumatera Utara',
    duration: 'Full Day / 2D1N',
    route: ['Medan / Simalingkar B', 'Taman Hutan Raya Sibolangit', 'Bukit Gundaling', 'Pasar Buah Berastagi', 'Pagoda Taman Alam Lumbini', 'Pemandian Air Panas Sidebuk-debuk', 'Air Terjun Sipiso-piso'],
    routeDisplay: 'Medan - Berastagi - Bukit Gundaling - Sipiso-piso',
    image: '/tour_berastagi.jpg',
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

  // 2. PARAPAT
  {
    id: 'tour-parapat',
    title: 'Parapat',
    location: 'Danau Toba, Simalungun, Sumatera Utara',
    duration: 'Full Day / 2D1N',
    route: ['Medan', 'Tebing Tinggi', 'Pematang Siantar', 'Parapat', 'Pantai Bebas Parapat', 'Bukit Senyum Danau Toba'],
    routeDisplay: 'Medan - Siantar - Parapat Danau Toba',
    image: '/tour_parapat.jpg',
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

  // 3. PULAU SAMOSIR
  {
    id: 'tour-samosir',
    title: 'Pulau Samosir',
    location: 'Pulau Samosir, Danau Toba, Sumatera Utara',
    duration: '2D1N / 3D2N',
    route: ['Parapat / Pelabuhan Ajibata', 'Ferry Penyeberangan Tomok', 'Desa Wisata Tomok', 'Tuk-Tuk Siadong', 'Batu Kursi Raja Siallagan', 'Bukit Holbung', 'Pusuk Buhit'],
    routeDisplay: 'Parapat - Penyeberangan Ferry - Tomok - Tuk-Tuk Samosir',
    image: '/tour_samosir.jpg',
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
  }
];
