import React from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Navigation,
  Compass,
  Plane,
  Briefcase,
  Users,
  Camera
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { useData } from '../context/DataContext';

interface ServicesProps {
  lang: 'ID' | 'EN';
  onViewAllDestinations?: () => void;
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';
  const { routes, tours, getSiteValue } = useData();

  const wa1 = getSiteValue('contact_wa1') || '085270607796';
  const waClean = wa1.replace(/\D/g, '');
  const waUrlNumber = waClean.startsWith('0') ? `62${waClean.slice(1)}` : waClean;

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
      badge: 'Medan, Riau, Jambi, Garut (PP)'
    },
    {
      icon: Compass,
      title: t.service_3_title,
      desc: t.service_3_desc,
      badge: 'Berastagi, Parapat, Samosir (PP)'
    },
    {
      icon: Plane,
      title: t.service_4_title,
      desc: t.service_4_desc,
      badge: 'Bandara KNO & Stasiun (PP)'
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
    const message = isEN
      ? `Hello CV SRM MANDIRI, I would like to inquire about the service: ${serviceTitle}. Please inform price quotation, schedule, and unit availability. Thank you!`
      : `Halo CV SRM MANDIRI, saya ingin konsultasi mengenai layanan: ${serviceTitle}. Mohon informasi jadwal, penawaran harga & ketersediaan armada. Alamat penjemputan: Simalingkar B / Medan. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waUrlNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const handleConsultRoute = (routeTitle: string) => {
    const message = isEN
      ? `Hello CV SRM MANDIRI, I would like to book a round-trip (PP) travel/charter for the route: ${routeTitle}. Please provide rates and schedule details. Thank you!`
      : `Halo CV SRM MANDIRI, saya ingin pesan travel / carter mobil Pulang-Pergi (PP) untuk rute: ${routeTitle}. Mohon info harga sewa dan ketersediaan armada. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waUrlNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const handleConsultTour = (tourTitle: string) => {
    const message = isEN
      ? `Hello CV SRM MANDIRI, I am interested in the round-trip tour (PP): ${tourTitle}. Please share the itinerary and price details. Thank you!`
      : `Halo CV SRM MANDIRI, saya berminat dengan wisata Pulang-Pergi (PP): ${tourTitle}. Mohon informasi jadwal tour, rincian biaya dan fasilitas armada. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waUrlNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
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

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#081836] tracking-tight uppercase">
              {t.services_title}
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {t.services_desc}
            </p>
          </div>

          {/* Core Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-xs border border-sky-100">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-black text-lg text-[#081836] group-hover:text-sky-600 transition-colors uppercase">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 font-medium leading-relaxed mt-1.5">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <button
                      onClick={() => handleConsultService(service.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-sky-600 text-sky-700 hover:text-white font-sans font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-sky-600 shadow-2xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Konsultasi Layanan</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. RUTE LAYANAN ANTAR KOTA (PP) SECTION */}
        <div id="routes" className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs">
              <Navigation className="w-4 h-4 text-sky-600" />
              <span>{t.routes_tag} (PP)</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#081836] tracking-tight uppercase">
              {t.routes_title} (PP)
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {t.routes_desc}
            </p>
          </div>

          {/* Routes Cards Grid (All PP) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((route, idx) => (
              <motion.div
                key={route.id || idx}
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

                  <h4 className="font-display font-black text-lg text-[#081836] mt-2 group-hover:text-sky-600 transition-colors uppercase">
                    {route.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {route.note}
                  </p>
                </div>

                <button
                  onClick={() => handleConsultRoute(route.title)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-white hover:bg-sky-600 text-sky-700 hover:text-white font-sans font-bold text-[11px] uppercase transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-sky-600 shadow-2xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Pesan Rute (PP)</span>
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-slate-500 font-medium">
              *Melayani seluruh rute Pulang-Pergi (PP) dan antar kota se-Sumatera. Hubungi WhatsApp Admin untuk reservasi dan penawaran terbaik.
            </p>
          </div>
        </div>

        {/* 3. TEMPAT WISATA UNGGULAN (PP) */}
        <div id="tours" className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs">
              <Camera className="w-4 h-4 text-sky-600" />
              <span>{t.tours_tag} (PP)</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#081836] tracking-tight uppercase">
              {t.tours_title} (PP)
            </h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
            <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {t.tours_desc}
            </p>
          </div>

          {/* Tour Packages Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {tours.map((pkg) => (
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
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/400x250/e2e8f0/94a3b8?text=Destinasi+Wisata';
                      }}
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
                        {pkg.title} (PP)
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
                    <span>Konsultasi Wisata {pkg.title} (PP)</span>
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

      </div>
    </section>
  );
}
