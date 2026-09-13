import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  X, 
  UserCheck, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { SHARED_OWNER_PHONE_INTL, outletsData } from '../data/outletsData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const ownerNumber = SHARED_OWNER_PHONE_INTL.replace('+', '');
  const amrkOutlet = outletsData.find(o => o.id === 'amrk');
  const alayanOutlet = outletsData.find(o => o.id === 'alayan' || o.id === 'ats');

  const amrkNumber = amrkOutlet ? amrkOutlet.officePhoneIntl.replace('+', '') : '971566745493';
  const alayanNumber = alayanOutlet ? alayanOutlet.officePhoneIntl.replace('+', '') : '971556140043';

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    const handleOpenExternal = () => {
      setIsOpen(true);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-whatsapp-popup', handleOpenExternal);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-whatsapp-popup', handleOpenExternal);
    };
  }, []);

  const location = useLocation();

  const isAmrkPage = location.pathname.startsWith('/amrk-typing-services');
  const isAlayanPage = location.pathname.startsWith('/alayan-typing-services') || location.pathname.startsWith('/ats-typing-services');

  const allChatOptions = [
    {
      id: 'owner-didar',
      type: 'icon' as const,
      title: 'Mr, Didar (Owner)',
      subtitle: 'Owner of AMRK Typing & ALAYAN Typing.',
      phoneDisplay: '+971 50 537 2999',
      icon: UserCheck,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-200',
      whatsappUrl: `https://wa.me/${ownerNumber}?text=${encodeURIComponent('Hello Mr. Didar, I would like to inquire about typing services.')}`
    },
    {
      id: 'owner-hamid',
      type: 'icon' as const,
      title: 'Mr, Hamid (Owner)',
      subtitle: 'Owner of AMRK Typing',
      phoneDisplay: '+971 55 595 0006',
      icon: UserCheck,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200',
      whatsappUrl: `https://wa.me/971555950006?text=${encodeURIComponent('Hello Mr. Hamid, I would like to inquire about AMRK typing services.')}`
    },
    {
      id: 'amrk-outlet',
      type: 'logo' as const,
      logoUrl: '/amrk-logo.jpg',
      title: 'AMRK Typing Services',
      subtitle: 'Ajman Industrial 2 • Near Bengali Market Road',
      phoneDisplay: '+971 56 674 5493',
      whatsappUrl: `https://wa.me/${amrkNumber}?text=${encodeURIComponent('Hello AMRK Typing Services (Ajman Ind. 2), I would like to inquire about typing services.')}`
    },
    {
      id: 'alayan-outlet',
      type: 'logo' as const,
      logoUrl: '/ats-logo.jpg',
      title: 'ALAYAN Typing Services',
      subtitle: 'Ajman Industrial 1 • Central Souq (Shop No. 46)',
      phoneDisplay: '+971 55 614 0043',
      whatsappUrl: `https://wa.me/${alayanNumber}?text=${encodeURIComponent('Hello ALAYAN Typing Services (Ajman Ind. 1), I would like to inquire about typing services.')}`
    }
  ];

  // Specific requirement:
  // - On AMRK Typing Services page: Only Mr Didar, Mr Hamid, & AMRK Typing Services (ALAYAN option removed)
  // - On ALAYAN Typing Services page: Only Mr Didar, & ALAYAN Typing Services (AMRK and Mr Hamid options removed)
  // - On all other pages: Keep all options as they are
  const displayedChatOptions = useMemo(() => {
    if (isAmrkPage) {
      return allChatOptions.filter(opt => opt.id !== 'alayan-outlet');
    }
    if (isAlayanPage) {
      return allChatOptions.filter(opt => opt.id === 'owner-didar' || opt.id === 'alayan-outlet');
    }
    return allChatOptions;
  }, [isAmrkPage, isAlayanPage, ownerNumber, amrkNumber, alayanNumber]);

  return (
    <aside
      ref={containerRef}
      aria-label="WhatsApp Floating Support"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Pop-up options menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
            className="mb-3 w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-900/5"
          >
            {/* Pop-up Header */}
            <div className="bg-gradient-to-r from-[#008751] to-[#00a859] p-4 text-white relative">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>Instant Support</span>
                  </div>
                  <h3 className="font-bold text-base font-display">
                    Start WhatsApp Chat
                  </h3>
                  <p className="text-xs text-emerald-100">
                    Select which contact or outlet you want to connect with:
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-black/15 hover:bg-black/25 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close WhatsApp options"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* WhatsApp Chat Links List */}
            <div className="p-3 space-y-2 bg-slate-50/50 max-h-[420px] overflow-y-auto">
              {displayedChatOptions.map((opt) => {
                return (
                  <a
                    key={opt.id}
                    href={opt.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-white hover:bg-emerald-50/80 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all text-left"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      {opt.type === 'logo' && opt.logoUrl ? (
                        <div className="w-10 h-10 rounded-xl border border-slate-200 bg-white p-1 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xs">
                          <img
                            src={opt.logoUrl}
                            alt={opt.title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ) : (
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-xs ${opt.iconColor}`}>
                          {opt.icon && <opt.icon className="w-5 h-5" />}
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-xs sm:text-[13px] text-[#0B1B3D] group-hover:text-[#008751] transition-colors truncate block">
                          {opt.title}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1 block leading-tight mt-0.5">
                          {opt.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-emerald-100 group-hover:bg-[#008751] text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0 ml-2">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Pop-up Footer Notice */}
            <div className="px-4 py-2.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Direct WhatsApp</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Quick Reply</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp Trigger Button */}
      <button
        id="btn-floating-whatsapp-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-2 border-white focus:outline-none ${
          isOpen
            ? 'bg-slate-900 hover:bg-slate-800 text-white rotate-90 scale-100'
            : 'bg-[#00a859] hover:bg-[#00924d] text-white hover:scale-110 active:scale-95'
        }`}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close WhatsApp options' : 'Open WhatsApp chat options'}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white -rotate-90 transition-transform" />
        ) : (
          <>
            <MessageCircle className="w-8 h-8 fill-white text-[#00a859]" />
            {/* Pulsing ring indicator */}
            <span className="absolute inset-0 rounded-full bg-[#00a859] opacity-30 animate-ping pointer-events-none" />
          </>
        )}

        {/* Hover Tooltip when closed */}
        {!isOpen && (
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity shadow-lg pointer-events-none hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        )}
      </button>
    </aside>
  );
};
