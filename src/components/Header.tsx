import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown, ArrowRight, UserCheck, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SHARED_OWNER_PHONE_INTL, outletsData } from '../data/outletsData';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [whatsappDropdown, setWhatsappDropdown] = useState(false);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const ownerNumber = SHARED_OWNER_PHONE_INTL.replace('+', '');
  const amrkOutlet = outletsData.find(o => o.id === 'amrk');
  const alayanOutlet = outletsData.find(o => o.id === 'alayan' || o.id === 'ats');
  const amrkNumber = amrkOutlet ? amrkOutlet.officePhoneIntl.replace('+', '') : '971566745493';
  const alayanNumber = alayanOutlet ? alayanOutlet.officePhoneIntl.replace('+', '') : '971556140043';

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whatsappRef.current && !whatsappRef.current.contains(event.target as Node)) {
        setWhatsappDropdown(false);
      }
    };
    if (whatsappDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [whatsappDropdown]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesDropdown(false);
    setWhatsappDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Outlets', path: '/#outlets', isAnchor: true },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (link: { name: string; path: string; isAnchor?: boolean }) => {
    setIsMenuOpen(false);
    setServicesDropdown(false);
    setWhatsappDropdown(false);
    if (link.isAnchor) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('outlets');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById('outlets');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isCurrentActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1528] border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity with Dual Logos */}
          <Link to="/" className="group cursor-pointer">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links (Centered) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {navLinks.map((link) => {
              const active = isCurrentActive(link.path);

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 font-medium transition-colors py-2 ${
                        active 
                          ? 'text-white border-b-2 border-amber-400 pb-1' 
                          : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 text-slate-300" />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-64 bg-[#0B1528] border border-slate-700 rounded-xl shadow-2xl py-2 z-50 animate-fadeIn">
                        <Link
                          to="/services"
                          className="block px-4 py-2.5 text-xs text-slate-200 hover:text-amber-400 hover:bg-slate-800/80 transition-colors"
                        >
                          All 11 Service Categories
                        </Link>
                        <div className="h-px bg-slate-800 my-1" />
                        <Link
                          to="/services#gov-immigration"
                          className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                        >
                          Government & Immigration
                        </Link>
                        <Link
                          to="/services#labour-employment"
                          className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                        >
                          Labour & Employment
                        </Link>
                        <Link
                          to="/services#business-company"
                          className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                        >
                          Business & Company
                        </Link>
                        <Link
                          to="/services#tax-accounting"
                          className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                        >
                          Tax & Accounting
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.isAnchor) {
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="font-medium text-slate-200 hover:text-white transition-colors cursor-pointer py-2"
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors py-2 ${
                    active 
                      ? 'text-white border-b-2 border-amber-400 pb-1' 
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Green Pill Button with 3-Option Pop-up */}
            <div className="relative" ref={whatsappRef}>
              <button
                type="button"
                id="btn-header-whatsapp"
                onClick={() => setWhatsappDropdown(!whatsappDropdown)}
                className="px-4 py-2 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-expanded={whatsappDropdown}
                aria-label="Open WhatsApp chat options"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#00a859]" />
                <span>WhatsApp</span>
                <ChevronDown className={`w-3.5 h-3.5 text-emerald-200 transition-transform ${whatsappDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Pop-up options menu */}
              {whatsappDropdown && (
                <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-fadeIn text-left ring-1 ring-slate-900/10">
                  <div className="bg-gradient-to-r from-[#008751] to-[#00a859] p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Instant Support</span>
                        <h4 className="font-bold text-sm">Start WhatsApp Chat</h4>
                        <p className="text-[11px] text-emerald-100">Select which contact or outlet you want to reach:</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setWhatsappDropdown(false)}
                        className="w-6 h-6 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3 space-y-2 bg-slate-50">
                    {/* 1. Owner */}
                    <a
                      href={`https://wa.me/${ownerNumber}?text=${encodeURIComponent('Hello Mr. Didar, I would like to inquire about typing services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setWhatsappDropdown(false)}
                      className="group block p-2.5 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center flex-shrink-0">
                            <UserCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-xs text-[#0B1B3D] group-hover:text-[#008751] block">Owner (Mr. Didar)</span>
                            <span className="text-[11px] text-slate-700 font-mono font-semibold">+971 50 537 2999</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">Management</span>
                      </div>
                      <p className="text-[10px] text-slate-500 pl-10">Direct inquiries & escalations</p>
                    </a>

                    {/* 2. AMRK Outlet */}
                    <a
                      href={`https://wa.me/${amrkNumber}?text=${encodeURIComponent('Hello AMRK Typing Services (Ajman Ind. 2), I would like to inquire about typing services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setWhatsappDropdown(false)}
                      className="group block p-2.5 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-xs text-[#0B1B3D] group-hover:text-[#008751] block">AMRK TYPING SERVICES</span>
                            <span className="text-[11px] text-slate-700 font-mono font-semibold">+971 56 674 5493</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">Outlet 1</span>
                      </div>
                      <p className="text-[10px] text-slate-500 pl-10">Ajman Industrial 2 • Near Bengali Market</p>
                    </a>

                    {/* 3. ALAYAN Outlet */}
                    <a
                      href={`https://wa.me/${alayanNumber}?text=${encodeURIComponent('Hello ALAYAN Typing Services (Ajman Ind. 1), I would like to inquire about typing services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setWhatsappDropdown(false)}
                      className="group block p-2.5 rounded-2xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-xs text-[#0B1B3D] group-hover:text-[#008751] block">ALAYAN TYPING SERVICES</span>
                            <span className="text-[11px] text-slate-700 font-mono font-semibold">+971 55 614 0043</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">Outlet 2</span>
                      </div>
                      <p className="text-[10px] text-slate-500 pl-10">Ajman Industrial 1 • Central Souq #46</p>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Get Started Outlined Pill Button as in reference image */}
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full border border-amber-400 text-white hover:bg-amber-400 hover:text-slate-950 font-semibold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setWhatsappDropdown(!whatsappDropdown)}
              className="p-2 rounded-full bg-[#00a859] text-white sm:hidden cursor-pointer"
              aria-label="Open WhatsApp options"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#00a859]" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0B1528] border-b border-slate-800 px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              if (link.isAnchor) {
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800 text-sm font-medium"
                  >
                    {link.name}
                  </button>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium ${
                    isCurrentActive(link.path)
                      ? 'bg-amber-400/10 text-amber-400 font-bold'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-2.5 rounded-full border border-amber-400 text-white text-center font-bold text-xs"
            >
              Get Started →
            </Link>

            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-700/80 space-y-2 text-left">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-slate-900" />
                <span>Chat Directly on WhatsApp:</span>
              </div>
              <div className="space-y-1.5">
                <a
                  href={`https://wa.me/${ownerNumber}?text=${encodeURIComponent('Hello Mr. Didar, I want to inquire about typing services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-200"
                >
                  <span className="font-semibold text-amber-300">Owner (Mr. Didar)</span>
                  <span className="text-[10px] font-mono text-slate-400">+971 50 537 2999</span>
                </a>
                <a
                  href={`https://wa.me/${amrkNumber}?text=${encodeURIComponent('Hello AMRK Typing Services, I want to inquire about typing services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-200"
                >
                  <span className="font-semibold text-blue-300">AMRK Typing (Ind. 2)</span>
                  <span className="text-[10px] font-mono text-slate-400">+971 56 674 5493</span>
                </a>
                <a
                  href={`https://wa.me/${alayanNumber}?text=${encodeURIComponent('Hello ALAYAN Typing Services, I want to inquire about typing services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-200"
                >
                  <span className="font-semibold text-emerald-300">ALAYAN Typing (Ind. 1)</span>
                  <span className="text-[10px] font-mono text-slate-400">+971 55 614 0043</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
