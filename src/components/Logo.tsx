import React from 'react';

export const Logo: React.FC<{ variant?: string }> = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/logo.jpg" 
        alt="Alayan Typing Services" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};