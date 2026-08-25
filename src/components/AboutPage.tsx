import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Target, Eye, Compass, MapPin, Phone, Share2, Users } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function AboutPage({ lang, onNavigateHome }: AboutPageProps) {
  const t = TRANSLATIONS[lang];

  const servicesList = [
    t.service_1_title,
    t.service_2_title,
    t.service_3_title,
    t.service_4_title,
    t.service_5_title,
    t.service_6_title
  ];

  const missionList = [
    t.mission_1,
    t.mission_2,
    t.mission_3,
    t.mission_4,
    t.mission_5,
    t.mission_6
  ];

  const targetList = lang === 'EN' ? [
    'Tourists visiting Batam',
    'Families on holiday / private trips',
    'Individual clients & travelers',
    'Corporations, companies & institutions',
    'Tour groups & travel gatherings',
    'Community activities & social groups',
    'Family events & wedding transport',
    'Business travelers & VIP guests',
    'Group & group transfer needs'
  ] : [
    'Wisatawan yang berkunjung ke Batam',
    'Keluarga',
    'Pelanggan individu',
    'Perusahaan dan instansi',
    'Rombongan wisata',
    'Kegiatan komunitas',
    'Acara keluarga',
    'Perjalanan bisnis',
    'Kebutuhan transportasi grup'
  ];

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="relative w-full h-[240px] sm:h-[300px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
          style={{
            backgroundImage: `url('/hero_batam.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <span>Rizal Transportasi Batam</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            {t.nav_about}
          </h1>
          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-blue-400 cursor-pointer">{t.nav_home}</span> / {t.nav_about}
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* SECTION 1: ABOUT OVERVIEW */}
        <section className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-display font-black text-xs uppercase tracking-widest border border-blue-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>PROFIL BISNIS</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37] uppercase tracking-tight">
              {t.brand_name}
            </h2>
            <p className="font-sans text-sm font-bold text-blue-600">
              {t.brand_tagline}
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-sans text-sm font-medium text-slate-700 leading-relaxed bg-slate-50 p-6 rounded-3xl border border-slate-200">
              {t.hero_description}
            </p>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {lang === 'EN'
                ? "With a diverse fleet selection, Rizal Transportasi Batam is your complete transport partner for personal travel, family outings, business trips, corporate groups, and city sightseeing throughout Batam."
                : "Dengan pilihan armada yang beragam, Rizal Transportasi Batam dapat menjadi solusi untuk perjalanan pribadi, keluarga, perjalanan bisnis, rombongan, maupun kebutuhan transportasi lainnya di Batam."}
            </p>
          </div>
        </section>

        {/* SECTION 2: VISI & MISI */}
        <section className="space-y-8 border-t border-slate-100 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* VISI */}
            <div className="bg-gradient-to-br from-[#0f2b5c] to-slate-900 text-white rounded-3xl p-7 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                {t.vision_title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                "{t.vision_text}"
              </p>
            </div>

            {/* MISI */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-xl text-[#0d1b37] uppercase tracking-tight">
                {t.mission_title}
              </h3>
              <ul className="space-y-2.5">
                {missionList.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 3: KEUNGGULAN KAMI */}
        <section className="space-y-6 border-t border-slate-100 pt-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-display font-black text-xs uppercase tracking-widest border border-emerald-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.why_tag}</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0d1b37] uppercase">
              {t.why_title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="font-display font-bold text-base text-blue-600 block">✓ {t.why_1_title}</span>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{t.why_1_desc}</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="font-display font-bold text-base text-blue-600 block">✓ {t.why_2_title}</span>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{t.why_2_desc}</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="font-display font-bold text-base text-blue-600 block">✓ {t.why_3_title}</span>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{t.why_3_desc}</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="font-display font-bold text-base text-blue-600 block">✓ {t.why_4_title}</span>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{t.why_4_desc}</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2 md:col-span-2 lg:col-span-2">
              <span className="font-display font-bold text-base text-blue-600 block">✓ {t.why_5_title}</span>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{t.why_5_desc}</p>
            </div>
          </div>
        </section>

        {/* SECTION 4: TARGET PELANGGAN */}
        <section className="space-y-6 border-t border-slate-100 pt-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-display font-black text-xs uppercase tracking-widest border border-amber-200 shadow-sm">
              <Users className="w-4 h-4 text-amber-600" />
              <span>{t.target_tag}</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0d1b37] uppercase">
              {t.target_title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
              {t.target_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {targetList.map((target, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-sans font-bold text-xs text-slate-800">{target}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: LAYANAN KAMI */}
        <section className="space-y-6 border-t border-slate-100 pt-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-display font-black text-xs uppercase tracking-widest border border-blue-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{t.services_tag}</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0d1b37] uppercase">
              {t.services_title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicesList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-sans font-bold text-xs text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: AREA LAYANAN & KONTAK */}
        <section className="space-y-6 border-t border-slate-100 pt-10">
          <div className="bg-gradient-to-br from-slate-900 via-[#0f2b5c] to-slate-950 text-white rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl text-white uppercase">
                {t.area_title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {t.area_desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs border-t border-white/10 pt-4">
              <div className="space-y-1">
                <span className="text-slate-400 font-bold block uppercase">Alamat Kantor:</span>
                <span className="text-white font-medium">{t.footer_address_text}</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 font-bold block uppercase">WhatsApp:</span>
                <a href="https://api.whatsapp.com/send?phone=6285264018698" target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">
                  +62 852-6401-8698
                </a>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 font-bold block uppercase">Sosial Media:</span>
                <span className="text-sky-300 font-bold">{t.footer_socmed_text}</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
