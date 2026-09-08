import React from 'react';
import { Navigation, ArrowRight } from 'lucide-react';
import { contactData } from '../data/contactData';
import { translations } from '../data/translations';
import { Language } from '../types';

interface LocationMapSectionProps {
  language: Language;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="location" className="py-20 bg-[#080C14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-display">
            {language === 'bn' ? (
              <>আমাদের অফিসের অবস্থান ও <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">যাতায়াত ব্যবস্থা</span></>
            ) : language === 'ar' ? (
              <>موقع المكتب وخريطة <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-arabic">الوصول في عجمان</span></>
            ) : (
              <>Exact Location & <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Google Maps Direction</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            {t.locationSubtitle}
          </p>
        </div>

        {/* Main Map Container */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-800/90 bg-[#0E1422] shadow-2xl relative flex flex-col min-h-[440px] ring-1 ring-white/5">
          {/* Map Top Bar */}
          <div className="p-4 bg-[#0B1120] border-b border-slate-800 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-slate-200 font-display">Alayan Typing Services - Google Maps Direct Feed</span>
            </div>

            <a
              href={contactData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition-colors font-mono"
            >
              <span>Navigate Live</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Responsive Map */}
          <div className="relative w-full flex-1 min-h-[400px] bg-[#080C14]">
            <iframe
              title="Alayan Typing Services Location Ajman"
              src="https://maps.google.com/maps?q=Younus+Market+Ajman+Industrial+1&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Overlay Badge on Map */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#080C14]/95 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-2xl max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-auto px-2 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-md">
                  ALAYAN
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white font-display">ALAYAN TYPING - Shop 46</h4>
                  <p className="text-[11px] text-amber-300 font-mono">Younus Market, Ajman Ind. 1</p>
                </div>
              </div>
              <a
                href={contactData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Launch GPS Turn-by-Turn Navigation</span>
                <span>➔</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
