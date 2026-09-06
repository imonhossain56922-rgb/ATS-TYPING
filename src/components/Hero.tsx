import React from 'react';
import { MessageCircle, Phone, MapPin, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, FileCheck, Award, Clock } from 'lucide-react';
import { contactData } from '../data/contactData';
import { translations } from '../data/translations';
import { Language } from '../types';
import { VisitingCardPreview } from './VisitingCardPreview';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="hero" className="relative pt-12 pb-20 overflow-hidden bg-[#080C14]">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 bg-pro-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-amber-500/10 via-slate-900/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]">
            {language === 'bn' ? (
              <>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-display">
                  আলায়ান টাইপিং সার্ভিসেস
                </span>
                <br />
                <span className="text-2xl sm:text-4xl text-slate-100 font-semibold font-bengali mt-2 block">
                  ভিসা, লাইসেন্স ও সরকারি সকল কাজের <span className="text-amber-300">বিশ্বস্ত ঠিকানা</span>
                </span>
              </>
            ) : language === 'ar' ? (
              <>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-arabic font-display">
                  الأيـــــان لخدمات الطباعة
                </span>
                <br />
                <span className="text-2xl sm:text-4xl text-slate-100 font-bold font-arabic mt-2 block">
                  إنجاز كافة المعاملات الحكومية <span className="text-amber-300">والإقامات وتأسيس الشركات</span>
                </span>
              </>
            ) : (
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 block font-display">
                Fast, Certified Visa & PRO Solutions in Ajman
              </span>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {t.tagline} — <strong className="text-amber-300 font-medium">Under the Personal Supervision of Mr. Didar</strong>.
            Authorized document typist at <span className="text-amber-400 font-semibold">Shop No. 46, Younus Market</span>,
            Ajman Industrial 1.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              id="hero-btn-call"
              href="tel:+971505372999"
              className="px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>{t.quickCall} (050 537 2999)</span>
            </a>

            <a
              id="hero-btn-maps"
              href={contactData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 flex items-center gap-2 transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{t.getDirections}</span>
            </a>
          </div>
        </div>

        {/* Visiting Card & Banner Visual Preview Component */}
        <VisitingCardPreview language={language} />

        {/* 4 Trust Stats Grid in Super Professional Theme */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-slate-800/80">
          <div className="bg-[#0E1422] border border-slate-800/90 p-5 rounded-2xl hover:border-amber-500/30 transition-all text-center group shadow-md hover:shadow-xl hover:shadow-black/40">
            <div className="text-amber-400 text-xs mb-1 font-mono">✦ AUTHORIZED</div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
              {t.stat1Number}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              {t.stat1Label}
            </div>
          </div>

          <div className="bg-[#0E1422] border border-slate-800/90 p-5 rounded-2xl hover:border-amber-500/30 transition-all text-center group shadow-md hover:shadow-xl hover:shadow-black/40">
            <div className="text-amber-400 text-xs mb-1 font-mono">✦ TURNAROUND</div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-amber-400 font-mono">
              {t.stat2Number}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              {t.stat2Label}
            </div>
          </div>

          <div className="bg-[#0E1422] border border-slate-800/90 p-5 rounded-2xl hover:border-amber-500/30 transition-all text-center group shadow-md hover:shadow-xl hover:shadow-black/40">
            <div className="text-amber-400 text-xs mb-1 font-mono">✦ CLEARANCE</div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
              {t.stat3Number}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              {t.stat3Label}
            </div>
          </div>

          <div className="bg-[#0E1422] border border-slate-800/90 p-5 rounded-2xl hover:border-amber-500/30 transition-all text-center group shadow-md hover:shadow-xl hover:shadow-black/40">
            <div className="text-amber-400 text-xs mb-1 font-mono">✦ EXPERIENCE</div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-amber-300 font-mono">
              {t.stat4Number}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">
              {t.stat4Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
