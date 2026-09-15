import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { ServiceGridCards } from '../components/ServiceGridCards';
import { PopularServicesScroller } from '../components/PopularServicesScroller';
import { ServiceAccordion } from '../components/ServiceAccordion';
import { officialServiceCategories } from '../data/officialServicesData';
import { SHARED_OWNER_PHONE } from '../data/outletsData';

export const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = officialServiceCategories.filter(category => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const matchesTitle = category.title.toLowerCase().includes(term);
    const matchesDesc = category.description.toLowerCase().includes(term);
    const matchesService = category.services.some(s => s.toLowerCase().includes(term));
    return matchesTitle || matchesDesc || matchesService;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Services Header */}
      <section className="pt-16 pb-14 bg-gradient-to-b from-[#DCEBFA] via-[#E8F1FC] to-[#F3F7FC] border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0B1B3D]">
            FULL SPECTRUM GOVERNMENT CLEARANCE
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] font-display">
            Our Official Services
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Explore our 8 official service categories covering immigration & visas, labour compliance, business setups, medical, driving, utilities, travel, and legal document typing.
          </p>

          {/* Quick Search Filter */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search services (e.g. Visa, Emirates ID, MOHRE, VAT, DEWA)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-300 focus:border-blue-600 focus:outline-none text-slate-800 placeholder-slate-400 text-sm shadow-sm transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 px-2 py-1 rounded bg-slate-100"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid View */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3 flex-wrap gap-2">
            <span>
              All <strong>8 official categories</strong> processed at our AMRK (Ind. 2) and ALAYAN (Ind. 1) outlets
            </span>
            <span>
              Direct consultation via WhatsApp available on every service
            </span>
          </div>

          {/* Show grid cards if no search query, or search results */}
          {!searchTerm ? (
            <>
              <PopularServicesScroller />
              <ServiceGridCards />
            </>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-slate-600 font-medium">
                Found {filteredCategories.length} matching categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCategories.map(cat => (
                  <div key={cat.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-lg font-bold text-[#0B1B3D]">{cat.title}</h3>
                    <p className="text-xs text-slate-500">{cat.description}</p>
                    <div className="space-y-1.5 pt-2">
                      {cat.services.map((s, i) => (
                        <div key={i} className="text-xs text-slate-700 flex items-center justify-between gap-2 p-2 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{s}</span>
                          </div>
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <a
                              href={`https://wa.me/971566745493?text=${encodeURIComponent(`Hello AMRK Typing Services, I would like to inquire about "${s}" under ${cat.title}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 rounded text-[10px] font-bold bg-[#2F3091]/10 text-[#2F3091] hover:bg-[#2F3091] hover:text-white transition-all border border-[#2F3091]/20 flex items-center gap-1"
                              title="Inquire at AMRK (+971 56 674 5493)"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>AMRK</span>
                            </a>
                            <a
                              href={`https://wa.me/971556140043?text=${encodeURIComponent(`Hello ALAYAN Typing Services, I would like to inquire about "${s}" under ${cat.title}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 rounded text-[10px] font-bold bg-[#006038]/10 text-[#006038] hover:bg-[#006038] hover:text-white transition-all border border-[#006038]/20 flex items-center gap-1"
                              title="Inquire at ALAYAN (+971 55 614 0043)"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>ALAYAN</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Assistance Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B1B3D] to-[#15284F] text-white text-center space-y-4 mt-12 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Ready to submit your application?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
              Visit either of our two convenient Ajman outlets or send your document copies directly through WhatsApp for immediate review.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/971566745493?text=Hello%20AMRK%20Typing%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#2F3091] hover:bg-[#252677] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                title="Chat with AMRK (+971 56 674 5493)"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#2F3091]" />
                <span>AMRK WhatsApp (056 6745493)</span>
              </a>
              <a
                href="https://wa.me/971556140043?text=Hello%20ALAYAN%20Typing%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#006038] hover:bg-[#004d2d] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                title="Chat with ALAYAN (+971 55 614 0043)"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#006038]" />
                <span>ALAYAN WhatsApp (055 6140043)</span>
              </a>
              <a
                href="tel:+971505372999"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Owner ({SHARED_OWNER_PHONE})</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
