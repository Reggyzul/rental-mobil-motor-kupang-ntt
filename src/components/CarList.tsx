import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Sparkles, Settings2, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onViewAllCars?: () => void;
}

export default function CarList({ onSelectCar, lang }: CarListProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang];

  const categories = [
    { id: 'all', label: lang === 'EN' ? 'All Fleets (4)' : 'Semua Armada (4)' },
    { id: 'innova', label: 'Toyota Innova' },
    { id: 'avanza', label: 'Toyota Avanza' },
    { id: 'sigra_calya', label: 'Sigra & Calya' }
  ];

  const filteredCars = CARS.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'innova') return car.id === 'toyota-innova';
    if (filterCategory === 'avanza') return car.id === 'toyota-avanza';
    if (filterCategory === 'sigra_calya') return car.id === 'daihatsu-sigra' || car.id === 'toyota-calya';
    return true;
  });

  const handleWhatsAppBooking = (car: Car) => {
    const waNumber = '6285270607796';
    const message = lang === 'EN'
      ? `Hello CV SRM MANDIRI, I would like to rent/charter the vehicle: ${car.name} (${car.priceDisplay}). Please provide schedule, rate quotation, and availability. Thank you!`
      : `Halo CV SRM MANDIRI, saya berminat rental/carter armada: ${car.name} (${car.priceDisplay}). Mohon informasi jadwal, penawaran harga & ketersediaan unit. Alamat penjemputan: Simalingkar B / Medan. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="cars" className="pt-6 sm:pt-10 pb-20 bg-slate-50 text-[#081836] overflow-hidden relative border-b border-slate-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3" id="cars-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs mb-1">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>{t.vehicles_tag}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#081836] tracking-tight leading-tight uppercase">
            {t.vehicles_title}
          </h2>

          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-2xl mx-auto">
            {t.vehicles_desc}
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#081836] text-white shadow-md shadow-sky-950/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => {
            return (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => onSelectCar(car)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative h-52 bg-gradient-to-b from-slate-50/80 to-white overflow-hidden flex items-center justify-center border-b border-slate-100 p-3">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                    />
                    <div className="absolute top-3 left-3 bg-[#081836]/90 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider">
                      {car.category}
                    </div>

                    {/* Price Tag Pill */}
                    <div className="absolute top-3 right-3 bg-sky-600 text-white px-2.5 py-0.5 rounded-full text-[11px] font-display font-bold tracking-wide shadow-xs">
                      Mulai {car.priceDisplay}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3.5 text-left">
                    <div>
                      <h3 className="font-display font-black text-lg text-[#081836] tracking-tight group-hover:text-sky-600 transition-colors uppercase">
                        {car.name}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 font-medium mt-1 leading-relaxed line-clamp-2">
                        {car.description}
                      </p>
                    </div>

                    {/* Quick Specs Badges */}
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 bg-sky-50/80 px-2.5 py-1 rounded-lg text-sky-900 border border-sky-100/80 text-[11px]">
                        <Users className="w-3.5 h-3.5 text-sky-600" />
                        <span>{car.seats} {lang === 'EN' ? 'Seats' : 'Kursi'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg text-[11px]">
                        <Settings2 className="w-3.5 h-3.5 text-slate-600" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    {/* Key features list */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                        {lang === 'EN' ? 'Highlights:' : 'Keunggulan Armada:'}
                      </span>
                      <ul className="space-y-1">
                        {car.includeList.slice(0, 3).map((inc, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                            <span className="line-clamp-1">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCar(car);
                    }}
                    className="w-full bg-[#081836] hover:bg-[#0c2340] text-white font-display font-black text-xs uppercase py-2.5 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                    <span>{t.vehicles_btn_book}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppBooking(car);
                    }}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-display font-black text-xs uppercase py-2 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{t.vehicles_btn_wa}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note Box */}
        <div className="mt-10 bg-sky-50 border border-sky-100 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-left">
          <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <p className="font-sans text-xs sm:text-sm text-sky-950 leading-relaxed font-medium">
            {t.vehicles_price_note}
          </p>
        </div>

      </div>
    </section>
  );
}
