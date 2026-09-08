import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Navigation, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ServiceGridCards } from '../components/ServiceGridCards';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { getOutletById } from '../data/outletsData';

export const AmrkOutletPage: React.FC = () => {
  const outlet = getOutletById('amrk')!;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Premium Outlet Hero */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-[#DCEBFA] via-[#E8F1FC] to-[#F3F7FC] border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-5">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-blue-700 border border-blue-200 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>AJMAN INDUSTRIAL 2 OUTLET</span>
            </div>

            {/* 2. Outlet Logo in Crisp White Frame */}
            <div className="w-full max-w-sm mx-auto h-36 sm:h-44 rounded-2xl bg-white border border-slate-200/90 p-4 flex items-center justify-center shadow-md overflow-hidden">
              <img
                src={outlet.logoUrl}
                alt="AMRK TYPING SERVICES Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* 3. Outlet Name */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] font-display tracking-tight">
              AMRK TYPING SERVICES
            </h1>

            {/* 4. Short Introduction */}
            <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
              Your dedicated typing and government documentation center in Ajman Industrial 2. Providing rapid visa typing, MOHRE contracts, company trade licenses, and legal translations.
            </p>

            {/* 5. Direct Contact Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {/* Office Call */}
              <a
                href={`tel:${outlet.officePhoneIntl}`}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1B3D] border border-slate-300 text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Office ({outlet.officePhone})</span>
              </a>

              {/* Office WhatsApp */}
              <a
                href={`https://wa.me/${outlet.officePhoneIntl.replace('+', '')}?text=${encodeURIComponent('Hello AMRK Typing Services, I would like to inquire about typing services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#00a859]" />
                <span>Office WhatsApp</span>
              </a>

              {/* Owner Call */}
              <a
                href={`tel:${outlet.ownerPhoneIntl}`}
                className="px-4 py-2.5 rounded-full bg-[#0B1B3D] hover:bg-[#15284F] text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Owner ({outlet.ownerPhone})</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${outlet.email}`}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs flex items-center gap-2 shadow-xs transition-all"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{outlet.email}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6 & 7. Address Card & Prominent Google Maps Button */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Address Details */}
            <div className="space-y-2 text-left w-full md:w-auto">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>AMRK OUTLET PHYSICAL ADDRESS</span>
              </div>
              <div className="text-sm text-slate-800 font-medium space-y-0.5">
                {outlet.addressLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Roadside parking available. Rapid desk service for all walk-in clients.
              </p>
            </div>

            {/* Prominent Google Maps Button */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={outlet.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0B1B3D] hover:bg-[#15284F] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Services Grid for AMRK */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
              Services Available at AMRK TYPING SERVICES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              All 11 official service categories are processed directly on-site at our Ajman Industrial 2 outlet.
            </p>
          </div>

          <ServiceGridCards 
            outletWhatsApp={outlet.officePhoneIntl} 
            outletName="AMRK Typing Services" 
          />
        </div>
      </section>

      {/* 9. Why Choose Us */}
      <WhyChooseUs />

      {/* 10. WhatsApp CTA Section */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#00a859] flex items-center justify-center mx-auto">
            <MessageCircle className="w-6 h-6 fill-[#00a859] text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
            Connect Directly with AMRK Typists on WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-normal">
            Send your passport copy, Emirates ID, or fine receipt to get an immediate checklist and price calculation from our team.
          </p>
          <a
            href={`https://wa.me/${outlet.officePhoneIntl.replace('+', '')}?text=${encodeURIComponent('Hello AMRK Typing Services, I would like to inquire about visa and government typing services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#00a859]" />
            <span>Chat on WhatsApp (+971 56 674 5493)</span>
          </a>
        </div>
      </section>

    </div>
  );
};
