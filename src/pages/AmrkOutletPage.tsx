import React from 'react';
import { 
  MapPin, 
  Phone, 
  PhoneCall,
  MessageCircle, 
  Mail, 
  Navigation, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ServiceGridCards } from '../components/ServiceGridCards';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { getOutletById } from '../data/outletsData';
import { useSiteContent } from '../context/SiteContentContext';

export const AmrkOutletPage: React.FC = () => {
  const staticOutlet = getOutletById('amrk')!;
  const { content } = useSiteContent();
  const dynamicOutlet = content.outlets.amrk;

  const officePhone = dynamicOutlet?.officePhone || staticOutlet.officePhone;
  const telephone = dynamicOutlet?.telephone || staticOutlet.telephone || '065207843';
  const email = dynamicOutlet?.email || staticOutlet.email;
  const logoUrl = dynamicOutlet?.logoUrl || staticOutlet.logoUrl;
  const address = dynamicOutlet?.address || staticOutlet.addressLines.join(', ');
  const googleMapsUrl = dynamicOutlet?.googleMapsUrl || staticOutlet.googleMapsUrl;
  const additionalPhones = (dynamicOutlet?.additionalPhones || []).filter(p => p.trim().length > 0);
  const additionalEmails = (dynamicOutlet?.additionalEmails || []).filter(e => e.trim().length > 0);
  const officePhoneIntl = dynamicOutlet?.officePhone ? dynamicOutlet.officePhone.replace(/[^0-9]/g, '') : staticOutlet.officePhoneIntl;

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
                src={logoUrl}
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

            {/* 5. Direct Contact Buttons - Horizontally in one line on desktop view */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-full">
              {/* Telephone (Call Only - No WhatsApp) */}
              <a
                href={`tel:${telephone.replace(/\s+/g, '')}`}
                className="whitespace-nowrap px-3.5 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all flex-shrink-0"
                title="Telephone Number (Call Only, No WhatsApp)"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-700" />
                <span>Telephone ({telephone})</span>
                <span className="text-[10px] bg-blue-200/90 text-blue-950 px-1.5 py-0.5 rounded-full font-bold">Call Only</span>
              </a>

              {/* Office Mobile Call */}
              <a
                href={`tel:${officePhone.replace(/\s+/g, '')}`}
                className="whitespace-nowrap px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 text-[#0B1B3D] border border-slate-300 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Office ({officePhone})</span>
              </a>

              {/* Office WhatsApp */}
              <a
                href={`https://wa.me/${officePhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello AMRK Typing Services, I would like to inquire about typing services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-3.5 py-2 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all flex-shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-[#00a859]" />
                <span>Office WhatsApp</span>
              </a>

              {/* Additional Phone Numbers (if added from Admin Panel) */}
              {additionalPhones.map((ph, idx) => {
                const cleanDigits = ph.replace(/[^0-9]/g, '');
                return (
                  <div key={idx} className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 shadow-xs gap-1.5 flex-shrink-0 whitespace-nowrap border border-slate-700">
                    <Phone className="w-3 h-3 text-amber-400" />
                    <a
                      href={`tel:${cleanDigits}`}
                      className="hover:text-amber-300 transition-colors"
                      title={`Call ${ph}`}
                    >
                      {ph}
                    </a>
                    <a
                      href={`https://wa.me/${cleanDigits}?text=${encodeURIComponent('Hello AMRK Typing Services, I would like to inquire about typing services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white transition-all inline-flex items-center justify-center ml-0.5"
                      title={`WhatsApp ${ph}`}
                    >
                      <MessageCircle className="w-2.5 h-2.5 fill-white text-[#00a859]" />
                    </a>
                  </div>
                );
              })}

              {/* Combined Single Component for AMRK Owners: Call icon - OWNER (0505372999) -whatsapp icon (0555950006) -whatsapp icon */}
              <div className="inline-flex items-center rounded-full bg-[#0B1B3D] text-white text-xs font-semibold px-3.5 py-1.5 shadow-xs gap-2 flex-shrink-0 whitespace-nowrap border border-[#1e3461]">
                {/* Call icon - OWNER */}
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">OWNER</span>
                </div>

                <span className="w-px h-3.5 bg-white/25" />

                {/* (0505372999) - whatsapp icon */}
                <div className="flex items-center gap-1">
                  <a
                    href="tel:+971505372999"
                    className="text-white hover:text-amber-300 transition-colors"
                    title="Call 0505372999"
                  >
                    (0505372999)
                  </a>
                  <a
                    href="https://wa.me/971505372999?text=Hello%20AMRK%20Typing%20Services%2C%20I%20would%20like%20to%20inquire%20about%20typing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white transition-all inline-flex items-center justify-center"
                    title="WhatsApp 0505372999"
                  >
                    <MessageCircle className="w-3 h-3 fill-white text-[#00a859]" />
                  </a>
                </div>

                <span className="w-px h-3.5 bg-white/25" />

                {/* (0555950006) - whatsapp icon */}
                <div className="flex items-center gap-1">
                  <a
                    href="tel:+971555950006"
                    className="text-white hover:text-amber-300 transition-colors"
                    title="Call 0555950006"
                  >
                    (0555950006)
                  </a>
                  <a
                    href="https://wa.me/971555950006?text=Hello%20AMRK%20Typing%20Services%2C%20I%20would%20like%20to%20inquire%20about%20typing%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white transition-all inline-flex items-center justify-center"
                    title="WhatsApp 0555950006"
                  >
                    <MessageCircle className="w-3 h-3 fill-white text-[#00a859]" />
                  </a>
                </div>
              </div>

              {/* Primary Email */}
              <a
                href={`mailto:${email}`}
                className="whitespace-nowrap px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs flex items-center gap-1.5 shadow-xs transition-all flex-shrink-0"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{email}</span>
              </a>

              {/* Additional Emails (if added from Admin Panel) */}
              {additionalEmails.map((em, idx) => (
                <a
                  key={idx}
                  href={`mailto:${em}`}
                  className="whitespace-nowrap px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs flex items-center gap-1.5 shadow-xs transition-all flex-shrink-0"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>{em}</span>
                </a>
              ))}
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
                <p>{address}</p>
              </div>
              <p className="text-xs text-slate-500">
                Roadside parking available. Rapid desk service for all walk-in clients.
              </p>
            </div>

            {/* Prominent Google Maps Button */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={googleMapsUrl}
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
              All 8 official service categories are processed directly on-site at our Ajman Industrial 2 outlet.
            </p>
          </div>

          <ServiceGridCards 
            outletWhatsApp={officePhoneIntl} 
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
            href={`https://wa.me/${officePhoneIntl.replace('+', '')}?text=${encodeURIComponent('Hello AMRK Typing Services, I would like to inquire about visa and government typing services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#00a859]" />
            <span>Chat on WhatsApp ({officePhone})</span>
          </a>
        </div>
      </section>

    </div>
  );
};
