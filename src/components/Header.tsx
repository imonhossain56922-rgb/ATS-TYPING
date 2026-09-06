import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Globe, Menu, X, Clock, Mail } from 'lucide-react';
import { contactData } from '../data/contactData';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Logo } from './Logo';

interface HeaderProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLanguage, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLanguage];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080C14]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="cursor-pointer transition-transform hover:scale-[1.01]">
          <Logo variant="gold" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-widest text-slate-300 font-semibold">
          <button
            id="nav-link-home"
            onClick={() => scrollToSection('hero')}
            className="hover:text-amber-400 transition-colors py-1 relative group cursor-pointer"
          >
            {t.navHome}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
          </button>
          <button
            id="nav-link-services"
            onClick={() => scrollToSection('services')}
            className="hover:text-amber-400 transition-colors py-1 relative group cursor-pointer"
          >
            {t.navServices}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
          </button>
          <button
            id="nav-link-quote"
            onClick={() => scrollToSection('calculator')}
            className="hover:text-amber-400 transition-colors py-1 relative group flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {t.navCalculator}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
          </button>
          <button
            id="nav-link-about"
            onClick={() => scrollToSection('about')}
            className="hover:text-amber-400 transition-colors py-1 relative group cursor-pointer"
          >
            {t.navAbout}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
          </button>
          <button
            id="nav-link-location"
            onClick={() => scrollToSection('location')}
            className="hover:text-amber-400 transition-colors py-1 relative group cursor-pointer"
          >
            {t.navLocation}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
          </button>
          <button
            id="nav-link-contact"
            onClick={() => scrollToSection('contact')}
            className="hover:text-amber-400 transition-colors py-1 relative group cursor-pointer"
          >
            {t.navContact}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
          </button>
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 rounded-full p-1 border border-slate-700/80 shadow-inner mr-1">
            <button
              id="lang-btn-en"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all ${
                currentLanguage === 'en'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              id="lang-btn-bn"
              onClick={() => setLanguage('bn')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all ${
                currentLanguage === 'bn'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              id="lang-btn-ar"
              onClick={() => setLanguage('ar')}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-all ${
                currentLanguage === 'ar'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              العربية
            </button>
          </div>

          <a
            id="header-call-btn"
            href="tel:+971505372999"
            className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-slate-900/80 text-slate-200 border border-slate-700/70 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>050 537 2999</span>
          </a>

          <a
            id="header-whatsapp-btn"
            href={`https://wa.me/971505372999?text=${encodeURIComponent('Hello Alayan Typing (ATS)! I would like to inquire about your government & visa typing services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 transform active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-amber-500" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1424] border-b border-slate-800 px-4 py-4 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-300">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              {t.navHome}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60 text-amber-400"
            >
              {t.navServices}
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              {t.navCalculator}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              {t.navLocation}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-800/60"
            >
              {t.navContact}
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href="tel:+971505372999"
              className="w-full py-2.5 rounded-full text-center text-xs font-bold bg-slate-900 text-slate-200 border border-slate-700/60 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Didar</span>
            </a>
            <a
              href={`https://wa.me/971505372999?text=${encodeURIComponent('Hello Alayan Typing! I would like to inquire about typing services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center gap-1.5 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-amber-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
