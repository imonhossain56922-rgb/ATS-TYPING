import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SHARED_OWNER_PHONE_INTL, outletsData } from '../data/outletsData';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const ownerNumber = SHARED_OWNER_PHONE_INTL.replace('+', '');
  const amrkOutlet = outletsData.find(o => o.id === 'amrk');
  const alayanOutlet = outletsData.find(o => o.id === 'alayan' || o.id === 'ats');
  const amrkNumber = amrkOutlet ? amrkOutlet.officePhoneIntl.replace('+', '') : '971566745493';
  const alayanNumber = alayanOutlet ? alayanOutlet.officePhoneIntl.replace('+', '') : '971556140043';

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const navLinks: { name: string; path: string; hasDropdown?: boolean }[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Outlets', path: '/outlets' },
    { name: 'Contact', path: '/contact' },
  ];

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
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
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
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={`https://wa.me/${amrkNumber}?text=${encodeURIComponent('Hello AMRK Typing Services, I want to inquire about typing services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-200"
                >
                  <span className="font-semibold text-blue-300">AMRK Typing (Ind. 2)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={`https://wa.me/${alayanNumber}?text=${encodeURIComponent('Hello ALAYAN Typing Services, I want to inquire about typing services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-200"
                >
                  <span className="font-semibold text-emerald-300">ALAYAN Typing (Ind. 1)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
