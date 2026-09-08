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


