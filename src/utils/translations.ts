export interface TranslationSchema {
  // SEO & Head Metadata
  seo_title: string;
  seo_description: string;

  // Navigation
  nav_home: string;
  nav_about: string;
  nav_services: string;
  nav_vehicles: string;
  nav_routes: string;
  nav_tours: string;
  nav_why_us: string;
  nav_area: string;
  nav_steps: string;
  nav_contact: string;
  nav_book_btn: string;

  // Top Bar & Branding
  brand_name: string;
  brand_tagline: string;
  brand_tagline_alt: string;
  topbar_address: string;
  topbar_whatsapp: string;
  topbar_tiktok: string;
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

  // Vision & Mission
  vision_title: string;
  vision_text: string;
  mission_title: string;
  mission_1: string;
  mission_2: string;
  mission_3: string;
  mission_4: string;
  mission_5: string;
  mission_6: string;

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

  // Routes Section
  routes_tag: string;
  routes_title: string;
  routes_desc: string;
  routes_btn_wa: string;

  // Tours / Destinations Section
  tours_tag: string;
  tours_title: string;
  tours_desc: string;

  // Vehicles Section
  vehicles_tag: string;
  vehicles_title: string;
  vehicles_desc: string;
  vehicles_price_note: string;
  vehicles_btn_book: string;
  vehicles_btn_wa: string;
  vehicles_filter_all: string;
  vehicles_filter_innova: string;
  vehicles_filter_avanza: string;
  vehicles_filter_sigra_calya: string;

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
  why_5_title: string;
  why_5_desc: string;

  // Area Layanan Section
  area_tag: string;
  area_title: string;
  area_desc: string;
  area_note: string;
  area_btn_consult: string;

  // Target Customers Section
  target_tag: string;
  target_title: string;
  target_desc: string;

  // Booking Steps Section (5 Steps)
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
  modal_field_wa_target: string;
  modal_btn_submit: string;

  // Footer & Contact
  footer_cta_heading: string;
  footer_cta_sub: string;
  footer_cta_btn: string;
  footer_address_title: string;
  footer_address_text: string;
  footer_wa_title: string;
  footer_wa_text: string;
  footer_tiktok_title: string;
  footer_tiktok_text: string;
  footer_socmed_title: string;
  footer_socmed_text: string;
  footer_quick_links: string;
  footer_rights: string;
}

