import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';
import { contactData } from '../data/contactData';
import { Language } from '../types';

export const FloatingActions: React.FC<{ language: Language }> = ({ language }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#080C14]/95 backdrop-blur-md border-t border-slate-800 p-2 sm:hidden flex items-center justify-around gap-2 shadow-2xl">
        <a
          id="mobile-dock-call"
          href="tel:+971505372999"
          className="flex-1 py-2.5 px-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>050 5372999</span>
        </a>

        <a
          id="mobile-dock-whatsapp"
          href={`https://wa.me/971505372999?text=${encodeURIComponent('Hello Mr. Didar! I am contacting you from the ATS Typing website.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>WhatsApp</span>
        </a>

        <a
          id="mobile-dock-map"
          href={contactData.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-full bg-slate-900 text-slate-200 font-medium text-xs flex items-center justify-center border border-slate-700 active:scale-95 transition-all"
          aria-label="Google Maps"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
        </a>
      </div>

      {/* Desktop Floating WhatsApp & Scroll to top widget */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            id="desktop-scroll-top-btn"
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#0E1422] hover:bg-slate-800 text-slate-200 shadow-2xl border border-slate-700/80 transition-all hover:scale-105 cursor-pointer ring-1 ring-white/5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Pill */}
        <a
          id="desktop-floating-whatsapp"
          href={`https://wa.me/971505372999?text=${encodeURIComponent('Hello Mr. Didar! I want to inquire about Alayan Typing services in Ajman.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-2xl shadow-amber-500/25 border border-amber-300/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <div className="relative">
            <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-slate-950" />
          </div>
          <span className="font-display">Chat with Mr. Didar</span>
        </a>
      </div>
    </>
  );
};
