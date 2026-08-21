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
  // 1. TOYOTA AVANZA (MANUAL)
  {
    id: 'avanza',
    name: 'Toyota Avanza (Manual)',
    category: 'Mobil Keluarga',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/avanza.jpg',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Bensin',
    includeList: [
      'Mobil Keluarga Nyaman & Bersih',
      'AC Double Blower Dingin',
      'Cocok untuk Keluarga & Rombongan Kecil',
      'Bisa Dalam & Luar Kota Kupang',
      'Unit Terawat & Prima'
    ],
    description: 'Mobil keluarga yang nyaman dan cocok untuk perjalanan bersama keluarga maupun rombongan kecil.',
    rating: 4.9,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Manual' },
      { label: 'Penggunaan', value: 'Keluarga, Wisata & Bisnis' },
      { label: 'Area Layanan', value: 'Kupang dan Sekitarnya' }
    ]
  },

  // 2. HONDA BRIO (MANUAL DAN MATIC)
  {
    id: 'brio',
    name: 'Honda Brio (Manual & Matic)',
    category: 'Mobil Compact',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/brio.jpg',
    seats: 5,
    transmission: 'Manual & Matic',
    fuel: 'Bensin (Irit)',
    includeList: [
      'Mobil Compact Praktis & Lincah',
      'Sangat Ekonomis & Hemat Bahan Bakar',
      'Pilihan Transmisi Manual & Matic',
      'Mudah Bermanuver di Perkotaan Kupang',
      'AC Dingin & Audio Bluetooth'
    ],
    description: 'Mobil compact yang praktis dan ekonomis untuk mobilitas di area perkotaan Kupang.',
    rating: 4.9,
    reviewsCount: 118,
    specifications: [
      { label: 'Kapasitas', value: '5 Penumpang' },
      { label: 'Transmisi', value: 'Manual dan Matic' },
      { label: 'Karakter', value: 'Praktis, Lincah & Ekonomis' },
      { label: 'Area', value: 'Perkotaan Kupang & Sekitarnya' }
    ]
  },

  // 3. TOYOTA FORTUNER
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV Premium',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/fortuner.jpg',
    seats: 7,
    transmission: 'Matic / Manual',
    fuel: 'Diesel Euro 4',
    includeList: [
      'SUV Tangguh, Gagah & Berkelas',
      'Kenyamanan Maksimal & Kabin Senyap',
      'Kapasitas Ekstra & Suspensi Nyaman',
      'Cocok untuk Tamu VIP, Bisnis & Wisata',
      'Performa Prima di Segala Medan'
    ],
    description: 'Pilihan kendaraan SUV untuk perjalanan yang membutuhkan kenyamanan dan kapasitas lebih.',
    rating: 5.0,
    reviewsCount: 95,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Tipe', value: 'SUV Gagah & Mewah' },
      { label: 'Kebutuhan', value: 'Bisnis, Tamu VIP & Perjalanan Jauh' },
      { label: 'Kenyamanan', value: 'Kenyamanan & Kapasitas Lebih' }
    ]
  },

  // 4. TOYOTA INNOVA REBORN
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn',
    category: 'Mobil Keluarga Luas',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/innova_reborn.png',
    seats: 7,
    transmission: 'Matic / Manual',
    fuel: 'Diesel / Bensin',
    includeList: [
      'Kabin Sangat Luas & Nyaman',
      'Suspensi Lembut untuk Perjalanan Jauh',
      'Ruang Kaki & Bagasi Luas',
      'Cocok untuk Keluarga & Dinas Bisnis',
      'Kondisi Unit Bersih & Harum'
    ],
    description: 'Mobil keluarga dengan kabin luas dan nyaman, cocok untuk perjalanan keluarga maupun perjalanan jarak jauh.',
    rating: 5.0,
    reviewsCount: 156,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Keunggulan', value: 'Kabin Luas & Suspensi Nyaman' },
      { label: 'Perjalanan', value: 'Keluarga & Jarak Jauh' },
      { label: 'Layanan', value: 'Pribadi, Wisata & Bisnis' }
    ]
  },

  // 5. RENTAL MOTOR
  {
    id: 'rental-motor',
    name: 'Rental Motor',
    category: 'Mobilitas Harian',
    pricePerDay: 0,
    priceDisplay: 'Hubungi Kami',
    image: '/motor.jpg',
    seats: 2,
    transmission: 'Matic',
    fuel: 'Bensin',
    includeList: [
      'Pilihan Praktis Mobilitas Pribadi',
      'Bebas Macet & Sangat Fleksibel',
      'Dilengkapi 2 Helm Bersih',
      'Jas Hujan Disediakan',
      'Mesin Terawat & Siap Pakai'
    ],
    description: 'Pilihan praktis untuk mobilitas pribadi, perjalanan singkat, maupun menjelajahi berbagai kawasan di Kupang.',
    rating: 4.9,
    reviewsCount: 134,
    specifications: [
      { label: 'Kapasitas', value: '2 Orang' },
      { label: 'Transmisi', value: 'Matic (Otomatis)' },
      { label: 'Fasilitas', value: '2 Helm SNI + Jas Hujan' },
      { label: 'Fungsi', value: 'Mobilitas Harian & Perjalanan Singkat' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Bpk. Dionisius',
    roleEN: 'Business Traveler - Jakarta',
    roleID: 'Kunjungan Kerja - Kupang & Sekitarnya',
    textEN: 'Very satisfied renting Toyota Innova Reborn in Kupang. The booking process via WhatsApp was fast and friendly. The car was clean, comfortable, and made my business schedule around Kupang very smooth!',
    textID: 'Sangat puas rental Innova Reborn di Kupang. Proses pemesanan via WhatsApp sangat praktis dan cepat direspon. Kondisi mobil bersih, AC dingin, dan perjalanan bisnis di Kupang jadi sangat lancar.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Innova Reborn',
    carModelID: 'Toyota Innova Reborn',
    dateEN: 'August 2026',
    dateID: 'Agustus 2026'
  },
  {
    id: 'testi-2',
    name: 'Ibu Maria & Keluarga',
    roleEN: 'Family Vacation - Surabaya',
    roleID: 'Liburan Keluarga - Surabaya',
    textEN: 'Rented Toyota Avanza for our family trip around Kupang. Comfortable for small groups, car is in top condition. Friendly customer service. Highly recommended!',
    textID: 'Sewa Toyota Avanza untuk liburan keluarga di Kupang. Mobilnya nyaman untuk keluarga kecil, mesin terawat dan tarikan mantap. Pelayanannya ramah dan terpercaya.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Avanza (Manual)',
    carModelID: 'Toyota Avanza (Manual)',
    dateEN: 'July 2026',
    dateID: 'Juli 2026'
  },
  {
    id: 'testi-3',
    name: 'Kak Robert',
    roleEN: 'Solo Explorer - Bali',
    roleID: 'Wisatawan - Bali',
    textEN: 'Rented a motorbike to explore beaches and city spots in Kupang. Very economical, motorbike in pristine condition, got clean helmets and raincoats. Fast booking directly via WhatsApp.',
    textID: 'Rental motor untuk keliling santai dan menjelajah berbagai kawasan di Kupang. Sangat praktis, motor prima dan hemat bensin. Helm bersih, booking via WA langsung beres!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Rental Motor',
    carModelID: 'Rental Motor',
    dateEN: 'Juni 2026',
    dateID: 'Juni 2026'
  }
];
