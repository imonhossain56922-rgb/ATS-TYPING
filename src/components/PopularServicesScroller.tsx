import React, { useRef, useState, useEffect, useMemo } from 'react';
import { 
  Plane,
  Building2, 
  Briefcase, 
  Building,
  Home,
  ShieldCheck, 
  Car, 
  Zap, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Clock,
  CheckCircle2,
  X
} from 'lucide-react';
import { SHARED_OWNER_PHONE_INTL, outletsData } from '../data/outletsData';
import { 
  recordServiceClick, 
  getWeeklyClickCounts, 
  hasOneWeekElapsed
} from '../utils/serviceAnalytics';

export interface OfficialPopularService {
  id: string;
  categoryGroupId: string; // matches officialServiceCategories id
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
  defaultRank: number;
}

// 100% derived strictly from Our Services (officialServiceCategories)
export const OFFICIAL_OUR_SERVICES: OfficialPopularService[] = [
  // 1. Travel & Ticketing
  {
    id: 'travel-visit-visa',
    categoryGroupId: 'travel-ticketing',
    title: 'Visit Visa Apply & Extension Services',
    category: 'Travel & Ticketing',
    tag: 'Our Service',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: Plane,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    desc: 'Visit Visa apply from outside & express extension from inside UAE without exit.',
    processingTime: '12 - 24 Hours',
    keyDoc: 'Passport Scan (min 6 months), Photo',
    whatsappMessage: 'Hello, I want to inquire about Visit Visa Apply & Extension Services.',
    defaultRank: 1
  },
  {
    id: 'travel-air-tickets',
    categoryGroupId: 'travel-ticketing',
    title: 'Air Ticket Booking (Worldwide)',
    category: 'Travel & Ticketing',
    tag: 'Our Service',
    tagColor: 'bg-teal-100 text-teal-800 border-teal-300',
    icon: Plane,
    iconBg: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-600',
    desc: 'Worldwide air ticket booking, ticket change, cancellation, extra baggage & seat selection.',
    processingTime: 'Instant Booking',
    keyDoc: 'Passenger Passport Details',
    whatsappMessage: 'Hello, I want to book or modify an Air Ticket.',
    defaultRank: 2
  },
  {
    id: 'travel-umrah',
    categoryGroupId: 'travel-ticketing',
    title: 'Umrah Package Normal & Multiple Visa',
    category: 'Travel & Ticketing',
    tag: 'Our Service',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
    icon: Plane,
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    desc: 'Complete Umrah package, normal and multiple-entry visa application, and hotel bookings.',
    processingTime: '24 - 48 Hours',
    keyDoc: 'Passport, UAE Residence Visa copy, Photo',
    whatsappMessage: 'Hello, I want to apply for Umrah Package & Visa.',
    defaultRank: 3
  },

  // 2. Immigration Services & Government Online Application
  {
    id: 'immig-golden-visa',
    categoryGroupId: 'immigration-gov',
    title: 'Golden Visa Process for 10 Years',
    category: 'Immigration Services',
    tag: 'Our Service',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
    icon: Building2,
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    desc: 'End-to-end 10-year Golden Visa nomination, document clearing, and ICP processing.',
    processingTime: '3 - 7 Days',
    keyDoc: 'Proof of Eligibility (Property / Degree / High Salary / Investor)',
    whatsappMessage: 'Hello, I want to process UAE Golden Visa for 10 Years.',
    defaultRank: 4
  },
  {
    id: 'immig-family-visa',
    categoryGroupId: 'immigration-gov',
    title: 'Family & Sponsorship Related Visa',
    category: 'Immigration Services',
    tag: 'Our Service',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: Building2,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    desc: 'Spouse, children & parent residence visas with file opening, status change and stamping.',
    processingTime: '24 - 48 Hours',
    keyDoc: 'Sponsor Emirates ID, Salary Certificate, Ejari / Tasdeeq, Passports',
    whatsappMessage: 'Hello, I want to process Family & Sponsorship Visa.',
    defaultRank: 5
  },
  {
    id: 'immig-icp-gdrfa',
    categoryGroupId: 'immigration-gov',
    title: 'ICP Smart & GDRFA Services',
    category: 'Immigration Services',
    tag: 'Our Service',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: Building2,
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    desc: 'ICP Smart portal and GDRFA visa applications, status change, and fine clearance.',
    processingTime: 'Same Day',
    keyDoc: 'Passport Copy, Old Visa / File No.',
    whatsappMessage: 'Hello, I need assistance with ICP Smart & GDRFA Services.',
    defaultRank: 6
  },

  // 3. Ministry of Labour (MOHRE) Application
  {
    id: 'mohre-work-permit',
    categoryGroupId: 'labour-mohre',
    title: 'New Job Offer Approval & Work Permit',
    category: 'Ministry of Labour (MOHRE)',
    tag: 'Our Service',
    tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    icon: Briefcase,
    iconBg: 'bg-cyan-50 border-cyan-200',
    iconColor: 'text-cyan-600',
    desc: 'MOHRE job offer approval, new electronic work permit issuance, and contract typing.',
    processingTime: 'Same Day',
    keyDoc: 'Establishment Card, Employee Passport, Trade License',
    whatsappMessage: 'Hello, I need help with MOHRE Job Offer Approval & Work Permit.',
    defaultRank: 7
  },
  {
    id: 'mohre-labour-card',
    categoryGroupId: 'labour-mohre',
    title: 'New Labour Card & Contract Renew Services',
    category: 'Ministry of Labour (MOHRE)',
    tag: 'Our Service',
    tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    icon: Briefcase,
    iconBg: 'bg-cyan-50 border-cyan-200',
    iconColor: 'text-cyan-600',
    desc: 'Labour card renewal, employment contract modification, and labour fine cancellation.',
    processingTime: '24 Hours',
    keyDoc: 'Company Establishment Card, Employee Details',
    whatsappMessage: 'Hello, I need Labour Card & Contract Renew Services.',
    defaultRank: 8
  },

  // 4. Business Setup & Company Services
  {
    id: 'biz-trade-license',
    categoryGroupId: 'business-company',
    title: 'Trade License Issue, Renew & Modification',
    category: 'Business & Company',
    tag: 'Our Service',
    tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    icon: Building,
    iconBg: 'bg-indigo-50 border-indigo-200',
    iconColor: 'text-indigo-600',
    desc: 'Trade license issuance in Ajman/Dubai, commercial renewal, modification & fine payment.',
    processingTime: '1 - 2 Days',
    keyDoc: 'Partners Passports, Ejari / Tasdeeq, Initial Approval',
    whatsappMessage: 'Hello, I need Trade License Issue / Renewal / Modification services.',
    defaultRank: 9
  },
  {
    id: 'biz-company-setup',
    categoryGroupId: 'business-company',
    title: 'UAE Company Setup & Documents Clearing',
    category: 'Business & Company',
    tag: 'Our Service',
    tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    icon: Building,
    iconBg: 'bg-indigo-50 border-indigo-200',
    iconColor: 'text-indigo-600',
    desc: 'Complete company formation, partnership agreements, court applications, and PRO services.',
    processingTime: '2 - 4 Days',
    keyDoc: 'Investor Passports, Trade Name Reservation',
    whatsappMessage: 'Hello, I need assistance with UAE Company Setup & Document Clearing.',
    defaultRank: 10
  },
  {
    id: 'biz-ejari-tasdeeq',
    categoryGroupId: 'business-company',
    title: 'Ejari & Tasdeeq Services for Tenancy',
    category: 'Business & Company',
    tag: 'Our Service',
    tagColor: 'bg-purple-100 text-purple-800 border-purple-300',
    icon: Home,
    iconBg: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    desc: 'Official lease contract registration with Ajman Municipality Tasdeeq & Dubai Ejari.',
    processingTime: '24 Hours',
    keyDoc: 'Tenancy Contract, Title Deed, Landlord & Tenant IDs',
    whatsappMessage: 'Hello, I need Ejari & Tasdeeq Services for Tenancy.',
    defaultRank: 11
  },
  {
    id: 'biz-corporate-tax',
    categoryGroupId: 'business-company',
    title: 'FTA & Corporate Tax De/Registration & Filing',
    category: 'Business & Company',
    tag: 'Our Service',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: Building,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    desc: 'Federal Tax Authority corporate tax registration, TRN, filing & submission services.',
    processingTime: '2 - 3 Days',
    keyDoc: 'Trade License, Financial Records, Bank Statements',
    whatsappMessage: 'Hello, I need FTA & Corporate Tax Registration / Filing support.',
    defaultRank: 12
  },

  // 5. Medical & Insurance Services
  {
    id: 'med-visa-medical',
    categoryGroupId: 'medical-insurance',
    title: 'For Visa Purpose Medical Application',
    category: 'Medical & Insurance',
    tag: 'Our Service',
    tagColor: 'bg-rose-100 text-rose-800 border-rose-300',
    icon: ShieldCheck,
    iconBg: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
    desc: 'Priority medical fitness test appointments across Ajman, MOHAP, and Dubai centers.',
    processingTime: 'Immediate Appointment',
    keyDoc: 'Passport Copy, Visa / Entry Permit, Photo',
    whatsappMessage: 'Hello, I need Visa Purpose Medical Application typing.',
    defaultRank: 13
  },
  {
    id: 'med-health-insurance',
    categoryGroupId: 'medical-insurance',
    title: 'Normal & Full Health / Car Insurance',
    category: 'Medical & Insurance',
    tag: 'Our Service',
    tagColor: 'bg-rose-100 text-rose-800 border-rose-300',
    icon: ShieldCheck,
    iconBg: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
    desc: 'Individual and group health insurance, travel insurance, and motor car insurance policies.',
    processingTime: 'Same Day Issuance',
    keyDoc: 'Emirates ID / Visa Copy, Vehicle Mulkiya (for car)',
    whatsappMessage: 'Hello, I want to get Health / Car Insurance policy quotes.',
    defaultRank: 14
  },
  {
    id: 'med-iloe',
    categoryGroupId: 'medical-insurance',
    title: 'ILOE Insurance & Claiming for Refund',
    category: 'Medical & Insurance',
    tag: 'Our Service',
    tagColor: 'bg-rose-100 text-rose-800 border-rose-300',
    icon: ShieldCheck,
    iconBg: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
    desc: 'Mandatory ILOE job loss insurance subscription, certificate renewal and refund claims.',
    processingTime: 'Instant Setup',
    keyDoc: 'Emirates ID, Mobile Number',
    whatsappMessage: 'Hello, I need help subscribing to ILOE Insurance or claim assistance.',
    defaultRank: 15
  },

  // 6. Driving & Transport Services
  {
    id: 'driving-traffic-file',
    categoryGroupId: 'driving-transport',
    title: 'Traffic File Opening in Ajman',
    category: 'Driving & Transport',
    tag: 'Our Service',
    tagColor: 'bg-orange-100 text-orange-800 border-orange-300',
    icon: Car,
    iconBg: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
    desc: 'Traffic file opening for individuals and commercial companies in Ajman Police systems.',
    processingTime: 'Same Day',
    keyDoc: 'Original Emirates ID, Passport Copy, Photo, Eye Test',
    whatsappMessage: 'Hello, I want to open a Traffic File in Ajman.',
    defaultRank: 16
  },
  {
    id: 'driving-license',
    categoryGroupId: 'driving-transport',
    title: 'Driving License New / Renew UAE & International',
    category: 'Driving & Transport',
    tag: 'Our Service',
    tagColor: 'bg-orange-100 text-orange-800 border-orange-300',
    icon: Car,
    iconBg: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
    desc: 'UAE driving license renewal, replacement of lost cards, and International Driving Permit.',
    processingTime: 'Instant Typing',
    keyDoc: 'Emirates ID, Eye Test Certificate',
    whatsappMessage: 'Hello, I need Driving License New / Renew typing.',
    defaultRank: 17
  },

  // 7. Government Utility Services
  {
    id: 'util-fewa-dewa',
    categoryGroupId: 'government-utility',
    title: 'DEWA / SEWA / FEWA Active & Deactivate Services',
    category: 'Government Utility',
    tag: 'Our Service',
    tagColor: 'bg-sky-100 text-sky-800 border-sky-300',
    icon: Zap,
    iconBg: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-600',
    desc: 'Electricity and water account opening, final clearance bills, and deposit refunds.',
    processingTime: '24 Hours',
    keyDoc: 'Tenancy Contract (Tasdeeq / Ejari), Emirates ID, Premise Number',
    whatsappMessage: 'Hello, I need DEWA / SEWA / FEWA connection / disconnection service.',
    defaultRank: 18
  },
  {
    id: 'util-police-clearance',
    categoryGroupId: 'government-utility',
    title: 'Police Clearance Apply & Attestation',
    category: 'Government Utility',
    tag: 'Our Service',
    tagColor: 'bg-sky-100 text-sky-800 border-sky-300',
    icon: Zap,
    iconBg: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-600',
    desc: 'Good conduct certificate issuance from MOI / Dubai Police and MOFA attestation.',
    processingTime: '24 - 48 Hours',
    keyDoc: 'Emirates ID / Passport Copy',
    whatsappMessage: 'Hello, I want to apply for Police Clearance Certificate & Attestation.',
    defaultRank: 19
  },

  // 8. Other Services in our Typing.
  {
    id: 'other-arabic-typing',
    categoryGroupId: 'other-typing-services',
    title: 'Arabic / English Letter & File Typing',
    category: 'Other Services in our Typing',
    tag: 'Our Service',
    tagColor: 'bg-stone-100 text-stone-800 border-stone-300',
    icon: FileText,
    iconBg: 'bg-stone-50 border-stone-200',
    iconColor: 'text-stone-600',
    desc: 'Official Arabic & English letter typing, undertakings, declarations, and authorization drafts.',
    processingTime: '15 - 30 Minutes',
    keyDoc: 'Draft details, relevant identity documents',
    whatsappMessage: 'Hello, I need Arabic / English Letter or File Typing assistance.',
    defaultRank: 20
  },
  {
    id: 'other-legal-translation',
    categoryGroupId: 'other-typing-services',
    title: 'Certified Legal Translation',
    category: 'Other Services in our Typing',
    tag: 'Our Service',
    tagColor: 'bg-stone-100 text-stone-800 border-stone-300',
    icon: FileText,
    iconBg: 'bg-stone-50 border-stone-200',
    iconColor: 'text-stone-600',
    desc: 'Ministry of Justice certified translation for birth, marriage, contracts & court files.',
    processingTime: '24 - 48 Hours',
    keyDoc: 'Original document scan',
    whatsappMessage: 'Hello, I need Certified Legal Translation services.',
    defaultRank: 21
  }
];

