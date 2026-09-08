import { OutletInfo } from '../types';

export const SHARED_OWNER_PHONE = '0505372999';
export const SHARED_OWNER_PHONE_INTL = '+971505372999';

export const outletsData: OutletInfo[] = [
  {
    id: 'amrk',
    name: 'AMRK TYPING SERVICES',
    shortName: 'AMRK',
    location: 'Ajman Industrial 2',
    addressLines: [
      'Amman Street - Ajman Industrial - 2',
      'Shop Number 03, Al Madina Supermarket Same Build',
      'Near Emirate Gas Signal & Bengali Market Road.'
    ],
    googleMapsUrl: 'https://maps.app.goo.gl/VesxCTuopxx8rhDq7?g_st=ic',
    officePhone: '0566745493',
    officePhoneIntl: '+971566745493',
    ownerPhone: '0505372999',
    ownerPhoneIntl: '+971505372999',
    email: 'amrktyping2020@gmail.com',
    logoUrl: '/amrk-logo.svg',
    path: '/amrk-typing-services',
    description: 'Providing comprehensive visa typing, labour documentation, and government liaison solutions in Ajman Industrial 2.'
  },
  {
    id: 'alayan',
    name: 'ALAYAN TYPING SERVICES',
    shortName: 'ALAYAN',
    location: 'Ajman Industrial 1',
    addressLines: [
      'Amman Street - Ajman Industrial - 1',
      'Central Souq - Shop Number 46',
      'Opposite Marks & Save Market.'
    ],
    googleMapsUrl: 'https://maps.app.goo.gl/RV4rjfQBcxvuASqR8',
    officePhone: '0556140043',
    officePhoneIntl: '+971556140043',
    ownerPhone: '0505372999',
    ownerPhoneIntl: '+971505372999',
    email: 'infoats1122@gmail.com',
    logoUrl: '/ats-logo.jpg',
    path: '/alayan-typing-services',
    description: 'Specialized visa typing, Emirates ID processing, corporate licensing, and official clearance services in Ajman Industrial 1.'
  }
];

export const getOutletById = (id: string): OutletInfo | undefined => {
  return outletsData.find(o => o.id === id || o.id === 'alayan' && id === 'ats' || o.path === `/${id}`);
};
