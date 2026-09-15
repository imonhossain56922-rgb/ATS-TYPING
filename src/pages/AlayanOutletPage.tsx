import React from 'react';
import { 
  MapPin, 
  Phone, 
  PhoneCall,
  MessageCircle, 
  Mail, 
  Navigation 
} from 'lucide-react';
import { ServiceGridCards } from '../components/ServiceGridCards';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { getOutletById } from '../data/outletsData';
import { useSiteContent } from '../context/SiteContentContext';

export const AlayanOutletPage: React.FC = () => {
  const staticOutlet = getOutletById('alayan') || getOutletById('ats')!;
  const { content } = useSiteContent();
  const dynamicOutlet = content.outlets.alayan;

  const officePhone = dynamicOutlet?.officePhone || staticOutlet.officePhone || '055 614 0043';
  const telephone = dynamicOutlet?.telephone || staticOutlet.telephone || '0556140043';
  const email = dynamicOutlet?.email || staticOutlet.email;
  const logoUrl = dynamicOutlet?.logoUrl || staticOutlet.logoUrl;
  const address = dynamicOutlet?.address || staticOutlet.addressLines.join(', ');
  const googleMapsUrl = dynamicOutlet?.googleMapsUrl || staticOutlet.googleMapsUrl;
  const additionalPhones = (dynamicOutlet?.additionalPhones || []).filter(p => p.trim().length > 0);
  const additionalEmails = (dynamicOutlet?.additionalEmails || []).filter(e => e.trim().length > 0);
  
  const rawOfficePhone = dynamicOutlet?.officePhone || staticOutlet.officePhone || '0556140043';
  const cleanOfficeDigits = rawOfficePhone.replace(/[^0-9]/g, '');
  const officePhoneIntl = cleanOfficeDigits.startsWith('971') ? cleanOfficeDigits : '971' + cleanOfficeDigits.replace(/^0+/, '');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Premium Outlet Hero */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-[#DCEBFA] via-[#E8F1FC] to-[#F3F7FC] border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-5">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-emerald-700 border border-emerald-200 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>AJMAN INDUSTRIAL 1 OUTLET</span>
            </div>

            {/* 2. Outlet Logo in Crisp White Frame */}
            <div className="w-full max-w-sm mx-auto h-36 sm:h-44 rounded-2xl bg-white border border-slate-200/90 p-4 flex items-center justify-center shadow-md overflow-hidden">
              <img
                src={logoUrl}
                alt="ALAYAN TYPING SERVICES Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* 3. Outlet Name */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] font-display tracking-tight">
              ALAYAN TYPING SERVICES
            </h1>

            {/* 4. Short Introduction */}
            <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
              Your trusted visa typing and government document center in Ajman Industrial 1, located in Central Souq opposite Marks & Save Market. Dedicated to prompt, accurate clearances.
            </p>

            {/* 5. Direct Contact Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {/* Office WhatsApp */}
              <a
                href={`https://wa.me/${officePhoneIntl}?text=${encodeURIComponent('Hello ALAYAN Typing Services, I would like to inquire about typing services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-4 py-2.5 rounded-full bg-[#006038] hover:bg-[#004d2d] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all flex-shrink-0"
                title={`Office WhatsApp (${officePhone})`}
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#006038]" />
                <span>Office WhatsApp ({officePhone})</span>
              </a>

              {/* Telephone (Call Only - No WhatsApp) */}
              <a
                href={`tel:${telephone.replace(/\s+/g, '')}`}
                className="px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-bold flex items-center gap-2 shadow-xs transition-all flex-shrink-0"
                title="Telephone Number (Call Only, No WhatsApp)"
              >
                <PhoneCall className="w-4 h-4 text-emerald-700" />
                <span>Telephone ({telephone})</span>
                <span className="text-[10px] bg-emerald-200/90 text-emerald-950 px-1.5 py-0.5 rounded-full font-bold">Call Only</span>
              </a>

              {/* Owner Call & WhatsApp */}
              <div className="inline-flex items-center rounded-full bg-[#0B1B3D] text-white text-xs font-semibold px-4 py-2 shadow-xs gap-2 flex-shrink-0 whitespace-nowrap border border-[#1e3461]">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">OWNER</span>
                </div>
                <span className="w-px h-3.5 bg-white/25" />
                <div className="flex items-center gap-1">
                  <a
                    href="tel:+971505372999"
                    className="text-white hover:text-amber-300 transition-colors"
                    title="Call 0505372999"
                  >
                    (0505372999)
                  </a>
                  <a
                    href={`https://wa.me/971505372999?text=${encodeURIComponent('Hello ALAYAN Typing Services, I would like to inquire about typing services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white transition-all inline-flex items-center justify-center ml-0.5"
                    title="WhatsApp 0505372999"
                  >
                    <MessageCircle className="w-3 h-3 fill-white text-[#00a859]" />
                  </a>
                </div>
              </div>

              {/* Primary Email */}
              <a
                href={`mailto:${email}`}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs flex items-center gap-2 shadow-xs transition-all"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>{email}</span>
              </a>

              {/* Additional Emails (if added from Admin Panel) */}
              {additionalEmails.map((em, idx) => (
                <a
                  key={idx}
                  href={`mailto:${em}`}
                  className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs flex items-center gap-2 shadow-xs transition-all"
                >
                  <Mail className="w-4 h-4 text-emerald-600" />
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
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>ALAYAN OUTLET PHYSICAL ADDRESS</span>
              </div>
              <div className="text-sm text-slate-800 font-medium space-y-0.5">
                <p>{address}</p>
              </div>
              <p className="text-xs text-slate-500">
                Inside Central Souq (Shop 46). Dedicated parking area available outside market.
              </p>
            </div>

            {/* Prominent Google Maps Button */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#008751] hover:bg-[#007043] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Services Grid for ALAYAN */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
              Services Available at ALAYAN TYPING SERVICES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              All 8 official service categories are processed directly on-site at our Ajman Industrial 1 outlet.
            </p>
          </div>

          <ServiceGridCards 
            outletWhatsApp={officePhoneIntl} 
            outletName="ALAYAN Typing Services" 
          />
        </div>
      </section>

      {/* 9. Why Choose Us */}
      <WhyChooseUs />

      {/* 10. Direct Telephone & Inquiry CTA Section */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#006038] flex items-center justify-center mx-auto">
            <PhoneCall className="w-6 h-6 text-[#006038]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
            Direct Inquiry with ALAYAN TYPING SERVICES
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-normal">
            Call our Central Souq outlet directly on our telephone number for instant document clearances, or connect with our typing office directly on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${officePhoneIntl}?text=${encodeURIComponent('Hello ALAYAN Typing Services, I would like to inquire about visa and government typing services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#006038] hover:bg-[#004d2d] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#006038]" />
              <span>Office WhatsApp ({officePhone})</span>
            </a>
            <a
              href={`tel:${telephone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1B3D] border border-slate-300 font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Telephone ({telephone})</span>
            </a>
            <a
              href="https://wa.me/971505372999?text=Hello%20ALAYAN%20Typing%20Services%2C%20I%20would%20like%20to%20inquire%20about%20visa%20and%20government%20typing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B1B3D] hover:bg-[#15284F] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#0B1B3D]" />
              <span>Manager WhatsApp (0505372999)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
