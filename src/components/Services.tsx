import React from 'react';
import { motion } from 'motion/react';
import { Car, Users, Compass, Plane, MapPin, CheckCircle2, Sparkles, MessageCircle, ShieldCheck, Briefcase } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

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
      badge: 'Mobil Keluarga & Pribadi'
    },
    {
      icon: Users,
      title: t.service_2_title,
      desc: t.service_2_desc,
      badge: 'Hiace & Bus 33 Seat'
    },
    {
      icon: MapPin,
      title: t.service_3_title,
      desc: t.service_3_desc,
      badge: 'Seluruh Kawasan Batam'
    },
    {
      icon: Plane,
      title: t.service_4_title,
      desc: t.service_4_desc,
      badge: 'Hang Nadim & Pelabuhan'
    },
    {
      icon: Compass,
      title: t.service_5_title,
      desc: t.service_5_desc,
      badge: 'Barelang & City Tour'
    },
    {
      icon: Briefcase,
      title: t.service_6_title,
      desc: t.service_6_desc,
      badge: 'Korporat & Tamu VIP'
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
      icon: Compass
    },
    {
      title: t.why_3_title,
      desc: t.why_3_desc,
      icon: ShieldCheck
    },
    {
      title: t.why_4_title,
      desc: t.why_4_desc,
      icon: MapPin
    },
    {
      title: t.why_5_title,
      desc: t.why_5_desc,
      icon: MessageCircle
    }
  ];

  const handleConsultService = (serviceTitle: string) => {
    const waNumber = '6285264018698';
    const message = isEN
      ? `Hello Rizal Transportasi Batam, I would like to ask about the service: ${serviceTitle}. Please inform details and rates. Thank you!`
      : `Halo Rizal Transportasi Batam, saya ingin konsultasi mengenai layanan: ${serviceTitle}. Mohon informasi rincian dan penawaran harga. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-slate-100/60 text-[#081836] relative overflow-hidden text-left border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 1. SERVICES SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
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

        {/* 2. CORE SERVICES GRID */}
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

        {/* 3. KENAPA PILIH KAMI (WHY CHOOSE US) */}
        <div id="why-us" className="pt-8 space-y-12">
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

        {/* 4. AREA LAYANAN (SERVICE AREA) */}
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
                📍 Botania &amp; Batam Center
              </div>
              <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-center font-sans text-xs font-bold text-slate-100">
                📍 Nagoya &amp; Sekupang
              </div>
              <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-center font-sans text-xs font-bold text-slate-100">
                📍 Bandara Hang Nadim
              </div>
              <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl text-center font-sans text-xs font-bold text-slate-100">
                📍 Seluruh Pelabuhan Ferry
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-1">
              *{t.area_note}
            </p>

            <div className="pt-3">
              <a
                href="https://api.whatsapp.com/send?phone=6285264018698&text=Halo%20Rizal%20Transportasi%20Batam,%20saya%20ingin%20tanya%20mengenai%20rute%20dan%20area%20layanan%20rental"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.area_btn_consult}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
