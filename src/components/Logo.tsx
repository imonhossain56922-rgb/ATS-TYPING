import React from 'react';

interface LogoProps {
  variant?: 'gold' | 'green' | 'light' | 'compact';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'gold', showSubtitle = true, className = '' }) => {
  const isGold = variant === 'gold';
  const isLight = variant === 'light';
  const isCompact = variant === 'compact';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* ATS Stylized Vector Mark */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 200 95"
          className={isCompact ? 'w-16 h-8' : 'w-24 sm:w-28 h-12 sm:h-14'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold Gradient */}
            <linearGradient id="atsGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="35%" stopColor="#EAB308" />
              <stop offset="70%" stopColor="#CA8A04" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>

            {/* Green Gradient */}
            <linearGradient id="atsGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="40%" stopColor="#15803D" />
              <stop offset="85%" stopColor="#166534" />
              <stop offset="100%" stopColor="#14532D" />
            </linearGradient>

            {/* Dark/Light 3D Shadow */}
            <linearGradient id="atsSwooshGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#84CC16" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            <filter id="atsGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor={isGold ? '#EAB308' : '#15803D'} floodOpacity="0.35" />
            </filter>
          </defs>


          {/* Letter A */}
          <path
            d="M 16 72 L 40 18 L 54 18 L 78 72 L 62 72 L 56 56 L 36 56 L 30 72 Z M 40 44 L 52 44 L 46 29 Z"
            fill={isGold ? 'url(#atsGoldGrad)' : 'url(#atsGreenGrad)'}
            filter="url(#atsGlow)"
          />

          {/* Letter T */}
          <path
            d="M 68 18 L 126 18 L 126 32 L 105 32 L 105 72 L 89 72 L 89 32 L 68 32 Z"
            fill={isGold ? 'url(#atsGoldGrad)' : 'url(#atsGreenGrad)'}
            filter="url(#atsGlow)"
          />

          {/* Letter S */}
          <path
            d="M 132 30 C 132 21 140 18 152 18 C 166 18 174 24 175 33 L 160 35 C 159 29 156 26 151 26 C 146 26 143 28 143 31 C 143 35 147 37 156 40 C 170 44 177 49 177 58 C 177 68 168 73 154 73 C 140 73 131 66 130 56 L 145 54 C 146 61 150 64 155 64 C 160 64 164 62 164 58 C 164 53 160 51 150 48 C 137 44 132 39 132 30 Z"
            fill={isGold ? 'url(#atsGoldGrad)' : 'url(#atsGreenGrad)'}
            filter="url(#atsGlow)"
          />

          {/* Dynamic Signature Swoosh across ATS */}
          <path
            d="M 6 60 Q 85 45 192 12 Q 130 36 6 60 Z"
            fill="url(#atsSwooshGrad)"
            opacity="0.95"
          />

          {/* "Typing Services" bottom text */}
          <text
            x="100"
            y="85"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="10"
            letterSpacing="2.5"
            fill={isGold ? '#FDE047' : '#22C55E'}
          >
            TYPING SERVICES
          </text>
        </svg>
      </div>

      {/* Text Branding */}
      {!isCompact && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-display">
              ALAYAN
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              ATS
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
            <span className="text-amber-400 font-semibold">TYPING SERVICES</span>
            <span>•</span>
            <span className="text-emerald-400 font-arabic font-bold text-sm">الأيان للطباعة</span>
          </div>

          {showSubtitle && (
            <span className="text-[11px] text-slate-400 font-bengali">
              বাংলাদেশি টাইপিং • শপ নং ৪৬ আজমান
            </span>
          )}
        </div>
      )}
    </div>
  );
};
