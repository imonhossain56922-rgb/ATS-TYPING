import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { outletsData } from '../data/outletsData';

interface OurOutletsSectionProps {
  isStandalonePage?: boolean;
}

export const OurOutletsSection: React.FC<OurOutletsSectionProps> = ({ isStandalonePage = false }) => {
  const navigate = useNavigate();

  return (
    <section id="outlets" className={`py-16 sm:py-20 ${isStandalonePage ? 'bg-slate-50' : 'bg-white'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Golden Accent Lines as in Reference Image */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 sm:w-16 h-0.5 bg-amber-400 rounded-full inline-block" />
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0B1B3D] font-display">
              Visit Our Outlets
            </h2>
            <span className="w-10 sm:w-16 h-0.5 bg-amber-400 rounded-full inline-block" />
          </div>

          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Choose your preferred branch and get the assistance you need.
          </p>
        </div>

        {/* Exactly TWO Outlet Cards as Styled in Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {outletsData.map((outlet) => {
            const isAmrk = outlet.id === 'amrk';

            return (
              <div
                key={outlet.id}
                onClick={() => navigate(outlet.path)}
                className={`group relative bg-white rounded-2xl border-2 ${
                  isAmrk 
                    ? 'border-blue-300/80 hover:border-blue-600 hover:shadow-blue-500/10' 
                    : 'border-emerald-300/80 hover:border-emerald-600 hover:shadow-emerald-500/10'
                } p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col sm:flex-row items-center gap-6 sm:gap-8`}
              >
                {/* Outlet Logo Container - Centered in mobile, left aligned in desktop, clean pure white background */}
                <div className="w-48 sm:w-48 h-32 sm:h-32 mx-auto sm:mx-0 flex-shrink-0 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center p-3 shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
                  <img
                    src={outlet.logoUrl}
                    alt={`${outlet.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Outlet Details & Button - Centered on Mobile, Left-aligned on Desktop */}
                <div className="flex-1 w-full text-center sm:text-left space-y-3 flex flex-col items-center sm:items-start">
                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] font-display tracking-tight text-center sm:text-left">
                    {outlet.name}
                  </h3>

                  {/* Location & Address */}
                  <div className="flex flex-col items-center sm:items-start space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm font-bold text-[#0B1B3D]">
                      <MapPin className={`w-4 h-4 ${isAmrk ? 'text-blue-600' : 'text-emerald-600'} flex-shrink-0`} />
                      <span>{outlet.location}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug">
                      {outlet.addressLines[0]} • {outlet.addressLines[2] || outlet.addressLines[1]}
                    </p>
                  </div>

                  {/* View Outlet Button - Centered on Mobile, Left-aligned on Desktop */}
                  <div className="pt-2 w-full flex justify-center sm:justify-start">
                    <button
                      type="button"
                      className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${
                        isAmrk
                          ? 'bg-[#0B1B3D] hover:bg-[#15284F] text-white group-hover:shadow-blue-900/30'
                          : 'bg-[#008751] hover:bg-[#007043] text-white group-hover:shadow-emerald-900/30'
                      }`}
                    >
                      <span>View Outlet</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
