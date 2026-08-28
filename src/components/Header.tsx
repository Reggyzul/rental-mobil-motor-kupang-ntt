import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';
import { useData } from '../context/DataContext';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  onBookingClick?: () => void;
}

export default function Header({
  activeSection,
  onNavClick,
  lang,
  setLang
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  const { getSiteValue } = useData();
  const businessName = getSiteValue('business_name') || 'CV SRM MANDIRI';
  const logoImage = getSiteValue('logo_image') || '/logo.png';

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
    { id: 'services', label: lang === 'EN' ? 'Routes & Tours' : 'Rute & Wisata' },
    { id: 'about-page', label: t.nav_about },
    { id: 'contact', label: t.nav_contact }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* MAIN NAVBAR - BIRU MUDA */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#e0f2fe]/95 backdrop-blur-md py-2.5 shadow-md border-b border-sky-200/90'
            : 'bg-[#e0f2fe] py-3.5 border-b border-sky-200/70'
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
              <div className="bg-white p-1.5 rounded-xl shadow-xs border border-sky-100 group-hover:scale-105 transition-transform duration-200 shrink-0 flex items-center justify-center">
                <img
                  src={logoImage}
                  alt={`${businessName} Logo`}
                  className="h-8 sm:h-9 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.png';
                  }}
                />
              </div>
              
              <div className="flex flex-col leading-tight">
                <span className="font-display font-black text-base sm:text-lg tracking-tight text-[#081836] uppercase">
                  {businessName}
                </span>
                <span className="font-sans font-bold text-[9px] sm:text-[10px] text-slate-600 tracking-wider uppercase">
                  Melayani Jasa Transportasi
                </span>
              </div>
            </div>

            {/* Center/Right: Desktop Navigation Links + Lang Switcher (Tanpa Tombol Booking) */}
            <nav className="hidden lg:flex items-center justify-end gap-8 text-[13px] font-sans font-extrabold tracking-wide" id="desktop-nav">
              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.id === 'about-page' && (activeSection === 'about' || activeSection === 'about-page'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative py-1.5 transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-sky-700 font-black' 
                        : 'text-slate-700 hover:text-sky-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 rounded-full"
                      />
                    )}
                  </button>
                );
              })}

              {/* Language Switcher */}
              <div className="flex items-center gap-1 text-[11px] font-extrabold bg-white/90 px-2.5 py-1 rounded-lg border border-sky-300/80 shadow-2xs text-slate-700 ml-2">
                <button
                  onClick={() => setLang('ID')}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                    lang === 'ID' ? 'bg-sky-600 text-white font-black' : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  ID
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => setLang('EN')}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                    lang === 'EN' ? 'bg-sky-600 text-white font-black' : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="flex items-center gap-1 text-[11px] font-bold bg-white/90 px-2 py-1 rounded-lg border border-sky-300/80 text-slate-700">
                <button
                  onClick={() => setLang('ID')}
                  className={`px-1.5 py-0.5 rounded ${lang === 'ID' ? 'bg-sky-600 text-white font-black' : 'text-slate-600'}`}
                >
                  ID
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => setLang('EN')}
                  className={`px-1.5 py-0.5 rounded ${lang === 'EN' ? 'bg-sky-600 text-white font-black' : 'text-slate-600'}`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#081836] hover:bg-sky-200/60 transition-colors cursor-pointer shrink-0"
                id="mobile-menu-toggle"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

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
            className="lg:hidden bg-[#e0f2fe] border-b border-sky-200 shadow-xl overflow-hidden text-left"
            id="mobile-menu-drawer"
          >
            <div className="px-5 pt-3 pb-6 space-y-1 text-slate-800">
              {navItems.map((item) => {
                const isActive = activeSection === item.id || (item.id === 'about-page' && (activeSection === 'about' || activeSection === 'about-page'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left font-display font-bold text-sm py-2.5 border-b border-sky-200/60 transition-colors ${
                      isActive ? 'text-sky-700 font-black' : 'text-slate-700 hover:text-sky-600'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 text-xs text-slate-600 space-y-1">
                <a
                  href="https://www.tiktok.com/@hendry.manullang"
                  target="_blank"
                  rel="noreferrer"
                  className="block py-1 text-rose-600 hover:underline font-semibold"
                >
                  🎵 TikTok: @hendry.manullang
                </a>
                <p className="text-slate-500">
                  📍 Simalingkar B, Medan
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
