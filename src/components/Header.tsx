import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Lock, ShieldCheck, LogOut } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useSiteContent } from '../context/SiteContentContext';

export const Header: React.FC = () => {
  const { isAdminLoggedIn, logout } = useSiteContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTypingSubmenuOpen, setMobileTypingSubmenuOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Subservices under "Typing Services & Business" matching user's image layout
  const typingSubservices = [
    { id: 'immigration-gov', label: '1. Immigration Services & Government Online Application' },
    { id: 'labour-mohre', label: '2. Ministry of Labour (MOHRE) Application' },
    { id: 'business-company', label: '3. Business Setup & Company Services' },
    { id: 'medical-insurance', label: '4. Medical & Insurance Services' },
    { id: 'driving-transport', label: '5. Driving & Transport Services' },
    { id: 'government-utility', label: '6. Government Utility Services' },
    { id: 'other-typing-services', label: '7. Other Services in our Typing.' },
  ];

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesDropdown(false);
    setSubmenuOpen(false);
  }, [location.pathname]);

  // Click outside to close desktop Services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setServicesDropdown(false);
        setSubmenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks: { name: string; path: string; hasDropdown?: boolean }[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Outlets', path: '/outlets' },
    { name: 'Payment', path: '/payment' },
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
          
          {/* Brand Identity on Left */}
          <Link to="/" className="group cursor-pointer flex-shrink-0">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links (Right-aligned) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {navLinks.map((link) => {
              const active = isCurrentActive(link.path);

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    ref={servicesMenuRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesDropdown((prev) => {
                          const next = !prev;
                          if (next) {
                            setSubmenuOpen(false); // Show only 1st sub-component on opening Services
                          }
                          return next;
                        });
                      }}
                      className={`flex items-center gap-1 font-medium transition-colors py-2 cursor-pointer ${
                        active 
                          ? 'text-white border-b-2 border-amber-400 pb-1' 
                          : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-300 transition-transform ${servicesDropdown ? 'rotate-180 text-amber-400' : ''}`} />
                    </button>

                    {/* Dropdown Menu Container (Anchored right-0 so flyout flows nicely) */}
                    {servicesDropdown && (
                      <div 
                        className="absolute top-full right-0 pt-2 z-50 flex flex-row-reverse items-start animate-fadeIn"
                      >
                        {/* 1st Sub-Component Box: Travel & Ticketing + Typing Services & Business */}
                        <div className="w-64 bg-[#0B1528] border border-slate-700/90 rounded-2xl shadow-2xl p-2.5 space-y-1.5 flex-shrink-0">
                          <Link
                            to="/services#travel-ticketing"
                            onClick={() => {
                              setServicesDropdown(false);
                              setSubmenuOpen(false);
                            }}
                            className="block px-4 py-2.5 text-sm font-semibold text-slate-100 hover:text-amber-400 hover:bg-slate-800/80 rounded-xl transition-all"
                          >
                            Travel & Ticketing
                          </Link>

                          {/* Typing Services & Business - Clicking this opens the 2nd sub-component */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSubmenuOpen((prev) => !prev);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-all text-left ${
                              submenuOpen 
                                ? 'bg-slate-800 text-amber-400' 
                                : 'text-slate-100 hover:text-amber-400 hover:bg-slate-800/80'
                            }`}
                          >
                            <ChevronRight className={`w-4 h-4 transition-transform ml-1.5 flex-shrink-0 ${submenuOpen ? 'rotate-90 text-amber-400' : 'text-slate-400'}`} />
                            <span className="flex-1">Typing Services & Business</span>
                          </button>
                        </div>

                        {/* 2nd Sub-Component Box: Flyout to the left when Typing Services & Business is clicked */}
                        {submenuOpen && (
                          <div 
                            className="mr-2 w-[420px] bg-[#0B1528] border border-slate-700/90 rounded-2xl shadow-2xl p-4 sm:p-5 space-y-1.5 animate-fadeIn"
                          >
                            {typingSubservices.map((item) => (
                              <Link
                                key={item.id}
                                to={`/services#${item.id}`}
                                onClick={() => {
                                  setServicesDropdown(false);
                                  setSubmenuOpen(false);
                                }}
                                className="block px-3.5 py-2 text-[13.5px] font-bold text-white hover:text-amber-400 hover:bg-slate-800/70 rounded-xl transition-colors leading-snug cursor-pointer"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
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

            {/* Login / Admin Action Button right after Contact */}
            {isAdminLoggedIn ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-700/80">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md shadow-amber-400/20 transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Panel</span>
                </Link>
                <button
                  type="button"
                  onClick={() => logout()}
                  title="Logout Admin"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                id="header-login-btn"
                className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-400/20 transition-all cursor-pointer active:scale-95"
              >
                <Lock className="w-3.5 h-3.5 text-slate-950" />
                <span>Login</span>
              </Link>
            )}
          </nav>

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
        <div className="lg:hidden bg-[#0B1528] border-b border-slate-800 px-4 pt-4 pb-6">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium ${
                        isCurrentActive(link.path)
                          ? 'bg-amber-400/10 text-amber-400 font-bold'
                          : 'text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-900/60 rounded-xl border border-slate-800">
                        <Link
                          to="/services#travel-ticketing"
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 px-3 text-xs font-semibold text-slate-200 hover:text-amber-400"
                        >
                          Travel & Ticketing
                        </Link>
                        
                        <button
                          type="button"
                          onClick={() => setMobileTypingSubmenuOpen(!mobileTypingSubmenuOpen)}
                          className="w-full flex items-center justify-between py-2 px-3 text-xs font-bold text-amber-400 hover:bg-slate-800/60 rounded-lg text-left cursor-pointer"
                        >
                          <span>Typing Services & Business</span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${mobileTypingSubmenuOpen ? 'rotate-90 text-amber-400' : 'text-slate-400'}`} />
                        </button>

                        {mobileTypingSubmenuOpen && (
                          <div className="pl-2 space-y-1 border-l-2 border-amber-400/40 my-1">
                            {typingSubservices.map(sub => (
                              <Link
                                key={sub.id}
                                to={`/services#${sub.id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-1.5 px-2 text-[12px] text-slate-300 hover:text-white font-medium"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
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

            {/* Mobile Login / Admin Panel Option */}
            <div className="pt-2 border-t border-slate-800/80 mt-2">
              {isAdminLoggedIn ? (
                <div className="space-y-2">
                  <Link
                    to="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Admin Panel</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-red-950/40 text-red-300 text-xs font-semibold border border-red-800/40"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout Admin</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-md"
                >
                  <Lock className="w-4 h-4 text-slate-950" />
                  <span>Login to Admin</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
