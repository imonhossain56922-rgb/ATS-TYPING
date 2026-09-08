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

export const ServiceAccordion: React.FC<ServiceAccordionProps> = ({
  initialOpenId = 'gov-immigration',
  className = '',
  outletWhatsApp = '971505372999',
  outletName = 'UAE Typing Services'
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

  const handleWhatsAppInquiry = (serviceName: string, categoryTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello ${outletName}, I would like to inquire about *${serviceName}* under *${categoryTitle}*. Please guide me with requirements and processing time.`;
    const cleanNumber = outletWhatsApp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
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
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-900 text-amber-400 border border-slate-800">
                      {index + 1}. {category.letter}
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
                  <button
                    type="button"
                    onClick={(e) => handleWhatsAppInquiry(category.title, category.title, e)}
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire this category via WhatsApp</span>
                  </button>
                </div>

                {/* Sub-services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.services.map((serviceName: string) => (
                    <div
                      key={serviceName}
                      onClick={(e) => handleWhatsAppInquiry(serviceName, category.title, e)}
                      className="group/item flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-400/40 hover:bg-slate-900 transition-all cursor-pointer shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 group-hover/item:text-amber-400 transition-colors" />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors block">
                          {serviceName}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover/item:text-amber-400 opacity-0 group-hover/item:opacity-100 transition-all" />
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
