import React, { useRef, useState } from 'react';
import { 
  Users, 
  CreditCard, 
  Award, 
  HeartPulse, 
  Building2, 
  Briefcase, 
  Plane, 
  Home, 
  Car, 
  Smartphone, 
  Languages, 
  Calculator,
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Clock,
  CheckCircle2,
  X
} from 'lucide-react';
import { SHARED_OWNER_PHONE_INTL, outletsData } from '../data/outletsData';

export interface PopularService {
  id: string;
  title: string;
  category: string;
  tag: string;
  tagColor: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  desc: string;
  processingTime: string;
  keyDoc: string;
  whatsappMessage: string;
}

export const POPULAR_SERVICES: PopularService[] = [
  {
    id: 'family-visa',
    title: 'Family Visa (New & Renew)',
    category: 'Visa & Immigration',
    tag: 'Most Popular',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: Users,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    desc: 'Spouse, children & parent residence visas with instant ICP file opening and status change.',
    processingTime: '24 - 48 Hours',
    keyDoc: 'Passport, Salary Certificate, Ejari/Tasdeeq',
    whatsappMessage: 'Hello, I want to inquire about Family Visa (New/Renewal) typing.'
  },
  {
    id: 'emirates-id-renewal',
    title: 'Emirates ID Typing & Renewal',
    category: 'ICP Services',
    tag: 'Fast Track',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: CreditCard,
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    desc: 'Instant ICP biometric appointments, urgent renewal, replacement of lost cards and data updates.',
    processingTime: 'Same-Day Typing',
    keyDoc: 'Original Passport, Visa Copy, Old ID',
    whatsappMessage: 'Hello, I want to apply for Emirates ID New/Renewal typing.'
  },
  {
    id: 'golden-visa-10yr',
    title: 'UAE Golden Visa (10-Year)',
    category: 'Long-Term Residency',
    tag: 'VIP Service',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
    icon: Award,
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    desc: 'Eligibility check, PRO nomination and complete 10-year residency processing for investors and specialists.',
    processingTime: '3 - 7 Working Days',
    keyDoc: 'Degree/License/Title Deed, Bank Statements',
    whatsappMessage: 'Hello, I want to check my eligibility for UAE Golden Visa (10-Year).'
  },
  {
    id: 'medical-fitness',
    title: 'Medical Fitness Test Typing',
    category: 'Residency Medical',
    tag: 'Instant Booking',
    tagColor: 'bg-rose-100 text-rose-800 border-rose-300',
    icon: HeartPulse,
    iconBg: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
    desc: 'Priority medical appointment booking across Ajman Medical Center, MOHAP, and DHA centers.',
    processingTime: 'Immediate Booking',
    keyDoc: 'Passport Copy, Visa/Entry Permit, Photo',
    whatsappMessage: 'Hello, I need urgent Medical Fitness Test appointment typing.'
  },
  {
    id: 'trade-license',
    title: 'Trade License New & Renewal',
    category: 'Business & Licensing',
    tag: 'Ajman & Dubai',
    tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    icon: Building2,
    iconBg: 'bg-indigo-50 border-indigo-200',
    iconColor: 'text-indigo-600',
    desc: 'Company registration, commercial license renewal, memorandum drafting, and DED approvals.',
    processingTime: '1 - 3 Days',
    keyDoc: 'Partners Passports, Ejari, Initial Approval',
    whatsappMessage: 'Hello, I need help with Trade License setup/renewal.'
  },
  {
    id: 'mohre-labour',
    title: 'MOHRE Labour Contracts',
    category: 'Tas-heel & Work Permits',
    tag: 'Govt. Approved',
    tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    icon: Briefcase,
    iconBg: 'bg-cyan-50 border-cyan-200',
    iconColor: 'text-cyan-600',
    desc: 'Employment offer letters, quota modifications, work permit cancellation and labor fine waiver.',
    processingTime: 'Same Day',
    keyDoc: 'Establishment Card, Employee Passport, Trade License',
    whatsappMessage: 'Hello, I need assistance with MOHRE Labour Contract typing.'
  },
  {
    id: 'tourist-visit-visa',
    title: 'Visit Visa (30 & 60 Days)',
    category: 'Tourism & Travel',
    tag: 'Express 24h',
    tagColor: 'bg-teal-100 text-teal-800 border-teal-300',
    icon: Plane,
    iconBg: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600',
    desc: 'Immediate tourist visas for all nationalities, urgent extensions, inside-country status change and Umrah.',
    processingTime: '12 - 24 Hours',
    keyDoc: 'Passport Scan (min 6 months), Photo',
    whatsappMessage: 'Hello, I would like to apply for 30/60 Days Visit Visa.'
  },
  {
    id: 'ejari-tasdeeq',
    title: 'Ejari & Tasdeeq Attestation',
    category: 'Tenancy Contracts',
    tag: 'Municipality Approved',
    tagColor: 'bg-purple-100 text-purple-800 border-purple-300',
    icon: Home,
    iconBg: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    desc: 'Official lease contract registration with Ajman Municipality Tasdeeq and Dubai Ejari systems.',
    processingTime: '24 Hours',
    keyDoc: 'Tenancy Contract, Title Deed, Landlord & Tenant IDs',
    whatsappMessage: 'Hello, I need to attest my Tenancy Contract (Tasdeeq / Ejari).'
  },
  {
    id: 'traffic-fines',
    title: 'Traffic Fines & Reductions',
    category: 'Police & Vehicle Services',
    tag: 'Discount Check',
    tagColor: 'bg-orange-100 text-orange-800 border-orange-300',
    icon: Car,
    iconBg: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
    desc: 'Police fine inquiries, discount eligibility check, mulkiya vehicle renewals and driving license typing.',
    processingTime: 'Instant Check',
    keyDoc: 'Traffic File No., Mulkiya, Emirates ID',
    whatsappMessage: 'Hello, I want to check my Traffic Fines and renewal options.'
  },
  {
    id: 'uae-pass',
    title: 'UAE PASS Digital Setup',
    category: 'Digital Identity',
    tag: 'Instant Setup',
    tagColor: 'bg-sky-100 text-sky-800 border-sky-300',
    icon: Smartphone,
    iconBg: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-600',
    desc: 'Facial biometric verification, password reset, mobile linking and unified government portal access.',
    processingTime: '15 Minutes',
    keyDoc: 'Original Emirates ID, UAE Phone Number',
    whatsappMessage: 'Hello, I need assistance setting up or recovering my UAE PASS.'
  },
  {
    id: 'legal-translation',
    title: 'Legal Translation & Attestation',
    category: 'Ministry of Justice',
    tag: 'Official Stamp',
    tagColor: 'bg-stone-100 text-stone-800 border-stone-300',
    icon: Languages,
    iconBg: 'bg-stone-50 border-stone-200',
    iconColor: 'text-stone-600',
    desc: 'Certified Arabic, English, and Bengali legal translation for court, MOFA, and embassies.',
    processingTime: '24 - 48 Hours',
    keyDoc: 'Original Certificate / Document Scan',
    whatsappMessage: 'Hello, I need official Legal Translation and MOFA attestation.'
  },
  {
    id: 'corporate-tax-vat',
    title: 'Corporate Tax & VAT Filing',
    category: 'Federal Tax Authority',
    tag: 'FTA Registered',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: Calculator,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    desc: 'Corporate tax registration, TRN number issuance, VAT quarterly returns and financial audits.',
    processingTime: '2 - 4 Days',
    keyDoc: 'Trade License, Financial Records, Bank Statements',
    whatsappMessage: 'Hello, I need assistance with Corporate Tax registration and VAT filing.'
  }
];

