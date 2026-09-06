import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Customer Inquiry (ATS Website)*
• *Name:* ${name || 'N/A'}
• *Phone:* ${phone || 'N/A'}
• *Service Required:* ${serviceName || 'General Inquiry'}
• *Message:* ${message || 'No additional details'}

Hello Mr. Didar, I would like to get more information regarding this service.`;

    const whatsappUrl = `https://wa.me/971505372999?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1120] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-display">
            {language === 'bn' ? (
              <>যোগাযোগ ও সরাসরি <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">পরামর্শ সেবা</span></>
            ) : language === 'ar' ? (
              <>اتصل بنا وتواصل <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-arabic">معنا مباشرة</span></>
            ) : (
              <>Direct Contact & <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Service Inquiries</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Send Quick Inquiry Form */}
          <div className="bg-[#0E1422] rounded-3xl border border-slate-800/90 p-8 sm:p-10 shadow-2xl ring-1 ring-white/5">
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Send Priority Service Inquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-light">
              Submit your specific requirement below to initiate direct WhatsApp consultation with Mr. Didar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name / Client
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Phone / WhatsApp Number
                </label>
                <input
                  id="contact-phone-input"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 XXX XXXX"
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Service Interested In
                </label>
                <input
                  id="contact-service-input"
                  type="text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  placeholder={t.servicePlaceholder}
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Message or Specific Question
                </label>
                <textarea
                  id="contact-message-input"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full bg-[#080C14] border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
                <span>{t.sendMessage}</span>
              </button>

              {sentSuccess && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5 animate-fadeIn font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Opening WhatsApp with your inquiry! Mr. Didar will respond promptly.</span>
                </div>
              )}
            </form>

            {/* Email Addresses */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Corporate Email:</span>
              </div>
              <div className="flex flex-wrap gap-2 text-amber-300 font-mono">
                <a href="mailto:alayantyping@gmail.com" className="hover:text-amber-200 transition-colors">
                  alayantyping@gmail.com
                </a>
                <span className="text-slate-600">•</span>
                <a href="mailto:malayantyping@gmail.com" className="hover:text-amber-200 transition-colors">
                  malayantyping@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
