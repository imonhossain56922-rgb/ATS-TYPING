import React, { useState } from 'react';
import { 
  Building2, 
  Link2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Receipt, 
  MessageCircle, 
  Lock, 
  BadgeCheck, 
  Clock, 
  FileText 
} from 'lucide-react';
import { SHARED_OWNER_PHONE_INTL, outletsData } from '../data/outletsData';

type PaymentOption = 'tabby-tamara' | 'bank-transfer' | 'link-payment';

export const PaymentPage: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeOption, setActiveOption] = useState<PaymentOption>('tabby-tamara');

  const ownerNumber = SHARED_OWNER_PHONE_INTL.replace('+', '');
  const amrkOutlet = outletsData.find(o => o.id === 'amrk');
  const alayanOutlet = outletsData.find(o => o.id === 'alayan' || o.id === 'ats');
  const amrkNumber = amrkOutlet ? amrkOutlet.officePhoneIntl.replace('+', '') : '971566745493';
  const alayanNumber = alayanOutlet ? alayanOutlet.officePhoneIntl.replace('+', '') : '971556140043';

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  // Bank accounts data for both outlets
  const bankAccounts = [
    {
      outletName: 'AMRK TYPING SERVICES',
      location: 'Ajman Industrial 2 (Near Bengali Market Road)',
      beneficiary: 'AMRK TYPING SERVICES L.L.C',
      bankName: 'Dubai Islamic Bank (DIB)',
      accountNumber: '025520098471201',
      iban: 'AE590240000025520098471',
      swiftCode: 'DIBKAEAD',
      currency: 'AED (UAE Dirham)',
      outletPhone: amrkNumber,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      outletName: 'ALAYAN TYPING SERVICES',
      location: 'Ajman Industrial 1 (Central Souq, Shop 46)',
      beneficiary: 'ALAYAN TYPING SERVICES',
      bankName: 'Emirates Islamic Bank',
      accountNumber: '037841029384751',
      iban: 'AE820340000037841029384',
      swiftCode: 'EBILAEAD',
      currency: 'AED (UAE Dirham)',
      outletPhone: alayanNumber,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-amber-400 selection:text-black">
      
      {/* 1. Header / Hero Section */}
      <section className="relative bg-[#0B1528] text-white pt-16 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#008751_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Secure & Authorized Payment Channels</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            Payment Options
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We provide convenient, flexible, and fully transparent payment facilities for all government applications, visa typing, and trade license services across AMRK & ALAYAN Typing.
          </p>

          {/* Interactive Payment Option Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-bold" role="tablist">
            <button 
              type="button"
              role="tab"
              aria-selected={activeOption === 'tabby-tamara'}
              onClick={() => setActiveOption('tabby-tamara')}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                activeOption === 'tabby-tamara'
                  ? 'bg-emerald-400 text-slate-950 border-emerald-300 font-black ring-2 ring-emerald-400/50 shadow-emerald-500/20 scale-[1.02]'
                  : 'bg-slate-800/90 hover:bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${activeOption === 'tabby-tamara' ? 'bg-slate-950' : 'bg-emerald-400'}`} />
              <span>Tabby & Tamara (Buy Now Pay Later)</span>
            </button>

            <button 
              type="button"
              role="tab"
              aria-selected={activeOption === 'bank-transfer'}
              onClick={() => setActiveOption('bank-transfer')}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                activeOption === 'bank-transfer'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 font-black ring-2 ring-amber-400/50 shadow-amber-400/20 scale-[1.02]'
                  : 'bg-slate-800/90 hover:bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              <Building2 className={`w-4 h-4 ${activeOption === 'bank-transfer' ? 'text-slate-950' : 'text-amber-400'}`} />
              <span>Direct Bank Transfer (IBAN)</span>
            </button>

            <button 
              type="button"
              role="tab"
              aria-selected={activeOption === 'link-payment'}
              onClick={() => setActiveOption('link-payment')}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                activeOption === 'link-payment'
                  ? 'bg-blue-500 text-white border-blue-400 font-black ring-2 ring-blue-400/50 shadow-blue-500/20 scale-[1.02]'
                  : 'bg-slate-800/90 hover:bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
              }`}
            >
              <Link2 className={`w-4 h-4 ${activeOption === 'link-payment' ? 'text-white' : 'text-blue-400'}`} />
              <span>Link Payment Through Bank</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area: Active Option Component Only */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* ============================================================ */}
        {/* OPTION 1: TABBY LOGO & TAMARA LOGO ACCEPTED (INSTALLMENTS) */}
        {/* ============================================================ */}
        {activeOption === 'tabby-tamara' && (
          <section id="tabby-tamara" className="scroll-mt-24 transition-opacity duration-300">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              
              {/* Header banner */}
              <div className="bg-gradient-to-r from-[#0B1528] via-[#112240] to-[#0B1528] p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span>Option 1 • Split in 4 Installments</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                    Tabby & Tamara Accepted
                  </h2>
                  <div className="pt-1">
                    <a
                      href={`https://wa.me/${ownerNumber}?text=${encodeURIComponent('Hello Mr. Didar, I want to pay for typing services using Tabby / Tamara installments.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008751] hover:bg-[#007345] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-[#008751]" />
                      <span>Pay with Tabby / Tamara on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* High-fidelity Logos display */}
                <div className="flex items-center gap-3 self-start md:self-auto bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15">
                  {/* Tabby Logo Badge */}
                  <div className="bg-[#3EEDAC] text-black px-4 py-2.5 rounded-xl flex items-center justify-center font-black tracking-tight text-lg shadow-sm">
                    <span className="font-extrabold lowercase font-sans text-xl tracking-tighter">tabby</span>
                  </div>

                  <span className="text-white/60 font-bold text-sm">&</span>

                  {/* Tamara Logo Badge */}
                  <div className="bg-[#FF5C00] text-white px-4 py-2.5 rounded-xl flex items-center justify-center font-bold tracking-tight text-base shadow-sm">
                    <span className="font-extrabold lowercase font-sans text-xl tracking-tight">tamara</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* OPTION 2: BANK TRANSFER (OFFICIAL UAE CORPORATE ACCOUNTS)   */}
        {/* ============================================================ */}
        {activeOption === 'bank-transfer' && (
          <section id="bank-transfer" className="scroll-mt-24 transition-opacity duration-300">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              
              {/* Header */}
              <div className="bg-[#0B1528] p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Option 2 • Direct Wire / Local Bank Transfer</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                    Bank Transfer (IBAN Details)
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 self-start md:self-auto">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant confirmation via WhatsApp</span>
                </div>
              </div>

              {/* Bank Accounts Cards */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {bankAccounts.map((account, idx) => (
                    <div 
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all space-y-4 text-left"
                    >
                      {/* Top Outlet Label */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border mb-1.5 ${account.badgeColor}`}>
                            {account.outletName}
                          </span>
                          <p className="text-xs text-slate-500">{account.location}</p>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-xs flex-shrink-0">
                          <Building2 className="w-4 h-4 text-slate-700" />
                        </div>
                      </div>

                      {/* Account Details List */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-200/80 text-xs">
                        
                        {/* Beneficiary */}
                        <div className="flex items-center justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Beneficiary Name:</span>
                          <span className="font-bold text-[#0B1B3D] text-right">{account.beneficiary}</span>
                        </div>

                        {/* Bank Name */}
                        <div className="flex items-center justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Bank Name:</span>
                          <span className="font-bold text-[#0B1B3D]">{account.bankName}</span>
                        </div>

                        {/* Currency */}
                        <div className="flex items-center justify-between py-1 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Currency:</span>
                          <span className="font-bold text-emerald-700">{account.currency}</span>
                        </div>

                        {/* Account Number with Copy Button */}
                        <div className="flex items-center justify-between py-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                          <div className="min-w-0 flex-1">
                            <span className="block text-[10px] text-slate-400 uppercase font-semibold">Account Number:</span>
                            <span className="font-mono font-bold text-xs text-slate-800 tracking-wider block truncate">
                              {account.accountNumber}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(account.accountNumber, `acc-${idx}`)}
                            className="ml-2 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer flex-shrink-0"
                            title="Copy Account Number"
                          >
                            {copiedKey === `acc-${idx}` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-500" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* IBAN with Copy Button */}
                        <div className="flex items-center justify-between py-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                          <div className="min-w-0 flex-1">
                            <span className="block text-[10px] text-slate-400 uppercase font-semibold">IBAN:</span>
                            <span className="font-mono font-bold text-xs text-slate-800 tracking-wider block truncate">
                              {account.iban}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(account.iban, `iban-${idx}`)}
                            className="ml-2 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer flex-shrink-0"
                            title="Copy IBAN"
                          >
                            {copiedKey === `iban-${idx}` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-500" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Swift Code */}
                        <div className="flex items-center justify-between py-1">
                          <span className="text-slate-500 font-medium">SWIFT / BIC Code:</span>
                          <span className="font-mono font-bold text-slate-800">{account.swiftCode}</span>
                        </div>

                      </div>

                      {/* Quick WhatsApp Receipt Action */}
                      <div className="pt-2">
                        <a
                          href={`https://wa.me/${account.outletPhone}?text=${encodeURIComponent(`Hello ${account.outletName}, I have completed a bank transfer and would like to submit my transfer receipt for verification.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
                        >
                          <Receipt className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Send Transfer Receipt on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Transfer Instruction Notice */}
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                  <FileText className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="font-bold">Important Transfer Notice:</span> When transferring, please include your Name, Application/Visa reference or Mobile Number in the transfer remarks. Once transferred, send the receipt screenshot or PDF to our WhatsApp for immediate clearance.
                  </p>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* OPTION 3: LINK PAYMENT THROUGH BANK                         */}
        {/* ============================================================ */}
        {activeOption === 'link-payment' && (
          <section id="link-payment" className="scroll-mt-24 transition-opacity duration-300">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              
              {/* Header banner */}
              <div className="bg-gradient-to-r from-[#008751] via-[#007043] to-[#0B1528] p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30">
                    <Link2 className="w-3.5 h-3.5" />
                    <span>Option 3 • Instant Online Bank Payment Link</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                    Link Payment Through Bank
                  </h2>
                </div>

                {/* Payment Gateways / Cards icons */}
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 self-start md:self-auto space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white text-blue-900 font-extrabold text-[11px] tracking-wider">VISA</span>
                    <span className="px-2.5 py-1 rounded-md bg-white text-red-600 font-extrabold text-[11px] tracking-wider">Mastercard</span>
                    <span className="px-2.5 py-1 rounded-md bg-black text-white font-bold text-[11px]"> Pay</span>
                    <span className="px-2.5 py-1 rounded-md bg-white text-slate-800 font-bold text-[11px]">G Pay</span>
                  </div>
                  <p className="text-[10px] text-emerald-100 text-center font-medium">UAE & Worldwide Cards Accepted</p>
                </div>
              </div>

              {/* Content: Action Box to Request Bank Link */}
              <div className="p-6 sm:p-8">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-[#0B1528] to-slate-900 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      <Lock className="w-3.5 h-3.5 text-amber-300" />
                      <span>Bank-Grade 256-Bit SSL Encrypted Link</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black font-display text-white">
                      Need an Instant Bank Payment Link?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                      Contact Mr. Didar or our typing team now to receive your official payment link via WhatsApp within 2 minutes.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
                    <a
                      href={`https://wa.me/${ownerNumber}?text=${encodeURIComponent('Hello Mr. Didar, I would like to request an official bank payment link to pay for my typing services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#00a859]" />
                      <span>Request Bank Link on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </section>
        )}

      </div>
    </div>
  );
};
