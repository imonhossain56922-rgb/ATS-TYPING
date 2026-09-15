import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  LogOut, 
  Globe, 
  ExternalLink,
  Megaphone
} from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';
import { AdminAdvertisementSection } from '../components/AdminAdvertisementSection';

export const AdminPanelPage: React.FC = () => {
  const navigate = useNavigate();
  const { content, isAdminLoggedIn, logout } = useSiteContent();

  // Guard: if not authenticated as Admin, redirect to /login
  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate('/login');
    }
  }, [isAdminLoggedIn, navigate]);

  if (!isAdminLoggedIn) {
    return null;
  }

  const currentAd = content.advertisement;

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pb-24 selection:bg-amber-400 selection:text-black">
      
      {/* Top Admin Control Bar */}
      <header className="sticky top-0 z-40 bg-[#0B1324]/95 border-b border-slate-800 backdrop-blur-md px-4 sm:px-8 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Brand & Admin Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-400/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white font-display tracking-tight">
                  UAE Typing — Admin Panel
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  New Advertisement
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Logged in as <strong className="text-amber-300 font-semibold">Admin</strong>
              </p>
            </div>
          </div>

          {/* Action Buttons: Live Site, Logout */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">View Public Website</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </Link>

            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="px-3.5 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-red-800/40 cursor-pointer"
              title="Logout from Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Active Option Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black shadow-md shadow-amber-400/20">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-extrabold text-white">
                  New Advertisement
                </h2>
                {currentAd?.isActive ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live & Active
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-400 border border-slate-700">
                    Inactive
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage promotional pop-up poster, custom dimensions, display duration, and live status.
              </p>
            </div>
          </div>
        </div>

        {/* The Single Admin Option: New Advertisement */}
        <AdminAdvertisementSection />

      </main>

    </div>
  );
};
