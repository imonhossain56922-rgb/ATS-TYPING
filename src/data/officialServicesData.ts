import { ServiceCategoryGroup } from '../types';

export const officialServiceCategories: ServiceCategoryGroup[] = [
  {
    id: 'travel-ticketing',
    letter: '1',
    title: 'Travel & Ticketing',
    iconName: 'Plane',
    description: 'Worldwide air ticket bookings, date modifications, visit visas, Umrah packages, outbound tour packages, and hotel reservations.',
    services: [
      'Air Ticket Booking',
      'Ticket Change and cancellation.',
      'Visit Visa apply & Extension Services.',
      'Umrah Package Normal & Multiple visa apply.',
      'Tour package and visit visa out of UAE.',
      'Hotel booking & Boarding Pass.',
      'Extra Baggage add & Seat Selection.'
    ]
  },
  {
    id: 'immigration-gov',
    letter: '2',
    title: 'Immigration Services & Government Online Application',
    iconName: 'Building2',
    description: 'ICP Smart & GDRFA services, 10-year Golden Visa, residence and entry permits, status change, family sponsorship, and establishment applications.',
    services: [
      'ICP Smart & GDRFA Services related all services.',
      'UAE Related All of Immigration & Visa related services.',
      'Golden Visa process for 10years.',
      'Entry Permit Issue inside & Outside of the UAE',
      'In out or Change Status for Visa',
      'Family & Sponsorship related Visa.',
      'Company and Establishment related all application',
      'Visit Visa Issue from outside & Extension from Inside.',
      'Visa cancellation Services Etc.'
    ]
  },
  {
    id: 'labour-mohre',
    letter: '3',
    title: 'Ministry of Labour (MOHRE) Application',
    iconName: 'Briefcase',
    description: 'All UAE MOHRE online applications, new job offer approvals, work permits, labour contracts, domestic worker services, and WPS clearance.',
    services: [
      'All kind of Mohre online Application in UAE.',
      'New Job offer approval & Work permit Services',
      'New Labour Card & Employment contract renew Services.',
      'Domestic Worker Services',
      'Labour card/ Employment Contract Cancellation',
      'WPS Clearance & Labour complaint Services',
      'Quota & Establishment services.',
      'Gpssa, Tawteen & UAE Local employment Services',
      'Labour & Company related all Transection Etc.'
    ]
  },
  {
    id: 'business-company',
    letter: '4',
    title: 'Business Setup & Company Services',
    iconName: 'Building',
    description: 'Complete UAE company setup, trade licenses, Ejari & Tasdeeq, partnership agreements, PRO, corporate banking, FTA corporate tax, and Civil Defense.',
    services: [
      'All of UAE Company Setup and documents clearing Services.',
      'Trade License Issue in UAE',
      'Trade License renew, Modification & Fine payment.',
      'Trade License Cancellation and fine Payment.',
      'Ejari & Tasdeeq Services for Tenancy.',
      'Economic Department and Municipality application.',
      'Partnership agreement, Beneficiary owner Reg: and Court Application.',
      'Company Ownership replace & Power of Attorney Services.',
      'Authorization letter and Company Management online services.',
      'Partner / Share Transfer, Replace & Amendment Services.',
      'Corporate Bank Account & P.R.O Services.',
      'FTA & Corporate Tax De/Registration, Filling & Submission.',
      'Civil Defense certificate New/renew & Inspection / Re-inspection Request.'
    ]
  },
  {
    id: 'medical-insurance',
    letter: '5',
    title: 'Medical & Insurance Services',
    iconName: 'ShieldCheck',
    description: 'Visa purpose medical application, individual and group health insurance, vehicle insurance, travel policies, and ILOE insurance assistance.',
    services: [
      'For Visa Purpose Medical Application.',
      'Health & Car Insurance.',
      'Travel Insurance.',
      'Company / Group Health Insurance',
      'ILOE insurance & Claiming for refund.',
      'Normal & Full health/Car Insurance provide etc.'
    ]
  },
  {
    id: 'driving-transport',
    letter: '6',
    title: 'Driving & Transport Services',
    iconName: 'Car',
    description: 'Ajman traffic file opening, UAE & international driving licenses, vehicle/mulkiya registration and renewals, MOI/RTA applications, and fine payments.',
    services: [
      'Traffic file Opening in Ajman.',
      'Driving License New/renew UAE & International Driving license.',
      'Vehicle/Mulkiya registration new/renew & Transfer.',
      'MOI & RTA application.',
      'Driving license & Vehicle fine payment.',
      'Lost & replace License/mulkiya & Number plate.'
    ]
  },
  {
    id: 'government-utility',
    letter: '7',
    title: 'Government Utility Services',
    iconName: 'Zap',
    description: 'DEWA, SEWA & FEWA utility connections, police clearance, consulate & MOFA attestation, Indian passport appointment, and fee payments.',
    services: [
      'DEWA / SEWA / FEWA Active/Deactivate Services.',
      'Police Clearance apply & Attestation.',
      'Attestation from Consulate & Mofa.',
      'Indian Passport renewal Appointment.',
      'Online transaction fees payment.',
      'Individual certificate & Company Invoice attestation.',
      'Account Closure Deposit/Refund Request.'
    ]
  },
  {
    id: 'other-typing-services',
    letter: '8',
    title: 'Other Services in our Typing.',
    iconName: 'FileText',
    description: 'Arabic & English letter typing, certified legal translation, CVs, undertakings, declarations, online form submissions, and status checks.',
    services: [
      'Arabic / English letter or file Typing.',
      'Legal Translation.',
      'Professional CV, Quotation, Docs scanning and Printing.',
      'Undertaking / Declaration & all type Authorization letter.',
      'Online form Fill up, typing and submission.',
      'Offer letter/ Experience letter& Salary Certificate',
      'Document Upload / Email Services',
      'File / Document Arrangement',
      'Experience Certificate & Offer Letter',
      'Application / Request Letter',
      'Government Fee Payment Assistance',
      'Online Inquiry & Status Check',
      'Government Application Tracking',
      'Case Status Inquiry & Travel Ban Check.'
    ]
  }
];
