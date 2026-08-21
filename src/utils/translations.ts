export interface TranslationSchema {
  // SEO & Head Metadata
  seo_title: string;
  seo_description: string;

  // Navigation
  nav_home: string;
  nav_about: string;
  nav_services: string;
  nav_vehicles: string;
  nav_why_us: string;
  nav_area: string;
  nav_steps: string;
  nav_contact: string;
  nav_book_btn: string;

  // Top Bar & Branding
  brand_name: string;
  brand_tagline: string;
  topbar_address: string;
  topbar_whatsapp: string;
  topbar_service: string;

  // Hero Section
  hero_title: string;
  hero_tagline: string;
  hero_description: string;
  hero_cta_wa: string;
  hero_cta_vehicles: string;
  search_vehicle_label: string;
  search_travel_date: string;
  search_btn: string;

  // Services Section
  services_tag: string;
  services_title: string;
  services_desc: string;
  service_1_title: string;
  service_1_desc: string;
  service_2_title: string;
  service_2_desc: string;
  service_3_title: string;
  service_3_desc: string;
  service_4_title: string;
  service_4_desc: string;
  service_5_title: string;
  service_5_desc: string;
  service_6_title: string;
  service_6_desc: string;

  // Vehicles Section
  vehicles_tag: string;
  vehicles_title: string;
  vehicles_desc: string;
  vehicles_btn_book: string;
  vehicles_btn_wa: string;
  vehicles_filter_all: string;
  vehicles_filter_cars: string;
  vehicles_filter_motor: string;

  // Why Choose Us Section
  why_tag: string;
  why_title: string;
  why_desc: string;
  why_1_title: string;
  why_1_desc: string;
  why_2_title: string;
  why_2_desc: string;
  why_3_title: string;
  why_3_desc: string;
  why_4_title: string;
  why_4_desc: string;

  // Area Layanan Section
  area_tag: string;
  area_title: string;
  area_desc: string;
  area_note: string;
  area_btn_consult: string;

  // Booking Steps Section
  steps_tag: string;
  steps_title: string;
  steps_desc: string;
  step_1_title: string;
  step_1_desc: string;
  step_2_title: string;
  step_2_desc: string;
  step_3_title: string;
  step_3_desc: string;
  step_4_title: string;
  step_4_desc: string;
  step_5_title: string;
  step_5_desc: string;
  step_6_title: string;
  step_6_desc: string;

  // Testimonials
  testi_tag: string;
  testi_title: string;
  testi_desc: string;
  testi_rented_label: string;

  // Booking Modal
  modal_title: string;
  modal_desc: string;
  modal_field_name: string;
  modal_field_phone: string;
  modal_field_vehicle: string;
  modal_field_date: string;
  modal_field_duration: string;
  modal_field_address: string;
  modal_field_notes: string;
  modal_btn_submit: string;

  // Footer & Contact
  footer_cta_heading: string;
  footer_cta_sub: string;
  footer_cta_btn: string;
  footer_address_title: string;
  footer_address_text: string;
  footer_wa_title: string;
  footer_wa_text: string;
  footer_socmed_title: string;
  footer_socmed_text: string;
  footer_quick_links: string;
  footer_rights: string;
}

