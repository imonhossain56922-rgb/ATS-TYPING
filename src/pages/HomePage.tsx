import React from 'react';
import { OurOutletsSection } from '../components/OurOutletsSection';
import { ServiceGridCards } from '../components/ServiceGridCards';
import { PopularServicesScroller } from '../components/PopularServicesScroller';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { uaeSkylineHero, uaeWavingFlag } from '../assets/images';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#DCEBFA] via-[#E8F1FC] to-[#F3F7FC] border-b border-slate-200">
        
        {/* Background Dubai Skyline Panoramic Banner */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom opacity-25 pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: `url(${uaeSkylineHero})` }}
        />

        {/* Waving UAE Flag on Right Side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[480px] h-64 sm:h-80 pointer-events-none opacity-85 hidden md:block select-none overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5 text-left">
            
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#0B1B3D] font-display">
              UAE TYPING SERVICES
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1B3D] font-display leading-[1.15]">
              Professional UAE Typing &<br />
              Government Services
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
              Your trusted partner for visa, immigration, government, labour, business, tax, insurance, transport, travel and document services across the UAE.
            </p>

          </div>
        </div>
      </section>

      {/* 2. Visit Our Outlets Section */}
      <OurOutletsSection />

      {/* 3. Our Services Section with Grid Cards */}
      <section id="services-grid" className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Golden Accent Lines */}
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <div className="flex items-center justify-center gap-3">
              <span className="w-10 sm:w-16 h-0.5 bg-amber-400 rounded-full inline-block" />
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0B1B3D] font-display">
                Our Services
              </h2>
              <span className="w-10 sm:w-16 h-0.5 bg-amber-400 rounded-full inline-block" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
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
