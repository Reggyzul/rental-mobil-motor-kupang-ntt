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
  brand_tagline_alt: string;
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

  // Vehicles Section
  vehicles_tag: string;
  vehicles_title: string;
  vehicles_desc: string;
  vehicles_price_note: string;
  vehicles_btn_book: string;
  vehicles_btn_wa: string;
  vehicles_filter_all: string;
  vehicles_filter_family: string;
  vehicles_filter_group: string;
  vehicles_filter_luxury: string;

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
    seo_title: "Rizal Transportasi Batam | Solusi Transportasi Nyaman dan Terpercaya di Batam",
    seo_description: "Rizal Transportasi Batam menyediakan rental mobil dan transportasi terpercaya di Batam. Pilihan armada lengkap mulai dari Avanza, Innova Reborn, Zenix, Hiace, hingga Medium Bus 33 Seat. WhatsApp: +62 852-6401-8698.",

    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_services: "Layanan Kami",
    nav_vehicles: "Armada",
    nav_why_us: "Keunggulan",
    nav_area: "Rute & Area Layanan",
    nav_steps: "Alur Pemesanan",
    nav_contact: "Hubungi Kami",
    nav_book_btn: "BOOKING VIA WHATSAPP",

    // Top Bar & Branding
    brand_name: "Rizal Transportasi Batam",
    brand_tagline: "Solusi Transportasi Nyaman dan Terpercaya di Batam",
    brand_tagline_alt: "Nyaman Perjalanannya, Mudah Pesannya.",
    topbar_address: "📍 Perumahan Buana Vista Indah 2, Blok A No. 67, Botania, Batam",
    topbar_whatsapp: "📱 WhatsApp: +62 852-6401-8698",
    topbar_service: "Rental Mobil & Transportasi di Batam",

    // Hero Section
    hero_title: "Rizal Transportasi Batam",
    hero_tagline: "“Solusi Transportasi Nyaman dan Terpercaya di Batam”",
    hero_description: "Rizal Transportasi Batam merupakan layanan rental mobil dan transportasi yang melayani kebutuhan perjalanan di wilayah Kota Batam dan sekitarnya. Kami menyediakan berbagai pilihan kendaraan, mulai dari mobil keluarga hingga kendaraan berkapasitas besar untuk kebutuhan perjalanan bersama.",
    hero_cta_wa: "Chat WhatsApp Admin",
    hero_cta_vehicles: "Lihat Armada & Harga",
    search_vehicle_label: "Pilih Jenis Kendaraan",
    search_travel_date: "Tanggal & Durasi Rental",
    search_btn: "KONSULTASI BOOKING",

    // Vision & Mission
    vision_title: "Visi Kami",
    vision_text: "Menjadi penyedia layanan rental mobil dan transportasi terpercaya di Batam dengan mengutamakan kenyamanan, keamanan, pelayanan yang ramah, serta kemudahan bagi setiap pelanggan.",
    mission_title: "Misi Kami",
    mission_1: "Menyediakan kendaraan yang nyaman dan sesuai dengan kebutuhan pelanggan.",
    mission_2: "Memberikan pelayanan transportasi yang ramah, profesional, dan responsif.",
    mission_3: "Mengutamakan kenyamanan dan keamanan pelanggan selama perjalanan.",
    mission_4: "Menawarkan pilihan armada yang beragam dengan harga yang kompetitif.",
    mission_5: "Memberikan kemudahan dalam proses pemesanan kendaraan.",
    mission_6: "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan yang terpercaya.",

    // Services Section
    services_tag: "LAYANAN UTAMA",
    services_title: "Layanan Transportasi di Batam",
    services_desc: "Solusi transportasi terpadu untuk perjalanan pribadi, keluarga, rombongan, dinas kantor, maupun wisata di seluruh wilayah Kota Batam.",
    service_1_title: "Rental Mobil",
    service_1_desc: "Menyediakan berbagai pilihan kendaraan untuk kebutuhan perjalanan di Batam, baik untuk perjalanan pribadi, keluarga, bisnis, maupun rombongan.",
    service_2_title: "Transportasi Rombongan",
    service_2_desc: "Tersedia kendaraan dengan kapasitas besar untuk perjalanan bersama, kegiatan perusahaan, wisata, acara keluarga, maupun kebutuhan rombongan lainnya.",
    service_3_title: "Perjalanan Dalam Kota Batam",
    service_3_desc: "Melayani kebutuhan transportasi di berbagai wilayah Kota Batam dengan pilihan kendaraan yang dapat disesuaikan dengan jumlah penumpang dan kebutuhan perjalanan.",
    service_4_title: "Antar-Jemput Bandara & Pelabuhan",
    service_4_desc: "Layanan antar-jemput tepat waktu di Bandara Hang Nadim serta Pelabuhan Ferry Batam Center, Harbour Bay, Sekupang, dan Telaga Punggur.",
    service_5_title: "Wisata & City Tour Batam",
    service_5_desc: "Paket perjalanan santai mengunjungi spot populer seperti Jembatan Barelang, Nagoya, Pantai Nongsa, dan pusat belanja kuliner.",
    service_6_title: "Transportasi Bisnis & Tamu VIP",
    service_6_desc: "Pilihan unit premium dan berkelas untuk menunjang kegiatan operasional kantor, instansi, meeting penting, dan tamu kehormatan.",

    // Vehicles Section
    vehicles_tag: "ARMADA & HARGA",
    vehicles_title: "Pilihan Armada & Tarif Rental",
    vehicles_desc: "Tersedia pilihan armada mobil keluarga hingga kendaraan berkapasitas besar dengan performa prima, bersih, dan nyaman.",
    vehicles_price_note: "Catatan: Harga dapat disesuaikan berdasarkan durasi rental, kebutuhan perjalanan, rute, serta layanan yang dipilih. Detail harga dan ketentuan rental dapat dikonfirmasi langsung melalui WhatsApp.",
    vehicles_btn_book: "Pesan Sekarang",
    vehicles_btn_wa: "Chat WhatsApp",
    vehicles_filter_all: "Semua Armada",
    vehicles_filter_family: "Mobil Keluarga",
    vehicles_filter_group: "Minibus & Bus Rombongan",
    vehicles_filter_luxury: "Luxury MPV",

    // Why Choose Us Section
    why_tag: "KEUNGGULAN KAMI",
    why_title: "Keunggulan Rizal Transportasi Batam",
    why_desc: "Komitmen kami adalah memberikan kenyamanan, keamanan, pelayanan ramah, dan kemudahan bagi setiap perjalanan Anda di Batam.",
    why_1_title: "Pilihan Armada Beragam",
    why_1_desc: "Tersedia berbagai jenis kendaraan, mulai dari mobil keluarga hingga kendaraan berkapasitas besar.",
    why_2_title: "Nyaman untuk Berbagai Kebutuhan",
    why_2_desc: "Armada dapat digunakan untuk perjalanan pribadi, keluarga, bisnis, wisata, maupun rombongan.",
    why_3_title: "Harga Kompetitif",
    why_3_desc: "Pilihan harga disesuaikan dengan jenis kendaraan dan kebutuhan perjalanan pelanggan.",
    why_4_title: "Area Layanan Batam",
    why_4_desc: "Melayani kebutuhan transportasi di wilayah Kota Batam dan sekitarnya.",
    why_5_title: "Reservasi Mudah",
    why_5_desc: "Pelanggan dapat melakukan konsultasi dan pemesanan kendaraan dengan mudah melalui WhatsApp.",

    // Area Layanan Section
    area_tag: "RUTE & AREA LAYANAN",
    area_title: "Area Layanan Kota Batam & Sekitarnya",
    area_desc: "Kami melayani kebutuhan transportasi di seluruh kawasan Kota Batam (Botania, Batam Center, Nagoya, Nongsa, Sekupang, Batu Aji, Piayu, Bandara & Pelabuhan).",
    area_note: "Untuk rute khusus atau perjalanan di luar area layanan utama, pelanggan dapat menghubungi admin terlebih dahulu untuk mengecek ketersediaan dan harga.",
    area_btn_consult: "Konsultasi Rute via WhatsApp",

    // Target Customers Section
    target_tag: "SIAPA YANG KAMI LAYANI",
    target_title: "Target Pelanggan Rizal Transportasi Batam",
    target_desc: "Kami siap melayani berbagai segmen pelanggan dengan standar pelayanan ramah dan profesional:",

    // Booking Steps Section (5 Steps)
    steps_tag: "ALUR PEMESANAN",
    steps_title: "Alur Pemesanan Mudah (5 Langkah)",
    steps_desc: "Proses cepat, transparan, dan mudah langsung melalui kontak WhatsApp kami.",
    step_1_title: "1. Hubungi Kami",
    step_1_desc: "Klik tombol “Pesan Sekarang” atau “Chat WhatsApp” pada website untuk terhubung langsung dengan admin kami.",
    step_2_title: "2. Tentukan Kendaraan",
    step_2_desc: "Pilih kendaraan sesuai jumlah penumpang dan kebutuhan perjalanan (Avanza, Innova Reborn, Zenix, Hiace, atau Medium Bus).",
    step_3_title: "3. Informasikan Detail Perjalanan",
    step_3_desc: "Sampaikan tanggal, durasi rental, kebutuhan perjalanan, serta lokasi penjemputan jika diperlukan.",
    step_4_title: "4. Konfirmasi Harga & Ketersediaan",
    step_4_desc: "Admin akan memberikan informasi mengenai ketersediaan kendaraan, harga, dan ketentuan rental.",
    step_5_title: "5. Booking",
    step_5_desc: "Setelah detail perjalanan disepakati, pelanggan dapat melakukan reservasi sesuai ketentuan yang berlaku.",

    // Testimonials
    testi_tag: "ULASAN PELANGGAN",
    testi_title: "Kepuasan Pelanggan di Batam",
    testi_desc: "Pengalaman nyata dari wisatawan, keluarga, dan instansi yang mempercayakan transportasinya kepada Rizal Transportasi Batam.",
    testi_rented_label: "Armada Disewa:",

    // Booking Modal
    modal_title: "FORMULIR PEMESANAN KENDARAAN",
    modal_desc: "Isi data pemesanan di bawah ini untuk terhubung langsung dengan WhatsApp Admin Rizal Transportasi Batam.",
    modal_field_name: "Nama Lengkap",
    modal_field_phone: "Nomor WhatsApp",
    modal_field_vehicle: "Pilihan Armada",
    modal_field_date: "Tanggal Pemakaian",
    modal_field_duration: "Lama / Durasi Rental",
    modal_field_address: "Lokasi Penjemputan di Batam (Bandara / Hotel / Alamat)",
    modal_field_notes: "Catatan Tambahan / Kebutuhan Rute",
    modal_btn_submit: "Kirim Pemesanan ke WhatsApp ➔",

    // Footer & Contact
    footer_cta_heading: "Butuh kendaraan untuk perjalanan di Batam?",
    footer_cta_sub: "Hubungi kami sekarang dan pilih kendaraan yang sesuai dengan kebutuhan Anda.",
    footer_cta_btn: "Chat WhatsApp: +62 852-6401-8698",
    footer_address_title: "Alamat Kantor:",
    footer_address_text: "Perumahan Buana Vista Indah 2, Blok A No. 67, Botania, Batam",
    footer_wa_title: "WhatsApp Official:",
    footer_wa_text: "+62 852-6401-8698",
    footer_socmed_title: "Sosial Media:",
    footer_socmed_text: "Facebook – Rizal Transportasi Batam",
    footer_quick_links: "Menu Navigasi",
    footer_rights: "All Rights Reserved."
  },
  EN: {
    // SEO & Head Metadata
    seo_title: "Rizal Transportasi Batam | Trusted Car & Group Transport in Batam",
    seo_description: "Rizal Transportasi Batam provides reliable car rental and group transportation in Batam. Fleet options: Avanza, Innova Reborn, Zenix, Hiace, and Medium Bus 33 Seat. WhatsApp: +62 852-6401-8698.",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Our Services",
    nav_vehicles: "Fleet",
    nav_why_us: "Advantages",
    nav_area: "Service Area",
    nav_steps: "How to Book",
    nav_contact: "Contact Us",
    nav_book_btn: "BOOK VIA WHATSAPP",

    // Top Bar & Branding
    brand_name: "Rizal Transportasi Batam",
    brand_tagline: "Comfortable and Trusted Transportation Solution in Batam",
    brand_tagline_alt: "Comfortable Journey, Easy Booking.",
    topbar_address: "📍 Perumahan Buana Vista Indah 2, Blok A No. 67, Botania, Batam",
    topbar_whatsapp: "📱 WhatsApp: +62 852-6401-8698",
    topbar_service: "Car & Transport Rental in Batam",

    // Hero Section
    hero_title: "Rizal Transportasi Batam",
    hero_tagline: "“Comfortable and Trusted Transportation Solution in Batam”",
    hero_description: "Rizal Transportasi Batam is a premier car rental and transportation service catering to travel needs throughout Batam City and surrounding areas. We provide a diverse selection of vehicles, from family cars to large-capacity buses.",
    hero_cta_wa: "Chat Admin on WhatsApp",
    hero_cta_vehicles: "Explore Fleet & Rates",
    search_vehicle_label: "Select Vehicle Type",
    search_travel_date: "Rental Date & Duration",
    search_btn: "CONSULT BOOKING",

    // Vision & Mission
    vision_title: "Our Vision",
    vision_text: "To become the most trusted car rental and transportation provider in Batam by prioritizing comfort, safety, friendly service, and effortless booking for every customer.",
    mission_title: "Our Mission",
    mission_1: "Provide comfortable vehicles tailored to customer needs.",
    mission_2: "Deliver friendly, professional, and responsive transportation services.",
    mission_3: "Prioritize customer safety and comfort throughout the journey.",
    mission_4: "Offer a diverse fleet at competitive rates.",
    mission_5: "Ensure a simple and seamless vehicle booking process.",
    mission_6: "Build long-term customer relationships through trustworthy service.",

    // Services Section
    services_tag: "MAIN SERVICES",
    services_title: "Transportation Services in Batam",
    services_desc: "Comprehensive transportation solutions for personal trips, families, corporate events, and tours across Batam City.",
    service_1_title: "Car Rental",
    service_1_desc: "Providing a wide choice of vehicles for travel needs in Batam, suitable for personal, family, business, or group trips.",
    service_2_title: "Group Transportation",
    service_2_desc: "Large-capacity vehicles available for company events, sightseeing tours, family functions, and group gatherings.",
    service_3_title: "Batam Inner City Travel",
    service_3_desc: "Serving transportation across all districts of Batam with vehicles customized to your passenger count and schedule.",
    service_4_title: "Airport & Ferry Transfers",
    service_4_desc: "Punctual pick-up and drop-off at Hang Nadim International Airport and Batam Ferry Terminals (Batam Center, Harbour Bay, Sekupang, Telaga Punggur).",
    service_5_title: "Batam City Tours & Sightseeing",
    service_5_desc: "Leisure sightseeing trips to iconic destinations including Barelang Bridge, Nagoya, Nongsa Beach, and shopping districts.",
    service_6_title: "Corporate & VIP Transportation",
    service_6_desc: "Executive vehicles and premium service tailored for corporate assignments, official duties, and distinguished guests.",

    // Vehicles Section
    vehicles_tag: "FLEET & RATES",
    vehicles_title: "Our Vehicle Fleet & Starting Rates",
    vehicles_desc: "From compact family MPVs to spacious 33-seat buses, all units are maintained in pristine condition.",
    vehicles_price_note: "Note: Rates can be adjusted based on rental duration, travel requirements, routes, and selected service packages. Full details can be confirmed directly via WhatsApp.",
    vehicles_btn_book: "Book Now",
    vehicles_btn_wa: "Chat on WhatsApp",
    vehicles_filter_all: "All Fleets",
    vehicles_filter_family: "Family Cars",
    vehicles_filter_group: "Minibus & Buses",
    vehicles_filter_luxury: "Luxury MPV",

    // Why Choose Us Section
    why_tag: "OUR ADVANTAGES",
    why_title: "Why Choose Rizal Transportasi Batam?",
    why_desc: "We are committed to delivering ease, comfort, safety, and quick response for every customer in Batam.",
    why_1_title: "Diverse Fleet Options",
    why_1_desc: "Wide range of vehicles available, from family cars to high-capacity group transport.",
    why_2_title: "Comfortable for All Occasions",
    why_2_desc: "Ideal for personal trips, families, corporate travel, tourism, and community events.",
    why_3_title: "Competitive Pricing",
    why_3_desc: "Transparent and fair pricing tailored to vehicle category and travel itinerary.",
    why_4_title: "Batam Coverage Area",
    why_4_desc: "Serving all districts across Batam City and surrounding areas.",
    why_5_title: "Easy Reservation",
    why_5_desc: "Fast consultations and seamless reservations handled directly via WhatsApp.",

    // Area Layanan Section
    area_tag: "ROUTES & SERVICE AREA",
    area_title: "Batam City Service Coverage",
    area_desc: "We serve transportation across all Batam regions (Botania, Batam Center, Nagoya, Nongsa, Sekupang, Batu Aji, Hang Nadim Airport & Ferry Terminals).",
    area_note: "For custom routes or destinations outside the primary service area, please contact our admin in advance to check availability and rates.",
    area_btn_consult: "Consult Routes via WhatsApp",

    // Target Customers Section
    target_tag: "WHO WE SERVE",
    target_title: "Target Customers of Rizal Transportasi Batam",
    target_desc: "We proudly cater to various customer segments with high hospitality standards:",

    // Booking Steps Section (5 Steps)
    steps_tag: "HOW TO BOOK",
    steps_title: "Simple 5-Step Booking Flow",
    steps_desc: "Fast, transparent, and direct reservation process via WhatsApp.",
    step_1_title: "1. Contact Us",
    step_1_desc: "Click 'Book Now' or 'Chat WhatsApp' on our website to directly reach our admin team.",
    step_2_title: "2. Choose Your Vehicle",
    step_2_desc: "Select the right vehicle based on passenger count and travel purpose (Avanza, Innova Reborn, Zenix, Hiace, or Medium Bus).",
    step_3_title: "3. Share Travel Details",
    step_3_desc: "Provide your date, rental duration, itinerary, and pickup location in Batam.",
    step_4_title: "4. Rate & Availability Confirmation",
    step_4_desc: "Our team will confirm unit availability, provide clear quotes, and outline rental terms.",
    step_5_title: "5. Booking",
    step_5_desc: "Once travel details are agreed upon, complete the reservation according to applicable terms.",

    // Testimonials
    testi_tag: "CLIENT TESTIMONIALS",
    testi_title: "Customer Experiences in Batam",
    testi_desc: "Real feedback from tourists, families, and corporate clients who rely on Rizal Transportasi Batam.",
    testi_rented_label: "Rented Vehicle:",

    // Booking Modal
    modal_title: "VEHICLE RESERVATION FORM",
    modal_desc: "Fill in the details below to connect directly with the official WhatsApp admin of Rizal Transportasi Batam.",
    modal_field_name: "Full Name",
    modal_field_phone: "WhatsApp Number",
    modal_field_vehicle: "Selected Fleet",
    modal_field_date: "Usage Date",
    modal_field_duration: "Rental Duration",
    modal_field_address: "Pickup Location in Batam (Airport / Hotel / Address)",
    modal_field_notes: "Additional Notes / Route Needs",
    modal_btn_submit: "Send Reservation to WhatsApp ➔",

    // Footer & Contact
    footer_cta_heading: "Need reliable transport for your trip in Batam?",
    footer_cta_sub: "Contact us now and select the ideal vehicle tailored to your journey.",
    footer_cta_btn: "Chat WhatsApp: +62 852-6401-8698",
    footer_address_title: "Office Address:",
    footer_address_text: "Perumahan Buana Vista Indah 2, Blok A No. 67, Botania, Batam",
    footer_wa_title: "Official WhatsApp:",
    footer_wa_text: "+62 852-6401-8698",
    footer_socmed_title: "Social Media:",
    footer_socmed_text: "Facebook – Rizal Transportasi Batam",
    footer_quick_links: "Quick Links",
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
