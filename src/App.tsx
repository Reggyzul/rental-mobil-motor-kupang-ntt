import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarList from './components/CarList';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AboutPage from './components/AboutPage';
import TransportRentPage from './components/TransportRentPage';
import AdminPage from './components/admin/AdminPage';
import { DataProvider, useData } from './context/DataContext';
import { Car } from './types';
import { CARS } from './data/cars';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from './utils/translations';

// ─── Error Boundary ─────────────────────────────────────────────────────────
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-md text-center space-y-4">
            <h2 className="text-xl font-black text-[#081836]">CV SRM MANDIRI</h2>
            <p className="text-xs text-slate-500 font-medium">Terjadi kendala saat memuat. Silakan muat ulang halaman.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-sky-600 text-white font-bold text-xs uppercase px-6 py-3 rounded-2xl cursor-pointer hover:bg-sky-500"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainApp() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'rentals' | 'admin'>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
        return 'admin';
      }
    }
    return 'home';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<'EN' | 'ID'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('srm_mandiri_lang');
      return (saved === 'ID' || saved === 'EN') ? saved : 'ID';
    }
    return 'ID';
  });

  const t = TRANSLATIONS[lang];
  const { getSiteValue, cars } = useData();

  const handleSetLang = (newLang: 'EN' | 'ID') => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('srm_mandiri_lang', newLang);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
        setCurrentPage('admin');
      } else {
        if (currentPage === 'admin') setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 'admin') {
      document.title = `Admin Dashboard | ${getSiteValue('business_name') || 'CV SRM MANDIRI'}`;
      return;
    }

    // Dynamic SEO Metadata Synchronization
    document.documentElement.lang = lang === 'EN' ? 'en' : 'id';
    document.title = getSiteValue('seo_title') || t.seo_title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', getSiteValue('seo_description') || t.seo_description);
  }, [lang, t.seo_title, t.seo_description, currentPage, getSiteValue]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if (currentPage === 'home') {
        const sections = ['home', 'cars', 'services', 'testimonials', 'contact'];
        const scrollPosition = window.scrollY + 250;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'about-page' || sectionId === 'about') {
      setCurrentPage('about');
      setActiveSection('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'rentals-page') {
      setCurrentPage('rentals');
      setActiveSection('cars');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'admin') {
      setCurrentPage('admin');
      window.location.hash = 'admin';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
      }
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user requests admin route
  if (currentPage === 'admin') {
    return <AdminPage />;
  }

  const defaultBookingCar: Car = (cars && cars.length > 0) ? {
    id: cars[0].id,
    name: cars[0].name,
    category: cars[0].category,
    pricePerDay: cars[0].price_per_day,
    priceDisplay: cars[0].price_display,
    image: cars[0].image,
    seats: cars[0].seats,
    transmission: cars[0].transmission,
    fuel: cars[0].fuel,
    includeList: cars[0].include_list || [],
    description: cars[0].description,
    rating: Number(cars[0].rating) || 5.0,
    reviewsCount: cars[0].reviews_count || 0,
    specifications: cars[0].specifications || []
  } : CARS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans antialiased selection:bg-sky-600 selection:text-white">
      
      {/* Header Bar */}
      <Header
        activeSection={currentPage === 'about' ? 'about-page' : activeSection}
        onNavClick={handleNavClick}
        lang={lang}
        setLang={handleSetLang}
        onBookingClick={() => setSelectedCar(defaultBookingCar)}
      />

      {/* Main Page Dynamic Router View */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* 1. HERO SECTION */}
            <Hero 
              onExploreClick={() => handleNavClick('cars')} 
              lang={lang} 
              onBookingClick={() => setSelectedCar(defaultBookingCar)} 
            />

            {/* 2. ARMADA (Fleet list: Innova, Avanza, Sigra, Calya) */}
            <CarList 
              onSelectCar={handleSelectCar} 
              lang={lang} 
              onViewAllCars={() => handleNavClick('cars')}
            />

            {/* 3. LAYANAN, RUTE ANTAR KOTA & DESTINASI WISATA */}
            <Services 
              lang={lang} 
              onViewAllDestinations={() => handleNavClick('services')}
            />

            {/* 4. TESTIMONIALS */}
            <Testimonials lang={lang} />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : (
          <TransportRentPage 
            onSelectCar={handleSelectCar} 
            lang={lang} 
            onNavigateHome={() => handleNavClick('home')} 
          />
        )}
      </main>

      {/* Footer Contact */}
      <Footer 
        onNavigateSection={handleNavClick} 
        lang={lang} 
        onAdminClick={() => handleNavClick('admin')}
      />

      {/* Booking Popup Modal */}
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} lang={lang} onCarChange={setSelectedCar} />

      {/* FLOATING ACTION WIDGETS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#081836] text-white flex items-center justify-center shadow-lg hover:bg-sky-600 transition-colors cursor-pointer border border-sky-900/50"
              title={lang === 'EN' ? "Scroll to top" : "Kembali ke atas"}
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Button */}
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          href={`https://api.whatsapp.com/send?phone=${(getSiteValue('contact_wa1') || '085270607796').replace(/\D/g, '').replace(/^0/, '62')}&text=Halo%20${encodeURIComponent(getSiteValue('business_name') || 'CV SRM MANDIRI')},%20saya%20ingin%20konsultasi%20dan%20booking%20jasa%20transportasi%20rental%20mobil`}
          target="_blank"
          rel="noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white cursor-pointer"
          title="Chat WhatsApp CV SRM MANDIRI"
        >
          {/* Authentic WhatsApp Logo SVG */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.174 5.293-1.389c1.455.793 3.096 1.211 4.777 1.212h.004c5.505 0 9.989-4.478 9.99-9.985.001-2.668-1.034-5.176-2.919-7.061-1.885-1.884-4.394-2.922-7.061-2.923zm5.952 14.183c-.251.706-1.258 1.346-1.742 1.402-.457.052-1.042.1-3.056-.731-2.585-1.066-4.227-3.704-4.356-3.876-.128-.172-1.047-1.396-1.047-2.663 0-1.267.662-1.889.897-2.14.235-.251.512-.314.683-.314.171 0 .342.002.49.009.158.007.37-.06.578.439.214.513.726 1.77.79 1.9.064.129.107.279.021.45-.085.171-.128.278-.256.427-.128.149-.27.333-.385.448-.128.128-.261.268-.112.524.15.255.664 1.096 1.427 1.776.981.874 1.808 1.144 2.064 1.272.256.128.406.107.556-.064.15-.171.641-.748.812-1.004.171-.256.342-.214.577-.128.235.085 1.493.704 1.75 1.004.256.3.256.556.005 1.262z" />
          </svg>

          {/* Active online pulse ring */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
        </motion.a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <DataProvider>
        <MainApp />
      </DataProvider>
    </ErrorBoundary>
  );
}
