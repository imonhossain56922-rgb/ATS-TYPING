import React from 'react';
import { X, CheckCircle2, Clock, FileText, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { translations } from '../data/translations';
import { contactData } from '../data/contactData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  language: Language;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, language }) => {
  if (!service) return null;

  const t = translations[language];

  const title = language === 'bn' ? service.titleBn : language === 'ar' ? service.titleAr : service.titleEn;
  const desc = language === 'bn' ? service.descBn : language === 'ar' ? service.descAr : service.descEn;
  const docs = service.requiredDocuments[language] || service.requiredDocuments.en;
  const procTime = service.processingTime ? service.processingTime[language] || service.processingTime.en : null;
  const highlights = service.keyFeatures ? service.keyFeatures[language] || service.keyFeatures.en : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0E1422] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col ring-1 ring-white/5">
        {/* Modal Header */}
        <div className="p-6 bg-[#0B1120] border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-slate-900 text-amber-400 border border-amber-500/25 mb-2.5 uppercase tracking-wider font-mono">
              ALAYAN TYPING SERVICES • AJMAN
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              {title}
            </h3>
          </div>

          <button
            id="btn-close-service-modal"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar text-slate-200">
          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-[#080C14] p-5 rounded-2xl border border-slate-800/90 font-light">
            {desc}
          </p>

          {/* Processing Time & Location Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {procTime && (
              <div className="bg-[#080C14] p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">{t.processingTimeHeading}</div>
                  <div className="text-sm font-bold text-white font-mono">{procTime}</div>
                </div>
              </div>
            )}

            <div className="bg-[#080C14] p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-400 font-medium">Shop Location</div>
                <div className="text-sm font-bold text-amber-300">Shop #46, Younus Market</div>
              </div>
            </div>
          </div>

          {/* Required Documents Checklist */}
          {docs && docs.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>{t.requiredDocsHeading}</span>
              </h4>
              <ul className="space-y-2">
                {docs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 bg-[#080C14] p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t.keyHighlights}
              </h4>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h, i) => (
                  <span key={i} className="text-xs px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-200 border border-slate-700/80">
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-5 bg-[#0B1120] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <a
            href="tel:+971505372999"
            className="px-4 py-2.5 rounded-full text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">050 537 2999</span>
          </a>

          <a
            id="modal-whatsapp-cta"
            href={`https://wa.me/971505372999?text=${encodeURIComponent(
              `Hello Mr. Didar! I need assistance with: *${service.titleEn}* (${title}). Please advise on requirements and special rate.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-transform transform active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
            <span>{t.directWhatsApp}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
