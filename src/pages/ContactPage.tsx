import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { outletsData, SHARED_OWNER_PHONE } from '../data/outletsData';
import { officialServiceCategories } from '../data/officialServicesData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    outlet: 'amrk',
    serviceCategory: 'Government & Immigration Services',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required.';
    } else if (!/^[0-9+ ]{8,16}$/.test(formData.mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid phone number (e.g. 050 123 4567).';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please provide brief details about your inquiry.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleWhatsAppDirectSend = () => {
    const targetOutlet = outletsData.find(o => o.id === formData.outlet) || outletsData[0];
    const phoneNum = targetOutlet.officePhoneIntl.replace('+', '');
    const text = `*New Website Inquiry*\n*Name:* ${formData.fullName}\n*Phone:* ${formData.mobileNumber}\n*Outlet:* ${targetOutlet.name}\n*Service:* ${formData.serviceCategory}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Header */}
      <section className="pt-16 pb-14 bg-gradient-to-b from-[#DCEBFA] via-[#E8F1FC] to-[#F3F7FC] border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0B1B3D]">
            DIRECT ASSISTANCE
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] font-display">
            Contact UAE TYPING SERVICES
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Reach out to our specialists or visit our convenient outlets in Ajman Industrial 1 & 2.
          </p>
        </div>
      </section>

      {/* Choose Your Preferred Outlet Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
              Choose Your Preferred Outlet
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Both outlets provide identical services. Choose the location closest to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {outletsData.map((outlet) => {
              const isAmrk = outlet.id === 'amrk';

              return (
                <div
                  key={outlet.id}
                  className={`bg-[#F8FAFC] rounded-2xl border-2 ${
                    isAmrk ? 'border-blue-200/90' : 'border-emerald-200/90'
                  } p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-5`}
                >
                  <div className="space-y-5">
                    {/* Outlet Logo */}
                    <div className="w-full h-28 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-3 shadow-xs">
                      <img
                        src={outlet.logoUrl}
                        alt={`${outlet.name} Logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        isAmrk ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {outlet.location}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#0B1B3D] font-display mt-2">
                        {outlet.name}
                      </h3>
                    </div>

                    {/* Address */}
                    <div className="space-y-1 text-xs text-slate-700 font-medium">
                      {outlet.addressLines.map((line, i) => (
                        <p key={i} className="flex items-start gap-1.5">
                          <MapPin className={`w-3.5 h-3.5 ${isAmrk ? 'text-blue-600' : 'text-emerald-600'} flex-shrink-0 mt-0.5`} />
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>

                    {/* Contact Channels */}
                    <div className="space-y-2 pt-3 border-t border-slate-200 text-xs">
                      {/* Office Desk */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Office Desk</span>
                          <span className="font-bold text-[#0B1B3D]">{outlet.officePhone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${outlet.officePhoneIntl}`}
                            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium"
                          >
                            Call
                          </a>
                          <a
                            href={`https://wa.me/${outlet.officePhoneIntl.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-lg bg-[#00a859] hover:bg-[#00924d] text-white text-xs font-bold flex items-center gap-1"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>

                      {/* Shared Owner */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase">Owner Mobile</span>
                          <span className="font-bold text-[#0B1B3D]">{outlet.ownerPhone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${outlet.ownerPhoneIntl}`}
                            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium"
                          >
                            Call
                          </a>
                          <a
                            href={`https://wa.me/${outlet.ownerPhoneIntl.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-lg bg-[#00a859] hover:bg-[#00924d] text-white text-xs font-bold flex items-center gap-1"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>

                      {/* Additional Owner Mobile (AMRK) */}
                      {outlet.additionalOwnerPhone && outlet.additionalOwnerPhoneIntl && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-blue-200">
                          <div>
                            <span className="text-blue-600 block text-[10px] uppercase font-bold">Owner Mobile (AMRK)</span>
                            <span className="font-bold text-[#0B1B3D]">{outlet.additionalOwnerPhone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <a
                              href={`tel:${outlet.additionalOwnerPhoneIntl}`}
                              className="px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold"
                            >
                              Call
                            </a>
                            <a
                              href={`https://wa.me/${outlet.additionalOwnerPhoneIntl.replace('+', '')}?text=${encodeURIComponent('Hello AMRK Typing Services, I would like to inquire about typing services.')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 rounded-lg bg-[#00a859] hover:bg-[#00924d] text-white text-xs font-bold flex items-center gap-1"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Email */}
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                        <span className="text-slate-500">Email:</span>
                        <a href={`mailto:${outlet.email}`} className="font-medium text-blue-700 hover:underline">
                          {outlet.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Button */}
                  <div className="pt-2">
                    <a
                      href={outlet.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all ${
                        isAmrk ? 'bg-[#0B1B3D] hover:bg-[#15284F]' : 'bg-[#008751] hover:bg-[#007043]'
                      }`}
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-slate-50 relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
            
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B1B3D]">
                SEND AN INQUIRY
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B1B3D] font-display">
                Request Application Guidance
              </h3>
              <p className="text-xs text-slate-500">
                Fill out the form below. Our typists will promptly respond with the required documents and procedures.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#00a859] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#0B1B3D]">
                  Inquiry Prepared Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. To receive immediate assistance on your request regarding <strong>{formData.serviceCategory}</strong>, tap below to send this directly to our typist on WhatsApp.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirectSend}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#00a859] hover:bg-[#00924d] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#00a859]" />
                    <span>Send Message on WhatsApp Now</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        mobileNumber: '',
                        email: '',
                        outlet: 'amrk',
                        serviceCategory: 'Government & Immigration Services',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mohammed Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-300'
                      } text-slate-800 text-sm focus:border-blue-600 focus:outline-none`}
                    />
                    {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 050 123 4567"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                        errors.mobileNumber ? 'border-rose-500' : 'border-slate-300'
                      } text-slate-800 text-sm focus:border-blue-600 focus:outline-none`}
                    />
                    {errors.mobileNumber && <p className="text-xs text-rose-500">{errors.mobileNumber}</p>}
                  </div>
                </div>

                {/* Email (Optional) */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Email Address <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                      errors.email ? 'border-rose-500' : 'border-slate-300'
                    } text-slate-800 text-sm focus:border-blue-600 focus:outline-none`}
                  />
                  {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
                </div>

                {/* Outlet Selector & Service Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Select Outlet <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:border-blue-600 focus:outline-none"
                    >
                      <option value="amrk">AMRK TYPING SERVICES (Ajman Ind. 2)</option>
                      <option value="alayan">ALAYAN TYPING SERVICES (Ajman Ind. 1)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Select Service Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm focus:border-blue-600 focus:outline-none"
                    >
                      {officialServiceCategories.map(c => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Your Message / Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe what you need assistance with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                      errors.message ? 'border-rose-500' : 'border-slate-300'
                    } text-slate-800 text-sm focus:border-blue-600 focus:outline-none`}
                  />
                  {errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0B1B3D] hover:bg-[#15284F] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};
