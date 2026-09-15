import React from 'react';
import { OurOutletsSection } from '../components/OurOutletsSection';
import { ServiceGridCards } from '../components/ServiceGridCards';
import { PopularServicesScroller } from '../components/PopularServicesScroller';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { uaeSkylineHero, uaeWavingFlag, servicesBgNetwork } from '../assets/images';
import { useSiteContent } from '../context/SiteContentContext';

export const HomePage: React.FC = () => {
  const { content } = useSiteContent();
  const heroBgImage = content.images.find(img => img.id === 'hero-skyline')?.url || uaeSkylineHero;
  const servicesBgImage = content.images.find(img => img.id === 'services-bg')?.url || servicesBgNetwork;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-slate-100 border-b border-slate-200">
        
        {/* UAE Skyline Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={heroBgImage}
            alt="UAE Skyline Hero Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 filter blur-[1.5px] opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-100/75 to-slate-100/50" />
        </div>

        {/* Waving UAE Flag on Right Side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[480px] h-64 sm:h-80 pointer-events-none opacity-85 hidden md:block select-none overflow-hidden z-10">
          <img
            src={uaeWavingFlag}
            alt="UAE National Flag"
            className="w-full h-full object-cover mix-blend-multiply drop-shadow-xl"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-5 text-left">
            
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#0B1B3D] font-display drop-shadow-sm">
              UAE TYPING SERVICES
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1B3D] font-display leading-[1.15] drop-shadow-sm">
              Professional UAE Typing &<br />
              Government Services
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-sm sm:text-base text-slate-800 max-w-2xl font-medium leading-relaxed drop-shadow-sm">
              Your trusted partner for visa, immigration, government, labour, business, tax, insurance, transport, travel and document services across the UAE.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Visit Our Outlets Section */}
      <OurOutletsSection />

      {/* 3. Our Services Section with Grid Cards */}
      <section id="services-grid" className="relative py-16 sm:py-20 bg-slate-100 border-t border-slate-200 overflow-hidden">
        {/* Visible glowing network tech background image with slight blur */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={servicesBgImage}
            alt="Services Digital Network Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 filter blur-[3px] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header with Golden Accent Lines */}
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 bg-white/85 backdrop-blur-md py-4 px-6 rounded-2xl shadow-sm border border-white/90">
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 sm:w-16 h-0.5 bg-amber-400 rounded-full inline-block" />
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0B1B3D] font-display">
                Our Services
              </h2>
              <span className="w-10 sm:w-16 h-0.5 bg-amber-400 rounded-full inline-block" />
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-medium">
              Complete government and business solutions under one roof.
            </p>
          </div>

          {/* Horizontally Scrolling Popular Services Ticker */}
          <PopularServicesScroller />

          {/* Grid of 11 Services Cards */}
          <ServiceGridCards />

        </div>
      </section>

      {/* 4. Why Choose UAE TYPING SERVICES Section */}
      <WhyChooseUs />

    </div>
  );
};
