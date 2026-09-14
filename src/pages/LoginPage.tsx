import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, ShieldCheck, Megaphone, ArrowRight, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAdminLoggedIn, adminRole, adminUsername, login, logout } = useSiteContent();

  // Inputs are strictly NOT pre-filled by default as requested:
  // "kintu user name & password jano sakane default vabe show na hoya thake"
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // If already logged in, redirect option or message
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!username.trim()) {
      setErrorMessage('Please enter your User Name.');
      return;
    }

    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const result = login(username, password);
      setIsSubmitting(false);

      if (result.success) {
        navigate('/admin');
      } else {
        setErrorMessage(result.error || 'Invalid credentials. Access denied.');
      }
    }, 350);
  };

  return (
    <div className="min-h-[85vh] bg-slate-900/95 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Top Return to Home link */}
        <div className="mb-6 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Public Website</span>
          </Link>
          
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
            Admin Portal
          </span>
        </div>

        {/* Card Container */}
        <div className="bg-[#0E1526] border border-slate-700/80 rounded-3xl shadow-2xl p-7 sm:p-9 backdrop-blur-xl">
          
          {/* Header Icon & Title */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              Management Login
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Sign in to manage website content or publish new advertisements
            </p>
          </div>

          {/* If already logged in */}
          {isAdminLoggedIn ? (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-emerald-300 text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-bold text-white">
                    Logged in as: <span className="text-amber-300 font-mono">{adminUsername || 'admin'}</span>
                  </p>
                  <p className="text-xs text-emerald-300/90 mt-1">
                    {adminRole === 'ad_only' 
                      ? 'Role: Advertisement Manager (Only New Advertisement option activated)' 
                      : 'Role: Super Admin (Full website management and image editing)'}
                  </p>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => navigate('/admin')}
                  className="w-full py-3.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
                >
                  {adminRole === 'ad_only' ? (
                    <>
                      <Megaphone className="w-4 h-4" />
                      <span>Go to New Advertisement Panel</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Go to Admin Panel</span>
                    </>
                  )}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={logout}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Logout from Session</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Alert Box */}
              {errorMessage && (
                <div className="p-3.5 bg-red-950/50 border border-red-500/40 rounded-xl text-red-200 text-xs flex items-start gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{errorMessage}</span>
                </div>
              )}

              {/* Username Input Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  User Name
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="admin-username-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter User Name"
                    autoComplete="off"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  />
                </div>
              </div>

              {/* Password Input Field */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-300">
                    Password
                  </label>
                </div>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="admin-password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    autoComplete="off"
                    className="w-full pl-10 pr-11 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="admin-login-submit-btn"
                disabled={isSubmitting}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Login to Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Account Roles Reference Notice */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-[11px] text-slate-400 flex flex-col gap-1.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-300">Super Admin (All Options):</span>
                    <code className="text-amber-400 font-mono">Admin / UAE@2020</code>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-300">Ad User (New Ad Only):</span>
                    <code className="text-amber-400 font-mono">admin / uae@2026</code>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 text-center">
                  Public visitors do not need an account. All public typing services remain freely accessible.
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
