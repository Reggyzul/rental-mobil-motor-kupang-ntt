import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useData } from '../context/DataContext';

interface FAQItem {
  questionID: string;
  questionEN: string;
  answerID: string;
  answerEN: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Armada & Tarif',
    questionID: 'Apa saja jenis armada mobil yang disewakan oleh CV SRM MANDIRI?',
    questionEN: 'What types of fleet vehicles are available for rent at CV SRM MANDIRI?',
    answerID: 'CV SRM MANDIRI menyediakan armada Toyota Innova (MPV premium tangguh), Toyota Avanza (mobil keluarga favorit), Daihatsu Sigra (ekonomis super irit), dan Toyota Calya (kompak & nyaman). Seluruh unit selalu dicek berkala, bersih, wangi, ber-AC dingin, dan siap perjalanan jarak jauh maupun dalam kota Medan.',
    answerEN: 'We provide Toyota Innova, Toyota Avanza, Daihatsu Sigra, and Toyota Calya. All vehicles are regularly maintained, sanitized, fully air-conditioned, and road-ready for both city and long-distance intercity travels.'
  },
  {
    category: 'Rute Antar Kota (PP)',
    questionID: 'Rute travel dan carter antar kota Pulang-Pergi (PP) mana saja yang dilayani?',
    questionEN: 'Which intercity round-trip (PP) travel routes do you serve?',
    answerID: 'Kami melayani rute carter Pulang-Pergi (PP) se-Sumatera: Medan - Dumai (PP), Medan - Duri (PP), Medan - Kandis (PP), Medan - Pekanbaru (PP), Medan - Kerinci (PP), Medan - Jambi (PP), Medan - Garut (PP), serta operasional keliling kota Medan dan antar jemput Bandara Internasional Kualanamu (KNO).',
    answerEN: 'We serve round-trip charter routes across Sumatra: Medan - Dumai (PP), Medan - Duri (PP), Medan - Kandis (PP), Medan - Pekanbaru (PP), Medan - Kerinci (PP), Medan - Jambi (PP), Medan - Garut (PP), and Kualanamu International Airport (KNO) transfers.'
  },
  {
    category: 'Destinasi Wisata',
    questionID: 'Apakah tersedia paket rental mobil wisata ke Danau Toba, Berastagi & Samosir?',
    questionEN: 'Are tour packages available for Lake Toba, Berastagi, and Samosir Island?',
    answerID: 'Ya, tentu saja! Kami menyediakan paket carter mobil wisata favorit Sumut Pulang-Pergi (PP) meliputi: Wisata Alam Berastagi & Bukit Gundaling, Ikon Danau Toba Parapat Pantai Bebas, dan Wisata Budaya Batak Pulau Samosir (Tomok & Tuk-Tuk). Sopir kami sangat berpengalaman di jalur lintas pegunungan Sumatera Utara.',
    answerEN: 'Yes! We offer round-trip travel packages covering Berastagi & Gundaling Hill, Lake Toba Parapat, and cultural tours in Samosir Island (Tomok & Tuk-Tuk). Our experienced drivers are well-versed in North Sumatra mountain highways.'
  },
  {
    category: 'Layanan & Pemesanan',
    questionID: 'Berapa tarif sewa mobil di CV SRM MANDIRI Medan?',
    questionEN: 'What are the rental rates at CV SRM MANDIRI Medan?',
    answerID: 'Tarif sewa kami sangat bersahabat dan transparan mulai dari Rp400.000/hari (Sigra & Calya), Rp500.000/hari (Avanza), hingga Rp700.000/hari (Innova). Kami juga menyediakan opsi paket sewa all-in (Mobil + Driver + BBM) untuk kemudahan perjalanan dinas maupun liburan keluarga Anda.',
    answerEN: 'Rates start from Rp400,000/day for Sigra & Calya, Rp500,000/day for Avanza, and Rp700,000/day for Innova. All-inclusive packages (Car + Driver + Fuel) are also available.'
  },
  {
    category: 'Cara Booking',
    questionID: 'Bagaimana cara booking carter mobil di CV SRM MANDIRI?',
    questionEN: 'How do I book a car rental or intercity charter with CV SRM MANDIRI?',
    answerID: 'Pemesanan sangat mudah, cepat, dan tanpa ribet! Anda dapat langsung menghubungi WhatsApp Admin 1 di 0852-7060-7796 atau Telepon Admin 2 di 0812-6232-0086. Lokasi penjemputan siap dari alamat Anda di Simalingkar B, stasiun, hotel, seluruh area Medan, maupun Bandara Kualanamu.',
    answerEN: 'Booking is simple! Chat our WhatsApp Admin 1 at 0852-7060-7796 or Call Admin 2 at 0812-6232-0086. We pick up from your doorstep in Simalingkar B, hotels, stations, and Kualanamu Airport.'
  }
];

export default function FAQ({ lang }: { lang: 'ID' | 'EN' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { getSiteValue } = useData();
  const isEN = lang === 'EN';

  const wa1 = getSiteValue('contact_wa1') || '085270607796';
  const phone2 = getSiteValue('contact_phone2') || '081262320086';
  const waClean = wa1.replace(/\D/g, '').replace(/^0/, '62');
  const phoneClean = phone2.replace(/\D/g, '');

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white text-[#081836] relative overflow-hidden text-left border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 font-display font-black text-xs uppercase tracking-widest border border-sky-100 shadow-xs mb-1">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>{isEN ? 'Frequently Asked Questions' : 'Tanya Jawab Seputar Layanan'}</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#081836] tracking-tight uppercase">
            {isEN ? 'Frequently Asked Questions (FAQ)' : 'Pertanyaan yang Sering Diajukan'}
          </h2>

          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {isEN
              ? 'Find quick answers about rental rates, intercity routes, fleet availability, and tourist packages at CV SRM MANDIRI.'
              : 'Informasi lengkap seputar tarif sewa mobil, rute antar kota Pulang-Pergi (PP), paket wisata, dan kemudahan reservasi di CV SRM MANDIRI Medan.'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-all overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-sky-600 uppercase tracking-wider block">
                      {faq.category}
                    </span>
                    <h3 className="font-display font-black text-sm sm:text-base text-[#081836]">
                      {isEN ? faq.questionEN : faq.questionID}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-sky-600 text-white border-sky-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-200/60"
                    >
                      <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {isEN ? faq.answerEN : faq.answerID}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Consultation CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-black text-lg sm:text-xl uppercase">
              {isEN ? 'Have specific travel inquiries?' : 'Butuh info rute lain atau konsultasi harga?'}
            </h4>
            <p className="font-sans text-xs text-sky-100 font-medium">
              {isEN
                ? 'Our customer support is available 24/7 to assist with your transportation needs.'
                : 'Admin kami siap melayani konsultasi jadwal, carter khusus, dan penawaran harga terbaik 24 jam.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`https://api.whatsapp.com/send?phone=${waClean}&text=Halo%20CV%20SRM%20MANDIRI,%20saya%20ingin%20tanya%20informasi%20rental%20mobil%20dan%20carter%20rute`}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-slate-100 text-sky-700 font-bold text-xs uppercase px-5 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current text-emerald-600" />
              <span>Chat WA Admin 1</span>
            </a>

            <a
              href={`tel:${phoneClean}`}
              className="bg-[#081836] hover:bg-slate-900 text-white font-bold text-xs uppercase px-5 py-3 rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-sky-400" />
              <span>Telp Admin 2</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
