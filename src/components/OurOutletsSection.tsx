import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, PhoneCall } from 'lucide-react';
import { outletsData } from '../data/outletsData';
import { useSiteContent } from '../context/SiteContentContext';

interface OurOutletsSectionProps {
  isStandalonePage?: boolean;
}

export const OurOutletsSection: React.FC<OurOutletsSectionProps> = ({ isStandalonePage = false }) => {
  const navigate = useNavigate();
  const { content } = useSiteContent();

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
            const dynamicOutlet = isAmrk ? content.outlets.amrk : content.outlets.alayan;
            const logoUrl = dynamicOutlet?.logoUrl || outlet.logoUrl;
            const name = dynamicOutlet?.name || outlet.name;
            const location = dynamicOutlet?.location || outlet.location;
            const address = dynamicOutlet?.address || outlet.addressLines.join(' ');
            const telephone = dynamicOutlet?.telephone || outlet.telephone;

            return (
              <div
                key={outlet.id}
                onClick={() => navigate(outlet.path)}
                className={`group relative overflow-hidden rounded-2xl border-2 ${
                  isAmrk 
                    ? 'border-[#2F3091]/40 hover:border-[#2F3091] hover:shadow-[#2F3091]/20 bg-white hover:bg-indigo-50/20' 
                    : 'border-[#006038]/40 hover:border-[#006038] hover:shadow-[#006038]/20 bg-white hover:bg-emerald-50/20'
                } p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col sm:flex-row items-center gap-6 sm:gap-8`}
              >
                {/* Outlet Logo Container - Centered in mobile, left aligned in desktop, clean light background */}
                <div className="w-48 sm:w-48 h-32 sm:h-32 mx-auto sm:mx-0 flex-shrink-0 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center p-3 shadow-sm group-hover:scale-105 transition-transform overflow-hidden relative z-10">
                  <img
                    src={logoUrl}
                    alt={`${name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Outlet Details & Button - Centered on Mobile, Left-aligned on Desktop */}
                <div className="flex-1 w-full text-center sm:text-left space-y-3 flex flex-col items-center sm:items-start relative z-10">
                  {/* Name */}
                  <h3 className={`text-xl sm:text-2xl font-extrabold font-display tracking-tight text-center sm:text-left ${
                    isAmrk ? 'text-[#2F3091]' : 'text-[#006038]'
                  }`}>
                    {name}
                  </h3>

                  {/* Location & Address */}
                  <div className="flex flex-col items-center sm:items-start space-y-1 text-center sm:text-left">
                    <div className={`flex items-center justify-center sm:justify-start gap-1.5 text-sm font-bold ${
                      isAmrk ? 'text-[#2F3091]' : 'text-[#006038]'
                    }`}>
                      <MapPin className={`w-4 h-4 ${isAmrk ? 'text-[#2F3091]' : 'text-[#006038]'} flex-shrink-0`} />
                      <span>{location}</span>
                    </div>
                    <p className={`text-xs leading-snug line-clamp-2 font-medium ${
                      isAmrk ? 'text-[#2F3091]' : 'text-[#006038]'
                    }`}>
                      {address}
                    </p>

                    {/* Telephone Number (Call Only, No WhatsApp) */}
                    {telephone && (
                      <div className="pt-0.5 flex items-center justify-center sm:justify-start gap-1.5 text-xs">
                        <PhoneCall className={`w-3.5 h-3.5 ${isAmrk ? 'text-[#2F3091]' : 'text-[#006038]'} flex-shrink-0`} />
                        <span className={`font-bold ${isAmrk ? 'text-[#2F3091]' : 'text-[#006038]'}`}>
                          Tel: {telephone}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          isAmrk 
                            ? 'bg-[#2F3091]/10 text-[#2F3091] border border-[#2F3091]/25' 
                            : 'bg-[#006038]/10 text-[#006038] border border-[#006038]/25'
                        }`}>
                          Call Only
                        </span>
                      </div>
                    )}
                  </div>

                  {/* View Outlet Button - Centered on Mobile, Left-aligned on Desktop */}
                  <div className="pt-2 w-full flex justify-center sm:justify-start">
                    <button
                      type="button"
                      className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                        isAmrk
                          ? 'bg-[#2F3091] hover:bg-[#252677] text-white group-hover:shadow-[#2F3091]/30'
                          : 'bg-[#006038] hover:bg-[#004d2d] text-white group-hover:shadow-emerald-900/30'
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
