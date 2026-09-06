import React from 'react';
import { ShieldCheck, Users, CheckCircle, Store, MapPin, Phone, Award, Globe } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';
import { contactData } from '../data/contactData';

interface AboutAndShopProps {
  language: Language;
}

export const AboutAndShop: React.FC<AboutAndShopProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-[#080C14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-display">
            {language === 'bn' ? (
              <>কেন বেছে নেবেন <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">আল আয়ান টাইপিং?</span></>
            ) : language === 'ar' ? (
              <>لماذا تختار <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-arabic">مركز الأيان للطباعة؟</span></>
            ) : (
              <>Why Choose <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Alayan Typing Services</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            {t.aboutSubtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="bg-[#0E1422] p-6 rounded-2xl border border-slate-800/90 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 space-y-3.5 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center border border-slate-700/80 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white font-display">{t.feature1Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{t.feature1Desc}</p>
          </div>

          <div className="bg-[#0E1422] p-6 rounded-2xl border border-slate-800/90 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 space-y-3.5 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center border border-slate-700/80 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white font-display">{t.feature2Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{t.feature2Desc}</p>
          </div>

          <div className="bg-[#0E1422] p-6 rounded-2xl border border-slate-800/90 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 space-y-3.5 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center border border-slate-700/80 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white font-display">{t.feature3Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{t.feature3Desc}</p>
          </div>

          <div className="bg-[#0E1422] p-6 rounded-2xl border border-slate-800/90 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 space-y-3.5 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center border border-slate-700/80 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white font-display">{t.feature4Title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{t.feature4Desc}</p>
          </div>
        </div>

        {/* Physical Shop Spotlight Banner */}
        <div className="bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#080C14] rounded-3xl border border-slate-800/90 p-8 sm:p-10 shadow-2xl ring-1 ring-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-light text-white font-display">
                Alayan Typing Services — <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">Shop #46</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Led by <strong className="text-amber-300 font-semibold">Mr. Didar</strong>, our center is equipped with high-speed government portal links, direct biometrics typing stations, document scanners, and legal translation typists.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5 bg-[#080C14] p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free Consultation on Visa Status</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#080C14] p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No Overstay Fine / Penalty Risk</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#080C14] p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Corporate Discount Rates</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#080C14] p-3 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>WhatsApp Updates on Application</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-5 bg-[#080C14] rounded-2xl border border-slate-800 p-6 text-center space-y-4 shadow-inner">
              <div className="text-xs uppercase font-bold text-amber-400 tracking-wider font-mono">
                Direct Contact with Mr. Didar
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                050 537 2999
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Shop No: 055 614 0043 • Landline: 06-5209420
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="tel:+971505372999"
                  className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Mr. Didar Direct</span>
                </a>
                <a
                  href={contactData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