export const PopularServicesScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<OfficialPopularService | null>(null);
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});
  const [oneWeekPassed, setOneWeekPassed] = useState<boolean>(false);

  const ownerNumber = SHARED_OWNER_PHONE_INTL.replace('+', '');
  const amrkOutlet = outletsData.find(o => o.id === 'amrk');
  const alayanOutlet = outletsData.find(o => o.id === 'alayan' || o.id === 'ats');
  const amrkNumber = amrkOutlet ? amrkOutlet.officePhoneIntl.replace('+', '') : '971566745493';
  const alayanNumber = alayanOutlet ? alayanOutlet.officePhoneIntl.replace('+', '') : '971556140043';

  // Load analytics state quietly in the background
  const refreshAnalytics = () => {
    const counts = getWeeklyClickCounts();
    setClickCounts(counts);
    setOneWeekPassed(hasOneWeekElapsed());
  };

  useEffect(() => {
    refreshAnalytics();

    const handleUpdate = () => {
      refreshAnalytics();
    };

    window.addEventListener('service-click-recorded', handleUpdate);

    return () => {
      window.removeEventListener('service-click-recorded', handleUpdate);
    };
  }, []);

  // Compute displayed services list:
  // - If 1 week has passed, automatically filters & ranks by highest 7-day clicks in background!
  // - Otherwise, displays Our Services in official curated order.
  const displayedServices = useMemo(() => {
    if (!oneWeekPassed) {
      return [...OFFICIAL_OUR_SERVICES].sort((a, b) => a.defaultRank - b.defaultRank);
    }

    return [...OFFICIAL_OUR_SERVICES].sort((a, b) => {
      const clicksA = clickCounts[a.id] || 0;
      const clicksB = clickCounts[b.id] || 0;
      if (clicksB !== clicksA) {
        return clicksB - clicksA; // highest clicks first
      }
      return a.defaultRank - b.defaultRank;
    });
  }, [oneWeekPassed, clickCounts]);

  const handleCardClick = (service: OfficialPopularService) => {
    // Record click for background analytics
    recordServiceClick(service.id);
    setSelectedService(service);
  };

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

  // Duplicate for smooth seamless loop
  const marqueeList = [...displayedServices, ...displayedServices];

  return (
    <div className="w-full mb-10">
      {/* Ticker Header Control Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 px-1">
        <div>
          <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1B3D] uppercase tracking-wider font-display">
            Popular Services
          </h3>
          <p className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
            Continuous marquee • Hover to pause • Click to view requirements & instant chat
          </p>
        </div>

        {/* Scroll Navigation Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={scrollLeft}
            aria-label="Scroll popular services left"
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll popular services right"
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
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
          {marqueeList.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={`${service.id}-${index}`}
                onClick={() => handleCardClick(service)}
                className="w-[290px] sm:w-[320px] min-h-[112px] flex-shrink-0 bg-white hover:bg-emerald-50/40 rounded-2xl p-3.5 sm:p-4 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left relative"
              >
                {/* Horizontal Header: Icon + Service Title */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${service.iconBg} ${service.iconColor} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-[#0B1B3D] group-hover:text-[#008751] transition-colors leading-snug line-clamp-2 flex-1 min-w-0">
                    {service.title}
                  </h3>
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
        <div 
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left"
          >
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                    onClick={() => recordServiceClick(selectedService.id)}
                    className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 flex flex-col items-center text-center gap-1 transition-all"
                  >
                    <span className="font-bold text-xs">Mr, Didar (Owner)</span>
                    <span className="text-[10px] text-amber-700">050 5372999</span>
                  </a>

                  {/* AMRK Outlet */}
                  <a
                    href={`https://wa.me/${amrkNumber}?text=${encodeURIComponent(`Hello AMRK Typing Services (Ajman Ind. 2), I want to inquire about ${selectedService.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => recordServiceClick(selectedService.id)}
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
                    onClick={() => recordServiceClick(selectedService.id)}
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
                className="px-4 py-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold cursor-pointer"
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
