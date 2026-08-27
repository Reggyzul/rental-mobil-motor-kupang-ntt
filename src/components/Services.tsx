import React from 'react';
import { motion } from 'motion/react';
import { Car, Users, Compass, Plane, MapPin, CheckCircle2, Sparkles, MessageCircle, ShieldCheck, Briefcase, Navigation, Camera } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { TOUR_PACKAGES } from '../data/packages';

interface ServicesProps {
  lang: 'ID' | 'EN';
  onViewAllDestinations?: () => void;
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const servicesList = [
    {
      icon: Car,
      title: t.service_1_title,
      desc: t.service_1_desc,
      badge: 'Innova, Avanza, Sigra, Calya'
    },
    {
      icon: Navigation,
      title: t.service_2_title,
      desc: t.service_2_desc,
      badge: 'Medan, Riau, Jambi, Garut'
    },
    {
      icon: Compass,
      title: t.service_3_title,
      desc: t.service_3_desc,
      badge: 'Berastagi, Parapat, Samosir'
    },
    {
      icon: Plane,
      title: t.service_4_title,
      desc: t.service_4_desc,
      badge: 'Bandara KNO & Stasiun'
    },
    {
      icon: Briefcase,
      title: t.service_5_title,
      desc: t.service_5_desc,
      badge: 'Dinas & Operasional'
    },
    {
      icon: Users,
      title: t.service_6_title,
      desc: t.service_6_desc,
      badge: 'Rombongan & Keluarga'
    }
  ];

  // Specific routes requested by user
  const routesList = [
    { city: 'Medan', region: 'Sumatera Utara', note: 'Pusat Operasional / Titik Keberangkatan' },
    { city: 'Dumai', region: 'Riau', note: 'Pelabuhan & Kawasan Industri' },
    { city: 'Duri', region: 'Riau', note: 'Kawasan Migas & Perdagangan' },
    { city: 'Kandis', region: 'Riau', note: 'Jalur Lintas Strategis' },
    { city: 'Garut', region: 'Jawa Barat', note: 'Layanan Antar Pulau / Khusus' },
    { city: 'Pekanbaru', region: 'Riau', note: 'Ibukota Provinsi Riau' },
    { city: 'Kerinci', region: 'Jambi', note: 'Wisata Alam & Pegunungan Kerinci' },
    { city: 'Jambi', region: 'Jambi', note: 'Pusat Kota & Kawasan Bisnis Jambi' }
  ];

  const whyChooseUs = [
    {
      title: t.why_1_title,
      desc: t.why_1_desc,
      icon: Car
    },
    {
      title: t.why_2_title,
      desc: t.why_2_desc,
      icon: Navigation
    },
    {
      title: t.why_3_title,
      desc: t.why_3_desc,
      icon: Compass
    },
    {
      title: t.why_4_title,
      desc: t.why_4_desc,
      icon: ShieldCheck
    },
    {
      title: t.why_5_title,
      desc: t.why_5_desc,
      icon: MessageCircle
    }
  ];

