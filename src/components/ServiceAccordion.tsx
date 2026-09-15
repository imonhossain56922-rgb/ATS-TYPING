import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  Building, 
  Calculator, 
  ShieldCheck, 
  Car, 
  Zap, 
  Plane, 
  FileText, 
  Stamp, 
  Award, 
  ChevronDown, 
  CheckCircle2, 
  MessageCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { officialServiceCategories } from '../data/officialServicesData';
import { ServiceCategoryGroup } from '../types';

interface ServiceAccordionProps {
  initialOpenId?: string;
  className?: string;
  outletWhatsApp?: string;
  outletName?: string;
}

const AMRK_WHATSAPP = '971566745493';
const ALAYAN_WHATSAPP = '971556140043';

export const ServiceAccordion: React.FC<ServiceAccordionProps> = ({
  initialOpenId = 'immigration-gov',
  className = '',
  outletWhatsApp,
  outletName
}) => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(initialOpenId);

  const toggleCategory = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  const getCategoryIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-amber-400 flex-shrink-0" };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Building': return <Building {...props} />;
      case 'Calculator': return <Calculator {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Plane': return <Plane {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Stamp': return <Stamp {...props} />;
      case 'Award': return <Award {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  const handleWhatsAppInquiry = (
    serviceName: string, 
    categoryTitle: string, 
    target: 'amrk' | 'alayan' | 'default',
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    let targetNumber = outletWhatsApp ? outletWhatsApp.replace(/[^0-9]/g, '') : AMRK_WHATSAPP;
    let targetName = outletName || 'AMRK Typing Services';

    if (target === 'amrk') {
      targetNumber = AMRK_WHATSAPP;
      targetName = 'AMRK Typing Services';
    } else if (target === 'alayan') {
      targetNumber = ALAYAN_WHATSAPP;
      targetName = 'ALAYAN Typing Services';
    }

    const message = `Hello ${targetName}, I would like to inquire about *${serviceName}* under *${categoryTitle}*. Please guide me with requirements and processing time.`;
    window.open(`https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={`space-y-4 ${className}`} role="region" aria-label="Official Services Accordion">
      {officialServiceCategories.map((category: ServiceCategoryGroup, index: number) => {
        const isOpen = openCategoryId === category.id;
        const accordionHeaderId = `accordion-header-${category.id}`;
        const accordionPanelId = `accordion-panel-${category.id}`;

        return (
          <div
            key={category.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-[#0E1526] border-amber-500/50 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/20'
                : 'bg-[#0B1120] border-slate-800/80 hover:border-slate-700 hover:bg-[#0D1424]'
            }`}
          >
            {/* Accordion Header / Toggle Button */}
            <button
              id={accordionHeaderId}
              type="button"
              onClick={() => toggleCategory(category.id)}
              aria-expanded={isOpen}
              aria-controls={accordionPanelId}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80"
            >
              <div className="flex items-start sm:items-center gap-4 min-w-0">
                {/* Icon Badge */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                  isOpen
                    ? 'bg-amber-400/10 border-amber-400/40 text-amber-400 shadow-inner'
                    : 'bg-slate-900 border-slate-700/80 text-amber-400 group-hover:border-slate-600'
                }`}>
                  {getCategoryIcon(category.iconName)}
                </div>

                {/* Title & Description */}
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-900 text-amber-400 border border-slate-800">
                      {category.letter}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-display">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-1 sm:line-clamp-none font-light">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Action Indicator & Chevron */}
              <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                <span className={`hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full border transition-all ${
                  isOpen 
                    ? 'bg-amber-400 text-slate-950 border-amber-300' 
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-amber-400'
                }`}>
                  {isOpen ? 'Close' : 'View Services'}
                </span>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center bg-slate-900 border border-slate-800 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-amber-400/20 text-amber-400 border-amber-400/40' : 'text-slate-400'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {/* Collapsible Panel with Animated Content */}
            {isOpen && (
              <div
                id={accordionPanelId}
                role="region"
                aria-labelledby={accordionHeaderId}
                className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 animate-fadeIn"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pt-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 font-mono">
                    Official Services Included ({category.services.length})
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleWhatsAppInquiry(category.title, category.title, 'amrk', e)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] bg-[#2F3091]/20 text-indigo-300 hover:bg-[#2F3091] hover:text-white border border-[#2F3091]/40 font-semibold transition-all"
                      title="Inquire at AMRK (+971 56 674 5493)"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>AMRK (056 6745493)</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleWhatsAppInquiry(category.title, category.title, 'alayan', e)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] bg-[#006038]/20 text-emerald-300 hover:bg-[#006038] hover:text-white border border-[#006038]/40 font-semibold transition-all"
                      title="Inquire at ALAYAN (+971 55 614 0043)"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>ALAYAN (055 6140043)</span>
                    </button>
                  </div>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.services.map((serviceName: string) => (
                    <div
                      key={serviceName}
                      className="group/item flex items-center justify-between gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-400/40 hover:bg-slate-900 transition-all shadow-sm"
                    >
                      <div className="flex items-start gap-2 min-w-0 flex-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 group-hover/item:text-amber-400 transition-colors" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors">
                          {serviceName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          type="button"
                          onClick={(e) => handleWhatsAppInquiry(serviceName, category.title, 'amrk', e)}
                          className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#2F3091]/20 text-indigo-300 hover:bg-[#2F3091] hover:text-white transition-all border border-[#2F3091]/30 flex items-center gap-0.5"
                          title="Inquire at AMRK (+971 56 674 5493)"
                        >
                          <MessageCircle className="w-2.5 h-2.5" />
                          <span>AMRK</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleWhatsAppInquiry(serviceName, category.title, 'alayan', e)}
                          className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#006038]/20 text-emerald-300 hover:bg-[#006038] hover:text-white transition-all border border-[#006038]/30 flex items-center gap-0.5"
                          title="Inquire at ALAYAN (+971 55 614 0043)"
                        >
                          <MessageCircle className="w-2.5 h-2.5" />
                          <span>ALAYAN</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
