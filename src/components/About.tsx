import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 bg-slate-50 text-[#081836] overflow-hidden relative border-b border-slate-100 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="about-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs mb-1">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>{t.nav_about}</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#081836] tracking-tight leading-tight uppercase">
            CV SRM MANDIRI
          </h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            "{t.brand_tagline}"
          </p>
        </div>

        {/* 2-COLUMN CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: PROFIL & LOKASI */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#061226] via-[#081836] to-[#0c2340] text-white rounded-3xl p-8 shadow-lg border border-sky-900/30 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-xs">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-300 block">
                    PROFIL RESMI
                  </span>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    CV SRM MANDIRI
                  </h3>
                </div>
              </div>

              {/* Statement */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {t.hero_description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    <span className="font-bold text-white block">Alamat Kantor:</span>
                    Simalingkar B, Medan, Sumatera Utara
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    <span className="font-bold text-white block">WhatsApp Resmi:</span>
                    <span className="text-emerald-400 font-bold block">0852-7060-7796 / 0812-6232-0086</span>
                    <span className="text-rose-300 font-semibold block mt-0.5">TikTok: @hendry.manullang</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-sky-900/50 text-center">
              <span className="font-display font-extrabold text-xs text-sky-300 tracking-wider uppercase block">
                {t.brand_tagline}
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: KEUNGGULAN UTAMA */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    {t.why_tag}
                  </span>
                  <h3 className="font-display font-black text-2xl text-[#081836] uppercase tracking-tight">
                    {t.why_title}
                  </h3>
                </div>
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-sky-700 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>{t.why_1_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_1_desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-sky-700 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>{t.why_2_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_2_desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-sky-700 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>{t.why_3_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_3_desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-sky-700 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>{t.why_4_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_4_desc}
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between">
              <span className="font-sans text-xs text-sky-900 font-extrabold uppercase">
                📍 Simalingkar B, Medan • WhatsApp: 0852-7060-7796 / 0812-6232-0086
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
