import React from 'react';
import { OurOutletsSection } from '../components/OurOutletsSection';

export const OutletsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Page Header */}
      <section className="pt-14 pb-12 bg-gradient-to-b from-[#DCEBFA] via-[#E8F1FC] to-[#F3F7FC] border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-extrabold tracking-wider uppercase text-[#0B1B3D] font-display">
            UAE TYPING SERVICES • AJMAN BRANCHES
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] font-display">
            Our Outlets
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Choose your nearest branch in Ajman for expert visa typing, Emirates ID processing, government clearances, and PRO assistance.
          </p>
        </div>
      </section>

      {/* Only Visit Our Outlet Option */}
      <OurOutletsSection isStandalonePage={true} />
    </div>
  );
};
