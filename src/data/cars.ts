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
  // 1. TOYOTA INNOVA
  {
    id: 'toyota-innova',
    name: 'Toyota Innova',
    category: 'MPV Premium & Tangguh',
    pricePerDay: 700000,
    priceDisplay: 'Rp700.000',
    image: '/innova_reborn.avif',
    seats: 7,
    transmission: 'Matic / Manual',
    fuel: 'Diesel / Bensin',
    includeList: [
      'Kabin Luas, Senyap & Sangat Nyaman',
      'Suspensi Lembut & Performa Mesin Handal',
      'Sangat Nyaman untuk Rute Jauh & Antar Kota',
      'AC Double Blower Dingin Merata',
      'Unit Selalu Bersih, Harum & Terawat'
    ],
    description: 'Pilihan MPV premium andalan dengan kenyamanan kabin superior, suspensi empuk, dan mesin tangguh untuk rute antar kota (Medan, Dumai, Duri, Pekanbaru, Kerinci, Jambi) maupun wisata Berastagi dan Danau Toba.',
    rating: 5.0,
    reviewsCount: 245,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Matic / Manual' },
      { label: 'Kenyamanan', value: 'Kabin Luas & Suspensi Lembut' },
      { label: 'Rute Layanan', value: 'Medan, Riau, Jambi & Wisata Sumut' }
    ]
  },

  // 2. TOYOTA AVANZA
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    category: 'Mobil Keluarga Favorit',
    pricePerDay: 500000,
    priceDisplay: 'Rp500.000',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual / Matic',
    fuel: 'Bensin (Irit)',
    includeList: [
      'Mobil Keluarga Praktis, Nyaman & Luas',
      'AC Dingin Double Blower',
      'Hemat Konsumsi Bahan Bakar',
      'Lincah dan Tangguh di Berbagai Medan Jalan',
      'Cocok untuk Liburan Keluarga & Dinas Kantor'
    ],
    description: 'Mobil keluarga terfavorit yang praktis, ekonomis, dan handal. Sangat cocok untuk perjalanan keliling kota Medan, kunjungan wisata ke Berastagi dan Parapat, maupun perjalanan dinas antar kota.',
    rating: 4.9,
    reviewsCount: 310,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Manual / Matic' },
      { label: 'Karakter', value: 'Irit, Praktis & Handal' },
      { label: 'Rute Layanan', value: 'Medan, Riau, Jambi & Sekitarnya' }
    ]
  },

  // 3. DAIHATSU SIGRA
  {
    id: 'daihatsu-sigra',
    name: 'Daihatsu Sigra',
    category: 'Mobil Keluarga Ekonomis',
    pricePerDay: 400000,
    priceDisplay: 'Rp400.000',
    image: '/sigra.avif',
    seats: 7,
    transmission: 'Manual / Matic',
    fuel: 'Bensin (Super Irit)',
    includeList: [
      'Kapasitas 7 Kursi dengan Desain Kompak',
      'Konsumsi BBM Sangat Efisien & Hemat',
      'Tarif Rental Sangat Bersahabat',
      'AC Dingin & Nyaman untuk Perjalanan',
      'Unit Prima & Siap Jalan Jarak Jauh'
    ],
    description: 'Pilihan mobil 7 penumpang yang sangat efisien dan ekonomis. Cocok untuk kebutuhan perjalanan hemat, antar jemput stasiun/bandara, keliling kota Medan, hingga carter luar kota.',
    rating: 4.8,
    reviewsCount: 185,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Manual / Matic' },
      { label: 'Kelebihan', value: 'Super Irit & Tarif Terjangkau' },
      { label: 'Rute Layanan', value: 'Medan & Rute Antar Kota' }
    ]
  },

  // 4. TOYOTA CALYA
  {
    id: 'toyota-calya',
    name: 'Toyota Calya',
    category: 'MPV Kompak & Efisien',
    pricePerDay: 400000,
    priceDisplay: 'Rp400.000',
    image: '/calya.avif',
    seats: 7,
    transmission: 'Manual / Matic',
    fuel: 'Bensin (Super Irit)',
    includeList: [
      'Mobil 7 Penumpang Nyaman & Modern',
      'Sangat Irit Konsumsi Bahan Bakar',
      'Lincah bermanuver di perkotaan & jalan lintas',
      'Kondisi Bersih, Wangi & Mesin Prima',
      'Harga Sewa Terjangkau & Bersahabat'
    ],
    description: 'Kendaraan MPV kompak 7 tempat duduk dengan efisiensi bahan bakar terbaik dan kenyamanan optimal untuk perjalanan keluarga, tugas operasional, maupun carter perjalanan di Sumatera.',
    rating: 4.9,
    reviewsCount: 205,
    specifications: [
      { label: 'Kapasitas', value: '7 Penumpang' },
      { label: 'Transmisi', value: 'Manual / Matic' },
      { label: 'Efisiensi', value: 'Hemat BBM & Performa Andal' },
      { label: 'Rute Layanan', value: 'Medan, Riau, Jambi & Sekitarnya' }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Bpk. Hendra Manullang & Rekan',
    roleEN: 'Business Trip - Pekanbaru to Medan',
    roleID: 'Perjalanan Carter - Pekanbaru ke Medan',
    textEN: 'Outstanding service from CV SRM MANDIRI! We chartered Toyota Innova for a multi-city business trip covering Pekanbaru, Duri, Dumai, and back to Medan. Driver was polite, on-time, and unit was very clean.',
    textID: 'Pelayanan CV SRM MANDIRI sangat memuaskan dan profesional! Kami sewa Toyota Innova untuk perjalanan carter Pekanbaru, Duri, Dumai sampai ke Medan. Mobilnya bersih, AC dingin, dan supir sangat berpengalaman di jalan lintas.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Innova',
    carModelID: 'Toyota Innova',
    dateEN: 'August 2026',
    dateID: 'Agustus 2026'
  },
  {
    id: 'testi-2',
    name: 'Ibu Mariana & Keluarga Besar',
    roleEN: 'Family Tour - Berastagi & Lake Toba Samosir',
    roleID: 'Wisata Keluarga - Berastagi & Samosir',
    textEN: 'We booked Toyota Avanza for our family holiday exploring Berastagi, Parapat, and Samosir Island. Super comfortable journey, smooth driving in mountain areas, and the admin response on WhatsApp was super fast!',
    textID: 'Liburan keluarga ke Berastagi, Danau Toba Parapat, dan Pulau Samosir jadi seru dan nyaman dengan Toyota Avanza dari CV SRM MANDIRI. Perjalanan nanjak pegunungan lancar, supir ramah, dan harga sewanya sangat terjangkau.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Avanza',
    carModelID: 'Toyota Avanza',
    dateEN: 'Juli 2026',
    dateID: 'Juli 2026'
  },
  {
    id: 'testi-3',
    name: 'Bpk. Siregar',
    roleEN: 'Intercity Travel - Medan to Jambi & Kerinci',
    roleID: 'Carter Antar Kota - Medan ke Jambi & Kerinci',
    textEN: 'Rented Toyota Calya for travel to Jambi and Kerinci. Fuel consumption was super economical, car was in top condition, and pickup from Simalingkar B was very punctual. Highly recommended!',
    textID: 'Sewa mobil di CV SRM MANDIRI dari Simalingkar B untuk rute Medan ke Jambi dan Kerinci. Mobil Calya sangat irit BBM, mesin prima, dan komunikasi via WhatsApp sangat ramah dan transparan. Terima kasih CV SRM MANDIRI!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModelEN: 'Toyota Calya',
    carModelID: 'Toyota Calya',
    dateEN: 'Juni 2026',
    dateID: 'Juni 2026'
  }
];
