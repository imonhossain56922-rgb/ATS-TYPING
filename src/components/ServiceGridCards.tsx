import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  Coins, 
  Shield, 
  Car, 
  Zap, 
  Plane, 
  FileText, 
  Cog, 
  Star, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';
import { officialServiceCategories } from '../data/officialServicesData';
import { ServiceCategoryGroup } from '../types';

interface ServiceGridCardsProps {
  outletWhatsApp?: string;
  outletName?: string;
}

export const ServiceGridCards: React.FC<ServiceGridCardsProps> = ({
  outletWhatsApp = '971505372999',
  outletName = 'UAE Typing Services'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryGroup | null>(null);

  // Colors & Icons corresponding exactly to reference image
  const categoryConfig: { [key: string]: { bg: string; icon: React.ReactNode; preview: string } } = {
    'gov-immigration': {
      bg: 'bg-[#0B1B3D]',
      icon: <Building2 className="w-6 h-6 text-white" />,
      preview: 'Visa, Emirates ID, ICP, GDRFA and more.'
    },
    'labour-employment': {
      bg: 'bg-[#008751]',
      icon: <Users className="w-6 h-6 text-white" />,
      preview: 'MOHRE, work permits, contracts and more.'
    },
    'business-company': {
      bg: 'bg-[#6D28D9]',
      icon: <Briefcase className="w-6 h-6 text-white" />,
      preview: 'Business setup, trade license, company formation and more.'
    },
    'tax-accounting': {
      bg: 'bg-[#D97706]',
      icon: <Coins className="w-6 h-6 text-white" />,
      preview: 'VAT, corporate tax, accounting and more.'
    },
    'insurance': {
      bg: 'bg-[#DC2626]',
      icon: <Shield className="w-6 h-6 text-white" />,
      preview: 'Health, car, visa and travel insurance.'
    },
    'driving-transport': {
      bg: 'bg-[#0284C7]',
      icon: <Car className="w-6 h-6 text-white" />,
      preview: 'Driving license, vehicle registration, traffic services and more.'
    },
    'government-utility': {
      bg: 'bg-[#7C3AED]',
      icon: <Zap className="w-6 h-6 text-white" />,
      preview: 'DEWA, water, sewerage, tenancy and more.'
    },
    'travel-ticketing': {
      bg: 'bg-[#0D9488]',
      icon: <Plane className="w-6 h-6 text-white" />,
      preview: 'Air tickets, hotel booking, travel insurance and more.'
    },
    'document-services': {
      bg: 'bg-[#D97706]',
      icon: <FileText className="w-6 h-6 text-white" />,
      preview: 'Typing, translation, printing, scanning and more.'
    },
    'pro-processing': {
      bg: 'bg-[#1E293B]',
      icon: <Cog className="w-6 h-6 text-white" />,
      preview: 'PRO services, document clearance, government submission and more.'
    },
    'other-services': {
      bg: 'bg-[#E11D48]',
      icon: <Star className="w-6 h-6 text-white" />,
      preview: 'Police clearance, medical, passport, NOC and more.'
    },
  };

  const handleCardClick = (category: ServiceCategoryGroup) => {
    setSelectedCategory(category);
  };

  const handleWhatsAppInquiry = (serviceName: string, categoryTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanNumber = outletWhatsApp.replace('+', '').replace(/\s/g, '');
    const message = `Hello ${outletName}, I would like to inquire about "${serviceName}" under ${categoryTitle}.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* 11 Service Cards in Responsive Grid matching reference image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {officialServiceCategories.map((cat, idx) => {
          const config = categoryConfig[cat.id] || {
            bg: 'bg-[#0B1B3D]',
            icon: <Building2 className="w-6 h-6 text-white" />,
            preview: cat.description
          };

          // On row 2, if 11 items, span the last ones nicely or keep compact
          return (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat)}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-500/80 p-5 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                {/* Circular Colored Icon Badge matching reference image */}
                <div className={`w-12 h-12 rounded-full ${config.bg} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0`}>
                  {config.icon}
                </div>

                {/* Title & Preview */}
                <div className="space-y-1">
                  <h3 className="font-bold text-[#0B1B3D] text-sm leading-snug group-hover:text-blue-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                    {config.preview}
                  </p>
                </div>
              </div>

              {/* "View Services →" Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-blue-600 group-hover:text-blue-700">
                <span>View Services</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Modal when clicking any service card */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col animate-scaleUp">
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#0B1B3D] to-[#15284F] text-white flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${categoryConfig[selectedCategory.id]?.bg || 'bg-amber-500'} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                  {categoryConfig[selectedCategory.id]?.icon || <Building2 className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                    Category {selectedCategory.letter}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display">
                    {selectedCategory.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {selectedCategory.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategory(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Subservices List */}
            <div className="p-6 overflow-y-auto space-y-3 flex-1 bg-slate-50">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                Available Procedures & Typing Services:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCategory.services.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 flex items-center justify-between gap-3 text-xs transition-colors shadow-xs group"
                  >
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                    <button
                      onClick={(e) => handleWhatsAppInquiry(service, selectedCategory.title, e)}
                      title="Inquire on WhatsApp"
                      className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors flex-shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500">
                Processed at AMRK (Ind. 2) & ALAYAN (Ind. 1) outlets.
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${outletWhatsApp.replace('+', '').replace(/\s/g, '')}?text=${encodeURIComponent(`Hello ${outletName}, I want to inquire about ${selectedCategory.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire Category on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
