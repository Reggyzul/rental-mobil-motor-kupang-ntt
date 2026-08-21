export interface TourTier {
  busType: string;
  capacity: string;
  pricePerPerson: string;
  hotelDetails: string;
  notes: string;
}

export interface TourPackage {
  id: string;
  title: string;
  categoryKey: 'domestik' | 'internasional';
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
  // 1. TAMAN NASIONAL BUNAKEN
  {
    id: 'tour-bunaken',
    title: 'PAKET WISATA TAMAN NASIONAL BUNAKEN',
    categoryKey: 'domestik',
    duration: 'Full Day / 2D1N',
    route: ['Dermaga Manado', 'Taman Nasional Bunaken', 'Spot Snorkeling & Diving', 'Island Hopping', 'Kuliner Khas Manado'],
    routeDisplay: 'Manado - Pulau Bunaken - Spot Snorkeling',
    image: '/dest_bunaken.avif',
    badge: 'Wisata Bahari',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Avanza / Hiace + Perahu Katamaran / Speedboat',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Akomodasi Hotel Bintang 3/4 di Manado + Makan',
        notes: 'Termasuk Peralatan Snorkeling & Tiket Masuk Taman Nasional'
      }
    ],
    highlights: [
      'Menikmati keindahan dunia bawah laut Taman Nasional Bunaken',
      'Snorkeling & Diving mengamati terumbu karang & ikan tropis',
      'Island hopping & foto-foto dengan panorama laut jernih',
      'Sangat cocok untuk keluarga, pasangan, wisatawan lokal maupun mancanegara'
    ],
    includes: [
      'Transportasi Darat AC (Transfer Bandara & Dermaga)',
      'Sewa Perahu / Speedboat PP Bunaken',
      'Peralatan Snorkeling & Life Jacket',
      'Makan Siang Khas Pesisir',
      'Driver & Guide Pengalaman'
    ],
    excludes: [
      'Pengeluaran Pribadi & Tipping Guide'
    ]
  },

  // 2. TOMOHON HIGHLAND
  {
    id: 'tour-tomohon',
    title: 'PAKET WISATA TOMOHON HIGHLAND',
    categoryKey: 'domestik',
    duration: 'Full Day / 2D1N',
    route: ['Danau Linow', 'Gunung Mahawu', 'Bukit Doa', 'Pagoda Ekayana', 'Tomohon Extreme Market'],
    routeDisplay: 'Manado - Tomohon - Danau Linow - Mahawu',
    image: '/dest_tomohon.avif',
    badge: 'Wisata Alam & Pegunungan',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Avanza / Innova / Hiace Premio',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Pilihan Resort Tomohon / Hotel Manado',
        notes: 'Udara Sejuk Pegunungan & Spot Foto Instagramable'
      }
    ],
    highlights: [
      'Menikmati Danau Linow dengan warna air yang dapat berubah-ubah',
      'Panorama pegunungan Gunung Mahawu & perkebunan sejuk',
      'Kunjungan budaya ke Bukit Doa & Pagoda Ekayana',
      'Eksplorasi keunikan Tomohon Extreme Market'
    ],
    includes: [
      'Mobil AC + Driver BBM',
      'Tiket Masuk Semua Objek Wisata Tomohon',
      'Makan Siang di Tepi Danau Linow'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 3. LIKUPANG BAHARI
  {
    id: 'tour-likupang',
    title: 'PAKET WISATA EXOTIC LIKUPANG',
    categoryKey: 'domestik',
    duration: 'Full Day / 2D1N',
    route: ['Pantai Paal Likupang', 'Pantai Pulisan', 'Bukit Pulisan', 'Spot Snorkeling Likupang'],
    routeDisplay: 'Manado - Likupang - Pantai Paal & Pulisan',
    image: '/dest_likupang.avif',
    badge: 'Destinasi Super Prioritas',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Fortuner / Pajero / Hiace / Avanza',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Resort Pantai / Hotel Manado',
        notes: 'Wisata Bahari Super Prioritas Indonesia'
      }
    ],
    highlights: [
      'Pantai pasir putih eksotis dengan air laut jernih kristal',
      'Snorkeling & island hopping di kawasan Likupang',
      'Trekking ringan ke Bukit Pulisan dengan keindahan panorama pesisir',
      'Bersantai & menikmati suasana pantai yang tenang'
    ],
    includes: [
      'Transportasi AC + Driver BBM',
      'Tiket Masuk Destinasi Likupang',
      'Makan Siang Kuliner Laut'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 4. MANADO CITY TOUR
  {
    id: 'tour-manado-city',
    title: 'MANADO CITY TOUR & HERITAGE',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Manado Boulevard', 'Kawasan Megamas', 'Jembatan Soekarno', 'Klenteng Ban Hin Kiong', 'Zero Point Manado', 'Malalayang Beach Walk', 'Monumen Yesus Memberkati', 'Pusat Oleh-Oleh Manado'],
    routeDisplay: 'Jembatan Soekarno - Megamas - Malalayang - Yesus Memberkati',
    image: '/dest_manado_city.avif',
    badge: 'City Tour',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Avanza / Xenia / Fortuner / Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Tanpa Menginap (Full Day)',
        notes: 'Fleksibel & Nyaman Keliling Kota Manado'
      }
    ],
    highlights: [
      'Ikon landmark Jembatan Soekarno & Monumen Yesus Memberkati',
      'Santai sore di Malalayang Beach Walk & Kawasan Megamas',
      'Sejarah Klenteng tertua Ban Hin Kiong & Zero Point Manado',
      'Belanja oleh-oleh khas Manado (Klapertaart, Halua Kenari, Sambal Roa)'
    ],
    includes: [
      'Mobil AC + Driver BBM Full Day',
      'Parkir & Retribusi Destinasi'
    ],
    excludes: [
      'Makan & Pengeluaran Pribadi'
    ]
  },

  // 5. TONDANO & MINAHASA
  {
    id: 'tour-tondano',
    title: 'EXPLORE DANAU TONDANO & MINAHASA',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Danau Tondano', 'Restoran Terapung Tondano', 'Perkebunan Minahasa', 'Bentengan'],
    routeDisplay: 'Manado - Tondano - Perkebunan Minahasa',
    image: '/dest_tondano.avif',
    badge: 'Wisata Danau & Alam',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Avanza / Innova / Hiace',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Tanpa Menginap (Full Day)',
        notes: 'Menikmati kuliner gurame & mujair bakar Tondano'
      }
    ],
    highlights: [
      'Pemandangan membentang Danau Tondano dikelilingi pegunungan',
      'Nikmati santap siang khas di restoran terapung di atas danau',
      'Perjalanan melintasi pedesaan & perkebunan Minahasa yang asri'
    ],
    includes: [
      'Mobil AC + Driver BBM',
      'Makan Siang Resto Terapung Tondano'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  },

  // 6. BITUNG & TAMAN NASIONAL TANGKOKO
  {
    id: 'tour-tangkoko',
    title: 'BITUNG & SAFARI WILDLIFE TANGKOKO',
    categoryKey: 'domestik',
    duration: 'Full Day',
    route: ['Kota Bitung', 'Taman Nasional Tangkoko', 'Hutan Tropis Endemik', 'Pantai Batu Putih'],
    routeDisplay: 'Manado - Bitung - Taman Nasional Tangkoko',
    image: '/dest_tangkoko.avif',
    badge: 'Wisata Satwa & Hutan Tropis',
    minPrice: 'Hubungi Kami',
    tiers: [
      {
        busType: 'Fortuner / Pajero / Hiace / Avanza',
        capacity: '2 - 15 Orang',
        pricePerPerson: 'Konsultasikan via WA',
        hotelDetails: 'Tanpa Menginap (Full Day)',
        notes: 'Trekking Hutan Tropis Melihat Tarsius'
      }
    ],
    highlights: [
      'Trekking di Taman Nasional Tangkoko mengamati satwa endemik Tarsius & Monyet Hitam (Yaki)',
      'Eksplorasi keasrian hutan tropis Sulawesi Utara',
      'Pemandangan pesisir pantai pasir hitam Batu Putih Bitung'
    ],
    includes: [
      'Mobil AC + Driver BBM',
      'Tiket Masuk Tangkoko & Ranger / Guide Lokal'
    ],
    excludes: [
      'Pengeluaran Pribadi'
    ]
  }
];
