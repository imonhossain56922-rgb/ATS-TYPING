import { ServiceCategory, ServiceItem } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'all',
    titleEn: 'All Services',
    titleBn: 'সকল সেবা সমূহ',
    titleAr: 'جميع الخدمات',
    iconName: 'LayoutGrid',
    descriptionEn: 'Browse all government, typing and PRO services offered by Alayan Typing',
    descriptionBn: 'আলায়ান টাইপিংয়ের সমস্ত সরকারি, টাইপিং ও পিআরও সেবা দেখুন',
    descriptionAr: 'تصفح جميع الخدمات الحكومية وخدمات الطباعة والمعاملات'
  },
  {
    id: 'visa',
    titleEn: 'Visa & Immigration',
    titleBn: 'ভিসা ও ইমিগ্রেশন সেবা',
    titleAr: 'تأشيرات الإقامة والهجرة',
    iconName: 'Plane',
    descriptionEn: 'New & renew visas, golden visas, tourist visas, AMER and family sponsorship',
    descriptionBn: 'নতুন ও নবায়ন ভিসা, গোল্ডেন ভিসা, ভিজিট ভিসা, আমের ও ফ্যামিলি ভিসা প্রসেসিং',
    descriptionAr: 'إصدار وتجديد الإقامات، الإقامة الذهبية، تأشيرات الزيارة، وخدمات آمر'
  },
  {
    id: 'emirates-id',
    titleEn: 'Emirates ID & Medical',
    titleBn: 'এমিরেটস আইডি ও মেডিকেল',
    titleAr: 'الهوية الإماراتية والفحص الطبي',
    iconName: 'CreditCard',
    descriptionEn: 'Emirates ID typing, medical fitness appointments, ILOE and health insurance',
    descriptionBn: 'এমিরেটস আইডি আবেদন ও নবায়ন, মেডিকেল ফিটনেস টেস্ট, আইএলওই ও স্বাস্থ্য বীমা',
    descriptionAr: 'طباعة وتجديد الهوية، الفحص الطبي للإقامة، التأمين ضد التعطل والتأمين الصحي'
  },
  {
    id: 'business',
    titleEn: 'Business & Trade License',
    titleBn: 'ব্যবসা ও ট্রেড লাইসেন্স',
    titleAr: 'الرخص التجارية وتأسيس الشركات',
    iconName: 'Building2',
    descriptionEn: 'Company formation, trade license renewal (Ajman/Dubai), Tas-heel, Tasdeeq & PRO',
    descriptionBn: 'ট্রেড লাইসেন্স নতুন ও নবায়ন (আজমান/দুবাই), তাসহিল, তাসদিক ও পিআরও সার্ভিস',
    descriptionAr: 'إصدار وتجديد الرخص التجارية، خدمات تسهيل وتصديق، وخدمات المندوب PRO'
  },
  {
    id: 'traffic',
    titleEn: 'Traffic & Vehicle',
    titleBn: 'ট্রাফিক ও গাড়ি সংক্রান্ত সেবা',
    titleAr: 'المرور وترخيص المركبات',
    iconName: 'Car',
    descriptionEn: 'Traffic fine payments, driving license, mulkiya renewals, and auto insurance',
    descriptionBn: 'ট্রাফিক জরিমানা পরিশোধ, ড্রাইভিং লাইসেন্স, মুলকিয়া নবায়ন ও মোটর ইন্স্যুরেন্স',
    descriptionAr: 'دفع المخالفات المرورية، تجديد رخص القيادة، تجديد الملكية، وتأمين السيارات'
  },
  {
    id: 'utilities',
    titleEn: 'Utilities & Online Services',
    titleBn: 'ইউটিলিটি ও অনলাইন সেবা',
    titleAr: 'الخدمات الإلكترونية والمرافق',
    iconName: 'Zap',
    descriptionEn: 'FEWA electricity/water, Ajman Sewerage, UAE Pass, and bKash remittance',
    descriptionBn: 'ফেওয়া বিদ্যুৎ/পানি, আজমান সুয়ারেজ, ইউএই পাস এবং বিকাশ রেমিট্যান্স সহায়তা',
    descriptionAr: 'خدمات فيوا للمياه والكهرباء، صرف صحي عجمان، الهوية الرقمية UAE Pass وبكاش'
  },
  {
    id: 'legal-tax',
    titleEn: 'Legal, Tax & Translation',
    titleBn: 'ট্যাক্স, অনুবাদ ও ড্রাফটিং',
    titleAr: 'الضرائب والترجمة القانونية',
    iconName: 'FileText',
    descriptionEn: 'VAT & Corporate Tax, legal translations, Power of Attorney, and multilingual typing',
    descriptionBn: 'ভ্যাট ও করপোরেট ট্যাক্স, আইনি অনুবাদ, পাওয়ার অব অ্যাটর্নি ও ৪ ভাষার টাইপিং',
    descriptionAr: 'ضريبة القيمة المضافة وضريبة الشركات، الترجمة القانونية، والتوكيلات'
  }
];

