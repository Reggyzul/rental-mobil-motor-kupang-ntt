import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Calendar, Search, ChevronDown, MessageCircle, MapPin, CheckCircle2, Shield } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const [vehicleInput, setVehicleInput] = useState('Toyota Avanza (Manual)');
  const [travelDateInput, setTravelDateInput] = useState('');

  const t = TRANSLATIONS[lang];

  const vehicleOptions = [
    { value: 'Toyota Avanza (Manual)', label: 'Toyota Avanza (Manual) - Mobil Keluarga' },
    { value: 'Honda Brio (Manual & Matic)', label: 'Honda Brio (Manual & Matic) - Compact' },
    { value: 'Toyota Fortuner', label: 'Toyota Fortuner - SUV Premium' },
    { value: 'Toyota Innova Reborn', label: 'Toyota Innova Reborn - Mobil Keluarga Luas' },
    { value: 'Rental Motor', label: 'Rental Motor - Praktis Harian' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6281529662483';
    const message = lang === 'EN'
      ? `Hello Rental Mobil & Motor Kupang_NTT, I would like to consult/book: ${vehicleInput}${travelDateInput ? ` (Date: ${travelDateInput})` : ''}. Please inform availability and rate. Thank you!`
      : `Halo Rental Mobil & Motor Kupang_NTT, saya ingin konsultasi / booking rental: ${vehicleInput}${travelDateInput ? ` (Rencana Tanggal: ${travelDateInput})` : ''}. Mohon informasi ketersediaan unit dan harga terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="home" className="relative pt-16 sm:pt-20 pb-6 bg-white overflow-hidden text-center">
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] flex flex-col justify-between bg-slate-950 text-white overflow-hidden border-b border-slate-200">
        
        {/* Kupang Coastal Background Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/hero_kupang.jpg')`
          }}
        />

        {/* Soft Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/90 backdrop-blur-[0.5px]" />

        {/* Top Spacer */}
        <div className="h-12 sm:h-16" />

        {/* Hero Central Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 text-center space-y-4 sm:space-y-5">
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-blue-300 text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest backdrop-blur-md shadow-lg"
          >
            <MapPin className="w-4 h-4 text-red-400" />
            <span>Kupang, Nusa Tenggara Timur</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight drop-shadow-xl"
          >
            <span>Rental Mobil &amp; Motor</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Kupang - NTT
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-slate-200 font-semibold max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            {t.hero_tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-sans text-xs sm:text-sm text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed drop-shadow-sm px-2"
          >
            {t.hero_description}
          </motion.p>

          {/* Quick Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-slate-300"
          >
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Unit Bersih &amp; Terawat</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Booking Mudah via WA</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Manulai 2, Alak, Kupang</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3"
          >
            <a
              href="https://api.whatsapp.com/send?phone=6281529662483&text=Halo%20Rental%20Mobil%20%26%20Motor%20Kupang_NTT,%20saya%20ingin%20konsultasi%20dan%20booking%20rental%20kendaraan"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-black text-xs uppercase px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.hero_cta_wa} (0815-2966-2483)</span>
            </a>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-display font-black text-xs uppercase px-6 py-3.5 rounded-2xl border border-white/30 backdrop-blur-md shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4" />
              <span>{t.hero_cta_vehicles}</span>
            </button>
          </motion.div>

        </div>

        {/* Bottom Spacer inside Banner */}
        <div className="h-16 sm:h-20" />

      </div>

      {/* 2. ELEVATED FAST BOOKING CONSULTATION BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-14 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200/90 text-left">
          
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            
            {/* Field 1: Vehicle Choice */}
            <div className="md:col-span-5 space-y-1">
              <label className="text-[10px] font-sans font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.search_vehicle_label}</span>
              </label>
              <div className="relative">
                <select
                  value={vehicleInput}
                  onChange={(e) => setVehicleInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 pr-8 text-xs font-sans font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  {vehicleOptions.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Planned Travel Date */}
            <div className="md:col-span-4 space-y-1">
              <label className="text-[10px] font-sans font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.search_travel_date}</span>
              </label>
              <input
                type="date"
                value={travelDateInput}
                onChange={(e) => setTravelDateInput(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-3 text-xs font-sans font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Field 3: Consult Button */}
            <div className="md:col-span-3 pt-2 md:pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 hover:from-blue-800 hover:to-red-700 text-white font-sans font-extrabold text-xs uppercase py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.search_btn}</span>
              </button>
            </div>

          </form>

        </div>
      </div>

    </section>
  );
}