  const handleConsultService = (serviceTitle: string) => {
    const waNumber = '6285270607796';
    const message = isEN
      ? `Hello CV SRM MANDIRI, I would like to inquire about the service: ${serviceTitle}. Please inform price quotation, schedule, and unit availability. Thank you!`
      : `Halo CV SRM MANDIRI, saya ingin konsultasi mengenai layanan: ${serviceTitle}. Mohon informasi jadwal, penawaran harga & ketersediaan armada. Alamat penjemputan: Simalingkar B / Medan. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const handleConsultRoute = (cityName: string) => {
    const waNumber = '6285270607796';
    const message = isEN
      ? `Hello CV SRM MANDIRI, I would like to book a trip/charter for the route: Medan - ${cityName}. Please provide rates and schedule details. Thank you!`
      : `Halo CV SRM MANDIRI, saya ingin pesan travel / carter mobil untuk rute: Medan - ${cityName}. Mohon info harga sewa dan ketersediaan armada. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const handleConsultTour = (tourTitle: string) => {
    const waNumber = '6285270607796';
    const message = isEN
      ? `Hello CV SRM MANDIRI, I am interested in the tour package: ${tourTitle}. Please share the itinerary and price details. Thank you!`
      : `Halo CV SRM MANDIRI, saya berminat dengan paket wisata: ${tourTitle}. Mohon informasi jadwal tour, rincian biaya dan fasilitas armada. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-slate-100/60 text-[#081836] relative overflow-hidden text-left border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* 1. SERVICES SECTION HEADER */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs mb-1">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>{t.services_tag}</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#081836] tracking-tight leading-tight uppercase">
              {t.services_title}
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {t.services_desc}
            </p>
          </div>

          {/* CORE SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-sans font-extrabold uppercase px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-lg text-[#081836] uppercase group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => handleConsultService(service.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#081836] text-slate-700 hover:text-white font-sans font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-200 hover:border-[#081836]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-sky-500" />
                      <span>Konsultasi Layanan Ini</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. RUTE LAYANAN ANTAR KOTA SECTION (Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi) */}
        <div id="routes" className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs">
              <Navigation className="w-4 h-4 text-sky-600" />
              <span>{t.routes_tag}</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#081836] tracking-tight uppercase">
              {t.routes_title}
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {t.routes_desc}
            </p>
          </div>

          {/* Routes Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routesList.map((route, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-slate-50 hover:bg-sky-50/60 p-5 rounded-2xl border border-slate-200/90 hover:border-sky-300 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-[#081836] text-white uppercase">
                      Rute {idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-sky-700">
                      {route.region}
                    </span>
                  </div>

                  <h4 className="font-display font-black text-xl text-[#081836] mt-2 group-hover:text-sky-600 transition-colors uppercase">
                    {route.city}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {route.note}
                  </p>
                </div>

                <button
                  onClick={() => handleConsultRoute(route.city)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-white hover:bg-sky-600 text-sky-700 hover:text-white font-sans font-bold text-[11px] uppercase transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-sky-600 shadow-2xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Pesan Rute {route.city}</span>
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-slate-500 font-medium">
              *Tersedia juga rute antar kota dan provinsi lainnya sesuai kebutuhan Anda. Hubungi WhatsApp admin untuk rute khusus.
            </p>
          </div>
        </div>

        {/* 3. TEMPAT WISATA UNGGULAN (Berastagi, Parapat, Pulau Samosir) */}
        <div id="tours" className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs">
              <Camera className="w-4 h-4 text-sky-600" />
              <span>{t.tours_tag}</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#081836] tracking-tight uppercase">
              {t.tours_title}
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {t.tours_desc}
            </p>
          </div>

          {/* Tour Packages Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {TOUR_PACKAGES.slice(0, 3).map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 bg-slate-200 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#081836]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                      {pkg.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display font-black text-lg text-[#081836] group-hover:text-sky-600 transition-colors uppercase">
                        {pkg.title}
                      </h3>
                      <p className="font-sans text-xs text-sky-600 font-bold mt-0.5">
                        📍 {pkg.location}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                        Destinasi &amp; Aktivitas:
                      </span>
                      <ul className="space-y-1.5">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleConsultTour(pkg.title)}
                    className="w-full bg-[#081836] hover:bg-sky-600 text-white font-display font-extrabold text-xs uppercase py-3.5 rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Konsultasi Tour via WA</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. KENAPA PILIH KAMI (WHY CHOOSE US) */}
        <div id="why-us" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>{t.why_tag}</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#081836] tracking-tight uppercase">
              {t.why_title}
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {t.why_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-black text-base text-[#081836] uppercase">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 5. AREA LAYANAN & LOKASI KANTOR */}
        <div id="area" className="bg-gradient-to-br from-[#061226] via-[#081836] to-[#0c2340] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-sky-900/30 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-[11px] font-black uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.area_tag}</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
                {t.area_title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {t.area_desc}
              </p>
            </div>

            {/* Coverage highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-center font-sans text-xs font-bold text-slate-100">
                📍 Simalingkar B &amp; Medan
              </div>
              <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-center font-sans text-xs font-bold text-slate-100">
                📍 Dumai, Duri, Kandis
              </div>
              <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-center font-sans text-xs font-bold text-slate-100">
                📍 Pekanbaru, Kerinci, Jambi
              </div>
              <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-center font-sans text-xs font-bold text-slate-100">
                📍 Berastagi &amp; Samosir
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-1">
              *{t.area_note}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=6285270607796&text=Halo%20CV%20SRM%20MANDIRI,%20saya%20ingin%20tanya%20mengenai%20rute%20dan%20area%20layanan%20transportasi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: 0852-7060-7796</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=6281262320086&text=Halo%20CV%20SRM%20MANDIRI,%20saya%20ingin%20tanya%20mengenai%20rute%20dan%20area%20layanan%20transportasi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: 0812-6232-0086</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
