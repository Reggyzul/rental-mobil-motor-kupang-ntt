import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Calendar, ChevronDown, MessageCircle, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const [vehicleInput, setVehicleInput] = useState('New Avanza');
  const [travelDateInput, setTravelDateInput] = useState('');

  const t = TRANSLATIONS[lang];

  const vehicleOptions = [
    { value: 'New Avanza (Mulai Rp600rb)', label: 'New Avanza - Mobil Keluarga (Rp600.000/hari)' },
    { value: 'Toyota Innova Reborn (Mulai Rp800rb)', label: 'Toyota Innova Reborn - MPV Premium (Rp800.000/hari)' },
    { value: 'Toyota Zenix (Mulai Rp1jt)', label: 'Toyota Zenix - Luxury MPV (Rp1.000.000/hari)' },
    { value: 'Toyota Hiace (Mulai Rp1.2jt)', label: 'Toyota Hiace - Minibus 15 Seat (Rp1.200.000/hari)' },
    { value: 'Medium Bus 33 Seat (Mulai Rp1.5jt)', label: 'Medium Bus 33 Seat - Bus Rombongan (Rp1.500.000/hari)' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6285264018698';
    const message = lang === 'EN'
      ? `Hello Rizal Transportasi Batam, I would like to consult/book: ${vehicleInput}${travelDateInput ? ` (Planned Date: ${travelDateInput})` : ''}. Please inform availability and best price quote. Thank you!`
      : `Halo Rizal Transportasi Batam, saya ingin konsultasi / booking rental: ${vehicleInput}${travelDateInput ? ` (Rencana Tanggal: ${travelDateInput})` : ''}. Mohon informasi ketersediaan unit dan penawaran harga terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="home" className="relative pt-16 sm:pt-20 pb-6 bg-white overflow-hidden text-center">
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full min-h-[540px] sm:min-h-[620px] flex flex-col justify-between bg-slate-950 text-white overflow-hidden border-b border-slate-200">
        
        {/* Batam Barelang Sunset Background Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/hero_batam.jpg')`
          }}
        />

        {/* Soft Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/90 backdrop-blur-[0.5px]" />

        {/* Top Spacer */}
        <div className="h-10 sm:h-14" />

        {/* Hero Central Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 text-center space-y-4 sm:space-y-5">
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-blue-300 text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest backdrop-blur-md shadow-lg"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Kota Batam dan Sekitarnya</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight drop-shadow-xl"
          >
            <span>Rizal Transportasi</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Batam
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-amber-300 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            {t.hero_tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-sans text-xs sm:text-sm text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed drop-shadow-sm px-2"
          >
            {t.hero_description}
          </motion.p>

          {/* Quick Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs font-semibold text-slate-200"
          >
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Unit Terawat &amp; Bersih</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Harga Kompetitif</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Mobil Keluarga s/d Bus 33 Seat</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Botania, Batam</span>
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
              href="https://api.whatsapp.com/send?phone=6285264018698&text=Halo%20Rizal%20Transportasi%20Batam,%20saya%20ingin%20konsultasi%20dan%20booking%20rental%20mobil%20transportasi"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-black text-xs uppercase px-8 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{lang === 'EN' ? 'Chat WhatsApp Admin' : 'Chat WhatsApp Admin'}</span>
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
                className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-amber-600 hover:from-blue-800 hover:to-amber-700 text-white font-sans font-extrabold text-xs uppercase py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
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
