import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface BookingModalProps {
  car: Car | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
  onCarChange?: (car: Car) => void;
}

export default function BookingModal({ car, onClose, lang, onCarChange }: BookingModalProps) {
  const [selectedCarId, setSelectedCarId] = useState<string>(car?.id || 'toyota-innova');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rentalDate, setRentalDate] = useState('');
  const [duration, setDuration] = useState(lang === 'EN' ? '1 Day' : '1 Hari');
  const [pickupAddress, setPickupAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [waTarget, setWaTarget] = useState<'wa1' | 'wa2'>('wa1');
  const [isBooked, setIsBooked] = useState(false);

  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';

  useEffect(() => {
    if (car) {
      setSelectedCarId(car.id);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [car]);

  if (!car) return null;

  const currentSelectedCar = CARS.find(c => c.id === selectedCarId) || car;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !rentalDate || !pickupAddress) {
      alert(isEN ? 'Please complete all required fields (*)!' : 'Mohon lengkapi semua kolom wajib (*)!');
      return;
    }

    const targetNumber = waTarget === 'wa1' ? '6285270607796' : '6281262320086';

    const textTemplate = isEN
      ? `Hello CV SRM MANDIRI, I would like to book/charter a vehicle:

📋 *RESERVATION DETAILS:*
• Selected Fleet: *${currentSelectedCar.name}* (${currentSelectedCar.category})
• Starting Rate: *${currentSelectedCar.priceDisplay}*
• Date of Use: *${rentalDate}*
• Duration: *${duration}*

👤 *CUSTOMER INFORMATION:*
• Full Name: *${name}*
• WhatsApp: *${phone}*
• Pickup Location: *${pickupAddress}*
• Route / Notes: *${notes || '-'}*

Please confirm unit availability and rate quotation. Thank you!`
      : `Halo CV SRM MANDIRI, saya ingin melakukan pemesanan rental/carter kendaraan:

📋 *DETAIL PEMESANAN:*
• Pilihan Armada: *${currentSelectedCar.name}* (${currentSelectedCar.category})
• Tarif Mulai: *${currentSelectedCar.priceDisplay}*
• Tanggal Pemakaian: *${rentalDate}*
• Durasi / Lama Sewa: *${duration}*

👤 *DATA PEMESAN:*
• Nama Lengkap: *${name}*
• No. WhatsApp: *${phone}*
• Lokasi Penjemputan: *${pickupAddress}*
• Rute Tujuan / Catatan: *${notes || '-'}*

Mohon informasi ketersediaan armada dan penawaran harga terbaik. Terima kasih!`;

    const encodedText = encodeURIComponent(textTemplate);
    const waUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodedText}`;
    
    window.open(waUrl, '_blank', 'noreferrer');
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start pt-20 sm:pt-24 pb-6 px-3 sm:px-6 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#061226]/80 backdrop-blur-md z-0"
          id="booking-backdrop"
        />

        {/* Modal Panel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-slate-100 max-h-[calc(100vh-7rem)]"
          id="booking-modal-panel"
        >
          
          {/* LEFT SIDEBAR: VEHICLE PREVIEW */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#061226] via-[#081836] to-[#0c2340] text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="space-y-4 relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>CV SRM MANDIRI</span>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  {currentSelectedCar.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-sans text-xs text-sky-300 font-bold">
                    {currentSelectedCar.category} ({currentSelectedCar.seats} {isEN ? 'Seats' : 'Kursi'})
                  </span>
                  <span className="text-[11px] bg-sky-600 text-white px-2.5 py-0.5 rounded-full font-bold">
                    {currentSelectedCar.priceDisplay}
                  </span>
                </div>
              </div>

              {/* Car Photo */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-900/60 aspect-[16/10] p-2 flex items-center justify-center">
                <img
                  src={currentSelectedCar.image}
                  alt={currentSelectedCar.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Specs List */}
              <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-3">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Transmisi:</span>
                  <span className="font-semibold text-white">{currentSelectedCar.transmission}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Kapasitas:</span>
                  <span className="font-semibold text-sky-400">{currentSelectedCar.seats} {isEN ? 'Seats' : 'Kursi/Orang'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Rute Populer:</span>
                  <span className="font-semibold text-sky-200">Medan, Riau, Jambi &amp; Wisata</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs text-slate-300">
                <p className="italic text-[11px] leading-relaxed">
                  "{currentSelectedCar.description}"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 text-[11px] text-slate-300 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Alamat: Simalingkar B, Medan</span>
            </div>
          </div>

          {/* RIGHT SIDEBAR: BOOKING FORM */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-white max-h-[75vh] overflow-y-auto relative text-left">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-all flex items-center justify-center shadow-xs cursor-pointer z-50"
              id="close-booking-modal"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Header Title */}
                <div>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-[#081836] uppercase tracking-tight">
                    {t.modal_title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium mt-1">
                    {t.modal_desc}
                  </p>
                </div>

                {/* 1. Pilih Admin WhatsApp Tujuan */}
                <div className="space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t.modal_field_wa_target}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setWaTarget('wa1')}
                      className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                        waTarget === 'wa1'
                          ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>Admin 1: 0852-7060-7796</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setWaTarget('wa2')}
                      className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                        waTarget === 'wa2'
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>Admin 2: 0812-6232-0086</span>
                    </button>
                  </div>
                </div>

                {/* 2. Pilih Kendaraan Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {t.modal_field_vehicle} *
                  </label>
                  <select
                    value={selectedCarId}
                    onChange={(e) => {
                      setSelectedCarId(e.target.value);
                      const target = CARS.find(c => c.id === e.target.value);
                      if (target && onCarChange) onCarChange(target);
                    }}
                    className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                  >
                    {CARS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.category} - Mulai {c.priceDisplay})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Customer Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-600" />
                      <span>{t.modal_field_name} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isEN ? "Full name..." : "Nama lengkap Anda..."}
                      className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sky-600" />
                      <span>{t.modal_field_phone} *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>{t.modal_field_date} *</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={rentalDate}
                      onChange={(e) => setRentalDate(e.target.value)}
                      className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      <span>{t.modal_field_duration}</span>
                    </label>
                    <input
                      type="text"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder={isEN ? "e.g., 1 Day / 3 Days" : "Contoh: 1 Hari / Carter Drop Off"}
                      className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      <span>{t.modal_field_address} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      placeholder={isEN ? "Pickup location in Medan (e.g. Simalingkar B, KNO Airport, Hotel...)" : "Lokasi penjemputan (Contoh: Simalingkar B / Bandara Kualanamu / Hotel / Alamat Rumah)..."}
                      className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {t.modal_field_notes}
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={isEN ? "Destination route (Medan, Dumai, Duri, Pekanbaru, Kerinci, Jambi, Berastagi, Samosir...)" : "Rute tujuan (Contoh: Medan - Pekanbaru / Wisata Berastagi & Samosir)..."}
                      className="w-full text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 resize-none"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-display font-black text-xs uppercase py-3.5 rounded-2xl shadow-md hover:shadow-sky-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.modal_btn_submit}</span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-2xl text-[#081836] uppercase">
                  {isEN ? 'Reservation Sent to WhatsApp!' : 'Formulir Pemesanan Terkirim!'}
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium max-w-md mx-auto">
                  {isEN ? 'Thank you! You have been redirected to WhatsApp. CV SRM MANDIRI admin will assist you shortly.' : 'Terima kasih! Anda telah terhubung langsung dengan WhatsApp Admin CV SRM MANDIRI.'}
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#081836] text-white font-bold text-xs uppercase cursor-pointer"
                >
                  {isEN ? 'Close Window' : 'Tutup Jendela'}
                </button>
              </div>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
