import React from 'react';
import { MapPin, Phone, MessageCircle, Share2, ChevronRight } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  lang: 'ID' | 'EN';
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ lang, onNavigateSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-[#0b1736] text-white pt-16 pb-12 overflow-hidden relative border-t border-slate-800 text-left">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Callout Box */}
        <div className="bg-gradient-to-r from-[#0f2b5c] via-[#1e3a8a] to-[#0b1736] rounded-3xl p-8 sm:p-10 border border-blue-700/60 shadow-2xl mb-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 text-left space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-700/50 inline-block">
              RENTAL MOBIL &amp; MOTOR KUPANG - NTT
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              {t.footer_cta_heading}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-200 font-medium max-w-xl leading-relaxed">
              {t.footer_cta_sub}
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <a
              href="https://api.whatsapp.com/send?phone=6281529662483&text=Halo%20Rental%20Mobil%20%26%20Motor%20Kupang_NTT,%20saya%20ingin%20booking%20rental%20kendaraan%20di%20Kupang"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-sans font-extrabold text-xs uppercase px-7 py-4 rounded-full shadow-xl transition-all flex items-center gap-2.5 cursor-pointer transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.footer_cta_btn}</span>
            </a>
          </div>
        </div>

        {/* Core Footer Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800/80 pb-12">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <picture>
                <source srcSet="/logo.avif" type="image/avif" />
                <img
                  src="/logo.png"
                  alt="JL Rental Mobil & Motor Kupang Logo"
                  className="h-16 w-auto object-contain shrink-0"
                />
              </picture>
              <div>
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase block">
                  Rental Mobil &amp; Motor <span className="text-red-500">Kupang_NTT</span>
                </span>
                <span className="font-sans text-[10px] font-bold text-amber-300 tracking-wider block uppercase">
                  {t.brand_tagline}
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-md font-medium">
              {t.hero_description}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-wider block">
                AREA LAYANAN RESMI:
              </span>
              <p className="font-sans text-xs text-slate-300">
                Kupang dan sekitarnya (Manulai 2, Alak, Oebobo, Kelapa Lima, Maulafa, Kota Raja, Kabupaten Kupang &amp; Luar Kota dengan konfirmasi).
              </p>
            </div>
          </div>

          {/* Column 2: Official Address & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-red-500 tracking-wider">
              {t.nav_contact}
            </h4>

            <div className="space-y-3.5 text-xs text-slate-300 font-medium">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">{t.footer_address_title}</span>
                  <span className="text-slate-300 leading-relaxed block">
                    {t.footer_address_text}
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">{t.footer_wa_title}</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=6281529662483"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline font-bold block pt-0.5"
                  >
                    📱 0815-2966-2483
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-2.5">
                <Share2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">{t.footer_socmed_title}</span>
                  <span className="text-slate-300 block pt-0.5 font-bold text-sky-300">
                    📲 Rental mobil&amp;motor Kupang
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-blue-400 tracking-wider">
              {t.footer_quick_links}
            </h4>

            <ul className="space-y-2 text-xs font-sans font-bold text-slate-300">
              <li>
                <button
                  onClick={() => onNavigateSection('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.nav_home}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('cars')}
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.nav_vehicles}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.nav_about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('steps')}
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.nav_steps}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.nav_contact}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Notice */}
        <div className="pt-8 text-center text-xs text-slate-500 font-sans font-medium flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} Rental Mobil &amp; Motor Kupang - NTT. {t.footer_rights}
          </span>
          <span className="text-[11px] text-slate-400">
            Jl. Keladi, Manulai 2, Alak, Kupang, NTT • WhatsApp: 0815-2966-2483
          </span>
        </div>

      </div>
    </footer>
  );
}
