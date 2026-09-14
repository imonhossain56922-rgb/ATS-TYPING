import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, PhoneCall } from 'lucide-react';
import { outletsData } from '../data/outletsData';
import { useSiteContent } from '../context/SiteContentContext';
import { outletBgMint, outletBgOlive } from '../assets/images';

interface OurOutletsSectionProps {
  isStandalonePage?: boolean;
}

export const OurOutletsSection: React.FC<OurOutletsSectionProps> = ({ isStandalonePage = false }) => {
  const navigate = useNavigate();
  const { content } = useSiteContent();

  const amrkCardBg = content.images.find(img => img.id === 'outlet-amrk-card-bg')?.url || outletBgMint;
  const alayanCardBg = content.images.find(img => img.id === 'outlet-alayan-card-bg')?.url || outletBgOlive;

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
            const cardBgImage = isAmrk ? amrkCardBg : alayanCardBg;

            return (
              <div
                key={outlet.id}
                onClick={() => navigate(outlet.path)}
                className={`group relative overflow-hidden rounded-2xl border-2 ${
                  isAmrk 
                    ? 'border-blue-400/90 hover:border-blue-600 hover:shadow-blue-500/20' 
                    : 'border-emerald-400/80 hover:border-emerald-500 hover:shadow-emerald-500/20'
                } p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col sm:flex-row items-center gap-6 sm:gap-8`}
              >
                {/* Outlet Card Background Image (Mint for AMRK, Blurred Olive Clouds for ALAYAN) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                  <img
                    src={cardBgImage}
                    alt={`${name} background`}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                      !isAmrk
                        ? 'filter blur-[3px] scale-105 group-hover:scale-110'
                        : 'group-hover:scale-105'
                    }`}
                  />
                  <div className={`absolute inset-0 ${isAmrk ? 'bg-white/20' : 'bg-slate-950/30'}`} />
                </div>

                {/* Outlet Logo Container - Centered in mobile, left aligned in desktop, clean pure white background */}
                <div className="w-48 sm:w-48 h-32 sm:h-32 mx-auto sm:mx-0 flex-shrink-0 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center p-3 shadow-md group-hover:scale-105 transition-transform overflow-hidden relative z-10">
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
                    isAmrk ? 'text-[#0B1B3D] drop-shadow-sm' : 'text-white drop-shadow-md'
                  }`}>
                    {name}
                  </h3>

                  {/* Location & Address */}
                  <div className="flex flex-col items-center sm:items-start space-y-1 text-center sm:text-left">
                    <div className={`flex items-center justify-center sm:justify-start gap-1.5 text-sm font-bold ${
                      isAmrk ? 'text-[#0B1B3D]' : 'text-white drop-shadow-sm'
                    }`}>
                      <MapPin className={`w-4 h-4 ${isAmrk ? 'text-blue-700' : 'text-emerald-200'} flex-shrink-0`} />
                      <span>{location}</span>
                    </div>
                    <p className={`text-xs leading-snug line-clamp-2 ${
                      isAmrk ? 'text-slate-800 font-medium' : 'text-white font-medium drop-shadow-sm'
                    }`}>
                      {address}
                    </p>

                    {/* Telephone Number (Call Only, No WhatsApp) */}
                    {telephone && (
                      <div className="pt-0.5 flex items-center justify-center sm:justify-start gap-1.5 text-xs">
                        <PhoneCall className={`w-3.5 h-3.5 ${isAmrk ? 'text-blue-700' : 'text-emerald-200'}`} />
                        <span className={`font-bold ${isAmrk ? 'text-[#0B1B3D]' : 'text-white drop-shadow-sm'}`}>
                          Tel: {telephone}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          isAmrk ? 'bg-blue-100 text-blue-900 border border-blue-200' : 'bg-white/25 text-white border border-white/30 drop-shadow-xs'
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
                          ? 'bg-[#0B1B3D] hover:bg-[#15284F] text-white group-hover:shadow-blue-900/30'
                          : 'bg-white hover:bg-slate-100 text-[#006038] font-extrabold shadow-lg group-hover:shadow-xl'
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
