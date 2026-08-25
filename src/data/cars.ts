import { Car } from '../types';

export interface TestimonialItem {
  id: string;
  name: string;
  roleEN: string;
  roleID: string;
  textEN: string;
  textID: string;
  rating: number;
  image: string;
  carModelEN: string;
  carModelID: string;
  dateEN: string;
  dateID: string;
}

export const CARS: Car[] = [
  // 1. TOYOTA HIACE
  {
    id: 'toyota-hiace',
    name: 'Toyota Hiace',
    category: 'Minibus / Rombongan',
    pricePerDay: 1200000,
    priceDisplay: 'Rp1.200.000',
    image: '/hiace_batam.png',
    seats: 15,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: [
      'Kapasitas Besar 14-15 Penumpang',
      'AC Ducting Dingin Merata',
      'Cocok Wisata & Acara Perusahaan',
      'Kenyamanan Maksimal untuk Group',
      'Unit Terawat, Bersih & Harum'
    ],
    description: 'Kendaraan berkapasitas besar yang sangat nyaman untuk perjalanan rombongan, wisata, acara keluarga, maupun kegiatan perusahaan di Batam.',
    rating: 5.0,
    reviewsCount: 168,
    specifications: [
      { label: 'Kapasitas', value: '14 - 15 Penumpang' },
      { label: 'Transmisi', value: 'Manual' },
      { label: 'Penggunaan', value: 'Rombongan, Tour Wisata & Gathering' },
      { label: 'Area Layanan', value: 'Kota Batam dan Sekitarnya' }
    ]
  },

  // 2. NEW AVANZA
  {
    id: 'new-avanza',
    name: 'New Avanza',
    category: 'Mobil Keluarga',
    pricePerDay: 600000,
    priceDisplay: 'Rp600.000',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual / Matic',
    fuel: 'Bensin (Irit)',
    includeList: [
      'Mobil Keluarga Nyaman & Bersih',
      'AC Double Blower Dingin',
      'Ekonomis & Irit Bahan Bakar',
      'Lincah di Perkotaan Batam',
      'Cocok untuk Keluarga & Dinas Bisnis'
    ],
    description: 'Pilihan mobil keluarga yang praktis, lincah, dan ekonomis untuk mobilitas harian, liburan keluarga, maupun perjalanan bisnis di Batam.',
    rating: 4.9,
    reviewsCount: 210,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Manual & Matic' },
      { label: 'Karakter', value: 'Ekonomis, Praktis & Nyaman' },
      { label: 'Area Layanan', value: 'Kota Batam & Sekitarnya' }
    ]
  },

  // 3. TOYOTA INNOVA REBORN
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn',
    category: 'MPV Premium Keluarga',
    pricePerDay: 800000,
    priceDisplay: 'Rp800.000',
    image: '/innova_reborn.avif',
    seats: 7,
    transmission: 'Matic / Manual',
    fuel: 'Diesel / Bensin',
    includeList: [
      'Kabin Luas & Nyaman Senyap',
      'Suspensi Lembut & Performa Tangguh',
      'Ruang Kaki & Bagasi Lega',
      'Favorit Tamu Bisnis & Keluarga',
      'Kondisi Bersih, Harum & Terawat'
    ],
    description: 'Mobil MPV favorit dengan kenyamanan kabin ekstra, suspensi empuk, dan performa handal untuk perjalanan bisnis maupun liburan keluarga di Batam.',
    rating: 5.0,
    reviewsCount: 195,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Matic / Manual' },
      { label: 'Kenyamanan', value: 'Kabin Luas & Suspensi Lembut' },
      { label: 'Layanan', value: 'Pribadi, Wisata & Bisnis' }
    ]
  },

  // 4. TOYOTA ZENIX
  {
    id: 'toyota-zenix',
    name: 'Toyota Zenix',
    category: 'Luxury MPV Modern',
    pricePerDay: 1000000,
    priceDisplay: 'Rp1.000.000',
    image: '/zenix.jpg',
    seats: 7,
    transmission: 'Matic (CVT)',
    fuel: 'Bensin / Hybrid',
    includeList: [
      'Desain Modern & Eksterior Mewah',
      'Interior Modern Berkelas & Nyaman',
      'Fitur Keselamatan & Kenyamanan Canggih',
      'Cocok untuk Tamu VIP, Dinas & Bisnis',
      'Pengalaman Berkendara Kelas Atas'
    ],
    description: 'MPV generasi terbaru dengan desain mewah, kabin modern berteknologi tinggi, serta kenyamanan berkendara premium untuk aktivitas Anda di Batam.',
    rating: 5.0,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Matic' },
      { label: 'Tipe', value: 'Luxury MPV Modern' },
      { label: 'Kebutuhan', value: 'Bisnis, Tamu VIP & Acara Spesial' }
    ]
  },

  // 5. MEDIUM BUS 33 SEAT
  {
    id: 'medium-bus',
    name: 'Medium Bus 33 Seat',
    category: 'Bus Transportasi Rombongan',
    pricePerDay: 1500000,
    priceDisplay: 'Rp1.500.000',
    image: '/medium_bus_batam.jpg',
    seats: 33,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: [
      'Kapasitas Besar 33 Kursi Penumpang',
      'AC Super Dingin & Audio Karaoke',
      'Bagasi Luas untuk Koper & Logistik',
      'Ideal untuk Tour Wisata, Gathering & Event',
      'Driver Berpengalaman, Ramah & Disiplin'
    ],
    description: 'Armada bus berkapasitas besar 33 tempat duduk untuk memenuhi kebutuhan transportasi rombongan, study tour, gathering kantor, maupun acara keluarga di Batam.',
    rating: 5.0,
    reviewsCount: 128,
    specifications: [
      { label: 'Kapasitas', value: '33 Penumpang' },
      { label: 'Transmisi', value: 'Manual' },
      { label: 'Fasilitas', value: 'AC Dingin, Audio Karaoke & Bagasi Luas' },
      { label: 'Penggunaan', value: 'Rombongan Wisata, Event & Gathering' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Bpk. Hendra Gunawan',
    roleEN: 'Corporate Manager - Jakarta',
    roleID: 'Perjalanan Bisnis - Jakarta',
    textEN: 'Excellent service from Rizal Transportasi Batam! Rented Toyota Innova Reborn and Toyota Zenix for corporate visits in Batam Center and Nagoya. Punctual, cars in pristine condition, and very responsive booking via WhatsApp.',
    textID: 'Pelayanan Rizal Transportasi Batam sangat memuaskan! Sewa Innova Reborn dan Zenix untuk kunjungan dinas di Batam Center & Nagoya. Unit bersih, wangi, sopir profesional, dan proses booking WhatsApp sangat cepat.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Innova Reborn',
    carModelID: 'Toyota Innova Reborn',
    dateEN: 'August 2026',
    dateID: 'Agustus 2026'
  },
  {
    id: 'testi-2',
    name: 'Ibu Ratna & Keluarga',
    roleEN: 'Family Vacation - Medan',
    roleID: 'Liburan Keluarga - Medan',
    textEN: 'Rented Toyota Hiace for our big family trip exploring Batam landmarks like Barelang Bridge and Nongsa. Very spacious, cool AC throughout, and comfortable for all of us. Truly trusted transport in Batam!',
    textID: 'Sewa Toyota Hiace untuk liburan keluarga besar keliling Jembatan Barelang dan Nongsa. Mobil sangat lega, AC dingin merata, dan pelayanannya sangat ramah. Rekomendasi rental mobil terbaik di Batam!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Hiace',
    carModelID: 'Toyota Hiace',
    dateEN: 'Juli 2026',
    dateID: 'Juli 2026'
  },
  {
    id: 'testi-3',
    name: 'Bp. Randy Syahputra',
    roleEN: 'Event Committee - Pekanbaru',
    roleID: 'Panitia Gathering Perusahaan',
    textEN: 'We booked the Medium Bus 33 Seat for our company gathering in Batam. The bus was in top condition, audio and AC worked great, and our trip from Hang Nadim Airport to the resort went seamlessly.',
    textID: 'Booking Medium Bus 33 Seat untuk event gathering perusahaan di Batam. Busnya sangat nyaman, AC dingin, audio oke, dan penjemputan dari Bandara Hang Nadim sangat tepat waktu. Terima kasih Rizal Transportasi!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Medium Bus 33 Seat',
    carModelID: 'Medium Bus 33 Seat',
    dateEN: 'Juni 2026',
    dateID: 'Juni 2026'
  }
];
