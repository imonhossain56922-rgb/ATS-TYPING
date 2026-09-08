import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  FileCheck 
} from 'lucide-react';
import { OurOutletsSection } from '../components/OurOutletsSection';
import { WhyChooseUs } from '../components/WhyChooseUs';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Page Header */}
      <section className="pt-16 pb-14 bg-gradient-to-b from-[#DCEBFA] via-[#E8F1FC] to-[#F3F7FC] border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0B1B3D]">
            ESTABLISHED EXCELLENCE IN AJMAN
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] font-display">
            About UAE TYPING SERVICES
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Dedicated documentation, typing, and government application assistance in Ajman, United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Main Narrative & Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Core Introduction Card */}
          <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-8 sm:p-10 shadow-sm space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
              Your Reliable Partner for Government & Business Procedures
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              <strong className="text-[#0B1B3D] font-bold">UAE TYPING SERVICES</strong> is a professional typing and government-services provider serving customers in Ajman and across the UAE.
            </p>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              We assist individuals, families, employees, entrepreneurs and businesses with a wide range of government, immigration, labour, business, tax, insurance, transport, travel and document-related services.
            </p>

            {/* Regulatory Notice */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-700 font-semibold">Notice:</strong> UAE TYPING SERVICES operates as an independent private typing and document facilitation center. All approvals, permits, visas, and fines remain subject to the sole jurisdiction and decisions of the relevant UAE government ministries and authorities.
            </div>
          </div>

          {/* Key Strategic Highlights */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] font-display text-center">
              Key Service Highlights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center text-white">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Wide Range of Services</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From visas and Emirates IDs to company setups, tax filings, and legal typing, every requirement is fulfilled with precision.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#008751] flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Convenient Ajman Outlets</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Two strategically situated outlets in Ajman Industrial 1 (ALAYAN) and Ajman Industrial 2 (AMRK) for easy physical access.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#6D28D9] flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Professional Assistance</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated, experienced staff proficient in English, Arabic, and Bengali to guide you through every complex application form.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#0284C7] flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Easy Communication</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct phone access to outlet desks and owner management ensures your inquiries are resolved without delays.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#00a859] flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">WhatsApp Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Send documents securely, receive fee estimates, and track application submissions seamlessly through WhatsApp.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#DC2626] flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B1B3D] text-base">Customer-Focused Service</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We prioritize your deadlines, data privacy, and convenience, delivering honest advice and reliable outcomes every day.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Outlets Overview */}
      <OurOutletsSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

    </div>
  );
};
