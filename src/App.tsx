import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SiteContentProvider } from './context/SiteContentContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { AdvertisementPopup } from './components/AdvertisementPopup';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AmrkOutletPage } from './pages/AmrkOutletPage';
import { AlayanOutletPage } from './pages/AlayanOutletPage';
import { OutletsPage } from './pages/OutletsPage';
import { PaymentPage } from './pages/PaymentPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPanelPage } from './pages/AdminPanelPage';

export default function App() {
  return (
    <SiteContentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AdvertisementPopup />
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-black antialiased">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/outlets" element={<OutletsPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/amrk-typing-services" element={<AmrkOutletPage />} />
              <Route path="/alayan-typing-services" element={<AlayanOutletPage />} />
              <Route path="/ats-typing-services" element={<Navigate to="/alayan-typing-services" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPanelPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </SiteContentProvider>
  );
}
