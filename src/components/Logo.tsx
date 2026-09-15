import React from 'react';

interface LogoProps {
  variant?: string;
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/ats-logo.jpg" 
        alt="Alayan Typing Services" 
        className="h-12 w-auto object-contain rounded-lg shadow-sm"
        onError={(e) => {
          // Fallback to text if image fails to load
          const target = e.currentTarget;
          target.style.display = 'none';
        }}
      />
    </div>
  );
};