export type Language = 'en' | 'bn' | 'ar';

export interface ServiceItem {
  id: string;
  categoryId: string;
  titleEn: string;
  titleBn: string;
  titleAr: string;
  descEn: string;
  descBn: string;
  descAr: string;
  iconName: string;
  popular?: boolean;
  requiredDocuments: {
    en: string[];
    bn: string[];
    ar: string[];
  };
  processingTime?: {
    en: string;
    bn: string;
    ar: string;
  };
  keyFeatures?: {
    en: string[];
    bn: string[];
    ar: string[];
  };
  whatsappText: string;
}

export interface ServiceCategory {
  id: string;
  titleEn: string;
  titleBn: string;
  titleAr: string;
  iconName: string;
  descriptionEn: string;
  descriptionBn: string;
  descriptionAr: string;
}

export interface OutletInfo {
  id: 'amrk' | 'ats' | 'alayan';
  name: string;
  shortName: string;
  location: string;
  addressLines: string[];
  googleMapsUrl: string;
  officePhone: string;
  officePhoneIntl: string;
  ownerPhone: string;
  ownerPhoneIntl: string;
  additionalOwnerPhone?: string;
  additionalOwnerPhoneIntl?: string;
  email: string;
  logoUrl: string;
  path: string;
  description: string;
}

export interface ServiceCategoryGroup {
  id: string;
  letter: string;
  title: string;
  iconName: string;
  description: string;
  services: string[];
}

export interface ContactInfo {
  ownerName: string;
  primaryPhone: string;
  secondaryPhone: string;
  shopPhone: string;
  landlinePhone: string;
  primaryEmail: string;
  secondaryEmail: string;
  addressEn: string;
  addressBn: string;
  addressAr: string;
  shopNumber: string;
  landmarkEn: string;
  landmarkBn: string;
  landmarkAr: string;
  googleMapsUrl: string;
  workingHoursEn: string;
  workingHoursBn: string;
  workingHoursAr: string;
}

export interface SiteBrandContent {
  name: string;
  subtitle: string;
  logoUrl: string;
}

export interface SiteHeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  supervisionText: string;
  shopLocationText: string;
  quickCallText: string;
  quickCallPhone: string;
  skylineImg: string;
  flagImg: string;
}

export interface SiteOutletItem {
  id: 'amrk' | 'alayan';
  name: string;
  shortName: string;
  location: string;
  address: string;
  officePhone: string;
  ownerPhone: string;
  additionalOwnerPhone?: string;
  email: string;
  logoUrl: string;
  googleMapsUrl: string;
  description: string;
}

export interface SitePaymentContent {
  nomodUrl: string;
  tabbyTamaraTitle: string;
  tabbyTamaraBtnText: string;
  qrStandImg: string;
}

export interface SiteImageItem {
  id: string;
  name: string;
  section: string;
  url: string;
  description: string;
  recommendedSize: string;
}

export type AdvertisementDuration = '1d' | '3d' | '7d' | '10d' | '15d' | '20d' | '1m';

export interface Advertisement {
  id: string;
  imageUrl: string;
  targetWidth: number; // 720
  targetHeight: number; // 1280
  actualWidth?: number;
  actualHeight?: number;
  createdAt: number; // timestamp ms
  durationDays: number; // 1, 3, 7, 10, 15, 20, 30
  durationLabel: string; // e.g. "1 Day", "3 Days", "7 Days", "10 Days", "15 Days", "20 Days", "1 Month"
  expiresAt: number; // timestamp ms
  isActive: boolean;
}

export interface SiteContent {
  brand: SiteBrandContent;
  hero: SiteHeroContent;
  contact: ContactInfo;
  outlets: {
    amrk: SiteOutletItem;
    alayan: SiteOutletItem;
  };
  payment: SitePaymentContent;
  images: SiteImageItem[];
  advertisement?: Advertisement | null;
}


