import React from 'react';
import { Car, MessageCircle, Calendar, CheckCircle2, ShieldCheck, KeyRound, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { motion } from 'motion/react';

interface BookingStepsProps {
  lang: 'ID' | 'EN';
}

export default function BookingSteps({ lang }: BookingStepsProps) {
  const t = TRANSLATIONS[lang];

  const stepsList = [
    {
      step: '01',
      title: t.step_1_title,
      description: t.step_1_desc,
      icon: <Car className="w-6 h-6 text-white" />,
      bgGradient: 'bg-gradient-to-br from-blue-600 to-blue-700',
    },
    {
      step: '02',
      title: t.step_2_title,
      description: t.step_2_desc,
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      bgGradient: 'bg-gradient-to-br from-emerald-600 to-teal-700',
    },
    {
      step: '03',
      title: t.step_3_title,
      description: t.step_3_desc,
      icon: <Calendar className="w-6 h-6 text-white" />,
      bgGradient: 'bg-gradient-to-br from-purple-600 to-indigo-700',
    },
    {
      step: '04',
      title: t.step_4_title,
      description: t.step_4_desc,
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      bgGradient: 'bg-gradient-to-br from-amber-600 to-orange-700',
    },
    {
      step: '05',
      title: t.step_5_title,
      description: t.step_5_desc,
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      bgGradient: 'bg-gradient-to-br from-red-600 to-rose-700',
    },
    {
      step: '06',
      title: t.step_6_title,
      description: t.step_6_desc,
      icon: <KeyRound className="w-6 h-6 text-white" />,
      bgGradient: 'bg-gradient-to-br from-teal-600 to-blue-700',
    },
  ];

  return (
    <section id="steps" className="py-24 bg-slate-50 overflow-hidden border-t border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-display font-black text-xs text-blue-600 tracking-widest uppercase bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200 inline-block">
            {t.steps_tag}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37] tracking-tight uppercase">
            {t.steps_title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t.steps_desc}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {stepsList.map((stepItem, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Step Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${stepItem.bgGradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {stepItem.icon}
                  </div>
                  
                  <span className="font-display font-black text-3xl text-slate-200 group-hover:text-blue-200 transition-colors">
                    {stepItem.step}
                  </span>
                </div>
                
                <h3 className="font-display font-black text-base text-[#0d1b37] mb-2 uppercase group-hover:text-blue-600 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold">
                <span>Langkah {index + 1} dari 6</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