export const servicesData: ServiceItem[] = [
  // Visa & Immigration
  {
    id: 'company-family-visa',
    categoryId: 'visa',
    titleEn: 'Company & Family Visa (New & Renew)',
    titleBn: 'কোম্পানি ও ফ্যামিলি ভিসা (নতুন ও নবায়ন)',
    titleAr: 'تأشيرات الشركات والعائلة (جديد وتجديد)',
    descEn: 'End-to-end processing for family residence visas (spouse, children, parents) and employment visa issuance and renewals across UAE.',
    descBn: 'স্ত্রী, সন্তান এবং পিতামাতার জন্য ফ্যামিলি ভিসা এবং সকল ধরনের কোম্পানির নতুন ও নবায়ন ভিসা দ্রুততম সময়ে সম্পন্ন।',
    descAr: 'معاملات كاملة لتأشيرات الإقامة العائلية وتأشيرات العمل للمؤسسات والشركات في عجمان ودبي.',
    iconName: 'Users',
    popular: true,
    requiredDocuments: {
      en: ['Original Passport & Photo', 'Current Visa / Entry Permit Copy', 'Sponsor Emirates ID & Salary Certificate', 'Tenancy Contract (Ejari / Tasdeeq)'],
      bn: ['মূল পাসপোর্ট ও ছবি', 'বর্তমান ভিসা কপি / এন্ট্রি পারমিট', 'স্পন্সরের এমিরেটস আইডি ও বেতন সনদ', 'ভাড়া চুক্তিপত্র (তাসদিক / ইজারি)'],
      ar: ['جواز السفر الأصلي والصورة الشخصية', 'نسخة التأشيرة الحالية / إذن الدخول', 'بطاقة الهوية وشهادة الراتب للكفيل', 'عقد الإيجار الموثق (تصديق / إيجاري)']
    },
    processingTime: {
      en: '24 - 48 Hours',
      bn: '২৪ - ৪৮ ঘণ্টা',
      ar: '24 - 48 ساعة'
    },
    keyFeatures: {
      en: ['Approved ICP & GDRFA Typing', 'Family Sponsorship Guidance', 'Fast Track File Opening'],
      bn: ['অনুমোদিত আইসিপি ও জিডিআরএফএ টাইপিং', 'ফ্যামিলি স্পন্সরশিপ গাইডলাইন', 'দ্রুত ফাইল ওপেনিং'],
      ar: ['طباعة معتمدة لدى الهيئة والجوازات', 'إرشاد متكامل لكفالة الأسرة', 'فتح الملف بشكل فوري']
    },
    whatsappText: 'Hello Alayan Typing! I would like to inquire about Company & Family Visa processing (New / Renewal).'
  },
  {
    id: 'golden-visa',
    categoryId: 'visa',
    titleEn: 'UAE Golden Visa (10-Year Residency)',
    titleBn: 'ইউএই গোল্ডেন ভিসা (১০ বছরের রেসিডেন্সি)',
    titleAr: 'الإقامة الذهبية في الإمارات (10 سنوات)',
    descEn: 'Eligibility assessment, documentation preparation, and nomination submission for investors, entrepreneurs, professionals, and property owners.',
    descBn: 'বিনিয়োগকারী, ব্যবসায়ী, দক্ষ পেশাজীবী এবং প্রপার্টি মালিকদের জন্য ১০ বছর মেয়াদী গোল্ডেন ভিসা আবেদন সহায়তা।',
    descAr: 'تقييم الأهلية وتجهيز المستندات وتقديم طلبات الإقامة الذهبية للمستثمرين وأصحاب المهن التخصصية.',
    iconName: 'Award',
    popular: true,
    requiredDocuments: {
      en: ['Passport Copy & UAE Visa', 'Bank Statements (6 months)', 'Professional Degree / Trade License / Title Deed', 'Salary Certificate (AED 30k+ for professionals)'],
      bn: ['পাসপোর্টের কপি ও বর্তমান ভিসা', '৬ মাসের ব্যাংক স্টেটমেন্ট', 'শিক্ষাগত যোগ্যতার সনদ / ট্রেড লাইসেন্স / দলিলের কপি', 'বেতন সনদ (পেশাজীবীদের জন্য ৩০ হাজার+ দিরহাম)'],
      ar: ['نسخة الجواز والإقامة الحالية', 'كشف حساب بنكي لـ 6 أشهر', 'المؤهل العلمي / الرخصة التجارية / سند الملكية', 'شهادة الراتب للمهنيين']
    },
    processingTime: {
      en: '3 - 7 Working Days',
      bn: '৩ - ৭ কর্মদিবস',
      ar: '3 - 7 أيام عمل'
    },
    keyFeatures: {
      en: ['Direct Pre-approval Check', 'Full Family Inclusion', 'Complete PRO Representation'],
      bn: ['সরাসরি যোগ্যতা যাচাই', 'পুরো পরিবারের অন্তর্ভুক্তি', 'সম্পূর্ণ পিআরও সহায়তা'],
      ar: ['فحص الأهلية المسبق', 'شمل أفراد الأسرة', 'متابعة شاملة حتى إصدار الإقامة']
    },
    whatsappText: 'Hello Mr. Didar! I want to check my eligibility and apply for UAE Golden Visa (10-Year).'
  },
  {
    id: 'visit-tourist-visa',
    categoryId: 'visa',
    titleEn: 'Visit Visa & Tourist Visa (30 & 60 Days)',
    titleBn: 'ভিজিট ও ট্যুরিস্ট ভিসা (৩০ ও ৬০ দিন)',
    titleAr: 'تأشيرات الزيارة والسياحة (30 و 60 يوماً)',
    descEn: 'Quick tourist & visit visas for all nationalities, urgent visa extensions, inside-country status change, and Umrah visa packages.',
    descBn: 'সকল দেশের নাগরিকদের জন্য ৩০ ও ৬০ দিনের ভিজিট ভিসা, ভিসা এক্সটেনশন এবং ওমরাহ ভিসা সার্ভিস।',
    descAr: 'إصدار تأشيرات السياحة والزيارة العائلية والسريعة، تمديد التأشيرات وتأشيرات العمرة.',
    iconName: 'Compass',
    popular: true,
    requiredDocuments: {
      en: ['Clear Passport Scan (Valid min 6 months)', 'Passport Size Photograph', 'Guarantor / Reference details if applicable'],
      bn: ['স্পষ্ট পাসপোর্ট স্ক্যান কপি (নূন্যতম ৬ মাস মেয়াদ)', 'পাসপোর্ট সাইজ ছবি', 'রেফারেন্স / গ্যারান্টারের তথ্য (প্রয়োজনে)'],
      ar: ['صورة واضحة من جواز السفر (ساري 6 أشهر)', 'صورة شخصية حديثة', 'بيانات الضامن أو المستضيف إن وجد']
    },
    processingTime: {
      en: '12 - 24 Hours Express',
      bn: '১২ - ২৪ ঘণ্টা এক্সপ্রেস',
      ar: '12 - 24 ساعة خدمة سريعة'
    },
    keyFeatures: {
      en: ['Instant Issuance', 'Inside-Country Extension Support', 'Affordable Special Rates'],
      bn: ['দ্রুত ইস্যু সুবিধা', 'ইউএইতে থাকাকালীন মেয়াদ বৃদ্ধির সুযোগ', 'বিশেষ সাশ্রয়ী প্যাকেজ'],
      ar: ['إصدار سريع وفوري', 'إمكانية التمديد داخل الدولة', 'أسعار خاصة ومميزة']
    },
    whatsappText: 'Hello! I need assistance with a Visit / Tourist / Umrah Visa application.'
  },
  {
    id: 'amer-services-dubai',
    categoryId: 'visa',
    titleEn: 'AMER Services (Dubai GDRFA)',
    titleBn: 'আমের সার্ভিসেস (দুবাই জিডিআরএফএ)',
    titleAr: 'خدمات آمر (إقامة دبي)',
    descEn: 'Authorized Dubai entry permit processing, residence visa stamping, visa cancellation, and overstay fine reduction / clearance.',
    descBn: 'দুবাই এন্ট্রি পারমিট, ভিসা স্ট্যাম্পিং, ভিসা বাতিল এবং ওভারস্টে ফাইন কমানো সংক্রান্ত সেবা।',
    descAr: 'طباعة أذونات الدخول وتثبيت الإقامة وإلغاء التأشيرات وتعديل الوضع لإمارة دبي عبر نظام آمر.',
    iconName: 'ShieldCheck',
    requiredDocuments: {
      en: ['Passport & Current Visa', 'Emirates ID copy', 'Establishment Card or Tenancy contract'],
      bn: ['পাসপোর্ট ও বর্তমান ভিসা', 'এমিরেটস আইডির কপি', 'এস্টাবলিশমেন্ট কার্ড বা ভাড়ার চুক্তি'],
      ar: ['جواز السفر والتأشيرة الحالية', 'صورة الهوية الإماراتية', 'بطاقة المنشأة أو عقد الإيجار']
    },
    whatsappText: 'Hello Alayan Typing! I need AMER Dubai Visa / Fine clearance assistance.'
  },

  // Emirates ID & Medical
  {
    id: 'emirates-id-typing',
    categoryId: 'emirates-id',
    titleEn: 'Emirates ID Typing & Renewal',
    titleBn: 'এমিরেটস আইডি টাইপিং ও নবায়ন',
    titleAr: 'طباعة وتجديد بطاقة الهوية الوطنية',
    descEn: 'Official ICP typing for new Emirates ID, renewal, replacement of lost cards, and biometric appointment scheduling.',
    descBn: 'নতুন এমিরেটস আইডি, নবায়ন, হারিয়ে যাওয়া কার্ড পুনরায় আবেদন এবং বায়োমেট্রিক ফিঙ্গারপ্রিন্ট অ্যাপয়েন্টমেন্ট।',
    descAr: 'طباعة وتجديد بطاقة الهوية الإماراتية للمواطنين والمقيمين واستخراج بدل فاقد وتحديد مواعيد البصمة.',
    iconName: 'IdCard',
    popular: true,
    requiredDocuments: {
      en: ['Original Passport', 'Old Emirates ID (for renewal)', 'Residence Visa or Entry Permit', 'Personal Photo with White Background'],
      bn: ['মূল পাসপোর্ট', 'পুরাতন এমিরেটস আইডি (নবায়নের জন্য)', 'রেসিডেন্স ভিসা বা এন্ট্রি পারমিট', 'সাদা ব্যাকগ্রাউন্ডের ছবি'],
      ar: ['جواز السفر الأصلي', 'الهوية القديمة (في حال التجديد)', 'تأشيرة الإقامة أو إذن الدخول', 'صورة شخصية بخلفية بيضاء']
    },
    processingTime: {
      en: 'Same Day Typing',
      bn: 'একই দিনে টাইপিং সম্পন্ন',
      ar: 'طباعة فورية بنفس اليوم'
    },
    keyFeatures: {
      en: ['Instant ICP Submission', 'Biometric Center Selection', 'Urgent VIP Tracking'],
      bn: ['দ্রুত আইসিপি আবেদন', 'সুবিধাজনক বায়োমেট্রিক সেন্টার নির্বাচন', 'ভিআইপি ট্র্যাকিং'],
      ar: ['تقديم فوري عبر نظام الهيئة', 'حجز مركز البصمة الأقرب', 'متابعة حتى الاستلام']
    },
    whatsappText: 'Hello! I want to apply for Emirates ID New / Renewal typing at ATS.'
  },
  {
    id: 'medical-fitness-typing',
    categoryId: 'emirates-id',
    titleEn: 'Medical Fitness Test Typing',
    titleBn: 'মেডিকেল ফিটনেস টেস্ট টাইপিং',
    titleAr: 'طباعة الفحص الطبي للإقامة',
    descEn: 'Appointments & application typing for residency medical tests across Ajman Medical Center, MOHAP, EHS, and DHA centers.',
    descBn: 'আজমান মেডিকেল সেন্টার, মোহাফ ও অন্যান্য সরকারি সেন্টারে ভিসা মেডিকেল টেস্ট অ্যাপয়েন্টমেন্ট ও টাইপিং।',
    descAr: 'حجز مواعيد وطباعة استمارات الفحص الطبي للإقامة في عجمان وجميع مراكز وزارة الصحة.',
    iconName: 'HeartPulse',
    popular: true,
    requiredDocuments: {
      en: ['Passport Copy', 'Entry Permit / Visa Copy', 'Emirates ID Copy (if renewal)', 'Passport Photo'],
      bn: ['পাসপোর্টের কপি', 'ভিসা বা এন্ট্রি পারমিট কপি', 'এমিরেটস আইডি কপি (নবায়ন হলে)', 'পাসপোর্ট ছবি'],
      ar: ['صورة جواز السفر', 'صورة إذن الدخول أو الإقامة', 'صورة الهوية السابقة', 'صورة شخصية']
    },
    processingTime: {
      en: 'Instant Booking',
      bn: 'তাৎক্ষণিক বুকিং',
      ar: 'حجز فوري'
    },
    whatsappText: 'Hi ATS Typing, I need to type a Medical Fitness Test application for Visa.'
  },
  {
    id: 'iloe-health-insurance',
    categoryId: 'emirates-id',
    titleEn: 'ILOE & Health Insurance Typing',
    titleBn: 'আইএলওই ও স্বাস্থ্য বীমা সার্ভিস',
    titleAr: 'التأمين ضد التعطل عن العمل والتأمين الصحي',
    descEn: 'Mandatory UAE Involuntary Loss of Employment (ILOE) subscription & fine prevention, along with basic and comprehensive health insurance plans.',
    descBn: 'বাধ্যতামূলক আইএলওই (বেকারত্ব বীমা) রেজিস্ট্রেশন এবং যেকোনো স্বাস্থ্য বীমা পলিসি সুবিধা।',
    descAr: 'الاشتراك في التأمين ضد التعطل عن العمل (ILOE) لتجنب الغرامات، وإصدار وثائق التأمين الصحي الأساسية.',
    iconName: 'ShieldPlus',
    requiredDocuments: {
      en: ['Emirates ID Number', 'Mobile Number linked to UAE Pass', 'Company Details (if group)'],
      bn: ['এমিরেটস আইডি নম্বর', 'মোবাইল নম্বর', 'কোম্পানির তথ্য (প্রয়োজনে)'],
      ar: ['رقم الهوية الإماراتية', 'رقم الهاتف المسجل', 'بيانات الشركة للمجموعات']
    },
    whatsappText: 'Hello! I need help with ILOE Insurance subscription / Health Insurance.'
  },

  // Business & Trade License
  {
    id: 'trade-license-new-renew',
    categoryId: 'business',
    titleEn: 'Trade License New & Renewal (Ajman & Dubai)',
    titleBn: 'ট্রেড লাইসেন্স নতুন ও নবায়ন (আজমান ও দুবাই)',
    titleAr: 'إصدار وتجديد الرخص التجارية (عجمان ودبي)',
    descEn: 'Full setup for LLC, Commercial, Professional, Industrial licenses in Ajman DED and Dubai DED. Name reservation, initial approvals, and renewals.',
    descBn: 'আজমান ও দুবাই ডিইডি ট্রেড লাইসেন্স নতুন তৈরি, নাম সিলেক্ট, অনুমোদন এবং বার্ষিক লাইসেন্স নবায়ন।',
    descAr: 'تأسيس وتجديد جميع أنواع الرخص التجارية والمهنية والصناعية في دائرة التنمية الاقتصادية بعجمان ودبي.',
    iconName: 'Briefcase',
    popular: true,
    requiredDocuments: {
      en: ['Partners Passport & Emirates ID', 'Tenancy Contract / Ejari / Tasdeeq', 'Memorandum of Association (MOA)', 'Existing License (for renewal)'],
      bn: ['পার্টনারদের পাসপোর্ট ও এমিরেটস আইডি', 'দোকান/অফিসের তাসদিক চুক্তিপত্র', 'মেমোরেন্ডাম অব অ্যাসোসিয়েশন (এমওএ)', 'পূর্বের লাইসেন্স কপি (নবায়নের জন্য)'],
      ar: ['جوازات سفر وهوية الشركاء', 'عقد الإيجار الموثق (تصديق / إيجاري)', 'عقد التأسيس وملاحقه', 'الرخصة التجارية السابقة']
    },
    processingTime: {
      en: '1 - 3 Days',
      bn: '১ - ৩ দিন',
      ar: '1 - 3 أيام'
    },
    keyFeatures: {
      en: ['Economic Dept. Direct Link', 'Trade Name Reservation', 'Special Rate For Companies'],
      bn: ['অর্থনৈতিক বিভাগের সাথে সরাসরি সংযোগ', 'ট্রেড নাম সংরক্ষণ', 'কোম্পানিদের জন্য বিশেষ রেট'],
      ar: ['ربط مباشر مع الدوائر الاقتصادية', 'حجز الاسم التجاري', 'أسعار وباقات خاصة للشركات']
    },
    whatsappText: 'Hello Mr. Didar! I need assistance with Trade License (New / Renewal) in Ajman or Dubai.'
  },
  {
    id: 'tasheel-services',
    categoryId: 'business',
    titleEn: 'Tas-heel & MOHRE Labor Services',
    titleBn: 'তাসহিল ও শ্রম মন্ত্রণালয় (MOHRE) সেবা',
    titleAr: 'خدمات تسهيل ووزارة الموارد البشرية والتوطين',
    descEn: 'Work permits, labor contracts modification, quota submission, establishment card renewal, and absconding dispute applications.',
    descBn: 'শ্রমিকের কাজের পারমিট, লেবার চুক্তিপত্র পরিবর্তন, কোটা আবেদন, এস্টাবলিশমেন্ট কার্ড নবায়ন ও লেবার সংক্রান্ত যাবতীয় সমাধান।',
    descAr: 'إصدار تصاريح العمل، تعديل وتوثيق عقود العمل، تجديد بطاقات المنشأة ومعاملات تسهيل.',
    iconName: 'FileSpreadsheet',
    requiredDocuments: {
      en: ['Trade License Copy', 'Establishment Card', 'Employee Passport & Photo', 'Offer Letter Signed'],
      bn: ['ট্রেড লাইসেন্স কপি', 'এস্টাবলিশমেন্ট কার্ড', 'কর্মচারীর পাসপোর্ট ও ছবি', 'স্বাক্ষরিত অফার লেটার'],
      ar: ['نسخة الرخصة التجارية', 'بطاقة المنشأة', 'جواز سفر وصورة العامل', 'عرض العمل الموقع']
    },
    whatsappText: 'Hello! I need Tas-heel / MOHRE Labor services support.'
  },
  {
    id: 'tasdeeq-services',
    categoryId: 'business',
    titleEn: 'Tasdeeq (Ajman Tenancy Attestation)',
    titleBn: 'তাসদিক (আজমান বাড়ি/দোকান ভাড়া চুক্তি সত্যায়ন)',
    titleAr: 'خدمات تصديق (عقود الإيجار في عجمان)',
    descEn: 'Official Ajman Municipality Tasdeeq attestation for residential flats, commercial shops, warehouses, and industrial units.',
    descBn: 'আজমান মিউনিসিপালিটির মাধ্যমে বাসা, অফিস বা বাণিজ্যিক দোকানের চুক্তিপত্র (তাসদিক) অনুমোদন ও নবায়ন।',
    descAr: 'توثيق وتصديق عقود الإيجار السكنية والتجارية والصناعية لدى بلدية عجمان.',
    iconName: 'Home',
    requiredDocuments: {
      en: ['Tenancy Contract Copy', 'Title Deed (Mulkiya of building)', 'Owner & Tenant ID/Passport Copies', 'FEWA Clearance or Account'],
      bn: ['ভাড়া চুক্তিপত্রের কপি', 'বিল্ডিংয়ের দলিলের কপি', 'মালিক ও ভাড়াটিয়ার আইডি/পাসপোর্ট', 'ফেওয়া বিদ্যুৎ বিলের তথ্য'],
      ar: ['نسخة عقد الإيجار', 'ملكية العقار', 'هوية أو جواز المؤجر والمستأجر', 'براءة ذمة فيوا']
    },
    whatsappText: 'Hello! I need to attest / renew my Ajman Tasdeeq Tenancy contract.'
  },
  {
    id: 'civil-defence-court-gpssa',
    categoryId: 'business',
    titleEn: 'Civil Defence, Court & GPSSA Services',
    titleBn: 'সিভিল ডিফেন্স, আদালত ও জিপিএসএসএ সার্ভিস',
    titleAr: 'الدفاع المدني، المحاكم، وهيئة المعاشات GPSSA',
    descEn: 'Shop safety approvals, Dubai & Ajman Court notarizations, and GPSSA pension registrations for companies and UAE nationals.',
    descBn: 'সিভিল ডিফেন্স সার্টিফিকেট, আদালত সংক্রান্ত ড্রাফটিং ও সত্যায়ন এবং জিপিএসএসএ পেনশন প্রক্রিয়া।',
    descAr: 'تصاريح واعتماد الدفاع المدني للمنشآت، معاملات المحاكم، والتسجيل في هيئة المعاشات والتأمينات.',
    iconName: 'Scale',
    requiredDocuments: {
      en: ['Trade License & Site Map', 'Company Representative ID', 'Court case / GPSSA file number'],
      bn: ['ট্রেড লাইসেন্স ও সাইট ম্যাপ', 'প্রতিনিধির আইডি', 'ফাইল নম্বর'],
      ar: ['الرخصة التجارية ومخطط الموقع', 'هوية ممثل المنشأة', 'رقم الملف المعني']
    },
    whatsappText: 'Hi, I need assistance with Civil Defence / Court / GPSSA services.'
  },

  // Traffic & Vehicle
  {
    id: 'traffic-fines-discounts',
    categoryId: 'traffic',
    titleEn: 'Traffic Fine Check & Online Payment',
    titleBn: 'ট্রাফিক ফাইন চেক ও অনলাইন পেমেন্ট',
    titleAr: 'الاستعلام عن المخالفات المرورية ودفعها',
    descEn: 'Check all UAE traffic fines across Ajman, Dubai, Abu Dhabi, Sharjah with instant payment clearance and discount scheme inquiries.',
    descBn: 'আজমান, দুবাই, আবুধাবিসহ সমগ্র ইউএইর ট্রাফিক ফাইন চেক ও তাৎক্ষণিক অনলাইন পেমেন্ট সুবিধা।',
    descAr: 'الاستعلام الفوري عن المخالفات المرورية في جميع إمارات الدولة وسدادها إلكترونياً مع تطبيق الخصومات المتاحة.',
    iconName: 'Coins',
    popular: true,
    requiredDocuments: {
      en: ['Traffic Code (T.C. No)', 'Vehicle Plate Number & Code', 'Chassis Number or Driving License No'],
      bn: ['ট্রাফিক কোড (TC No)', 'গাড়ির নাম্বার প্লেট ও কোড', 'চেসিস নম্বর অথবা ড্রাইভিং লাইসেন্স নম্বর'],
      ar: ['الرمز المروري (T.C No)', 'رقم ولوحة المركبة', 'رقم الشاصي أو رقم رخصة القيادة']
    },
    processingTime: {
      en: 'Instant 5-Minute Clearance',
      bn: 'মাত্র ৫ মিনিটে ক্লিয়ারেন্স',
      ar: 'سداد فوري خلال 5 دقائق'
    },
    whatsappText: 'Hello! I want to check and pay traffic fines for my vehicle / license.'
  },
  {
    id: 'driving-license-mulkiya',
    categoryId: 'traffic',
    titleEn: 'Driving License & Mulkiya Renewal',
    titleBn: 'ড্রাইভিং লাইসেন্স ও মুলকিয়া (গাড়ির রেজিস্ট্রেশন) নবায়ন',
    titleAr: 'تجديد رخصة القيادة وملكية المركبة',
    descEn: 'Hassle-free vehicle ownership renewal (Mulkiya), passing test booking, driving license renewal, and comprehensive vehicle insurance.',
    descBn: 'গাড়ির মুলকিয়া রিনিউয়াল, ভেহিকল পাসিং টেস্ট অ্যাপয়েন্টমেন্ট, ড্রাইভিং লাইসেন্স নবায়ন এবং কার ইন্স্যুরেন্স।',
    descAr: 'تجديد ملكية السيارات، حجز فحص المركبة الفني، تجديد رخص القيادة وإصدار وثائق التأمين.',
    iconName: 'Gauge',
    requiredDocuments: {
      en: ['Vehicle Passing Certificate', 'Insurance Policy Details', 'Original Emirates ID', 'Old Mulkiya Card'],
      bn: ['গাড়ি পাসিং সার্টিফিকেট', 'ইন্স্যুরেন্সের বিবরণ', 'মূল এমিরেটস আইডি', 'পুরাতন মুলকিয়া কার্ড'],
      ar: ['شهادة فحص المركبة الفني', 'وثيقة التأمين', 'الهوية الأصلية', 'بطاقة الملكية السابقة']
    },
    whatsappText: 'Hello! I need to renew my Mulkiya / Driving License and vehicle insurance.'
  },

  // Utilities & Online Services
  {
    id: 'fewa-ajman-sewerage',
    categoryId: 'utilities',
    titleEn: 'FEWA & Ajman Sewerage Online Services',
    titleBn: 'ফেওয়া (FEWA) ও আজমান সুয়ারেজ অনলাইন সেবা',
    titleAr: 'خدمات فيوا (الاتحاد للماء والكهرباء) وصرف صحي عجمان',
    descEn: 'Electricity & water connection requests, bill payments, final clearance certificates, and Ajman Sewerage account link & settlements.',
    descBn: 'নতুন বিদ্যুৎ/পানি সংযোগ, ফেওয়া বিল পেমেন্ট, ক্লিয়ারেন্স সার্টিফিকেট এবং আজমান সুয়ারেজ পেমেন্ট ও সেটেলমেন্ট।',
    descAr: 'سداد فواتير الكهرباء والمياه، إصدار شهادات براءة الذمة، وربط وسداد حسابات شركة عجمان للصرف الصحي.',
    iconName: 'Droplet',
    requiredDocuments: {
      en: ['Tenancy Contract (Tasdeeq)', 'FEWA Account / Premise Number', 'Emirates ID Copy'],
      bn: ['তাসদিক ভাড়া চুক্তি', 'ফেওয়া একাউন্ট / প্রিমাইস নম্বর', 'এমিরেটস আইডির কপি'],
      ar: ['عقد الإيجار الموثق تصديق', 'رقم حساب أو مبنى فيوا', 'صورة بطاقة الهوية']
    },
    whatsappText: 'Hello! I need help with FEWA bill payment / Ajman Sewerage clearance.'
  },
  {
    id: 'uae-pass-support',
    categoryId: 'utilities',
    titleEn: 'UAE PASS Registration & Digital ID',
    titleBn: 'ইউএই পাস (UAE PASS) রেজিস্ট্রেশন ও সাপোর্ট',
    titleAr: 'التسجيل والدعم في الهوية الرقمية UAE PASS',
    descEn: 'Create, authenticate, upgrade to verified status, or reset credentials for UAE PASS digital national identity on smart kiosks & online.',
    descBn: 'ইউএই পাস একাউন্ট তৈরি, বায়োমেট্রিক ভেরিফিকেশন, পাসওয়ার্ড রিকভারি এবং ডিজিটাল স্বাক্ষর সহায়তা।',
    descAr: 'إنشاء وتوثيق وترقية حساب الهوية الرقمية UAE PASS وحل مشكلات تسجيل الدخول والتوثيق.',
    iconName: 'Smartphone',
    requiredDocuments: {
      en: ['Original Emirates ID', 'Active UAE Mobile Number', 'Access to email address'],
      bn: ['মূল এমিরেটস আইডি', 'সক্রিয় ইউএই মোবাইল নম্বর', 'ইমেইল এড্রেস'],
      ar: ['الهوية الإماراتية الأصلية', 'رقم هاتف إماراتي مفعل', 'البريد الإلكتروني']
    },
    whatsappText: 'Hello ATS! I need assistance with UAE PASS registration / password recovery.'
  },
  {
    id: 'bkash-remittance',
    categoryId: 'utilities',
    titleEn: 'bKash Services & Remittance Support',
    titleBn: 'বিকাশ সেবা ও রেমিট্যান্স সহায়তা',
    titleAr: 'خدمات بكاش والمساعدة في التحويلات المالية',
    descEn: 'Support and direct assistance for Bangladeshi community bKash transactions, recharge, and urgent financial communications.',
    descBn: 'প্রবাসী ভাইদের জন্য দ্রুত বিকাশ সংক্রান্ত তথ্য, রিচার্জ ও জরুরি রেমিট্যান্স সহায়তা।',
    descAr: 'خدمات الدعم والتحويلات الخاصة بالجالية البنغلاديشية وتسهيل المعاملات المالية.',
    iconName: 'Send',
    popular: true,
    requiredDocuments: {
      en: ['Sender & Receiver Information', 'Valid ID copy'],
      bn: ['প্রেরক ও প্রাপকের সঠিক মোবাইল ও নাম', 'বৈধ আইডি'],
      ar: ['بيانات المرسل والمستلم', 'نسخة الهوية السارية']
    },
    whatsappText: 'Hello! I want to inquire about bKash services / remittance assistance.'
  },

  // Legal, Tax & Translations
  {
    id: 'corporate-tax-vat',
    categoryId: 'legal-tax',
    titleEn: 'VAT & Corporate Tax Services',
    titleBn: 'ভ্যাট (VAT) ও করপোরেট ট্যাক্স সেবা',
    titleAr: 'ضريبة القيمة المضافة وضريبة الشركات (FTA)',
    descEn: 'Federal Tax Authority (FTA) corporate tax registration, VAT registration, periodic return filing, and penalty waivers.',
    descBn: 'ইউএই ফেডারেল ট্যাক্স অথরিটির আওতায় কোম্পানির জন্য করপোরেট ট্যাক্স ও ভ্যাট রেজিস্ট্রেশন এবং রিটার্ন দাখিল।',
    descAr: 'التسجيل في ضريبة الشركات وضريبة القيمة المضافة وتقديم الإقرارات الضريبية لدى الهيئة الاتحادية للضرائب.',
    iconName: 'Receipt',
    requiredDocuments: {
      en: ['Trade License & MOA', 'Owner Emirates ID & Passport', 'Financial Statements or Revenue Records', 'Bank Account IBAN Letter'],
      bn: ['ট্রেড লাইসেন্স ও এমওএ', 'মালিকের এমিরেটস আইডি ও পাসপোর্ট', 'কোম্পানির আয়-ব্যয় বা ব্যাংকের হিসাব', 'আইব্যান (IBAN) লেটার'],
      ar: ['الرخصة التجارية وعقد التأسيس', 'هوية وجواز سفر المالك', 'البيانات المالية أو سجل الإيرادات', 'شهادة الحساب المصرفي IBAN']
    },
    whatsappText: 'Hi Alayan Typing, I need FTA Corporate Tax / VAT Registration and Filing support.'
  },
  {
    id: 'legal-translation-multilingual',
    categoryId: 'legal-tax',
    titleEn: 'Legal Translation & Multilingual Typing',
    titleBn: 'আইনি অনুবাদ ও ৪ ভাষার টাইপিং (ইংরেজি, আরবি, বাংলা, উর্দু)',
    titleAr: 'الترجمة القانونية والطباعة بعدة لغات',
    descEn: 'Certified legal translations in Arabic, English, Bengali, and Urdu for court submissions, ministries, embassy attestations, and contracts.',
    descBn: 'আদালত, মন্ত্রণালয় ও দূতাবাসের জন্য আরবি, ইংরেজি, বাংলা ও উর্দু ভাষায় অফিশিয়াল ও আইনি অনুবাদ।',
    descAr: 'ترجمة قانونية معتمدة باللغات العربية والإنجليزية والبنغالية والأردية لجميع المعاملات الرسمية والمحاكم.',
    iconName: 'Languages',
    popular: true,
    requiredDocuments: {
      en: ['Original Document to be Translated (PDF or Clear Image)', 'Applicant Passport / Emirates ID name spelling'],
      bn: ['অনুবাদ করার মূল কাগজের কপি (পিডিএফ বা পরিষ্কার ছবি)', 'পাসপোর্ট অনুযায়ী নামের সঠিক বানান'],
      ar: ['المستند الأصلي المراد ترجمته', 'صورة الجواز لتطابق الأسماء']
    },
    whatsappText: 'Hello! I need Legal Translation / Multilingual Typing service.'
  },
  {
    id: 'power-of-attorney-drafting',
    categoryId: 'legal-tax',
    titleEn: 'Power of Attorney, CV & Official Letters',
    titleBn: 'আমমোক্তারনামা (POA), সিভি ও অফিশিয়াল চিঠি ড্রাফটিং',
    titleAr: 'صياغة التوكيلات والسير الذاتية والخطابات الرسمية',
    descEn: 'Drafting professional Power of Attorney (General / Special), high-impact job CVs, corporate quotations, tenancy notices, and government petitions.',
    descBn: 'জেনারেল ও স্পেশাল পাওয়ার অব অ্যাটর্নি, চাকরির স্ট্যান্ডার্ড সিভি, প্রাতিষ্ঠানিক কোটেশন ও অফিসিয়াল দরখাস্ত লিখন।',
    descAr: 'صياغة التوكيلات العامة والخاصة، السير الذاتية المهنية، عروض الأسعار والخطابات الرسمية الموجهة للجهات الحكومية.',
    iconName: 'PenTool',
    requiredDocuments: {
      en: ['Principal & Attorney ID / Passport details', 'Specific Powers or Purpose Description'],
      bn: ['উভয় পক্ষের পাসপোর্ট ও আইডি বিবরণ', 'উদ্দেশ্য ও বিস্তারিত বিবরণ'],
      ar: ['بيانات الموكل والوكيل وجوازات السفر', 'تفاصيل الصلاحيات المطلوبة']
    },
    whatsappText: 'Hi! I need drafting for Power of Attorney / CV / Official Letter.'
  }
];
