import React from 'react';
import { useSiteContent } from '../context/SiteContentContext';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {
  const { content } = useSiteContent();

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Name & Subtitle */}
      <div className="flex flex-col text-left">
        <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase font-display leading-tight">
          {content.brand.name}
        </span>
        <span className="text-[11px] sm:text-xs text-slate-300 font-normal leading-tight">
          {content.brand.subtitle}
        </span>
      </div>
    </div>
  );
};
