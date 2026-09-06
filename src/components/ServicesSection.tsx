import React, { useState, useMemo } from 'react';
import {
  Search,
  Users,
  Award,
  Compass,
  ShieldCheck,
  CreditCard,
  HeartPulse,
  ShieldPlus,
  Briefcase,
  FileSpreadsheet,
  Home,
  Scale,
  Coins,
  Gauge,
  Droplet,
  Smartphone,
  Send,
  Receipt,
  Languages,
  PenTool,
  MessageCircle,
  FileText,
  Clock,
  Sparkles,
  CheckCircle,
  Plane,
  LayoutGrid,
  Building2,
  Car,
  Zap,
  IdCard
} from 'lucide-react';
import { serviceCategories, servicesData } from '../data/servicesData';
import { translations } from '../data/translations';
import { ServiceItem, Language } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  language: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const t = translations[language];

  // Helper to render lucide icon dynamically
  const renderIcon = (iconName: string, className = 'w-6 h-6') => {
    switch (iconName) {
      case 'Users': return <Users className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'IdCard': return <IdCard className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'ShieldPlus': return <ShieldPlus className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'FileSpreadsheet': return <FileSpreadsheet className={className} />;
      case 'Home': return <Home className={className} />;
      case 'Scale': return <Scale className={className} />;
      case 'Coins': return <Coins className={className} />;
      case 'Gauge': return <Gauge className={className} />;
      case 'Droplet': return <Droplet className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Send': return <Send className={className} />;
      case 'Receipt': return <Receipt className={className} />;
      case 'Languages': return <Languages className={className} />;
      case 'PenTool': return <PenTool className={className} />;
      case 'Plane': return <Plane className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Car': return <Car className={className} />;
      case 'Zap': return <Zap className={className} />;
      default: return <LayoutGrid className={className} />;
    }
  };

  // Filter and search logic
  const filteredServices = useMemo(() => {
    return servicesData.filter((svc) => {
      const matchesCategory = selectedCategory === 'all' || svc.categoryId === selectedCategory;

      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const matchesText =
        svc.titleEn.toLowerCase().includes(q) ||
        svc.titleBn.toLowerCase().includes(q) ||
        svc.titleAr.toLowerCase().includes(q) ||
        svc.descEn.toLowerCase().includes(q) ||
        svc.descBn.toLowerCase().includes(q) ||
        svc.descAr.toLowerCase().includes(q) ||
        svc.requiredDocuments.en.some((d) => d.toLowerCase().includes(q)) ||
        svc.requiredDocuments.bn.some((d) => d.toLowerCase().includes(q));

      return matchesCategory && matchesText;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-[#080C14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 text-amber-400 border border-amber-500/25">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AUTHORITATIVE SERVICES PORTFOLIO • AJMAN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-display">
            {language === 'bn' ? (
              <>আমাদের বিশেষায়িত <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">সরকারি ও টাইপিং সার্ভিসেস</span></>
            ) : language === 'ar' ? (
              <>دليل خدمات مركز <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-arabic">الأيان للطباعة والمعاملات</span></>
            ) : (
              <>Government & <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">PRO Typing Solutions</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            {language === 'bn'
              ? 'ভিসা, পাসপোর্ট, ট্রেড লাইসেন্স, তাসহিল, তাসদিক থেকে শুরু করে ট্রাফিক ফাইন পেমেন্ট ও বিকাশ সেবা পর্যন্ত।'
              : language === 'ar'
              ? 'معاملات الجوازات والإقامة، الهوية، الفحص الطبي، الرخص وتصديق بلدية عجمان بأسعار مميزة وسرعة فائقة.'
              : 'Official clearance and document typing across all UAE federal authorities, immigration portals, Ajman Municipality, and MOHRE.'}
          </p>
        </div>

        {/* Live Search Input Bar */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-amber-400 absolute left-4 pointer-events-none" />
            <input
              id="services-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-28 py-3.5 bg-[#0E1422] border border-slate-700/80 focus:border-amber-400 rounded-full text-sm text-slate-100 placeholder-slate-500 shadow-inner focus:outline-none focus:ring-1 focus:ring-amber-400/40 transition-all"
            />
            <div className="absolute right-3 flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700">
                {filteredServices.length} Results
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-slate-400 hover:text-white px-2 py-0.5 rounded-full bg-slate-800"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 custom-scrollbar no-scrollbar-mobile">
          {serviceCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const title = language === 'bn' ? cat.titleBn : language === 'ar' ? cat.titleAr : cat.titleEn;

            return (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 ring-2 ring-amber-400/30'
                    : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-700/70 hover:text-white'
                }`}
              >
                {renderIcon(cat.iconName, 'w-3.5 h-3.5')}
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#0E1422] rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No services matched "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-amber-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const title = language === 'bn' ? service.titleBn : language === 'ar' ? service.titleAr : service.titleEn;
              const desc = language === 'bn' ? service.descBn : language === 'ar' ? service.descAr : service.descEn;
              const docs = service.requiredDocuments[language] || service.requiredDocuments.en;

              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="bg-[#0E1422] rounded-2xl border border-slate-800/90 hover:border-amber-500/40 p-6 transition-all duration-300 flex flex-col justify-between group hover:bg-[#121A2D] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden"
                >
                  {/* Popular Flag */}
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3.5 py-0.5 rounded-bl-xl shadow-sm">
                      Official Priority
                    </div>
                  )}

                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/90 text-amber-400 border border-slate-700/80 flex items-center justify-center flex-shrink-0 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all duration-300 shadow-inner">
                        {renderIcon(service.iconName, 'w-5 h-5')}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white font-display line-clamp-2 leading-snug group-hover:text-amber-200 transition-colors">
                          {title}
                        </h3>
                        <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider font-mono">
                          {service.categoryId.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4 font-light">
                      {desc}
                    </p>

                    {/* Requirements mini-badge preview */}
                    {docs && docs.length > 0 && (
                      <div className="bg-[#080C14] p-3.5 rounded-xl border border-slate-800 mb-4">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-amber-400" />
                          <span>{t.requiredDocsHeading}</span>
                        </div>
                        <ul className="text-[11px] text-slate-400 space-y-1.5 line-clamp-2">
                          {docs.slice(0, 2).map((d, i) => (
                            <li key={i} className="flex items-center gap-2 truncate">
                              <span className="text-emerald-400 font-bold text-xs">✓</span>
                              <span className="truncate">{d}</span>
                            </li>
                          ))}
                          {docs.length > 2 && (
                            <li className="text-amber-400 font-semibold text-[10px] pl-3.5">
                              +{docs.length - 2} additional requirements...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      id={`btn-view-details-${service.id}`}
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-semibold text-slate-300 hover:text-white py-2 px-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>Requirements</span>
                    </button>

                    <a
                      id={`btn-whatsapp-${service.id}`}
                      href={`https://wa.me/971505372999?text=${encodeURIComponent(
                        `Hello Mr. Didar! I am inquiring about: *${service.titleEn}* (${title}). Please let me know the required procedure & charges.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20 active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-amber-500" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Service Modal Popup */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        language={language}
      />
    </section>
  );
};
