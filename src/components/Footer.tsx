import React from 'react';
import { MessageCircle, MapPin, Phone, PhoneCall } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  lang: 'ID' | 'EN';
}

export default function Footer({ onNavigateSection, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-[#050f20] text-white pt-16 pb-12 relative overflow-hidden text-left border-t border-slate-800/80">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Callout Box */}
        <div className="bg-gradient-to-r from-[#081836] via-[#0c2340] to-[#081836] rounded-3xl p-8 sm:p-10 border border-sky-900/40 shadow-xl mb-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 text-left space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-sky-950/80 px-3.5 py-1 rounded-full border border-sky-800/50 inline-block">
              CV SRM MANDIRI • MEDAN
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              {t.footer_cta_heading}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium max-w-xl leading-relaxed">
              {t.footer_cta_sub}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2.5 justify-start md:justify-end">
            <a
              href="https://api.whatsapp.com/send?phone=6285270607796&text=Halo%20CV%20SRM%20MANDIRI,%20saya%20ingin%20booking%20jasa%20transportasi%20rental%20mobil%20PP"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-extrabold text-xs uppercase px-5 py-3.5 rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WA 1: 0852-7060-7796</span>
            </a>

            <a
              href="tel:081262320086"
              className="bg-sky-600 hover:bg-sky-500 text-white font-sans font-extrabold text-xs uppercase px-5 py-3.5 rounded-2xl shadow-lg hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Telp 2: 0812-6232-0086</span>
            </a>
          </div>
        </div>

        {/* Core Footer Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800/80 pb-12">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-2xl shadow-md shrink-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="CV SRM MANDIRI Logo"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase block">
                  CV SRM <span className="text-sky-400">MANDIRI</span>
                </span>
                <span className="font-sans text-[10px] font-bold text-slate-400 tracking-wider block uppercase">
                  Melayani Jasa Transportasi
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-md font-medium">
              {t.hero_description}
            </p>

            <div className="p-3.5 rounded-2xl bg-[#081836] border border-sky-950/60 space-y-1.5">
              <span className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider block">
                RUTE &amp; DESTINASI LAYANAN (PP):
              </span>
              <p className="font-sans text-[11px] text-slate-300">
                • <b>Rute Antar Kota (PP):</b> Medan, Dumai, Duri, Kandis, Garut, Pekanbaru, Kerinci, Jambi.
              </p>
              <p className="font-sans text-[11px] text-slate-300">
                • <b>Tempat Wisata (PP):</b> Berastagi, Parapat, Pulau Samosir (Danau Toba).
              </p>
            </div>
          </div>

          {/* Column 2: Official Address & Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-sky-400 tracking-wider">
              {t.nav_contact}
            </h4>

            <div className="space-y-3.5 text-xs text-slate-300 font-medium">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">{t.footer_address_title}</span>
                  <span className="text-slate-300 leading-relaxed block">
                    Simalingkar B, Medan, Sumatera Utara
                  </span>
                </div>
              </div>

              {/* Contact Numbers: Admin 1 WA, Admin 2 Telp */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Kontak Resmi:</span>
                  <div className="space-y-1 pt-0.5">
                    <a
                      href="https://api.whatsapp.com/send?phone=6285270607796"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 hover:underline font-bold flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>0852-7060-7796 (Admin 1 - WA)</span>
                    </a>
                    <a
                      href="tel:081262320086"
                      className="text-sky-300 hover:underline font-bold flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>0812-6232-0086 (Admin 2 - Telp Biasa)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-start gap-2.5">
                <span className="text-sm shrink-0">🎵</span>
                <div>
                  <span className="font-bold text-white block">{t.footer_tiktok_title}</span>
                  <a
                    href="https://www.tiktok.com/@hendry.manullang"
                    target="_blank"
                    rel="noreferrer"
                    className="text-rose-300 hover:underline font-bold block pt-0.5"
                  >
                    @hendry.manullang
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-sky-400 tracking-wider">
              {t.footer_quick_links}
            </h4>

            <ul className="space-y-2 text-xs font-sans font-bold text-slate-300">
              <li>
                <button
                  onClick={() => onNavigateSection('home')}
                  className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>➔</span>
                  <span>{t.nav_home}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('cars')}
                  className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>➔</span>
                  <span>{t.nav_vehicles}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>➔</span>
                  <span>{lang === 'EN' ? 'Routes & Tours (PP)' : 'Rute & Wisata (PP)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about-page')}
                  className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>➔</span>
                  <span>{t.nav_about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>➔</span>
                  <span>{t.nav_contact}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} CV SRM MANDIRI. {t.footer_rights}</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>📍 Simalingkar B, Medan</span>
            <span>•</span>
            <a href="https://www.tiktok.com/@hendry.manullang" target="_blank" rel="noreferrer" className="text-rose-400 hover:underline">
              TikTok: @hendry.manullang
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
