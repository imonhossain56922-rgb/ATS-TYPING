import { ServiceCategoryGroup } from '../types';

export const officialServiceCategories: ServiceCategoryGroup[] = [
  {
    id: 'travel-ticketing',
    letter: 'A',
    title: 'Travel & Ticketing',
    iconName: 'Plane',
    description: 'Worldwide flight bookings, itinerary modifications, international travel visa assistance, and corporate travel reservations.',
    services: [
      'Air Ticket Booking',
      'Flight Cancellation / Changes',
      'Travel Insurance',
      'Visa Assistance',
      'Hotel Booking'
    ]
  },
  {
    id: 'docs-attestation',
    letter: 'B',
    title: 'Docs Attestation In Consulate And UAE mofa',
    iconName: 'Stamp',
    description: 'Consulate and UAE Ministry of Foreign Affairs (MOFA) attestation, individual and educational certificates, company invoices, passport renewals, and civil defence certificates.',
    services: [
      'Individual Certificate, Education Certificate & Company Invoice',
      'Passport Renew Appointment',
      'Civil Defence Certificate Process'
    ]
  },
  {
    id: 'gov-immigration',
    letter: 'C',
    title: 'Government & Immigration Services',
    iconName: 'Building2',
    description: 'Comprehensive residence visas, entry permits, family sponsorship, and official ICP & GDRFA processing across the UAE.',
    services: [
      'Emirates ID Application / Renewal',
      'Visa Application / Renewal / Cancellation',
      'Entry Permit',
      'Change Status',
      'Visa Extension',
      'Family Visa / Sponsorship',
      'ICP Services',
      'GDRFA Services',
      'Establishment Card',
      'Immigration File Opening / Modification',
      'GCC / Visa-related applications'
    ]
  },
  {
    id: 'labour-employment',
    letter: 'D',
    title: 'Labour & Employment Services',
    iconName: 'Briefcase',
    description: 'MOHRE work permits, labour contracts, job offers, cancellation, and domestic worker sponsorship support.',
    services: [
      'MOHRE Services',
      'Work Permit / Labour Card',
      'Employment Contract',
      'Job Offer',
      'Labour Contract Renewal',
      'Work Permit Cancellation',
      'Domestic Worker Services',
      'Tawteen / Emiratisation Services',
      'Unemployment / Labour-related applications'
    ]
  },
  {
    id: 'business-company',
    letter: 'E',
    title: 'Business & Company Services',
    iconName: 'Building',
    description: 'Complete mainland and freezone company formation, trade license renewals, amendments, and corporate documentation.',
    services: [
      'Business Setup',
      'Trade License – New / Renewal / Modification',
      'License Cancellation',
      'Company Formation',
      'Memorandum / Agreements',
      'Establishment Card',
      'UBO / Beneficial Owner Services',
      'Corporate Documents'
    ]
  },
  {
    id: 'tax-accounting',
    letter: 'F',
    title: 'Tax & Accounting Services',
    iconName: 'Calculator',
    description: 'Federal Tax Authority (FTA) compliance, VAT registration and returns, Corporate Tax filing, and bookkeeping.',
    services: [
      'VAT Registration',
      'VAT Return',
      'VAT Deregistration',
      'Corporate Tax Registration',
      'Corporate Tax Return',
      'Tax-related Applications',
      'Accounting / Bookkeeping'
    ]
  },
  {
    id: 'insurance',
    letter: 'G',
    title: 'Insurance Services',
    iconName: 'ShieldCheck',
    description: 'Approved health insurance for visa issuance, mandatory worker coverage, auto insurance, and international travel policies.',
    services: [
      'Health Insurance',
      'Car Insurance',
      'Visa Insurance',
      'Travel Insurance'
    ]
  },
  {
    id: 'driving-transport',
    letter: 'H',
    title: 'Driving & Transport Services',
    iconName: 'Car',
    description: 'Driving license renewals and transfers, mulkiya registration, traffic fine settlements, and RTA transaction clearance.',
    services: [
      'Driving License – New / Renewal',
      'Driving License Replacement',
      'Vehicle Registration / Renewal',
      'Vehicle Transfer',
      'Traffic Fine Payment',
      'Traffic Services',
      'RTA Applications'
    ]
  },
  {
    id: 'government-utility',
    letter: 'I',
    title: 'Government Utility Services',
    iconName: 'Zap',
    description: 'Electricity & water connections (DEWA / SEWA / FEWA), Ajman sewerage, Ejari / Tasdeeq tenancy registration, and municipality procedures.',
    services: [
      'DEWA / SEWA / FEWA Services',
      'Electricity & Water Connection',
      'Disconnection / Transfer',
      'Sewerage Services',
      'Tenancy Contract Services',
      'Municipality Services'
    ]
  },
  {
    id: 'document-services',
    letter: 'J',
    title: 'Document Services',
    iconName: 'FileText',
    description: 'Bilingual typing in Arabic & English, certified legal translations, high-speed color printing, scanning, and lamination.',
    services: [
      'Arabic / English Typing',
      'Application Forms',
      'Letter Typing',
      'CV / Resume',
      'Translation',
      'Legal Translation',
      'Document Printing',
      'Photocopy',
      'Scanning',
      'Lamination',
      'Colour / B&W Printing',
      'Email / Online Application Assistance'
    ]
  },
  {
    id: 'pro-government',
    letter: 'K',
    title: 'PRO & Government Processing',
    iconName: 'Stamp',
    description: 'Dedicated corporate Public Relations Officer (PRO) liaison, ministry submissions, document clearance, and portal management.',
    services: [
      'PRO Services',
      'Government Application Submission',
      'Document Clearance',
      'GPS/SA File Clearance',
      'Company / Employee File Services',
      'Government Portal Applications'
    ]
  },
  {
    id: 'other-popular',
    letter: 'L',
    title: 'Other Popular Services',
    iconName: 'Award',
    description: 'Good conduct certificates, medical fitness applications, passport renewals, attestation, and custom declaration letters.',
    services: [
      'Police Clearance Certificate',
      'Good Conduct Certificate',
      'Medical Appointment / Application Assistance',
      'Emirates ID Printing Assistance',
      'Passport Renewal Assistance',
      'Birth / Marriage Certificate Services',
      'NOC / Declaration Letters',
      'Authorisation Letters'
    ]
  }
];
