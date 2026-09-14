import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Save, 
  LogOut, 
  Globe, 
  RotateCcw, 
  Image as ImageIcon, 
  Type, 
  Building2, 
  Phone, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Info,
  Megaphone
} from 'lucide-react';
import { useSiteContent, initialSiteImages, defaultSiteContent } from '../context/SiteContentContext';
import { AdminImageCard } from '../components/AdminImageCard';
import { AdminAdvertisementSection } from '../components/AdminAdvertisementSection';
import { SiteContent } from '../types';

export const AdminPanelPage: React.FC = () => {
  const navigate = useNavigate();
  const { content, updateContent, updateImage, resetToDefaults, isAdminLoggedIn, logout } = useSiteContent();

  // Local draft state for editing texts and sections
  const [draft, setDraft] = useState<SiteContent>(content);
  const [activeTab, setActiveTab] = useState<'images' | 'hero' | 'outlets' | 'contact' | 'payment' | 'advertisement'>('images');
  const [showSaveToast, setShowSaveToast] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  // Guard: if not authenticated as Admin, redirect to /login
  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate('/login');
    }
  }, [isAdminLoggedIn, navigate]);

  // Keep draft in sync if external updates happen
  useEffect(() => {
    setDraft(content);
  }, [content]);

  if (!isAdminLoggedIn) {
    return null;
  }

  const handleSaveAll = () => {
    updateContent(draft);
    setShowSaveToast(true);
    setTimeout(() => {
      setShowSaveToast(false);
    }, 3500);
  };

  const handleResetAll = () => {
    resetToDefaults();
    setDraft(defaultSiteContent);
    setShowResetConfirm(false);
    setShowSaveToast(true);
    setTimeout(() => {
      setShowSaveToast(false);
    }, 3500);
  };

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
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-500/40 animate-pulse">
                  Live Editing
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Logged in as <strong className="text-amber-300 font-semibold">Admin</strong> (Full Editing Permissions)
              </p>
            </div>
          </div>

          {/* Action Buttons: Live Site, Save, Logout */}
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
              onClick={handleSaveAll}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-amber-400/20 active:scale-95 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>

            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="px-3 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-red-800/40 cursor-pointer"
              title="Logout from Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Floating Save Toast */}
      {showSaveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm animate-bounce">
          <CheckCircle2 className="w-5 h-5" />
          <span>Website content successfully saved and live updated!</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Notice Info Card */}
        <div className="mb-8 p-4 sm:p-5 bg-gradient-to-r from-[#0C1527] to-[#0A101D] border border-amber-500/20 rounded-2xl flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm space-y-1">
            <h3 className="font-bold text-white">
              Direct CMS & Dimension Inspector Activated
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Every edit made here updates immediately on the public website. 
              <strong className="text-amber-300 ml-1">
                Image dimensions are calculated automatically and displayed exclusively in this Admin view.
              </strong>
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'images'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Images & Size Overlay ({draft.images.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'hero'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Brand & Hero Texts</span>
          </button>

          <button
            onClick={() => setActiveTab('outlets')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'outlets'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Branches (AMRK & ALAYAN)</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Contact & Owner Info</span>
          </button>

          <button
            onClick={() => setActiveTab('payment')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'payment'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Payment & Tabby/Tamara</span>
          </button>

          {/* New Advertisement Option Requested */}
          <button
            id="admin-tab-new-advertisement"
            onClick={() => setActiveTab('advertisement')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'advertisement'
                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-400/25 ring-2 ring-amber-300/60'
                : 'bg-amber-500/10 text-amber-300 hover:text-white hover:bg-amber-500/20 border border-amber-500/40'
            }`}
          >
            <Megaphone className={`w-4 h-4 ${activeTab === 'advertisement' ? 'text-slate-950' : 'text-amber-400 animate-bounce'}`} />
            <span>New advertisement</span>
            {content.advertisement?.isActive && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" title="Active on Public Website" />
            )}
          </button>
        </div>

        {/* TAB 1: ALL WEBSITE IMAGES WITH SIZE OVERLAY (Crucial Feature) */}
        {activeTab === 'images' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>Website Images & Dimension Inspector</span>
                  <span className="text-xs font-mono font-normal bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    Real-time Pixel Dimensions Overlaid
                  </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Each image shows its exact natural width and height. You can replace images with local file uploads or custom URLs.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveAll}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all"
                >
                  Save All Images
                </button>
              </div>
            </div>

            {/* Grid of Image Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {draft.images.map((img) => (
                <AdminImageCard
                  key={img.id}
                  image={img}
                  onUpdateUrl={(newUrl) => {
                    updateImage(img.id, newUrl);
                    // Also update draft
                    setDraft((prev) => ({
                      ...prev,
                      images: prev.images.map((i) => i.id === img.id ? { ...i, url: newUrl } : i)
                    }));
                  }}
                  onResetUrl={() => {
                    const original = initialSiteImages.find((i) => i.id === img.id);
                    if (original) {
                      updateImage(img.id, original.url);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: HERO & BRAND TEXTS */}
        {activeTab === 'hero' && (
          <div className="bg-[#0C1527] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
              Brand Identity & Hero Section Text Content
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Brand Name</label>
                <input
                  type="text"
                  value={draft.brand.name}
                  onChange={(e) => setDraft({ ...draft, brand: { ...draft.brand, name: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Brand Subtitle</label>
                <input
                  type="text"
                  value={draft.brand.subtitle}
                  onChange={(e) => setDraft({ ...draft, brand: { ...draft.brand, subtitle: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Hero Eyebrow Label</label>
                <input
                  type="text"
                  value={draft.hero.eyebrow}
                  onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, eyebrow: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Quick Call Button Phone</label>
                <input
                  type="text"
                  value={draft.hero.quickCallPhone}
                  onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, quickCallPhone: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Main Hero Headline</label>
                <input
                  type="text"
                  value={draft.hero.title}
                  onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, title: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Hero Supporting Paragraph</label>
                <textarea
                  rows={3}
                  value={draft.hero.subtitle}
                  onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, subtitle: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Supervision Text</label>
                <input
                  type="text"
                  value={draft.hero.supervisionText}
                  onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, supervisionText: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Shop Location Text</label>
                <input
                  type="text"
                  value={draft.hero.shopLocationText}
                  onChange={(e) => setDraft({ ...draft, hero: { ...draft.hero, shopLocationText: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white focus:ring-1 focus:ring-amber-400"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSaveAll}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg cursor-pointer"
              >
                Save Brand & Hero Texts
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: OUTLETS (AMRK & ALAYAN) */}
        {activeTab === 'outlets' && (
          <div className="space-y-8">
            {/* AMRK Outlet Card */}
            <div className="bg-[#0C1527] border border-blue-900/60 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-blue-300 flex items-center gap-2">
                  <span>Branch 1: AMRK TYPING SERVICES (Ajman Industrial 2)</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">ID: amrk</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Branch Name</label>
                  <input
                    type="text"
                    value={draft.outlets.amrk.name}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, amrk: { ...draft.outlets.amrk, name: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Location Area</label>
                  <input
                    type="text"
                    value={draft.outlets.amrk.location}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, amrk: { ...draft.outlets.amrk, location: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Office Phone</label>
                  <input
                    type="text"
                    value={draft.outlets.amrk.officePhone}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, amrk: { ...draft.outlets.amrk, officePhone: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Email Address</label>
                  <input
                    type="text"
                    value={draft.outlets.amrk.email}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, amrk: { ...draft.outlets.amrk, email: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Full Address & Landmarks</label>
                  <textarea
                    rows={2}
                    value={draft.outlets.amrk.address}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, amrk: { ...draft.outlets.amrk, address: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Google Maps Direction URL</label>
                  <input
                    type="text"
                    value={draft.outlets.amrk.googleMapsUrl}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, amrk: { ...draft.outlets.amrk, googleMapsUrl: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white font-mono text-xs"
                  />
                </div>
              </div>
            </div>

            {/* ALAYAN Outlet Card */}
            <div className="bg-[#0C1527] border border-emerald-900/60 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-emerald-300 flex items-center gap-2">
                  <span>Branch 2: ALAYAN TYPING SERVICES (Ajman Industrial 1)</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">ID: alayan</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Branch Name</label>
                  <input
                    type="text"
                    value={draft.outlets.alayan.name}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, alayan: { ...draft.outlets.alayan, name: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Location Area</label>
                  <input
                    type="text"
                    value={draft.outlets.alayan.location}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, alayan: { ...draft.outlets.alayan, location: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Office / Shop Phone</label>
                  <input
                    type="text"
                    value={draft.outlets.alayan.officePhone}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, alayan: { ...draft.outlets.alayan, officePhone: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Email Address</label>
                  <input
                    type="text"
                    value={draft.outlets.alayan.email}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, alayan: { ...draft.outlets.alayan, email: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Full Address & Landmarks</label>
                  <textarea
                    rows={2}
                    value={draft.outlets.alayan.address}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, alayan: { ...draft.outlets.alayan, address: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Google Maps Direction URL</label>
                  <input
                    type="text"
                    value={draft.outlets.alayan.googleMapsUrl}
                    onChange={(e) => setDraft({
                      ...draft,
                      outlets: { ...draft.outlets, alayan: { ...draft.outlets.alayan, googleMapsUrl: e.target.value } }
                    })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white font-mono text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleSaveAll}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg cursor-pointer"
              >
                Save Branches Information
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: CONTACT & OWNER INFO */}
        {activeTab === 'contact' && (
          <div className="bg-[#0C1527] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
              Owner Management & Central Contact Numbers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Owner Name</label>
                <input
                  type="text"
                  value={draft.contact.ownerName}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, ownerName: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Primary Phone (WhatsApp & Call)</label>
                <input
                  type="text"
                  value={draft.contact.primaryPhone}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, primaryPhone: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Secondary Mobile</label>
                <input
                  type="text"
                  value={draft.contact.secondaryPhone}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, secondaryPhone: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Shop Mobile / WhatsApp</label>
                <input
                  type="text"
                  value={draft.contact.shopPhone}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, shopPhone: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Landline Phone</label>
                <input
                  type="text"
                  value={draft.contact.landlinePhone}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, landlinePhone: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Primary Email</label>
                <input
                  type="text"
                  value={draft.contact.primaryEmail}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, primaryEmail: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Working Hours Text</label>
                <input
                  type="text"
                  value={draft.contact.workingHoursEn}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, workingHoursEn: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Shop 46 Physical Address</label>
                <input
                  type="text"
                  value={draft.contact.addressEn}
                  onChange={(e) => setDraft({ ...draft, contact: { ...draft.contact, addressEn: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSaveAll}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg cursor-pointer"
              >
                Save Contact Information
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: PAYMENT & TABBY/TAMARA */}
        {activeTab === 'payment' && (
          <div className="bg-[#0C1527] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
              Payment Gateway & Tabby/Tamara Configuration
            </h2>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Nomod Payment Direct URL (Tabby & Tamara Link)
                </label>
                <input
                  type="text"
                  value={draft.payment.nomodUrl}
                  onChange={(e) => setDraft({ ...draft, payment: { ...draft.payment, nomodUrl: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2.5 rounded-xl text-sm text-white font-mono"
                />
                <p className="text-[11px] text-slate-400">
                  When customers click &quot;Pay with Tabby/Tamara&quot;, this secure URL is opened.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Tab Title</label>
                  <input
                    type="text"
                    value={draft.payment.tabbyTamaraTitle}
                    onChange={(e) => setDraft({ ...draft, payment: { ...draft.payment, tabbyTamaraTitle: e.target.value } })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Button Label</label>
                  <input
                    type="text"
                    value={draft.payment.tabbyTamaraBtnText}
                    onChange={(e) => setDraft({ ...draft, payment: { ...draft.payment, tabbyTamaraBtnText: e.target.value } })}
                    className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">
                  Attached QR Stand Design Graphic Path
                </label>
                <input
                  type="text"
                  value={draft.payment.qrStandImg}
                  onChange={(e) => setDraft({ ...draft, payment: { ...draft.payment, qrStandImg: e.target.value } })}
                  className="w-full bg-slate-950 border border-slate-700 px-3.5 py-2 rounded-xl text-sm text-white font-mono"
                />
                <p className="text-[11px] text-slate-400">
                  Default SVG path: <code className="text-amber-300">/tabby-tamara-qr-stand.svg</code>. (You can also upload or customize it via the Images tab).
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSaveAll}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg cursor-pointer"
              >
                Save Payment Settings
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: NEW ADVERTISEMENT (720x1280, Duration, Live Overlay) */}
        {activeTab === 'advertisement' && (
          <AdminAdvertisementSection />
        )}

        {/* Global Reset Option Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-300">
              Restore Initial Website Content
            </h4>
            <p className="text-xs text-slate-500">
              Revert all edited texts and images back to default factory settings.
            </p>
          </div>

          <div>
            {showResetConfirm ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetAll}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Yes, Revert to Defaults
                </button>
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Factory Defaults</span>
              </button>
            )}
          </div>
        </div>

      </main>

    </div>
  );
};
