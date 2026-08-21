import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  onBookingClick: () => void;
}

export default function Header({
  activeSection,
  onNavClick,
  lang,
  setLang,
  onBookingClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavClick(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top micro contact bar */}
      <div className="bg-[#0b1b3d] text-white py-1.5 px-4 text-[11px] font-sans border-b border-blue-900/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span>📍 Jl. Keladi, Manulai 2, Alak, Kupang, NTT</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline">📲 Sosmed: Rental mobil&amp;motor Kupang</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=6281529662483&text=Halo%20Rental%20Mobil%20%26%20Motor%20Kupang_NTT,%20saya%20ingin%20tanya%20informasi%20rental%20kendaraan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WA: 0815-2966-2483</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200/90'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* 1. LEFT: LOGO BRAND */}
            <div 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
              id="header-logo"
            >
              <img
                src="/logo_kupang.jpg"
                alt="Rental Mobil & Motor Kupang Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col leading-snug">
                <span className="font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#0f2b5c] transition-colors">
                  <span>RENTAL MOBIL &amp; MOTOR</span> <span className="text-red-600">KUPANG - NTT</span>
                </span>
                <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-wider text-slate-500">
                  {t.brand_tagline}
                </span>
              </div>
            </div>

            {/* 2. CENTER: DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 text-xs font-sans font-bold text-slate-700 flex-1 px-2" id="desktop-nav">
              <button
                onClick={() => handleItemClick('home')}
                className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'home' ? 'text-blue-600 font-black border-b-2 border-blue-600' : ''
                }`}
              >
                {t.nav_home}
              </button>

              <button
                onClick={() => handleItemClick('services')}
                className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'services' ? 'text-blue-600 font-black border-b-2 border-blue-600' : ''
                }`}
              >
                {t.nav_services}
              </button>

              <button
                onClick={() => handleItemClick('cars')}
                className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'cars' ? 'text-blue-600 font-black border-b-2 border-blue-600' : ''
                }`}
              >
                {t.nav_vehicles}
              </button>

              <button
                onClick={() => handleItemClick('why-us')}
                className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'why-us' ? 'text-blue-600 font-black border-b-2 border-blue-600' : ''
                }`}
              >
                {t.nav_why_us}
              </button>

              <button
                onClick={() => handleItemClick('area')}
                className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'area' ? 'text-blue-600 font-black border-b-2 border-blue-600' : ''
                }`}
              >
                {t.nav_area}
              </button>

              <button
                onClick={() => handleItemClick('steps')}
                className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'steps' ? 'text-blue-600 font-black border-b-2 border-blue-600' : ''
                }`}
              >
                {t.nav_steps}
              </button>

              <button
                onClick={() => handleItemClick('contact')}
                className={`hover:text-blue-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'contact' ? 'text-blue-600 font-black border-b-2 border-blue-600' : ''
                }`}
              >
                {t.nav_contact}
              </button>
            </nav>

            {/* 3. RIGHT: LANGUAGE TOGGLE & BOOKING BUTTON */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setLang('ID')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'ID'
                      ? 'bg-blue-600 text-white shadow-xs font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Bahasa Indonesia"
                >
                  <span>🇮🇩 ID</span>
                </button>
                <button
                  onClick={() => setLang('EN')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'EN'
                      ? 'bg-blue-600 text-white shadow-xs font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="English Language"
                >
                  <span>🇬🇧 EN</span>
                </button>
              </div>

              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 hover:from-blue-800 hover:to-red-700 text-white font-display font-black text-xs uppercase px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer tracking-wider flex items-center gap-1.5"
                id="header-book-btn"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{t.nav_book_btn}</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden text-left"
            id="mobile-menu-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-2.5">
              <button
                onClick={() => handleItemClick('home')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {t.nav_home}
              </button>
              <button
                onClick={() => handleItemClick('services')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {t.nav_services}
              </button>
              <button
                onClick={() => handleItemClick('cars')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {t.nav_vehicles}
              </button>
              <button
                onClick={() => handleItemClick('why-us')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {t.nav_why_us}
              </button>
              <button
                onClick={() => handleItemClick('area')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {t.nav_area}
              </button>
              <button
                onClick={() => handleItemClick('steps')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {t.nav_steps}
              </button>
              <button
                onClick={() => handleItemClick('contact')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {t.nav_contact}
              </button>

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  {lang === 'ID' ? 'Pilih Bahasa:' : 'Language:'}
                </span>
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setLang('ID')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      lang === 'ID'
                        ? 'bg-blue-600 text-white font-extrabold'
                        : 'text-slate-600'
                    }`}
                  >
                    🇮🇩 ID
                  </button>
                  <button
                    onClick={() => setLang('EN')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      lang === 'EN'
                        ? 'bg-blue-600 text-white font-extrabold'
                        : 'text-slate-600'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-display font-bold text-xs uppercase py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.nav_book_btn}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
