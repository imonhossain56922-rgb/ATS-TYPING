import React, { useState } from 'react';
import { FileCheck, MessageCircle, Send, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { translations } from '../data/translations';
import { Language } from '../types';
import { contactData } from '../data/contactData';

interface QuoteCalculatorProps {
  language: Language;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ language }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');

  const t = translations[language];

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const title = language === 'bn' ? selectedService.titleBn : language === 'ar' ? selectedService.titleAr : selectedService.titleEn;
  const docs = selectedService.requiredDocuments[language] || selectedService.requiredDocuments.en;
  const procTime = selectedService.processingTime ? selectedService.processingTime[language] || selectedService.processingTime.en : 'Same Day';

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `*Inquiry from ALAYAN Website:*
• *Service:* ${selectedService.titleEn} (${title})
• *Client Name:* ${clientName || 'Valued Customer'}
• *Contact:* ${clientPhone || 'WhatsApp Direct'}
• *Notes/Timeline:* ${clientNotes || 'Requesting requirements & quote'}

Hello Mr. Didar, please provide guidance for this service.`;

    const url = `https://wa.me/971505372999?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#0B1120] relative overflow-hidden border-t border-slate-800/80">
      {/* Decorative Radial Grid & Blur */}
      <div className="absolute inset-0 bg-pro-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-display">
            {language === 'bn' ? (
              <>সার্ভিস ক্যালকুলেটর ও <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">প্রয়োজনীয় কাগজপত্র</span></>
            ) : language === 'ar' ? (
              <>حاسبة الخدمات <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-arabic">والمستندات المطلوبة</span></>
            ) : (
              <>Document Checklist & <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Service Assistant</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            {t.quoteSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Service Selector & Form */}
          <div className="lg:col-span-6 bg-[#0E1422] rounded-3xl border border-slate-800/90 p-7 sm:p-9 shadow-2xl ring-1 ring-white/5">
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  {t.selectService}
                </label>
                <select
                  id="calc-service-select"
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-slate-100 font-medium focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all cursor-pointer"
                >
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.id} className="bg-[#0E1422] py-1 text-slate-200">
                      {language === 'bn' ? svc.titleBn : language === 'ar' ? svc.titleAr : svc.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {t.yourName}
                </label>
                <input
                  id="calc-input-name"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {t.yourPhone}
                </label>
                <input
                  id="calc-input-phone"
                  type="text"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+971 5X XXX XXXX"
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {t.specialNote}
                </label>
                <textarea
                  id="calc-input-notes"
                  rows={2}
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="e.g. Urgent 24-hour visa processing needed..."
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all resize-none"
                />
              </div>

              <button
                id="calc-btn-submit"
                type="submit"
                className="w-full py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
                <span>{t.generateWhatsAppInquiry}</span>
              </button>
            </form>
          </div>

          {/* Right Column: Live Document Checklist Box */}
          <div className="lg:col-span-6 bg-[#0E1422] rounded-3xl border border-slate-800/90 p-7 sm:p-9 shadow-2xl relative ring-1 ring-white/5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-base sm:text-lg text-white font-display">
                  Required Documents Checklist
                </h3>
              </div>
              <span className="text-[11px] px-3 py-1 rounded-full bg-slate-900 text-amber-300 font-bold border border-amber-500/25 uppercase tracking-wider font-mono">
                Shop #46 Ajman
              </span>
            </div>

            <div className="py-5 space-y-4">
              <div>
                <span className="text-xs text-slate-400 font-medium">Selected Service:</span>
                <div className="text-lg font-bold text-amber-300 font-display">
                  {title}
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300 bg-[#080C14] p-3.5 rounded-2xl border border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  Expected Turnaround: <strong className="text-white font-mono ml-1">{procTime}</strong>
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  Documents You Need To Bring:
                </div>
                <ul className="space-y-2">
                  {docs.map((d, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-[#080C14] p-3 rounded-xl border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 text-xs text-slate-400 flex items-start gap-2.5 border-t border-slate-800 font-light">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  Original passport, Emirates ID, or softcopy PDFs on your mobile phone / WhatsApp are accepted at Shop 46.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
