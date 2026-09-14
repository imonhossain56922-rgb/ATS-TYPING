import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, SiteImageItem, ContactInfo, SiteOutletItem, Advertisement } from '../types';
import { contactData as defaultContact } from '../data/contactData';
import { uaeSkylineHero, uaeWavingFlag } from '../assets/images';

const STORAGE_KEY = 'uae_typing_site_content_v2';
const AUTH_KEY = 'uae_typing_admin_auth_status';

export const initialSiteImages: SiteImageItem[] = [
  {
    id: 'hero-skyline',
    name: 'Dubai Skyline Panoramic Hero Banner',
    section: 'Home Page - Hero Background',
    url: uaeSkylineHero,
    description: 'Header panoramic background showing Dubai architectural skyline',
    recommendedSize: '1920 × 800 px (Landscape)'
  },
  {
    id: 'hero-flag',
    name: 'UAE National Waving Flag',
    section: 'Home Page - Hero Right Illustration',
    url: uaeWavingFlag,
    description: 'Waving national flag overlay on the right side of hero banner',
    recommendedSize: '800 × 600 px (Transparent / Blend)'
  },
  {
    id: 'brand-logo',
    name: 'UAE Typing Official Brand Logo',
    section: 'Header & Visiting Card',
    url: '/logo.jpg',
    description: 'Official seal badge and logo used on visiting card & headers',
    recommendedSize: '512 × 512 px (Square)'
  },
  {
    id: 'outlet-amrk-logo',
    name: 'AMRK Typing Services Branch Logo',
    section: 'Our Outlets & AMRK Page',
    url: '/amrk-logo.jpg',
    description: 'Official emblem logo for AMRK Typing Services in Ajman Industrial 2',
    recommendedSize: '400 × 400 px (Square)'
  },
  {
    id: 'outlet-alayan-logo',
    name: 'ALAYAN (ATS) Typing Services Branch Logo',
    section: 'Our Outlets & ALAYAN Page',
    url: '/ats-logo.jpg',
    description: 'Official emblem logo for ALAYAN Typing Services in Ajman Industrial 1',
    recommendedSize: '400 × 400 px (Square)'
  },
  {
    id: 'payment-qr-stand',
    name: 'Tabby & Tamara QR Payment Poster Stand',
    section: 'Payment Page - Tabby & Tamara Section',
    url: '/tabby-tamara-qr-stand.svg',
    description: 'Attached Nomod high-resolution counter stand with rainbow QR code and card badges',
    recommendedSize: '800 × 1140 px (Poster Vertical)'
  },
  {
    id: 'advertisement-poster',
    name: 'Promotional Interstitial Advertisement Poster',
    section: 'Global Website - Click/Touch Popup',
    url: '/uae-typing-ad-720x1280.svg',
    description: 'Fullscreen pop-up advertisement displayed when users touch or click on the public website',
    recommendedSize: '720 × 1280 px (9:16 Vertical Story / Poster)'
  }
];

export const defaultSiteContent: SiteContent = {
  brand: {
    name: 'UAE TYPING SERVICES',
    subtitle: 'Visa & Government Services in Ajman',
    logoUrl: '/logo.jpg'
  },
  hero: {
    eyebrow: 'UAE TYPING SERVICES',
    title: 'Professional UAE Typing &\nGovernment Services',
    subtitle: 'Your trusted partner for visa, immigration, government, labour, business, tax, insurance, transport, travel and document services across the UAE.',
    supervisionText: 'Under the Personal Supervision of Mr. Didar',
    shopLocationText: 'Authorized document typist at Shop No. 46, Younus Market, Ajman Industrial 1.',
    quickCallText: 'Direct Call',
    quickCallPhone: '050 537 2999',
    skylineImg: uaeSkylineHero,
    flagImg: uaeWavingFlag
  },
  contact: {
    ...defaultContact
  },
  outlets: {
    amrk: {
      id: 'amrk',
      name: 'AMRK TYPING SERVICES',
      shortName: 'AMRK',
      location: 'Ajman Industrial 2',
      address: 'Amman Street - Ajman Industrial - 2, Shop Number 03, Al Madina Supermarket Same Build, Near Emirate Gas Signal & Bengali Market Road.',
      officePhone: '0566745493',
      ownerPhone: '0505372999',
      additionalOwnerPhone: '0555950006',
      email: 'amrktyping2020@gmail.com',
      logoUrl: '/amrk-logo.jpg',
      googleMapsUrl: 'https://maps.app.goo.gl/VesxCTuopxx8rhDq7?g_st=ic',
      description: 'Providing comprehensive visa typing, labour documentation, and government liaison solutions in Ajman Industrial 2.'
    },
    alayan: {
      id: 'alayan',
      name: 'ALAYAN TYPING SERVICES',
      shortName: 'ALAYAN',
      location: 'Ajman Industrial 1',
      address: 'Amman Street - Ajman Industrial - 1, Central Souq - Shop Number 46, Opposite Marks & Save Market.',
      officePhone: '0556140043',
      ownerPhone: '0505372999',
      email: 'infoats1122@gmail.com',
      logoUrl: '/ats-logo.jpg',
      googleMapsUrl: 'https://maps.app.goo.gl/RV4rjfQBcxvuASqR8',
      description: 'Specialized visa typing, Emirates ID processing, corporate licensing, and official clearance services in Ajman Industrial 1.'
    }
  },
  payment: {
    nomodUrl: 'https://pay.nomodapp.com/c/c96306ea9a854a4a',
    tabbyTamaraTitle: 'Tabby & Tamara',
    tabbyTamaraBtnText: 'Pay with Tabby/Tamara',
    qrStandImg: '/tabby-tamara-qr-stand.svg'
  },
  images: initialSiteImages,
  advertisement: null
};