export const PopularServicesScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<PopularService | null>(null);

  const ownerNumber = SHARED_OWNER_PHONE_INTL.replace('+', '');
  const amrkOutlet = outletsData.find(o => o.id === 'amrk');
  const alayanOutlet = outletsData.find(o => o.id === 'alayan' || o.id === 'ats');
  const amrkNumber = amrkOutlet ? amrkOutlet.officePhoneIntl.replace('+', '') : '971566745493';
  const alayanNumber = alayanOutlet ? alayanOutlet.officePhoneIntl.replace('+', '') : '971556140043';

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Duplicate list to achieve continuous seamless loop
  const duplicatedServices = [...POPULAR_SERVICES, ...POPULAR_SERVICES];

  return (
    <div className="w-full mb-10">
      {/* Ticker Header Control Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 px-1">
        <div>
          <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1B3D] uppercase tracking-wider font-display">
            Popular Services
          </h3>
          <p className="text-[11px] text-slate-500 hidden sm:block">
            Continuous marquee • Hover to pause • Click to view requirements & instant chat
          </p>
        </div>

        {/* Scroll Navigation Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={scrollLeft}
            aria-label="Scroll popular services left"
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center shadow-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll popular services right"
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center shadow-xs transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Outer Horizontal Scrolling Container */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar py-2 -my-2 relative select-none"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Continuous Auto-Scrolling Marquee Track */}
        <div className="animate-marquee flex items-center gap-4 py-1">
          {duplicatedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={`${service.id}-${index}`}
                onClick={() => setSelectedService(service)}
                className="w-[280px] sm:w-[310px] flex-shrink-0 bg-white hover:bg-emerald-50/40 rounded-2xl p-4 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
              >
                <div>
                  {/* Top Bar: Icon + Category + Tag */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${service.iconBg} ${service.iconColor} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${service.tagColor}`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-bold text-sm text-[#0B1B3D] group-hover:text-[#008751] transition-colors leading-tight line-clamp-1 mb-1">
                    {service.title}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom details & Quick WhatsApp CTA */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1 text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.processingTime}</span>
                  </span>

                  <span className="font-bold text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                    <span>Inquire Now</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Details & Inquire Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left">
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-[#0B1B3D] to-[#15284F] text-white flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${selectedService.iconBg} ${selectedService.iconColor}`}>
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border mb-1 inline-block ${selectedService.tagColor}`}>
                    {selectedService.category}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-4 text-xs sm:text-sm text-slate-700 bg-slate-50/50">
              <p className="text-slate-600 leading-relaxed font-normal">
                {selectedService.desc}
              </p>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Estimated Processing:</span>
                  <span className="font-bold text-[#0B1B3D] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    {selectedService.processingTime}
                  </span>
                </div>

                <div className="flex items-start justify-between text-xs pt-1 gap-2">
                  <span className="text-slate-500 font-medium flex-shrink-0">Key Documents:</span>
                  <span className="font-semibold text-slate-800 text-right">
                    {selectedService.keyDoc}
                  </span>
                </div>
              </div>

              {/* 3 WhatsApp Options for this service */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Choose where to send your inquiry:</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {/* Owner */}
                  <a
                    href={`https://wa.me/${ownerNumber}?text=${encodeURIComponent(`Hello Mr. Didar, I want to inquire about ${selectedService.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 flex flex-col items-center text-center gap-1 transition-all"
                  >
                    <span className="font-bold text-xs">Owner (Direct)</span>
                    <span className="text-[10px] text-amber-700">050 5372999</span>
                  </a>

                  {/* AMRK Outlet */}
                  <a
                    href={`https://wa.me/${amrkNumber}?text=${encodeURIComponent(`Hello AMRK Typing Services (Ajman Ind. 2), I want to inquire about ${selectedService.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 flex flex-col items-center text-center gap-1 transition-all"
                  >
                    <span className="font-bold text-xs">AMRK (Ind. 2)</span>
                    <span className="text-[10px] text-blue-700">056 6745493</span>
                  </a>

                  {/* ALAYAN Outlet */}
                  <a
                    href={`https://wa.me/${alayanNumber}?text=${encodeURIComponent(`Hello ALAYAN Typing Services (Ajman Ind. 1), I want to inquire about ${selectedService.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 flex flex-col items-center text-center gap-1 transition-all"
                  >
                    <span className="font-bold text-xs">ALAYAN (Ind. 1)</span>
                    <span className="text-[10px] text-emerald-700">055 6140043</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Immediate quotation & document checklist</span>
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
