import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Share2, Facebook } from 'lucide-react';
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
      
      {/* 1. TOP SLIM BAR (Matching reference design topbar) */}
      <div className="w-full bg-[#081836] text-white border-b border-sky-950/60 py-1.5 px-4 sm:px-6 lg:px-8 text-xs font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Phone / WhatsApp direct number */}
          <a
            href="https://api.whatsapp.com/send?phone=6285264018698&text=Halo%20Rizal%20Transportasi%20Batam,%20saya%20ingin%20tanya%20rental%20mobil"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sky-200 hover:text-white font-bold transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400 fill-current" />
            <span>0852-6401-8698</span>
          </a>

          {/* Right: Social icons & language */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 text-slate-300">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-300 transition-colors flex items-center gap-1"
                title="Facebook: Rizal Transportasi Batam"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Rizal Transportasi Batam</span>
              </a>
            </div>

            {/* Compact Language switch in top bar */}
            <div className="flex items-center gap-1 text-[11px] font-bold border-l border-sky-900/60 pl-3">
              <button
                onClick={() => setLang('ID')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'ID' ? 'text-sky-300 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                ID
              </button>
              <span className="text-slate-500">|</span>
              <button
                onClick={() => setLang('EN')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'EN' ? 'text-sky-300 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR (Dark background with clean layout matching reference screenshot) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050f20]/95 backdrop-blur-md py-2.5 shadow-lg border-b border-sky-950'
            : 'bg-[#050f20] py-3.5 border-b border-sky-950/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo & Typography */}
            <div 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-3 cursor-pointer group shrink-0"
              id="header-logo"
            >
              <img
                src="/logo.png"
                alt="Rizal Transportasi Batam Logo"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200 shrink-0 p-0.5 bg-white/10 rounded-xl"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-black text-base sm:text-lg tracking-tight text-white uppercase">
                  Rizal Transportasi <span className="text-sky-400">Batam</span>
                </span>
                <span className="font-sans font-bold text-[9px] sm:text-[10px] text-slate-400 tracking-wider uppercase">
                  Rental Mobil &amp; Transportasi
                </span>
              </div>
            </div>

            {/* Center/Right: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center justify-end gap-7 xl:gap-9 text-xs uppercase tracking-wider font-sans font-extrabold text-slate-200" id="desktop-nav">
              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.id === 'about-page' && (activeSection === 'about' || activeSection === 'about-page'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative py-1 transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-sky-400 font-black' 
                        : 'text-slate-200 hover:text-sky-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full"
                      />
                    )}
                  </button>
                );
              })}

              {/* Book CTA Button */}
              <button
                onClick={onBookingClick}
                className="bg-sky-600 hover:bg-sky-500 text-white font-display font-black text-xs uppercase px-5 py-2.5 rounded-xl shadow-md hover:shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer tracking-wider flex items-center gap-1.5 ml-2"
                id="header-book-btn"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{t.nav_book_btn}</span>
              </button>
            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
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
            className="lg:hidden bg-[#050f20] border-b border-sky-950 shadow-2xl overflow-hidden text-left"
            id="mobile-menu-drawer"
          >
            <div className="px-5 pt-3 pb-6 space-y-2 text-white">
              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.id === 'about-page' && (activeSection === 'about' || activeSection === 'about-page'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left font-display font-bold text-sm py-2.5 border-b border-slate-800 transition-colors ${
                      isActive ? 'text-sky-400 font-extrabold' : 'text-slate-200 hover:text-sky-400'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white font-display font-bold text-xs uppercase py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
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
