import React, { useState } from 'react';
import { Car } from '../types';
import { Users, CheckCircle2, MessageCircle, Sparkles, Settings2, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';
import { useData } from '../context/DataContext';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
  onViewAllCars?: () => void;
}

export default function CarList({ onSelectCar, lang }: CarListProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const t = TRANSLATIONS[lang];
  const { cars, getSiteValue } = useData();

  const wa1 = getSiteValue('contact_wa1') || '085270607796';
  const waClean = wa1.replace(/\D/g, '');
  const waUrlNumber = waClean.startsWith('0') ? `62${waClean.slice(1)}` : waClean;

  const categories = [
    { id: 'all', label: lang === 'EN' ? `All Fleets (${cars.length})` : `Semua Armada (${cars.length})` },
    { id: 'innova', label: 'Toyota Innova' },
    { id: 'avanza', label: 'Toyota Avanza' },
    { id: 'sigra_calya', label: 'Sigra & Calya' }
  ];

  const filteredCars = cars.filter(car => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'innova') return car.id.includes('innova');
    if (filterCategory === 'avanza') return car.id.includes('avanza');
    if (filterCategory === 'sigra_calya') return car.id.includes('sigra') || car.id.includes('calya');
    return true;
  });

  const handleWhatsAppBooking = (car: Car) => {
    const message = lang === 'EN'
      ? `Hello CV SRM MANDIRI, I would like to rent/charter the vehicle: ${car.name} (${car.priceDisplay}). Please provide schedule, rate quotation, and availability. Thank you!`
      : `Halo CV SRM MANDIRI, saya berminat rental/carter armada: ${car.name} (${car.priceDisplay}). Mohon informasi jadwal, penawaran harga & ketersediaan unit. Alamat penjemputan: Simalingkar B / Medan. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waUrlNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCars.map((carItem) => {
            const car: Car = {
              id: carItem.id,
              name: carItem.name,
              category: carItem.category,
              pricePerDay: carItem.price_per_day,
              priceDisplay: carItem.price_display,
              image: carItem.image,
              seats: carItem.seats,
              transmission: carItem.transmission,
              fuel: carItem.fuel,
              includeList: carItem.include_list,
              description: carItem.description,
              rating: Number(carItem.rating),
              reviewsCount: carItem.reviews_count,
              specifications: carItem.specifications
            };

            return (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-64 bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={car.image}
                      alt={car.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/400x250/e2e8f0/94a3b8?text=Armada+SRM';
                      }}
                    />
                    
                    <div className="absolute top-4 left-4 bg-[#081836]/90 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                      {car.category}
                    </div>

                    <div className="absolute bottom-3 right-4 bg-sky-600 text-white px-3.5 py-1.5 rounded-2xl text-xs font-black shadow-md">
                      <span>Mulai </span>
                      <span className="text-sm font-extrabold">{car.priceDisplay}</span>
                      <span className="text-[10px] font-medium opacity-90"> / Hari</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="font-display font-black text-2xl text-[#081836] uppercase group-hover:text-sky-600 transition-colors">
                        {car.name}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 font-medium leading-relaxed mt-1.5">
                        {car.description}
                      </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl text-xs font-bold text-slate-700">
                        <Users className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{car.seats} Penumpang</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl text-xs font-bold text-slate-700">
                        <Settings2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                    </div>

                    {/* Includes List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                        Keunggulan Unit:
                      </span>
                      <ul className="space-y-1.5">
                        {car.includeList.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 sm:p-7 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onSelectCar(car)}
                    className="w-full bg-[#081836] hover:bg-[#0c2340] text-white font-display font-bold text-xs uppercase py-3 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Detail &amp; Booking</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppBooking(car)}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase py-3 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
