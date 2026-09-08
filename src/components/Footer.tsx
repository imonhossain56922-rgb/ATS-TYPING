import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1528] text-slate-300 pt-12 pb-6 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-800 items-start">
          
          {/* Brand Col with Dual Logos */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for visa, immigration, government, labour, business, tax, insurance, transport, travel and document services across the UAE.
            </p>
          </div>

          {/* Outlets Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Our Outlets
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link 
                  to="/amrk-typing-services" 
                  className="hover:text-amber-400 transition-colors flex items-start gap-2 font-medium text-slate-200"
                >
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">AMRK TYPING SERVICES</span>
                    <span className="text-[11px] text-slate-400">Ajman Industrial 2 • Near Bengali Market</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  to="/alayan-typing-services" 
                  className="hover:text-amber-400 transition-colors flex items-start gap-2 font-medium text-slate-200"
                >
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">ALAYAN TYPING SERVICES</span>
                    <span className="text-[11px] text-slate-400">Ajman Industrial 1 • Central Souq Shop #46</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Golden Skyline Illustration & Cursive Script */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right pt-4 lg:pt-0">
            {/* Golden Skyline Vector Silhouette */}
            <div className="w-full max-w-[200px] mb-2 opacity-90">
              <svg viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <path
                  d="M10 75 H230 M20 75 V60 H30 V75 M35 75 V50 H45 V75 M50 75 V65 H60 V75 M65 75 V45 H75 V75 M80 75 V30 H90 V75 M95 75 V55 H105 V75 M115 75 V15 L118 5 L121 15 V75 M130 75 V35 H140 V75 M145 75 V48 H155 V75 M160 75 V28 H170 V75 M175 75 V62 H185 V75 M190 75 V42 H200 V75 M205 75 V58 H215 V75"
                  stroke="#F59E0B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Golden Cursive Signature Text */}
            <p className="text-amber-400 font-serif italic text-base sm:text-lg leading-tight tracking-wide drop-shadow-sm">
              Your Trusted<br />Service Partner in UAE
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 2026 UAE TYPING SERVICES. All Rights Reserved.
          </p>

          <p className="max-w-2xl text-center md:text-right text-slate-400 font-light leading-relaxed">
            <strong className="text-slate-300">UAE TYPING SERVICES</strong> is an independent typing and document assistance service provider. Government applications and approvals are subject to the rules and decisions of the relevant UAE authorities.
          </p>
        </div>

      </div>
    </footer>
  );
};