interface SiteContentContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  updateImage: (imageId: string, newUrl: string) => void;
  resetToDefaults: () => void;
  saveAdvertisement: (ad: Advertisement) => void;
  removeAdvertisement: () => void;
  toggleAdvertisementActive: (active: boolean) => void;
  isAdminLoggedIn: boolean;
  login: (username: string, pass: string) => { success: boolean; error?: string };
  logout: () => void;
}

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with defaults so newly introduced keys won't be undefined
        return {
          ...defaultSiteContent,
          ...parsed,
          brand: { ...defaultSiteContent.brand, ...parsed.brand },
          hero: { ...defaultSiteContent.hero, ...parsed.hero },
          contact: { ...defaultSiteContent.contact, ...parsed.contact },
          outlets: {
            amrk: { ...defaultSiteContent.outlets.amrk, ...parsed?.outlets?.amrk },
            alayan: { ...defaultSiteContent.outlets.alayan, ...parsed?.outlets?.alayan }
          },
          payment: { ...defaultSiteContent.payment, ...parsed.payment },
          images: Array.isArray(parsed.images) && parsed.images.length > 0 
            ? parsed.images.map((img: SiteImageItem) => {
                const def = initialSiteImages.find(d => d.id === img.id);
                return def ? { ...def, ...img } : img;
              })
            : initialSiteImages,
          advertisement: parsed.advertisement || null
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved site content:', e);
    }
    return defaultSiteContent;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Sync content changes to localStorage
  const updateContent = (newPartial: Partial<SiteContent>) => {
    setContent((prev) => {
      const updated: SiteContent = {
        ...prev,
        ...newPartial,
        brand: { ...prev.brand, ...newPartial.brand },
        hero: { ...prev.hero, ...newPartial.hero },
        contact: { ...prev.contact, ...newPartial.contact },
        outlets: {
          amrk: { ...prev.outlets.amrk, ...newPartial.outlets?.amrk },
          alayan: { ...prev.outlets.alayan, ...newPartial.outlets?.alayan }
        },
        payment: { ...prev.payment, ...newPartial.payment },
        images: newPartial.images || prev.images,
        advertisement: newPartial.advertisement !== undefined ? newPartial.advertisement : prev.advertisement
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save content to localStorage:', err);
      }
      return updated;
    });
  };

  // Dedicated helper to update a specific image and propagate to corresponding section
  const updateImage = (imageId: string, newUrl: string) => {
    setContent((prev) => {
      const updatedImages = prev.images.map((img) => 
        img.id === imageId ? { ...img, url: newUrl } : img
      );

      const partialUpdates: Partial<SiteContent> = { images: updatedImages };

      if (imageId === 'hero-skyline') {
        partialUpdates.hero = { ...prev.hero, skylineImg: newUrl };
      } else if (imageId === 'hero-flag') {
        partialUpdates.hero = { ...prev.hero, flagImg: newUrl };
      } else if (imageId === 'brand-logo') {
        partialUpdates.brand = { ...prev.brand, logoUrl: newUrl };
      } else if (imageId === 'outlet-amrk-logo') {
        partialUpdates.outlets = {
          ...prev.outlets,
          amrk: { ...prev.outlets.amrk, logoUrl: newUrl }
        };
      } else if (imageId === 'outlet-alayan-logo') {
        partialUpdates.outlets = {
          ...prev.outlets,
          alayan: { ...prev.outlets.alayan, logoUrl: newUrl }
        };
      } else if (imageId === 'payment-qr-stand') {
        partialUpdates.payment = { ...prev.payment, qrStandImg: newUrl };
      } else if (imageId === 'advertisement-poster') {
        if (prev.advertisement) {
          partialUpdates.advertisement = { ...prev.advertisement, imageUrl: newUrl };
        }
      }

      const updated = {
        ...prev,
        ...partialUpdates
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save image update:', err);
      }

      return updated;
    });
  };

  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn('Error clearing storage:', err);
    }
    setContent(defaultSiteContent);
  };

  const saveAdvertisement = (ad: Advertisement) => {
    setContent((prev) => {
      const updated = {
        ...prev,
        advertisement: ad
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save advertisement:', err);
      }
      return updated;
    });
  };

  const removeAdvertisement = () => {
    setContent((prev) => {
      const updated = {
        ...prev,
        advertisement: null
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to remove advertisement:', err);
      }
      return updated;
    });
  };

  const toggleAdvertisementActive = (active: boolean) => {
    setContent((prev) => {
      if (!prev.advertisement) return prev;
      const updated = {
        ...prev,
        advertisement: {
          ...prev.advertisement,
          isActive: active
        }
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to toggle advertisement:', err);
      }
      return updated;
    });
  };

  const login = (username: string, pass: string) => {
    // Requirements: User name = “Admin” & password = “UAE@2020”
    if (username.trim() === 'Admin' && pass === 'UAE@2020') {
      setIsAdminLoggedIn(true);
      try {
        localStorage.setItem(AUTH_KEY, 'true');
      } catch (err) {
        console.warn('LocalStorage error on login:', err);
      }
      return { success: true };
    }
    return { 
      success: false, 
      error: 'Invalid username or password. Please enter the correct Admin credentials.' 
    };
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch (err) {
      console.warn('LocalStorage error on logout:', err);
    }
  };

  return (
    <SiteContentContext.Provider
      value={{
        content,
        updateContent,
        updateImage,
        resetToDefaults,
        saveAdvertisement,
        removeAdvertisement,
        toggleAdvertisementActive,
        isAdminLoggedIn,
        login,
        logout
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = (): SiteContentContextType => {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error('useSiteContent must be used within a SiteContentProvider');
  }
  return context;
};
