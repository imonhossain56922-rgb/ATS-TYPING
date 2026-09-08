import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Name & Subtitle */}
      <div className="flex flex-col text-left">
        <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase font-display leading-tight">
          UAE TYPING SERVICES
        </span>
        <span className="text-[11px] sm:text-xs text-slate-300 font-normal leading-tight">
          Visa & Government Services in Ajman
        </span>
      </div>
    </div>
  );
};
