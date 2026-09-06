import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { AboutAndShop } from './components/AboutAndShop';
import { LocationMapSection } from './components/LocationMapSection';
import { ContactSection } from './components/ContactSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('ats_lang');
    return (saved === 'bn' || saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('ats_lang', language);
    // Update html dir for Arabic RTL if selected
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={`min-h-screen bg-[#080C14] text-slate-200 flex flex-col font-sans selection:bg-amber-500 selection:text-black ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Header with Navigation & Language Switcher */}
      <Header currentLanguage={language} setLanguage={setLanguage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero language={language} />
        <ServicesSection language={language} />
        <QuoteCalculator language={language} />
        <AboutAndShop language={language} />
        <LocationMapSection language={language} />
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Sticky Quick Contact & WhatsApp Actions */}
      <FloatingActions language={language} />
    </div>
  );
}
