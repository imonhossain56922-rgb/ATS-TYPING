import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { contactData } from '../data/contactData';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Logo } from './Logo';

export const Footer: React.FC<{ language: Language }> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-[#060910] border-t border-slate-800/90 text-slate-400 text-xs pb-24 sm:pb-10">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand Info & Owner Details */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="gold" />

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm font-light max-w-md">
              {t.tagline} — <strong className="text-amber-400 font-semibold">Mr. Didar</strong> (Managing Executive). Serving UAE residents, expatriates, and corporate clients with prompt and accredited document clearance.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-500/25 text-[11px] text-amber-300 font-medium">
                🇧🇩 বাংলাদেশি টাইপিং সার্ভিস
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] text-emerald-400 font-arabic">
                الأيان لخدمات الطباعة
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] text-slate-300 font-mono">
                Shop No. 46 (Ajman)
              </span>
            </div>
          </div>

          {/* Quick Contact Lines */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider font-mono">
              Direct Contact & Hotlines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-amber-400 font-bold font-sans">Mr. Didar:</span>
                <a href="tel:+971505372999" className="hover:text-amber-300 font-semibold transition-colors">
                  050 537 2999
                </a>
                <span className="text-slate-600">/</span>
                <a href="tel:+971567665022" className="hover:text-amber-300 transition-colors">
                  056 766 5022
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold font-sans">Shop WhatsApp:</span>
                <a href="tel:+971556140043" className="hover:text-amber-300 transition-colors">
                  055 614 0043
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400 font-bold font-sans">Office Landline:</span>
                <a href="tel:+97165209420" className="hover:text-amber-300 transition-colors">
                  06-5209420
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400 font-bold font-sans">Corporate Email:</span>
                <a href="mailto:alayantyping@gmail.com" className="hover:text-amber-300 break-all transition-colors font-mono">
                  alayantyping@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Maps Shortcut */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider font-mono">
              Shop Location
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Ajman Industrial 1, Younus Market, <strong className="text-amber-400 font-semibold">Inside Shop #46</strong> (Behind Easy Way Typing, Opposite Marks & Save Market).
            </p>

            <a
              href={contactData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0E1422] text-amber-300 border border-slate-700/80 text-xs font-bold uppercase tracking-wider hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all cursor-pointer shadow-md"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 group-hover:text-slate-950" />
              <span>Google Maps Direction</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500 font-light">
          <div>
            © {new Date().getFullYear()} ALAYAN TYPING SERVICES (ATS) - Ajman, UAE. {t.footerRights}
          </div>
          <div className="text-slate-400">
            {t.emergencyNotice}
          </div>
        </div>
      </div>
    </footer>
  );
};
