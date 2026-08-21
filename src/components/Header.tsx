import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
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

  const navItems = [
    { id: 'home', label: t.nav_home },
    { id: 'cars', label: t.nav_vehicles },
    { id: 'about-page', label: t.nav_about },
    { id: 'contact', label: t.nav_contact }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 sm:py-2.5 shadow-md border-b border-slate-200/90'
            : 'bg-white py-2.5 sm:py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* 1. LEFT: BRAND LOGO & TEXT BESIDE LOGO (AVIF FORMAT) */}
            <div 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
              id="header-logo"
            >
              <picture>
                <source srcSet="/logo.avif" type="image/avif" />
                <img
                  src="/logo.png"
                  alt="JL Rental Mobil & Motor Kupang Logo"
                  className="h-9 sm:h-11 md:h-13 w-auto object-contain group-hover:scale-105 transition-transform duration-200 shrink-0"
                />
              </picture>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-black text-xs sm:text-sm md:text-base tracking-tight text-[#0f2b5c] uppercase">
                  Rental Mobil &amp; Motor <span className="text-red-600">Kupang</span>
                </span>
                <span className="font-sans font-bold text-[8px] sm:text-[9px] md:text-[10px] text-slate-500 tracking-wide uppercase">
                  Nusa Tenggara Timur
                </span>
              </div>
            </div>

            {/* 2. CENTER: CLEAN DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 text-xs uppercase tracking-wider font-sans font-extrabold text-slate-700 flex-1 px-4" id="desktop-nav">
              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.id === 'about-page' && (activeSection === 'about' || activeSection === 'about-page'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative py-1 transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-blue-600 font-black' 
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* 3. RIGHT: LANGUAGE SWITCHER & ACTION BUTTON */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              
              {/* Language Switcher */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/90 text-xs font-bold">
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

              {/* Booking CTA Button */}
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
              aria-label="Toggle navigation menu"
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
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.id === 'about-page' && (activeSection === 'about' || activeSection === 'about-page'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left font-display font-bold text-sm py-2.5 border-b border-slate-100 transition-colors ${
                      isActive ? 'text-blue-600 font-extrabold' : 'text-slate-800 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
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

              {/* Mobile CTA */}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-display font-bold text-xs uppercase py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
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