export const TRANSLATIONS: Record<'EN' | 'ID', TranslationSchema> = {
  ID: {
    // SEO & Head Metadata
    seo_title: "Rental Mobil & Motor Kupang - NTT | Sewa Mobil & Motor Praktis di Kupang",
    seo_description: "Rental Mobil & Motor Kupang_NTT menyediakan layanan rental kendaraan untuk kebutuhan perjalanan pribadi, wisata, bisnis, maupun aktivitas harian di wilayah Kupang dan sekitarnya. WhatsApp: 0815-2966-2483.",

    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_services: "Layanan Kami",
    nav_vehicles: "Pilihan Kendaraan",
    nav_why_us: "Kenapa Pilih Kami",
    nav_area: "Area Layanan",
    nav_steps: "Cara Booking",
    nav_contact: "Hubungi Kami",
    nav_book_btn: "BOOKING VIA WA",

    // Top Bar & Branding
    brand_name: "Rental Mobil & Motor Kupang_NTT",
    brand_tagline: "Sewa Mobil & Motor Praktis di Kupang, Nusa Tenggara Timur",
    topbar_address: "📍 Jl. Keladi, Manulai 2, Alak, Kupang, NTT",
    topbar_whatsapp: "📱 WhatsApp: 0815-2966-2483",
    topbar_service: "Sewa Mobil & Motor Praktis di Kupang - NTT",

    // Hero Section
    hero_title: "Rental Mobil & Motor Kupang - NTT",
    hero_tagline: "Sewa Mobil & Motor Praktis di Kupang, Nusa Tenggara Timur",
    hero_description: "Rental Mobil & Motor Kupang_NTT menyediakan layanan rental kendaraan untuk kebutuhan perjalanan pribadi, wisata, bisnis, maupun aktivitas harian di wilayah Kupang dan sekitarnya. Pilihan kendaraan yang beragam, proses pemesanan mudah, dan dapat dihubungi langsung melalui WhatsApp.",
    hero_cta_wa: "Hubungi via WhatsApp",
    hero_cta_vehicles: "Lihat Pilihan Kendaraan",
    search_vehicle_label: "Pilih Jenis Kendaraan",
    search_travel_date: "Tanggal & Lama Pemakaian",
    search_btn: "KONSULTASI BOOKING",

    // Services Section
    services_tag: "LAYANAN KAMI",
    services_title: "Solusi Rental Kendaraan di Kupang",
    services_desc: "Kami menghadirkan berbagai layanan rental mobil & motor yang fleksibel sesuai dengan kebutuhan perjalanan Anda.",
    service_1_title: "Rental Mobil Dalam & Luar Kota",
    service_1_desc: "Rental mobil untuk perjalanan dalam kota maupun luar kota Kupang dengan armada terawat dan nyaman.",
    service_2_title: "Rental Motor Mobilitas Harian",
    service_2_desc: "Rental motor untuk kebutuhan mobilitas harian yang praktis, lincah, dan hemat waktu di Kupang.",
    service_3_title: "Kendaraan Wisata & Liburan",
    service_3_desc: "Kendaraan siap pakai untuk keperluan wisata dan liburan menjelajahi keindahan Kupang & NTT.",
    service_4_title: "Kendaraan Perjalanan Keluarga",
    service_4_desc: "Mobil keluarga dengan kabin lega dan nyaman untuk perjalanan bersama seluruh anggota keluarga.",
    service_5_title: "Rental Bisnis & Pekerjaan",
    service_5_desc: "Rental kendaraan untuk keperluan bisnis, operasional pekerjaan, tugas dinas, dan mobilitas profesional.",
    service_6_title: "Konsultasi Pilihan Kendaraan",
    service_6_desc: "Konsultasi pilihan kendaraan sesuai kebutuhan perjalanan dan durasi pemakaian Anda.",

    // Vehicles Section
    vehicles_tag: "PILIHAN KENDARAAN",
    vehicles_title: "Armada Mobil & Motor Siap Pakai",
    vehicles_desc: "Tersedia pilihan mobil keluarga, mobil compact, SUV gagah, hingga motor harian yang prima dan bersih.",
    vehicles_btn_book: "Pesan Kendaraan Ini",
    vehicles_btn_wa: "Chat WA Sekarang",
    vehicles_filter_all: "Semua Kendaraan",
    vehicles_filter_cars: "Pilihan Mobil",
    vehicles_filter_motor: "Rental Motor",

    // Why Choose Us Section
    why_tag: "KEUNGGULAN KAMI",
    why_title: "Kenapa Pilih Rental Mobil & Motor Kupang_NTT?",
    why_desc: "Komitmen kami adalah memberikan kemudahan, kenyamanan, dan respon cepat untuk setiap pelanggan.",
    why_1_title: "Pilihan Kendaraan Beragam",
    why_1_desc: "Tersedia berbagai jenis kendaraan, mulai dari mobil compact hingga SUV dan mobil keluarga.",
    why_2_title: "Praktis & Mudah Booking",
    why_2_desc: "Pemesanan dapat dilakukan langsung melalui WhatsApp tanpa proses yang rumit.",
    why_3_title: "Cocok untuk Berbagai Kebutuhan",
    why_3_desc: "Bisa digunakan untuk wisata, perjalanan keluarga, aktivitas pekerjaan, maupun kebutuhan harian.",
    why_4_title: "Lokasi di Kupang",
    why_4_desc: "Berbasis di kawasan Manulai 2, Alak, Kupang, sehingga memudahkan pelanggan yang membutuhkan kendaraan di wilayah Kupang dan sekitarnya.",

    // Area Layanan Section
    area_tag: "JANGKAUAN WILAYAH",
    area_title: "Area Layanan Kami",
    area_desc: "Melayani kebutuhan rental kendaraan di Kupang dan sekitarnya. Untuk kebutuhan perjalanan ke luar wilayah Kupang, pelanggan dapat menghubungi kami terlebih dahulu untuk mendapatkan informasi ketersediaan dan ketentuan rental.",
    area_note: "Perjalanan dalam kota Kupang maupun perjalanan ke luar wilayah Kupang dapat dikoordinasikan langsung melalui WhatsApp.",
    area_btn_consult: "Konsultasi Area Layanan via WA",

    // Booking Steps Section
    steps_tag: "PROSES MUDAH",
    steps_title: "Cara Booking (6 Langkah Praktis)",
    steps_desc: "Proses cepat dan transparan tanpa ribet langsung melalui WhatsApp.",
    step_1_title: "1. Pilih Kendaraan",
    step_1_desc: "Pilih jenis kendaraan yang dibutuhkan (Avanza, Brio, Fortuner, Innova Reborn, atau Motor).",
    step_2_title: "2. Hubungi via WhatsApp",
    step_2_desc: "Hubungi kami langsung melalui nomor WhatsApp resmi 0815-2966-2483.",
    step_3_title: "3. Sampaikan Jadwal",
    step_3_desc: "Sampaikan tanggal pemakaian, jam, serta lama waktu rental yang Anda rencanakan.",
    step_4_title: "4. Konfirmasi Ketersediaan & Harga",
    step_4_desc: "Tim kami mengonfirmasi ketersediaan unit kendaraan dan rincian harga terbaik.",
    step_5_title: "5. Lakukan Booking",
    step_5_desc: "Lakukan booking sesuai ketentuan yang berlaku untuk memastikan unit terjadwal.",
    step_6_title: "6. Kendaraan Siap Digunakan",
    step_6_desc: "Kendaraan siap digunakan sesuai jadwal pemakaian yang telah disepakati.",

    // Testimonials
    testi_tag: "ULASAN PELANGGAN",
    testi_title: "Kepuasan Pelanggan di Kupang",
    testi_desc: "Pengalaman nyata pelanggan yang telah menggunakan layanan rental mobil & motor kami di Kupang NTT.",
    testi_rented_label: "Kendaraan Disewa:",

    // Booking Modal
    modal_title: "FORMULIR BOOKING KENDARAAN",
    modal_desc: "Isi data pemesanan di bawah ini untuk terhubung langsung dengan WhatsApp Rental Mobil & Motor Kupang_NTT.",
    modal_field_name: "Nama Lengkap",
    modal_field_phone: "Nomor WhatsApp",
    modal_field_vehicle: "Pilihan Kendaraan",
    modal_field_date: "Tanggal Pemakaian",
    modal_field_duration: "Lama Pemakaian (Hari / Jam)",
    modal_field_address: "Lokasi Penjemputan / Pengantaran di Kupang",
    modal_field_notes: "Kebutuhan Khusus / Catatan Tambahan",
    modal_btn_submit: "Kirim Booking ke WhatsApp ➔",

    // Footer & Contact
    footer_cta_heading: "Butuh kendaraan untuk perjalanan di Kupang?",
    footer_cta_sub: "Hubungi kami dan pilih kendaraan yang sesuai dengan kebutuhan Anda.",
    footer_cta_btn: "Chat WhatsApp: 0815-2966-2483",
    footer_address_title: "Alamat Kantor & Garasi:",
    footer_address_text: "Jl. Keladi, Manulai 2, Alak, Kupang, NTT",
    footer_wa_title: "WhatsApp Official:",
    footer_wa_text: "0815-2966-2483",
    footer_socmed_title: "Sosial Media:",
    footer_socmed_text: "Rental mobil&motor Kupang",
    footer_quick_links: "Menu Navigasi",
    footer_rights: "Hak Cipta Dilindungi."
  },
  EN: {
    // SEO & Head Metadata
    seo_title: "Rental Mobil & Motor Kupang - NTT | Practical Car & Motorbike Rental in Kupang",
    seo_description: "Rental Mobil & Motor Kupang_NTT provides vehicle rental services for personal, tourist, business, and daily mobility needs in Kupang and surroundings. WhatsApp: 0815-2966-2483.",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Our Services",
    nav_vehicles: "Vehicle Fleet",
    nav_why_us: "Why Choose Us",
    nav_area: "Service Area",
    nav_steps: "How to Book",
    nav_contact: "Contact Us",
    nav_book_btn: "BOOK VIA WA",

    // Top Bar & Branding
    brand_name: "Rental Mobil & Motor Kupang_NTT",
    brand_tagline: "Practical Car & Motorbike Rental in Kupang, East Nusa Tenggara",
    topbar_address: "📍 Jl. Keladi, Manulai 2, Alak, Kupang, NTT",
    topbar_whatsapp: "📱 WhatsApp: 0815-2966-2483",
    topbar_service: "Car & Motorbike Rental in Kupang - NTT",

    // Hero Section
    hero_title: "Rental Mobil & Motor Kupang - NTT",
    hero_tagline: "Practical Car & Motorbike Rental in Kupang, East Nusa Tenggara",
    hero_description: "Rental Mobil & Motor Kupang_NTT provides vehicle rental services for personal trips, tourism, business, and daily activities in Kupang and surrounding areas. Diverse vehicle options, easy booking process, and direct contact via WhatsApp.",
    hero_cta_wa: "Contact via WhatsApp",
    hero_cta_vehicles: "Explore Vehicles",
    search_vehicle_label: "Select Vehicle Type",
    search_travel_date: "Date & Rental Duration",
    search_btn: "CONSULT BOOKING",

    // Services Section
    services_tag: "OUR SERVICES",
    services_title: "Vehicle Rental Solutions in Kupang",
    services_desc: "We provide flexible car and motorcycle rental services tailored to your travel needs in Kupang and beyond.",
    service_1_title: "Car Rental (Inner & Outer City)",
    service_1_desc: "Car rental for trips within Kupang city as well as inter-district journeys with clean and well-maintained cars.",
    service_2_title: "Motorbike Rental for Daily Use",
    service_2_desc: "Motorbike rental for practical, nimble, and time-saving daily mobility across Kupang.",
    service_3_title: "Vehicles for Tourism & Holidays",
    service_3_desc: "Ready-to-use vehicles for leisure and sightseeing to explore the scenic spots of Kupang & NTT.",
    service_4_title: "Family Travel Vehicles",
    service_4_desc: "Comfortable family cars with spacious cabins for trips with your whole family.",
    service_5_title: "Business & Work Rentals",
    service_5_desc: "Vehicle rentals for official business, corporate work, duties, and professional mobility.",
    service_6_title: "Vehicle Consultation",
    service_6_desc: "Consultation to choose the right vehicle according to your travel requirements and duration.",

    // Vehicles Section
    vehicles_tag: "VEHICLE FLEET",
    vehicles_title: "Cars & Motorbikes Ready to Rent",
    vehicles_desc: "Available family cars, compact city cars, premium SUVs, and daily motorbikes in pristine condition.",
    vehicles_btn_book: "Book This Vehicle",
    vehicles_btn_wa: "Chat on WA Now",
    vehicles_filter_all: "All Fleets",
    vehicles_filter_cars: "Car Options",
    vehicles_filter_motor: "Motorbike Rental",

    // Why Choose Us Section
    why_tag: "OUR ADVANTAGES",
    why_title: "Why Choose Rental Mobil & Motor Kupang_NTT?",
    why_desc: "We are committed to delivering ease, comfort, and fast responses to every customer.",
    why_1_title: "Diverse Vehicle Options",
    why_1_desc: "A wide variety of vehicles available, from compact cars to SUVs and family cars.",
    why_2_title: "Easy & Practical Booking",
    why_2_desc: "Book directly through WhatsApp without any complicated procedures.",
    why_3_title: "Suitable for Diverse Needs",
    why_3_desc: "Can be used for tourism, family trips, work activities, and daily mobility.",
    why_4_title: "Strategic Location in Kupang",
    why_4_desc: "Based in the Manulai 2 area, Alak, Kupang, making it easy for customers needing vehicles in Kupang and surroundings.",

    // Area Layanan Section
    area_tag: "COVERAGE",
    area_title: "Our Service Area",
    area_desc: "Serving vehicle rental needs in Kupang and surroundings. For travel needs outside the Kupang area, customers can contact us in advance to check availability and rental terms.",
    area_note: "Travel within Kupang City or outside the region can be directly coordinated via WhatsApp.",
    area_btn_consult: "Consult Service Area via WA",

    // Booking Steps Section
    steps_tag: "EASY PROCESS",
    steps_title: "How to Book (6 Easy Steps)",
    steps_desc: "Fast and transparent process directly handled via WhatsApp.",
    step_1_title: "1. Choose Your Vehicle",
    step_1_desc: "Select the vehicle you need (Avanza, Brio, Fortuner, Innova Reborn, or Motorbike).",
    step_2_title: "2. Contact via WhatsApp",
    step_2_desc: "Reach out to us directly via official WhatsApp at 0815-2966-2483.",
    step_3_title: "3. Inform Schedule",
    step_3_desc: "Share your pickup date, time, and planned rental duration.",
    step_4_title: "4. Confirm Availability & Rate",
    step_4_desc: "Our team will confirm vehicle availability and provide the best transparent rate quote.",
    step_5_title: "5. Confirm Booking",
    step_5_desc: "Complete the booking according to applicable terms to secure your vehicle.",
    step_6_title: "6. Vehicle Ready on Schedule",
    step_6_desc: "Your vehicle is prepped and ready for use as scheduled.",

    // Testimonials
    testi_tag: "CUSTOMER REVIEWS",
    testi_title: "Customer Experiences in Kupang",
    testi_desc: "Real experiences from customers who used our car and motorbike rental services in Kupang NTT.",
    testi_rented_label: "Rented Vehicle:",

    // Booking Modal
    modal_title: "VEHICLE RESERVATION FORM",
    modal_desc: "Fill in your booking details below to connect directly with WhatsApp Rental Mobil & Motor Kupang_NTT.",
    modal_field_name: "Full Name",
    modal_field_phone: "WhatsApp Number",
    modal_field_vehicle: "Selected Vehicle",
    modal_field_date: "Rental Date",
    modal_field_duration: "Rental Duration (Days / Hours)",
    modal_field_address: "Pickup / Delivery Address in Kupang",
    modal_field_notes: "Special Requests / Notes",
    modal_btn_submit: "Send Booking via WhatsApp ➔",

    // Footer & Contact
    footer_cta_heading: "Need a vehicle for your trip in Kupang?",
    footer_cta_sub: "Contact us and choose the vehicle that best suits your needs.",
    footer_cta_btn: "Chat WhatsApp: 0815-2966-2483",
    footer_address_title: "Office & Garage Address:",
    footer_address_text: "Jl. Keladi, Manulai 2, Alak, Kupang, NTT",
    footer_wa_title: "Official WhatsApp:",
    footer_wa_text: "0815-2966-2483",
    footer_socmed_title: "Social Media:",
    footer_socmed_text: "Rental mobil&motor Kupang",
    footer_quick_links: "Quick Navigation",
    footer_rights: "All Rights Reserved."
  }
};

export function getTranslation(lang: 'EN' | 'ID', key: keyof TranslationSchema): string {
  const dict = TRANSLATIONS[lang];
  if (!dict || !dict[key]) {
    return TRANSLATIONS.ID[key] || key;
  }
  return dict[key];
}
