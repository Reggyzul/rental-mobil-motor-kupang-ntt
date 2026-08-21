import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Sparkles, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface TransportRentPageProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function TransportRentPage({ onSelectCar, lang, onNavigateHome }: TransportRentPageProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  const categories = [
    { id: 'all', label: isEN ? 'All Fleets (5)' : 'Semua Kendaraan (5)' },
    { id: 'family', label: isEN ? 'Family & Compact Cars' : 'Mobil Keluarga & Compact' },
    { id: 'suv', label: isEN ? 'SUV Premium' : 'SUV' },
    { id: 'motor', label: isEN ? 'Motorbike Rental' : 'Rental Motor' }
  ];

  const filteredCars = CARS.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'family') return car.id === 'avanza' || car.id === 'brio' || car.id === 'innova-reborn';
    if (filterCategory === 'suv') return car.id === 'fortuner';
    if (filterCategory === 'motor') return car.id === 'rental-motor';
    return true;
  });

  const handleWhatsAppBooking = (car: Car) => {
    const waNumber = '6281529662483';
    const message = isEN
      ? `Hello Rental Mobil & Motor Kupang_NTT, I am interested in renting: ${car.name}. Please inform price quote, schedule & unit availability. Thank you!`
      : `Halo Rental Mobil & Motor Kupang_NTT, saya berminat rental kendaraan: ${car.name}. Mohon informasi penawaran harga, jadwal & ketersediaan unit. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* TOP HEADER BANNER (AVIF FORMAT) */}
      <div className="relative w-full h-[230px] sm:h-[290px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
          style={{
            backgroundImage: `url('/hero_kupang.avif')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <span>Rental Mobil &amp; Motor Kupang_NTT</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            {t.vehicles_title}
          </h1>

          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-blue-400 cursor-pointer">{t.nav_home}</span> / {t.nav_vehicles}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Page Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            {t.vehicles_title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.vehicles_desc}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-[1.02]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => {
            return (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => onSelectCar(car)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-60 bg-white overflow-hidden flex items-center justify-center border-b border-slate-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                      {car.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 text-left">
                    <div>
                      <h3 className="font-display font-black text-xl text-[#0d1b37] tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                        {car.name}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                        {car.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>{car.seats} {isEN ? 'Seats' : 'Kursi'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                        <Settings2 className="w-4 h-4 text-blue-600" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                        {isEN ? 'Key Amenities:' : 'Keunggulan Armada:'}
                      </span>
                      <ul className="space-y-1">
                        {car.includeList.map((inc, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCar(car);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-display font-black text-xs uppercase py-3 rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{t.vehicles_btn_book}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppBooking(car);
                    }}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-display font-black text-xs uppercase py-2.5 rounded-2xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.vehicles_btn_wa}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
