import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles, MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 bg-slate-50 text-[#0d1b37] overflow-hidden relative border-b border-slate-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="about-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-display font-black text-xs uppercase tracking-widest border border-blue-200 shadow-sm mb-1">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>{t.nav_about}</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight uppercase">
            Rizal Transportasi Batam
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
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
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#0f2b5c] to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-blue-900/60 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 block">
                    PROFIL RESMI
                  </span>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    Rizal Transportasi Batam
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
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    <span className="font-bold text-white block">Alamat Kantor:</span>
                    Perumahan Buana Vista Indah 2, Blok A No. 67, Botania, Batam
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    <span className="font-bold text-white block">WhatsApp Resmi:</span>
                    +62 852-6401-8698 (Respon Cepat)
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-blue-900/50 text-center">
              <span className="font-display font-extrabold text-xs text-amber-300 tracking-wider uppercase block">
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
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 shadow-lg flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    {t.why_tag}
                  </span>
                  <h3 className="font-display font-black text-2xl text-[#0d1b37] uppercase tracking-tight">
                    {t.why_title}
                  </h3>
                </div>
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-blue-600 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>{t.why_1_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_1_desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-blue-600 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>{t.why_2_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_2_desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-blue-600 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>{t.why_3_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_3_desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-display font-black text-xs text-blue-600 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>{t.why_4_title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {t.why_4_desc}
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between">
              <span className="font-sans text-xs text-blue-800 font-extrabold uppercase">
                📍 Botania, Batam • WhatsApp: +62 852-6401-8698
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
