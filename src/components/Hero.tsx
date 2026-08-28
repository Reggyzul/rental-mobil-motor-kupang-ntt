import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageCircle, Car, MapPin, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { useData } from '../context/DataContext';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const t = TRANSLATIONS[lang];
  const isEN = lang === 'EN';
  const { getSiteValue } = useData();

  const businessName = getSiteValue('business_name') || 'CV SRM MANDIRI';
  const heroImage = getSiteValue('hero_image') || '/hero_sumut.jpg';
  const tagline = getSiteValue('business_tagline') || 'Melayani Perjalanan Anda Sepenuh Hati';
  const description = getSiteValue('business_description') || t.hero_description;
  const wa1 = getSiteValue('contact_wa1') || '085270607796';
  const phone2 = getSiteValue('contact_phone2') || '081262320086';
  const tiktok = getSiteValue('contact_tiktok') || '@hendry.manullang';
  const address = getSiteValue('contact_address') || 'Simalingkar B, Medan • Sumatera Utara';

  const waClean = wa1.replace(/\D/g, '');
  const waUrlNumber = waClean.startsWith('0') ? `62${waClean.slice(1)}` : waClean;

  const phoneClean = phone2.replace(/\D/g, '');
  const tiktokClean = tiktok.startsWith('@') ? tiktok.slice(1) : tiktok;

  return (
    <section id="home" className="relative bg-[#061226] text-slate-900 overflow-hidden text-left">
      
      {/* 1. PANORAMIC HERO PHOTO BANNER */}
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] pt-24 sm:pt-28 bg-[#061226] text-white overflow-hidden flex flex-col justify-between">
        
        {/* Background Dynamic Generated / Uploaded Scenic Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-1000"
          style={{
            backgroundImage: `url('${heroImage}')`
          }}
        />

        {/* Dark Gradient Overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061226]/85 via-[#061226]/50 to-[#061226]/90" />

        {/* Location Pill & TikTok in Top Banner */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{address}</span>
          </div>

          <a
            href={`https://www.tiktok.com/@${tiktokClean}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-rose-300 hover:text-white text-xs font-semibold backdrop-blur-md shadow-xs transition-colors"
          >
            <span>🎵 TikTok: <b>@{tiktokClean}</b></span>
          </a>
        </div>

        {/* Vertical Spacer */}
        <div className="h-12" />

      </div>

      {/* 2. WHITE CONTENT CARD (Overlapping onto the hero banner) */}
      <div className="bg-slate-50 relative pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-32 sm:-mt-40 md:-mt-44">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-t-[32px] sm:rounded-t-[40px] rounded-b-2xl p-7 sm:p-10 md:p-12 shadow-2xl border border-slate-100/90 text-center space-y-6"
          >
            
            {/* Breadcrumb Navigation Line */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span className="text-sky-600 font-black">{businessName}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-600">
                {isEN ? 'Transportation & Car Rental' : 'Jasa Transportasi & Rental Mobil'}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
              <span className="text-slate-400 hidden sm:inline">{address}</span>
            </div>

            {/* Main Headline as requested */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-100">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>{businessName}</span>
              </span>

              <h1 className="font-display font-black text-2xl sm:text-4xl md:text-[42px] text-[#081836] tracking-tight leading-snug sm:leading-tight">
                {tagline}
              </h1>
            </div>

            {/* Subtext */}
            <p className="font-sans text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed text-center">
              {description}
            </p>

            {/* Value Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Armada: Innova, Avanza, Sigra, Calya</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Rute Antar Kota Pulang Pergi (PP)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Wisata Berastagi, Parapat &amp; Samosir (PP)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Alamat: Simalingkar B</span>
              </div>
            </div>

            {/* Prominent Booking Sekarang Button + Direct WhatsApp & Phone Call */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* Main "Booking Sekarang" Button */}
                <button
                  onClick={onBookingClick}
                  className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white font-display font-black text-sm uppercase px-10 py-4 rounded-2xl shadow-lg hover:shadow-sky-500/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                  id="hero-booking-now-btn"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{isEN ? 'Book Now' : 'Booking Sekarang'}</span>
                </button>

                <button
                  onClick={onExploreClick}
                  className="w-full sm:w-auto bg-[#081836] hover:bg-[#0c2340] text-white font-display font-black text-xs uppercase px-7 py-4 rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Car className="w-4 h-4 text-sky-300" />
                  <span>{t.hero_cta_vehicles}</span>
                </button>
              </div>

              {/* Direct WhatsApp (Admin 1) & Phone Call (Admin 2) Links */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold text-slate-600">
                <span>Hubungi Kami:</span>
                <a
                  href={`https://api.whatsapp.com/send?phone=${waUrlNumber}&text=Halo%20${encodeURIComponent(businessName)},%20saya%20ingin%20booking%20jasa%20transportasi%20rental%20mobil%20PP`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs transition-all hover:bg-emerald-100"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                  <span>WA Admin 1: {wa1}</span>
                </a>
                <a
                  href={`tel:${phoneClean}`}
                  className="text-sky-700 hover:underline flex items-center gap-1.5 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200 shadow-2xs transition-all hover:bg-sky-100"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                  <span>Telp Admin 2: {phone2}</span>
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
