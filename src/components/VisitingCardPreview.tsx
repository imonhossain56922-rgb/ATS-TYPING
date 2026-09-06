import React, { useState } from 'react';
import { Phone, Mail, MapPin, QrCode, ExternalLink, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { contactData } from '../data/contactData';
import { Logo } from './Logo';

export const VisitingCardPreview: React.FC<{ language: 'en' | 'bn' | 'ar' }> = ({ language }) => {
  const [activeSide, setActiveSide] = useState<'front' | 'back' | 'shop'>('front');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {/* Card Body Display */}
      {activeSide === 'front' && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#080C14] border border-slate-700/80 p-6 sm:p-9 shadow-2xl ring-1 ring-white/5">
          {/* Subtle Metallic Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-pro-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Column: Contact & Management */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <Logo variant="gold" showSubtitle={false} />
              </div>

              <div className="pt-2 border-b border-slate-700/80 pb-3">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-wide text-white font-display">
                    MR. DIDAR
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    Owner & Managing Director
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Government Transactions Specialist & PRO Consultant
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 border border-slate-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a href="tel:+971505372999" className="font-bold text-base text-amber-300 font-mono hover:text-amber-200 transition-colors">
                      050 537 2999
                    </a>
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Direct WhatsApp
                    </span>
                    <a href="tel:+971567665022" className="font-medium text-sm text-slate-300 font-mono hover:text-amber-300">
                      056 766 5022
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 border border-slate-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a href="tel:+971556140043" className="font-semibold text-slate-200 font-mono hover:text-amber-300">
                      055 614 0043
                    </a>
                    <span className="text-xs text-slate-400">(Shop Mobile & WhatsApp)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 border border-slate-700">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${contactData.primaryEmail}`} className="text-slate-300 hover:text-amber-300 break-all text-xs sm:text-sm font-mono transition-colors">
                    {contactData.primaryEmail}
                  </a>
                </div>

                <div className="flex items-start gap-2.5 text-slate-200 pt-1">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 border border-slate-700 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <span className="font-bold text-amber-300">Shop No. 46, Younus Market, Ajman Industrial 1</span>
                    <br />
                    <span className="text-slate-400">Opposite Marks & Save Market • Behind Easy Way Typing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Arabic Brand & Emblem */}
            <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center text-center md:text-right border-t md:border-t-0 md:border-l border-slate-700/80 pt-6 md:pt-0 md:pl-8">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-display">
                  ALAYAN
                </h2>
                <div className="text-xs uppercase tracking-widest text-amber-300/90 font-semibold font-mono">
                  TYPING & PRO SERVICES
                </div>
                <div className="text-3xl font-bold font-arabic text-amber-400 pt-1">
                  الأيـــــان
                </div>
                <div className="text-base font-semibold font-arabic text-slate-300">
                  لخدمات الطباعة والمعاملات
                </div>
              </div>

              {/* Verification Badges */}
              <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-end">
                <span className="text-[11px] px-3 py-1 rounded-full bg-slate-900 text-amber-300 border border-amber-500/30 font-medium">
                  🇧🇩 বাংলাদেশি টাইপিং সেন্টার
                </span>
                <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-medium">
                  🇦🇪 UAE ICP Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back Side Display: Comprehensive Services & QR Code */}
      {activeSide === 'back' && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#080C14] border border-slate-700/80 p-6 sm:p-9 shadow-2xl ring-1 ring-white/5">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Services List in 2 columns */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 uppercase">
                    OFFICIAL SERVICES CATALOGUE
                  </h3>
                </div>
                <span className="text-xs text-amber-300 font-semibold px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30">
                  Corporate & Individual Packages
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Immigration & Visa Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span className="font-semibold text-emerald-400">bKash Remittance Services 🇧🇩</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Emirates ID & Medical Typing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Trade License New & Renewal</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Ajman Police & Traffic Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Civil Defence Certificates</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>FEWA & Sewerage Online Clearance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>GPSSA & Labor Court Claims</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Multilingual Typist (EN, AR, BN, UR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span className="text-amber-300 font-semibold">10-Year Golden Visa Consultation</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Quotation, CV & Official Drafting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Ministry Legal Translations</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>VAT & Corporate Tax Submissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span>Complete PRO Business Setup</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-lg border border-slate-700/60">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span className="font-bold text-amber-300">Mandatory Health Insurance & ILOE</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-lg border border-slate-700/60">
                  <span className="text-amber-400 font-bold">◈</span>
                  <span className="font-bold text-amber-300">Airline Tickets & Visit Visa Extension</span>
                </div>
              </div>
            </div>

            {/* QR Code & Scan for location */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-900/90 rounded-2xl border border-slate-700/70 text-center shadow-inner">
              <Logo variant="gold" showSubtitle={false} className="mb-2" />
              
              <div className="p-3 bg-white rounded-2xl shadow-xl my-3 flex flex-col items-center">
                <svg viewBox="0 0 100 100" className="w-28 h-28">
                  <path fill="#000" d="M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z M35,10 h10 v10 h-10 z M50,10 h15 v5 h-15 z M35,25 h20 v10 h-20 z M40,40 h20 v20 h-20 z M10,40 h15 v15 h-15 z M70,40 h25 v10 h-25 z M70,60 h10 v15 h-10 z M85,75 h10 v20 h-10 z M35,70 h15 v25 h-15 z M55,75 h20 v15 h-20 z" />
                </svg>
                <span className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider mt-1 flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-amber-600" />
                  GPS Google Maps
                </span>
              </div>

              <a
                href={contactData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 active:scale-95"
              >
                <span>Navigate on Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Shop 46 Signboard Banner View */}
      {activeSide === 'shop' && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#080C14] border border-slate-700/80 p-8 sm:p-10 shadow-2xl text-center space-y-5">
          <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xl sm:text-3xl px-8 py-2 rounded-xl shadow-lg uppercase tracking-wider font-arabic">
            الـطـبـاعـة
          </div>

          <div className="text-3xl sm:text-5xl font-light tracking-tight text-white font-display">
            TYPING <span className="font-extrabold text-amber-400">SERVICES</span>
          </div>

          <div className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-bengali">
            টাইপিং সার্ভিসেস
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <div className="bg-slate-900/90 px-5 py-2.5 rounded-2xl border border-slate-700/70 flex items-center gap-2.5 shadow-sm">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-slate-400">Landline:</span>
              <a href="tel:+97165209420" className="font-bold text-white text-sm font-mono hover:text-amber-300 transition-colors">
                06-5209420
              </a>
            </div>

            <div className="bg-slate-900/90 px-5 py-2.5 rounded-2xl border border-slate-700/70 flex items-center gap-2.5 shadow-sm">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-amber-400">Mobile & WhatsApp:</span>
              <a href="tel:+971556140043" className="font-bold text-amber-300 text-sm font-mono hover:text-amber-200 transition-colors">
                055 614 0043
              </a>
            </div>
          </div>

          <div className="pt-2">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-3 rounded-full shadow-xl shadow-amber-500/20 uppercase tracking-wider">
              <span>➔</span>
              <span>SHOP NO. 46 (INSIDE YOUNUS MARKET)</span>
              <span>➔</span>
            </div>
            <p className="text-xs text-slate-400 mt-3 font-bengali">
              ইউনুস মার্কেট এর ভেতরে - শপ নং ৪৬ (ইজি ওয়ে টাইপিং এর পেছনে)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