export const TRANSLATIONS: Record<'EN' | 'ID', TranslationSchema> = {
  ID: {
    // SEO & Head Metadata
    seo_title: "CV SRM MANDIRI | Jasa Transportasi & Rental Mobil Medan - Sumatera",
    seo_description: "CV SRM MANDIRI melayani jasa transportasi terpercaya, rental mobil (Innova, Avanza, Sigra, Calya), carter travel antar kota (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi) & wisata Berastagi, Parapat, Pulau Samosir. Alamat: Simalingkar B. WhatsApp: 0852-7060-7796 / 0812-6232-0086.",

    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_services: "Layanan",
    nav_vehicles: "Armada Mobil",
    nav_routes: "Rute Layanan",
    nav_tours: "Tempat Wisata",
    nav_why_us: "Keunggulan",
    nav_area: "Area Layanan",
    nav_steps: "Alur Pemesanan",
    nav_contact: "Kontak",
    nav_book_btn: "BOOKING WHATSAPP",

    // Top Bar & Branding
    brand_name: "CV SRM MANDIRI",
    brand_tagline: "Melayani Jasa Transportasi Nyaman, Aman, & Terpercaya",
    brand_tagline_alt: "Rental Mobil & Travel Antar Kota Medan - Sumatera",
    topbar_address: "📍 Simalingkar B, Medan, Sumatera Utara",
    topbar_whatsapp: "📱 WA: 0852-7060-7796 / 0812-6232-0086",
    topbar_tiktok: "🎵 TikTok: @hendry.manullang",
    topbar_service: "Jasa Transportasi, Rental Mobil & Wisata",

    // Hero Section
    hero_title: "CV SRM MANDIRI",
    hero_tagline: "“Melayani Jasa Transportasi Terpercaya di Medan & Antar Kota Sumatera”",
    hero_description: "CV SRM MANDIRI melayani jasa transportasi profesional dengan armada pilihan: Innova, Avanza, Sigra, dan Calya. Melayani rute Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi, serta paket wisata favorit Berastagi, Parapat, dan Pulau Samosir.",
    hero_cta_wa: "Hubungi WhatsApp Admin",
    hero_cta_vehicles: "Pilihan Armada & Rute",
    search_vehicle_label: "Pilihan Kendaraan",
    search_travel_date: "Tanggal & Rute Perjalanan",
    search_btn: "KONSULTASI SEKARANG",

    // Vision & Mission
    vision_title: "Visi Kami",
    vision_text: "Menjadi penyedia jasa transportasi dan rental mobil terdepan yang melayani masyarakat dengan mengutamakan keselamatan, kenyamanan, kejujuran, dan kepuasan pelanggan di setiap perjalanan.",
    mission_title: "Misi Kami",
    mission_1: "Melayani jasa transportasi dan rental mobil berkualitas tinggi dengan armada prima dan terawat.",
    mission_2: "Menyediakan pilihan armada handal: Toyota Innova, Toyota Avanza, Daihatsu Sigra, dan Toyota Calya.",
    mission_3: "Melayani rute antar kota dan provinsi (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi) secara tepat waktu.",
    mission_4: "Menyediakan layanan tour wisata terbaik ke Berastagi, Parapat, Pulau Samosir, dan Danau Toba.",
    mission_5: "Memberikan tarif sewa yang kompetitif, transparan, dan terjangkau untuk seluruh lapisan masyarakat.",
    mission_6: "Memberikan pelayanan yang ramah, sopan, responsif, dan siap melayani konsultasi 24 jam via WhatsApp.",

    // Services Section
    services_tag: "LAYANAN UTAMA",
    services_title: "Layanan Jasa Transportasi CV SRM MANDIRI",
    services_desc: "Kami melayani berbagai kebutuhan transportasi darat mulai dari rental mobil harian, carter travel antar kota, hingga paket wisata keluarga dan rombongan.",
    service_1_title: "Rental Mobil Harian & Mingguan",
    service_1_desc: "Menyediakan armada Innova, Avanza, Sigra, dan Calya dalam kondisi bersih, harum, dan prima untuk perjalanan dalam maupun luar kota.",
    service_2_title: "Travel & Carter Antar Kota",
    service_2_desc: "Layanan carter dan drop-off rute Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi dengan perjalanan yang aman dan nyaman.",
    service_3_title: "Paket Wisata Sumatera Utara",
    service_3_desc: "Paket liburan dan tour keluarga ke destinasi ikonik Berastagi, Danau Toba Parapat, dan Pulau Samosir.",
    service_4_title: "Antar-Jemput Bandara & Stasiun",
    service_4_desc: "Layanan pick-up & drop-off tepat waktu di Bandara Internasional Kualanamu (KNO), stasiun kereta, terminal bus, dan hotel.",
    service_5_title: "Perjalanan Dinas & Operasional Kantor",
    service_5_desc: "Menunjang kegiatan dinas kantor, instansi, survey proyek lapangan, dan tamu bisnis dengan sopir berpengalaman.",
    service_6_title: "Transportasi Acara Keluarga & Carter Khusus",
    service_6_desc: "Layanan transportasi untuk acara pernikahan, ziarah, mudik, reuni, dan perjalanan rombongan khusus.",

    // Routes Section
    routes_tag: "RUTE ANTAR KOTA",
    routes_title: "Rute Layanan Transportasi & Travel",
    routes_desc: "Melayani perjalanan antar kota dan antar provinsi se-Sumatera dengan driver berpengalaman, nyaman dan selamat sampai tujuan.",
    routes_btn_wa: "Pesan Tiket / Carter Rute Ini",

    // Tours / Destinations Section
    tours_tag: "DESTINASI WISATA FAVORIT",
    tours_title: "Paket Wisata Berastagi, Parapat & Pulau Samosir",
    tours_desc: "Nikmati keindahan alam Sumatera Utara bersama CV SRM MANDIRI dengan pengalaman perjalanan yang menyenangkan dan tak terlupakan.",

    // Vehicles Section
    vehicles_tag: "PILIHAN ARMADA",
    vehicles_title: "Armada Mobil CV SRM MANDIRI",
    vehicles_desc: "Tersedia pilihan armada Toyota Innova, Toyota Avanza, Daihatsu Sigra, dan Toyota Calya. Semua unit dalam kondisi terawat, bersih, dan AC dingin.",
    vehicles_price_note: "Catatan: Tarif rental dan carter dapat disesuaikan dengan rute tujuan (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi), durasi sewa, serta kebutuhan include driver/BBM. Hubungi WhatsApp Admin untuk penawaran terbaik.",
    vehicles_btn_book: "Pesan Sekarang",
    vehicles_btn_wa: "Chat WhatsApp",
    vehicles_filter_all: "Semua Armada",
    vehicles_filter_innova: "Toyota Innova",
    vehicles_filter_avanza: "Toyota Avanza",
    vehicles_filter_sigra_calya: "Sigra & Calya",

    // Why Choose Us Section
    why_tag: "KEUNGGULAN KAMI",
    why_title: "Mengapa Memilih CV SRM MANDIRI?",
    why_desc: "Komitmen kami adalah memberikan pelayanan transportasi terbaik dengan armada berkualitas dan jaminan kenyamanan perjalanan Anda.",
    why_1_title: "Pilihan Armada Populer & Handal",
    why_1_desc: "Menyediakan Innova, Avanza, Sigra, dan Calya yang selalu dalam kondisi prima, bersih, wangi, dan terawat berkala.",
    why_2_title: "Rute Luas Lintas Sumatera",
    why_2_desc: "Melayani rute Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi dan kota-kota sekitarnya.",
    why_3_title: "Spesialis Wisata Berastagi & Samosir",
    why_3_desc: "Driver kami sangat hafal rute wisata Berastagi, Parapat Danau Toba, dan Pulau Samosir.",
    why_4_title: "Harga Bersahabat & Transparan",
    why_4_desc: "Tarif sewa mobil dan carter sangat kompetitif tanpa biaya tersembunyi.",
    why_5_title: "Respon Cepat 24 Jam",
    why_5_desc: "Admin responsif siap melayani konsultasi dan reservasi kapan saja via 2 nomor WhatsApp resmi.",

    // Area Layanan Section
    area_tag: "LOKASI & JANGKAUAN",
    area_title: "Alamat Kantor & Wilayah Layanan",
    area_desc: "Kantor CV SRM MANDIRI berlokasi di Simalingkar B, Medan. Kami melayani transportasi di Kota Medan, seluruh Sumatera Utara, Riau, Jambi, hingga Garut Jawa Barat.",
    area_note: "Untuk permintaan rute khusus luar kota atau carter rombongan, silakan konsultasikan langsung dengan admin kami via WhatsApp.",
    area_btn_consult: "Konsultasi Rute via WhatsApp",

    // Target Customers Section
    target_tag: "PELANGGAN KAMI",
    target_title: "Siapa Saja yang Kami Layani?",
    target_desc: "CV SRM MANDIRI siap menjadi mitra perjalanan terpercaya bagi:",

    // Booking Steps Section (5 Steps)
    steps_tag: "CARA PEMESANAN",
    steps_title: "5 Langkah Mudah Booking Kendaraan",
    steps_desc: "Proses reservasi cepat, praktis, dan langsung terhubung dengan admin kami via WhatsApp.",
    step_1_title: "1. Hubungi WhatsApp Kami",
    step_1_desc: "Klik tombol WhatsApp di website (0852-7060-7796 / 0812-6232-0086) untuk langsung terhubung dengan admin CV SRM MANDIRI.",
    step_2_title: "2. Pilih Mobil & Layanan",
    step_2_desc: "Tentukan jenis mobil yang dibutuhkan (Innova, Avanza, Sigra, atau Calya) sesuai kapasitas dan kebutuhan.",
    step_3_title: "3. Tentukan Rute & Tanggal",
    step_3_desc: "Sampaikan tanggal pemakaian, rute perjalanan (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi, atau Wisata Berastagi/Parapat/Samosir).",
    step_4_title: "4. Dapatkan Penawaran Harga",
    step_4_desc: "Admin akan memberikan penawaran harga terbaik dan konfirmasi ketersediaan unit yang dipilih.",
    step_5_title: "5. Siap Berangkat",
    step_5_desc: "Mobil siap dijemput di Simalingkar B / lokasi Anda atau diantar ke bandara/alamat sesuai kesepakatan.",

    // Testimonials
    testi_tag: "ULASAN PELANGGAN",
    testi_title: "Pengalaman Bersama CV SRM MANDIRI",
    testi_desc: "Apa kata pelanggan yang telah mempercayakan perjalanan mereka kepada CV SRM MANDIRI.",
    testi_rented_label: "Armada Disewa:",

    // Booking Modal
    modal_title: "FORMULIR PEMESANAN KENDARAAN",
    modal_desc: "Isi data pemesanan di bawah ini untuk terhubung langsung dengan WhatsApp Admin CV SRM MANDIRI.",
    modal_field_name: "Nama Lengkap",
    modal_field_phone: "Nomor WhatsApp",
    modal_field_vehicle: "Pilihan Armada",
    modal_field_date: "Tanggal Pemakaian",
    modal_field_duration: "Lama / Durasi Sewa",
    modal_field_address: "Lokasi Penjemputan (Medan / Bandara / Alamat)",
    modal_field_notes: "Rute Tujuan / Catatan Tambahan",
    modal_field_wa_target: "Kirim ke Nomor WhatsApp Admin:",
    modal_btn_submit: "Kirim Pemesanan ke WhatsApp ➔",

    // Footer & Contact
    footer_cta_heading: "Butuh Layanan Transportasi di Medan & Antar Kota?",
    footer_cta_sub: "Hubungi CV SRM MANDIRI sekarang! Kami siap melayani perjalanan rental mobil, carter antar kota, dan wisata Anda dengan aman dan nyaman.",
    footer_cta_btn: "Chat WhatsApp: 0852-7060-7796",
    footer_address_title: "Alamat Kantor:",
    footer_address_text: "Simalingkar B, Medan, Sumatera Utara",
    footer_wa_title: "WhatsApp Official:",
    footer_wa_text: "0852-7060-7796 / 0812-6232-0086",
    footer_tiktok_title: "TikTok Official:",
    footer_tiktok_text: "@hendry.manullang",
    footer_socmed_title: "Media Sosial:",
    footer_socmed_text: "TikTok: @hendry.manullang",
    footer_quick_links: "Menu Navigasi",
    footer_rights: "All Rights Reserved."
  },
  EN: {
    // SEO & Head Metadata
    seo_title: "CV SRM MANDIRI | Transportation & Car Rental Services Medan - Sumatra",
    seo_description: "CV SRM MANDIRI provides reliable transportation services, car rentals (Innova, Avanza, Sigra, Calya), intercity charters (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi) & tour trips to Berastagi, Parapat, Samosir Island. Address: Simalingkar B. WhatsApp: 0852-7060-7796 / 0812-6232-0086.",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_vehicles: "Vehicle Fleet",
    nav_routes: "Routes",
    nav_tours: "Tourist Spots",
    nav_why_us: "Why Choose Us",
    nav_area: "Service Area",
    nav_steps: "Booking Flow",
    nav_contact: "Contact",
    nav_book_btn: "BOOK VIA WHATSAPP",

    // Top Bar & Branding
    brand_name: "CV SRM MANDIRI",
    brand_tagline: "Reliable, Safe, & Comfortable Transportation Services",
    brand_tagline_alt: "Car Rental & Intercity Travel Medan - Sumatra",
    topbar_address: "📍 Simalingkar B, Medan, North Sumatra",
    topbar_whatsapp: "📱 WA: 0852-7060-7796 / 0812-6232-0086",
    topbar_tiktok: "🎵 TikTok: @hendry.manullang",
    topbar_service: "Transportation, Car Rental & Tour Services",

    // Hero Section
    hero_title: "CV SRM MANDIRI",
    hero_tagline: "“Serving Reliable Transportation in Medan & Across Sumatra”",
    hero_description: "CV SRM MANDIRI provides professional transportation services with choice fleets: Innova, Avanza, Sigra, and Calya. Serving routes Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi, and favorite tour packages to Berastagi, Parapat, and Samosir Island.",
    hero_cta_wa: "Contact Admin on WhatsApp",
    hero_cta_vehicles: "Explore Fleet & Routes",
    search_vehicle_label: "Select Vehicle",
    search_travel_date: "Travel Date & Route",
    search_btn: "CONSULT NOW",

    // Vision & Mission
    vision_title: "Our Vision",
    vision_text: "To become a leading transportation and car rental provider prioritizing safety, comfort, integrity, and total customer satisfaction in every journey across Sumatra.",
    mission_title: "Our Mission",
    mission_1: "Deliver high-quality transportation and car rental services with clean, well-maintained vehicles.",
    mission_2: "Provide proven reliable fleets: Toyota Innova, Toyota Avanza, Daihatsu Sigra, and Toyota Calya.",
    mission_3: "Serve intercity and interstate travel routes (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi) punctually.",
    mission_4: "Provide top-notch vacation and sightseeing trips to Berastagi, Parapat, Samosir Island, and Lake Toba.",
    mission_5: "Offer competitive, transparent, and affordable rental rates for all customers.",
    mission_6: "Ensure friendly, respectful, and responsive service available 24 hours via WhatsApp.",

    // Services Section
    services_tag: "OUR SERVICES",
    services_title: "CV SRM MANDIRI Transportation Services",
    services_desc: "We serve a wide spectrum of ground transportation needs, ranging from daily car rentals to intercity travel charters and family tour packages.",
    service_1_title: "Daily & Weekly Car Rental",
    service_1_desc: "Providing Innova, Avanza, Sigra, and Calya units in clean, comfortable, and top running condition for city and intercity travel.",
    service_2_title: "Intercity Travel & Charter",
    service_2_desc: "Charter and drop-off services across Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, and Jambi with utmost safety.",
    service_3_title: "North Sumatra Tour Packages",
    service_3_desc: "Exciting family holiday tours to iconic North Sumatra gems: Berastagi highlands, Lake Toba Parapat, and Samosir Island.",
    service_4_title: "Airport & Station Transfers",
    service_4_desc: "Punctual pick-up and drop-off at Kualanamu International Airport (KNO), train stations, bus terminals, and hotels.",
    service_5_title: "Corporate & Official Duties",
    service_5_desc: "Supporting office operations, business trips, field surveys, and corporate guests with experienced drivers.",
    service_6_title: "Family Events & Special Occasions",
    service_6_desc: "Dedicated transport for weddings, pilgrimages, reunions, and private group gatherings.",

    // Routes Section
    routes_tag: "INTERCITY ROUTES",
    routes_title: "Transportation & Travel Routes",
    routes_desc: "Serving intercity and interstate journeys across Sumatra with professional drivers, ensuring comfort and peace of mind.",
    routes_btn_wa: "Book / Charter This Route",

    // Tours / Destinations Section
    tours_tag: "POPULAR TOURIST SPOTS",
    tours_title: "Tours to Berastagi, Parapat & Samosir Island",
    tours_desc: "Experience the mesmerizing landscapes of North Sumatra with CV SRM MANDIRI for a truly memorable journey.",

    // Vehicles Section
    vehicles_tag: "VEHICLE FLEET",
    vehicles_title: "CV SRM MANDIRI Vehicle Fleet",
    vehicles_desc: "Available choices of Toyota Innova, Toyota Avanza, Daihatsu Sigra, and Toyota Calya. All units well-maintained, clean, and cool AC.",
    vehicles_price_note: "Note: Rental and charter rates can be customized based on destination (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi), duration, and driver/fuel inclusions. Contact WhatsApp Admin for best quotes.",
    vehicles_btn_book: "Book Now",
    vehicles_btn_wa: "Chat on WhatsApp",
    vehicles_filter_all: "All Fleets",
    vehicles_filter_innova: "Toyota Innova",
    vehicles_filter_avanza: "Toyota Avanza",
    vehicles_filter_sigra_calya: "Sigra & Calya",

    // Why Choose Us Section
    why_tag: "OUR ADVANTAGES",
    why_title: "Why Choose CV SRM MANDIRI?",
    why_desc: "Our commitment is delivering top-quality transportation service with dependable fleets and guaranteed travel comfort.",
    why_1_title: "Reliable & Popular Fleets",
    why_1_desc: "Offering Innova, Avanza, Sigra, and Calya maintained in pristine, fresh, and mechanically sound condition.",
    why_2_title: "Extensive Sumatra Routes",
    why_2_desc: "Serving Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi and surrounding regions.",
    why_3_title: "Berastagi & Samosir Tour Specialist",
    why_3_desc: "Our experienced drivers know every scenic route across Berastagi, Lake Toba Parapat, and Samosir Island.",
    why_4_title: "Fair & Transparent Pricing",
    why_4_desc: "Affordable and competitive rental and charter rates without hidden fees.",
    why_5_title: "24/7 Fast Response",
    why_5_desc: "Responsive customer service ready to assist your bookings anytime via 2 official WhatsApp numbers.",

    // Area Layanan Section
    area_tag: "LOCATION & COVERAGE",
    area_title: "Office Address & Service Coverage",
    area_desc: "CV SRM MANDIRI is located in Simalingkar B, Medan. We serve Medan City, North Sumatra, Riau, Jambi, and West Java (Garut).",
    area_note: "For custom long-distance routes or group charters, please consult directly with our admin via WhatsApp.",
    area_btn_consult: "Consult Routes via WhatsApp",

    // Target Customers Section
    target_tag: "OUR CLIENTS",
    target_title: "Who We Serve",
    target_desc: "CV SRM MANDIRI is proud to be a trusted travel partner for:",

    // Booking Steps Section (5 Steps)
    steps_tag: "HOW TO BOOK",
    steps_title: "5 Simple Steps to Book a Vehicle",
    steps_desc: "Fast and easy reservation process directly connected with our team via WhatsApp.",
    step_1_title: "1. Contact Our WhatsApp",
    step_1_desc: "Click the WhatsApp button on our site (0852-7060-7796 / 0812-6232-0086) to connect with CV SRM MANDIRI admin.",
    step_2_title: "2. Choose Vehicle & Service",
    step_2_desc: "Select the vehicle matching your group size (Innova, Avanza, Sigra, or Calya) and required service.",
    step_3_title: "3. Specify Dates & Route",
    step_3_desc: "Share your schedule and travel route (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi, or Tour Berastagi/Parapat/Samosir).",
    step_4_title: "4. Receive Best Quote",
    step_4_desc: "Our admin will promptly provide our best price offer and confirm unit availability.",
    step_5_title: "5. Ready for Departure",
    step_5_desc: "Your vehicle is ready for pickup at Simalingkar B / your address or airport transfer on schedule.",

    // Testimonials
    testi_tag: "CUSTOMER TESTIMONIALS",
    testi_title: "Experiences with CV SRM MANDIRI",
    testi_desc: "What our valued customers say about their journeys with CV SRM MANDIRI.",
    testi_rented_label: "Rented Fleet:",

    // Booking Modal
    modal_title: "VEHICLE RESERVATION FORM",
    modal_desc: "Fill in the details below to connect directly with CV SRM MANDIRI official WhatsApp admin.",
    modal_field_name: "Full Name",
    modal_field_phone: "WhatsApp Number",
    modal_field_vehicle: "Vehicle Selection",
    modal_field_date: "Rental Date",
    modal_field_duration: "Rental Duration",
    modal_field_address: "Pickup Location (Medan / Airport / Address)",
    modal_field_notes: "Destination Route / Extra Notes",
    modal_field_wa_target: "Send to Admin WhatsApp Number:",
    modal_btn_submit: "Send Reservation to WhatsApp ➔",

    // Footer & Contact
    footer_cta_heading: "Need Reliable Transportation in Medan & Intercity?",
    footer_cta_sub: "Contact CV SRM MANDIRI now! We are ready to serve your car rental, intercity charter, and tour travels safely and comfortably.",
    footer_cta_btn: "Chat WhatsApp: 0852-7060-7796",
    footer_address_title: "Office Address:",
    footer_address_text: "Simalingkar B, Medan, North Sumatra",
    footer_wa_title: "Official WhatsApp:",
    footer_wa_text: "0852-7060-7796 / 0812-6232-0086",
    footer_tiktok_title: "Official TikTok:",
    footer_tiktok_text: "@hendry.manullang",
    footer_socmed_title: "Social Media:",
    footer_socmed_text: "TikTok: @hendry.manullang",
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
