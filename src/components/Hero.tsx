import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageCircle, Car, MapPin, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang }: HeroProps) {
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  return (
    <section id="home" className="relative bg-[#061226] text-slate-900 overflow-hidden text-left">
      
      {/* 1. PANORAMIC HERO PHOTO BANNER */}
      <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] pt-24 sm:pt-28 bg-[#061226] text-white overflow-hidden">
        
        {/* Background Batam Barelang Sunset Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/hero_batam.jpg')`
          }}
        />

        {/* Subtle Dark Gradient Overlay for Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061226]/80 via-[#061226]/40 to-[#061226]/90" />

        {/* Location Pill in Top Banner */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-start">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/40 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Kota Batam dan Sekitarnya</span>
          </div>
        </div>

      </div>

      {/* 2. OVERLAPPING WHITE CONTENT CARD (Elevated & Positioned High Up with Professional Precision) */}
      <div className="bg-slate-50 relative pb-6 sm:pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-52 sm:-mt-64 md:-mt-72 lg:-mt-80">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 md:p-12 shadow-[0_20px_60px_-15px_rgba(8,24,54,0.15)] border border-slate-100 text-center space-y-6"
          >
            
            {/* Breadcrumb Navigation Line */}
            <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-sky-600 font-black">Rizal Transportasi Batam</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-500">
                {isEN ? 'Car & Passenger Transport Services' : 'Rental Mobil & Transportasi'}
              </span>
            </div>

            {/* Main Title (High Contrast & Clear Impact) */}
            <h1 className="font-display font-black text-2xl sm:text-4xl md:text-[42px] text-[#081836] tracking-tight leading-snug sm:leading-tight uppercase">
              {isEN ? (
                <>Batam Car Rental — <span className="text-sky-600">Best Fleets for Your Journey</span></>
              ) : (
                <>Sewa Mobil Batam — <span className="text-sky-600">Armada Terbaik untuk Perjalanan Anda</span></>
              )}
            </h1>

            {/* Concise Minimalist Subtext */}
            <p className="font-sans text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed text-center">
              {isEN
                ? "Enjoy trusted car and passenger transport services in Batam. Offering clean, well-maintained fleets from family cars to 33-seat buses for your sightseeing, business trips, or group travels with comfort and peace of mind."
                : "Nikmati layanan rental mobil dan transportasi terpercaya di Kota Batam dan sekitarnya. Kami menyediakan pilihan armada bersih, nyaman, dan terawat mulai dari mobil keluarga hingga bus kapasitas besar untuk kenyamanan perjalanan wisata maupun dinas bisnis Anda."}
            </p>

            {/* Value Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Unit Bersih &amp; Terawat</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Tarif Kompetitif</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Mobil Keluarga s/d Bus 33 Seat</span>
              </div>
            </div>

            {/* Quick CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://api.whatsapp.com/send?phone=6285264018698&text=Halo%20Rizal%20Transportasi%20Batam,%20saya%20ingin%20konsultasi%20dan%20booking%20rental%20mobil%20transportasi"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-display font-black text-xs uppercase px-8 py-3.5 rounded-xl shadow-md hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat WhatsApp Admin</span>
              </a>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-[#081836] hover:bg-[#0c2340] text-white font-display font-black text-xs uppercase px-7 py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Car className="w-4 h-4 text-sky-300" />
                <span>{t.hero_cta_vehicles}</span>
              </button>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
