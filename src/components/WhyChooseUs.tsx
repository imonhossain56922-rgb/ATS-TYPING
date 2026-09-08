import React from 'react';
import { 
  LayoutGrid, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  Info, 
  UserCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Wide Range of Services',
      subtitle: 'All your needs in one place',
      icon: LayoutGrid,
      bg: 'bg-[#0B1B3D]',
    },
    {
      title: 'Convenient Ajman Locations',
      subtitle: 'Two easy-to-reach branches',
      icon: MapPin,
      bg: 'bg-[#008751]',
    },
    {
      title: 'Professional Assistance',
      subtitle: 'Friendly and experienced team',
      icon: ShieldCheck,
      bg: 'bg-[#6D28D9]',
    },
    {
      title: 'Easy WhatsApp Support',
      subtitle: 'Quick and hassle-free',
      icon: MessageCircle,
      bg: 'bg-[#00a859]',
    },
    {
      title: 'Clear Service Information',
      subtitle: 'Know what you need',
      icon: Info,
      bg: 'bg-[#D97706]',
    },
    {
      title: 'Customer-Focused Approach',
      subtitle: 'Your satisfaction matters',
      icon: UserCheck,
      bg: 'bg-[#DC2626]',
    },
  ];

  return (
    <section className="py-14 bg-[#F1F5F9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display text-center mb-8">
          Why Choose UAE TYPING SERVICES?
        </h2>

        {/* 6 Horizontal Pill Cards as shown in reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-center gap-3.5 group"
              >
                {/* Colored Icon Badge */}
                <div className={`w-11 h-11 rounded-full ${feature.bg} flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <div className="text-left space-y-0.5">
                  <h3 className="text-xs font-bold text-[#0B1B3D] leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
