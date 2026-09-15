import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  Stamp,
  Cog, 
  Star, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';
import { officialServiceCategories } from '../data/officialServicesData';
import { ServiceCategoryGroup } from '../types';
import { recordServiceClick } from '../utils/serviceAnalytics';

interface ServiceGridCardsProps {
  outletWhatsApp?: string;
  outletName?: string;
}

const AMRK_WHATSAPP = '971566745493';
const ALAYAN_WHATSAPP = '971556140043';
const cleanNumber = (num?: string) => (num || '').replace(/[^0-9]/g, '');

export const ServiceGridCards: React.FC<ServiceGridCardsProps> = ({
  outletWhatsApp,
  outletName
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryGroup | null>(null);
  const location = useLocation();

  // Automatically open the service dialog when URL hash matches any service ID
  useEffect(() => {
    const rawHash = location.hash.replace('#', '').trim();
    if (rawHash) {
      const match = officialServiceCategories.find(c => c.id === rawHash);
      if (match) {
        setSelectedCategory(match);
      }
    }
  }, [location.hash, location.key]);

  const handleCloseModal = () => {
    setSelectedCategory(null);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  // Colors & Icons for the 8 official service categories
  const categoryConfig: { [key: string]: { bg: string; icon: React.ReactNode; preview: string } } = {
    'immigration-gov': {
      bg: 'bg-[#0B1B3D]',
      icon: <Building2 className="w-6 h-6 text-white" />,
      preview: 'ICP, GDRFA, Golden Visa, residence permits, and entry visas.'
    },
    'labour-mohre': {
      bg: 'bg-[#008751]',
      icon: <Users className="w-6 h-6 text-white" />,
      preview: 'MOHRE, work permits, labour contracts, quota and WPS clearance.'
    },
    'business-company': {
      bg: 'bg-[#6D28D9]',
      icon: <Briefcase className="w-6 h-6 text-white" />,
      preview: 'Company setup, trade licenses, Ejari, PRO, corporate tax & Civil Defense.'
    },
    'medical-insurance': {
      bg: 'bg-[#DC2626]',
      icon: <Shield className="w-6 h-6 text-white" />,
      preview: 'Visa medical, health, car, travel, and ILOE insurance.'
    },
    'driving-transport': {
      bg: 'bg-[#0284C7]',
      icon: <Car className="w-6 h-6 text-white" />,
      preview: 'Driving license, vehicle registration, RTA and traffic fine payments.'
    },
    'government-utility': {
      bg: 'bg-[#7C3AED]',
      icon: <Zap className="w-6 h-6 text-white" />,
      preview: 'DEWA, SEWA, FEWA, police clearance, consulate & MOFA attestation.'
    },
    'travel-ticketing': {
      bg: 'bg-[#0D9488]',
      icon: <Plane className="w-6 h-6 text-white" />,
      preview: 'Air tickets, ticket changes, visit visas, Umrah and tour packages.'
    },
    'other-typing-services': {
      bg: 'bg-[#D97706]',
      icon: <FileText className="w-6 h-6 text-white" />,
      preview: 'Arabic/English typing, translation, CVs, undertakings, and status checks.'
    },
  };

  const handleCardClick = (category: ServiceCategoryGroup) => {
    setSelectedCategory(category);
    recordServiceClick(category.id);
  };

  const handleSpecificWhatsAppInquiry = (
    target: 'amrk' | 'alayan',
    serviceName: string,
    categoryTitle: string,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    if (selectedCategory) {
      recordServiceClick(selectedCategory.id);
    }
    if (target === 'amrk') {
      const message = `Hello AMRK Typing Services, I would like to inquire about "${serviceName}" under ${categoryTitle}.`;
      window.open(`https://wa.me/${AMRK_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      const message = `Hello ALAYAN Typing Services, I would like to inquire about "${serviceName}" under ${categoryTitle}.`;
      window.open(`https://wa.me/${ALAYAN_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleWhatsAppInquiry = (serviceName: string, categoryTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCategory) {
      recordServiceClick(selectedCategory.id);
    }
    const cleanNumber = (outletWhatsApp || AMRK_WHATSAPP).replace('+', '').replace(/\s/g, '');
    const currentOutletName = outletName || (cleanNumber === ALAYAN_WHATSAPP ? 'ALAYAN Typing Services' : 'AMRK Typing Services');
    const message = `Hello ${currentOutletName}, I would like to inquire about "${serviceName}" under ${categoryTitle}.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* 8 Service Cards in Responsive 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
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
        <div 
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col animate-scaleUp"
          >
            
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
                onClick={handleCloseModal}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Subservices List */}
            <div className="p-6 overflow-y-auto space-y-3 flex-1 bg-slate-50">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Available Procedures & Typing Services:
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#2F3091]">
                    <span className="w-2 h-2 rounded-full bg-[#2F3091]" /> AMRK (Ind. 2)
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#006038]">
                    <span className="w-2 h-2 rounded-full bg-[#006038]" /> ALAYAN (Ind. 1)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCategory.services.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 flex items-center justify-between gap-2.5 text-xs transition-colors shadow-xs group"
                  >
                    <div className="flex items-center gap-2 text-slate-800 font-medium min-w-0 flex-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="line-clamp-2">{service}</span>
                    </div>

                    {/* WhatsApp Action Buttons */}
                    {outletWhatsApp ? (
                      <button
                        onClick={(e) => handleWhatsAppInquiry(service, selectedCategory.title, e)}
                        title={`Inquire on WhatsApp with ${outletName || 'Typist'}`}
                        className={`px-2.5 py-1.5 rounded-lg text-white font-bold text-[11px] flex items-center gap-1.5 shadow-xs transition-colors flex-shrink-0 ${
                          cleanNumber(outletWhatsApp) === ALAYAN_WHATSAPP
                            ? 'bg-[#006038] hover:bg-[#004d2d]'
                            : 'bg-[#2F3091] hover:bg-[#252677]'
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={(e) => handleSpecificWhatsAppInquiry('amrk', service, selectedCategory.title, e)}
                          title="Inquire at AMRK Typing Services (+971 56 674 5493)"
                          className="px-2 py-1 rounded-md text-[10px] font-bold bg-[#2F3091]/10 text-[#2F3091] hover:bg-[#2F3091] hover:text-white transition-all flex items-center gap-1 border border-[#2F3091]/25"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>AMRK</span>
                        </button>
                        <button
                          onClick={(e) => handleSpecificWhatsAppInquiry('alayan', service, selectedCategory.title, e)}
                          title="Inquire at ALAYAN Typing Services (+971 55 614 0043)"
                          className="px-2 py-1 rounded-md text-[10px] font-bold bg-[#006038]/10 text-[#006038] hover:bg-[#006038] hover:text-white transition-all flex items-center gap-1 border border-[#006038]/25"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>ALAYAN</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 text-center sm:text-left">
                Select an outlet to send documents and inquiries on WhatsApp:
              </span>
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${AMRK_WHATSAPP}?text=${encodeURIComponent(`Hello AMRK Typing Services, I want to inquire about ${selectedCategory.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-[#2F3091] hover:bg-[#252677] text-white font-bold flex items-center justify-center gap-1.5 shadow-sm text-xs transition-all"
                  title="AMRK WhatsApp (+971 56 674 5493)"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>AMRK (056 6745493)</span>
                </a>
                <a
                  href={`https://wa.me/${ALAYAN_WHATSAPP}?text=${encodeURIComponent(`Hello ALAYAN Typing Services, I want to inquire about ${selectedCategory.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-[#006038] hover:bg-[#004d2d] text-white font-bold flex items-center justify-center gap-1.5 shadow-sm text-xs transition-all"
                  title="ALAYAN WhatsApp (+971 55 614 0043)"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>ALAYAN (055 6140043)</span>
                </a>
                <button
                  onClick={handleCloseModal}
                  className="px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium cursor-pointer"
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
