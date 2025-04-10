import React, { useState, useEffect } from "react";
import { FormEvent } from "react";
import "./App.css";
import {
  FaChartLine,
  FaUsers,
  FaSearch,
  FaChartPie,
  FaClock,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaCode,
  FaShieldAlt,
} from "react-icons/fa";

// Define Translation interface
interface BenefitItem {
  title: string;
  description: string;
}

interface Translation {
  home: string;
  services: string;
  portfolio: string;
  process: string;
  benefits: string;
  contact: string;
  language: string;
  darkMode: string;
  lightMode: string;
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
    portfolioButton: string;
    trustedBy: string;
    imageAlt: string;
  };
  benefitsSection: {
    title: string;
    subtitle: string;
    increasedSales: BenefitItem;
    accessibility: BenefitItem;
    seo: BenefitItem;
    data: BenefitItem;
    timeSaving: BenefitItem;
    mobile: BenefitItem;
    professional: BenefitItem;
    growth: BenefitItem;
  };
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    send: string;
    required: string;
  };
  contactFormText: string;
  ourServices: string;
  servicesDescription: string;
  startupWebsite: string;
  birr: string;
  suitableForSmall: string;
  pages: string;
  basicSEO: string;
  socialMedia: string;
  readyIn3Days: string;
  start: string;
  popular: string;
  businessWebsite: string;
  suitableForGrowing: string;
  premiumDesign: string;
  advancedContactForms: string;
  enhancedSEO: string;
  businessEmail: string;
  googleMaps: string;
  ecommerceStore: string;
  startSellingOnline: string;
  productCatalog: string;
  shoppingCartSystem: string;
  paymentGateway: string;
  orderManagement: string;
  customerAccounts: string;
  readyIn5Days: string;
  ecommerceSite: string;
  ourProcess: string;
  processDescription: string;
  consultation: string;
  consultationDesc: string;
  design: string;
  designDesc: string;
  development: string;
  developmentDesc: string;
  review: string;
  reviewDesc: string;
  launch: string;
  launchDesc: string;
  websiteBenefits: string;
  benefitsDescription: string;
  increasesSales: string;
  salesDescText: string;
  salesQuote: string;
  betterAccessibility: string;
  accessDesc: string;
  accessQuote: string;
  increasesVisibility: string;
  visibilityDesc: string;
  visibilityQuote: string;
  customerData: string;
  dataDesc: string;
  dataQuote: string;
  fastDelivery: string;
  getIn3Days: string;
  professionalDesign: string;
  modernBeautiful: string;
  mobileResponsive: string;
  smoothOnAllDevices: string;
  betterForSearch: string;
  preparedForSearchEngines: string;
  saveTime: string;
  timeSaves: string;
  timeDescText: string;
  timeQuote: string;
  professionalAppearance: string;
  credibility: string;
  appearanceDescText: string;
  appearanceQuote: string;
  businessGrowth: string;
  growthDescText: string;
  growthQuote: string;
  ourWork: string;
  recentWebsites: string;
  addisRestaurant: string;
  restaurantDesc: string;
  business: string;
  ethioFit: string;
  fitnessDesc: string;
  habeshaBoutique: string;
  boutiqueDesc: string;
  bunaShop: string;
  coffeeDesc: string;
  testimonials: string;
  testimonialsDesc: string;
  restaurantTestimonial: string;
  alemKebede: string;
  ownerAddis: string;
  boutiqueTestimonial: string;
  tsgstHaile: string;
  founderHabesha: string;
  readyToImprove: string;
  getProfessional: string;
  contactUsToday: string;
  contactUs: string;
  fillForm: string;
  fullName: string;
  yourName: string;
  email: string;
  phoneLabel: string;
  serviceWanted: string;
  selectService: string;
  startupSite: string;
  businessSite: string;
  specialProject: string;
  message: string;
  tellUs: string;
  sending: string;
  sendMessage: string;
  professionalSolutions: string;
  emailLabel: string;
  addressLabel: string;
  address: string;
  quickLinks: string;
  followUs: string;
  rightsReserved: string;
  salesIncreaseText: string;
  salesIncrease: string;
  moreAccess: string;
  visibilityIncrease: string;
  betterInsights: string;
  mobileTraffic: string;
  mobileFriendlyText: string;
  professionalLookText: string;
  growthRateText: string;
}

interface Translations {
  amharic: Translation;
  english: Translation;
}

// Replace the entire translations object with a clean version
const translations: Translations = {
  amharic: {
    home: "ዋና",
    services: "አገልግሎቶች",
    portfolio: "ስራዎች",
    process: "ሂደት",
    benefits: "ጥቅሞች",
    contact: "ያግኙን",
    language: "ቋንቋ",
    darkMode: "ጨለማ ሁነታ",
    lightMode: "ብርሃን ሁነታ",

    hero: {
      title: "የእርስዎን ድረ-ገጽ እና የዲጂታል ገጽታ እናሻሽላለን",
      subtitle:
        "ድንቅ ድረ-ገጾችን እና የዲጂታል እይታ ጋር ንግድዎን አሳድጉ። ሀሳብዎን እንወስዳለን እና ጥራት ያለው፣ አስተማማኝ እና የተሟላ ምርቶችን እናመጣለን።",
      ctaButton: "እኛን ያነጋግሩ",
      portfolioButton: "ስራዎቻችን ይመልከቱ",
      trustedBy: "የሚያምኑን ድርጅቶች",
      imageAlt: "ድረ-ገጽ ዲዛይን ምሳሌ",
    },

    benefitsSection: {
      title: "ድረ-ገጽዎ ንግድዎን ለምን ማሳደግ እንደሚችል",
      subtitle: "እርስዎን ለመርዳት እዚህ ነን",

      increasedSales: {
        title: "የሽያጭ መጨመር",
        description:
          "ከፍተኛ ጥራት ያለው ድረ-ገጽ ይኖሮት እና በመስመር ላይ ያሉትን ደንበኞችዎን ወደ ከፋይ ደንበኞች ይቀይሩ።",
      },
      accessibility: {
        title: "የተሻለ ተደራሽነት",
        description: "ድረ-ገጽዎ 24/7 ተደራሽ ሆኖ፣ መረጃው ለደንበኞችዎ ሁልጊዜ ይገኛል።",
      },
      seo: {
        title: "የተሻሻለ ጉግል ገጽታ",
        description:
          "ለፍለጋ ማሽኖች የተመቻቸ ድረ-ገጽ ይጎብኙ መጠንን ከፍ ያደርጋል እና ግንኙነትን ያሻሽላል።",
      },
      data: {
        title: "የደንበኛ ዳታ ትንተና",
        description:
          "የድረ-ገጽዎን ጎብኚዎች ባህሪ ይረዱ እና ንግድዎን በተሻለ መንገድ ለማዘመን ውሳኔዎችን ይወሰኑ።",
      },
      timeSaving: {
        title: "ጊዜ እና ወጪ ቁጠባ",
        description: "ብዙ ጥያቄዎችን የሚመልስ ድረ-ገጽ የደንበኛ አገልግሎት ጊዜ እና ወጪን ይቆጥባል።",
      },
      mobile: {
        title: "ሞባይል ተኮር",
        description:
          "የእኛ ድረ-ገጾች ለሁሉም መሳሪያዎች የተመቻቹ ናቸው፣ ለማንኛውም የስክሪን መጠን ድንቅ ይመስላሉ።",
      },
      professional: {
        title: "ፕሮፌሽናል መልክ",
        description:
          "ጥራት ያለው ድረ-ገጽ ለንግድዎ ተዓማኒነትን ይፈጥራል እና ይበልጥ ዋጋ ያለው እንዲመስል ያደርጋል።",
      },
      growth: {
        title: "የንግድ እድገት መሰረት",
        description: "ጠንካራ የመስመር ላይ መገኘት ለወደፊት እድገት እና ማስፋት መሰረት ይፈጥራል።",
      },
    },

    contactForm: {
      title: "ያግኙን",
      subtitle: "ለማንኛውም ጥያቄዎች ወይም የዋጋ ጥቆማዎች፣ ያግኙን",
      name: "ሙሉ ስም",
      email: "ኢሜይል",
      phone: "ስልክ ቁጥር",
      service: "አገልግሎት ይምረጡ",
      message: "መልዕክት",
      send: "መልዕክት ይላኩ",
      required: "አስፈላጊ",
    },
    contactFormText: "የመገናኛ ቅጽ",
    ourServices: "አገልግሎቶቻችን",
    servicesDescription: "ለንግድዎ ፍላጎቶች የተበጁ የድረ-ገጽ ዲዛይን አገልግሎቶች",
    startupWebsite: "የመጀመሪያ ደረጃ ድረ-ገጽ",
    birr: "ብር ",
    suitableForSmall: "ለአዲስ እና ለትንንሽ ንግዶች ተስማሚ",
    pages: "ገጾች",
    basicSEO: "መሰረታዊ ፍለጋ ማሽን ውጤታማነት (SEO)",
    socialMedia: "የማህበራዊ ሚዲያ ውህደት",
    readyIn3Days: "በ3 ቀናት ውስጥ ዝግጁ",
    start: "ይጀምሩ",
    popular: "ተወዳጅ",
    businessWebsite: "የንግድ ድረ-ገጽ",
    suitableForGrowing: "ለማደግ ላይ ላሉ ንግዶች ተስማሚ",
    premiumDesign: "ኘሪሚየም ዲዛይን",
    advancedContactForms: "የላቀ የመገናኛ ቅጾች",
    enhancedSEO: "የተሻሻለ ኤስኢኦ",
    businessEmail: "የንግድ ኢሜይል",
    googleMaps: "ጉግል ማፕስ ውህደት",
    ecommerceStore: "የኢኮመርስ መደብር",
    startSellingOnline: "በመስመር ላይ መሸጥ ይጀምሩ",
    productCatalog: "የምርት ካታሎግ",
    shoppingCartSystem: "የግዢ ዕቃዎች ስርዓት",
    paymentGateway: "የክፍያ መግቢያ",
    orderManagement: "የትዕዛዝ አስተዳደር",
    customerAccounts: "የደንበኛ መለያዎች",
    readyIn5Days: "በ5 ቀናት ውስጥ ዝግጁ",
    ecommerceSite: "የኢኮመርስ ድረ-ገጽ",
    ourProcess: "የእኛ ሂደት",
    processDescription: "ለድረ-ገጽዎ ስኬት የምንጠቀመው ቀላል ሂደት",
    consultation: "ምክክር",
    consultationDesc: "ፍላጎቶችዎን እንመረምራለን እና የተሻለውን መፍትሄ እንጠቁማለን",
    design: "ዲዛይን",
    designDesc: "ምልከታውን ወይም አቀራረቡን አብረን እንፈጥራለን",
    development: "ልማት",
    developmentDesc: "የድረ-ገጽዎ እንዲሰራ የምናደርግበት የኢንጅኒሪንግ ሂደት",
    review: "ግምገማ",
    reviewDesc: "ዝርዝር ጥናት እና ማስተካከያዎች",
    launch: "ጀምር",
    launchDesc: "ሁሉም ነገር ለመኖር ዝግጁ ነው",
    websiteBenefits: "የድረ-ገጽ ጥቅሞች",
    benefitsDescription: "ድረ-ገጽዎ ንግድዎን እንዴት እንደሚያሳድግ",
    increasesSales: "የሽያጭ ጭማሪ",
    salesDescText: "ንግድዎን ያሳድጋል እና ሽያጭዎን ያስፋፋል",
    salesQuote: "ሽያጭ በ12 ወራት ውስጥ በድረ-ገጽ በኩል በ40% ጨምሯል",
    betterAccessibility: "የተሻለ ተደራሽነት",
    accessDesc: "ድረ-ገጽ ያለ የንግድ ሰዓት ገደቦች ነጻነት ይሰጥዎታል",
    accessQuote: "ድረ-ገጽ መኖር ማለት ደንበኞች 24/7 ሊያገኙኝ ይችላሉ ማለት ነው",
    increasesVisibility: "የሚጨምር ታይነት",
    visibilityDesc: "ድረ-ገጽዎ በፍለጋ ውጤቶች ውስጥ እንዲመጡ ያደርግዎታል",
    visibilityQuote: "ድረ-ገጻችን ከፍተኛ የሆነ የጎብኚዎች ብዛት ፈጥሯል",
    customerData: "የደንበኛ ዳታ ትንተና",
    dataDesc: "የደንበኛ ምርጫዎችን እና ባህሪን ለመረዳት ይረዳል",
    dataQuote: "ውሂብ ማሻሻል የምንችልበትን አካባቢዎች ለይቷል",
    fastDelivery: "ፈጣን አቅርቦት",
    getIn3Days: "ድረ-ገጽዎን በ3 ቀናት ውስጥ ያግኙ",
    professionalDesign: "ፕሮፌሽናል ዲዛይን",
    modernBeautiful: "ዘመናዊ እና ውብ የሆነ መልክ",
    mobileResponsive: "ሞባይል ምላሽ ሰጪ",
    smoothOnAllDevices: "በሁሉም መሳሪያዎች ላይ ቀልጣፋ ይሄዳል",
    betterForSearch: "ለፍለጋ የተሻለ",
    preparedForSearchEngines: "ለፍለጋ ማሽኖች ዝግጁ ነው",
    saveTime: "ጊዜ እና ወጪ ቁጠባ",
    timeSaves: "ብዙ ጥያቄዎችን የሚመልስ ድረ-ገጽ የደንበኛ አገልግሎት ጊዜ እና ወጪን ይቆጥባል",
    timeDescText: "ብዙ ጥያቄዎችን የሚመልስ ድረ-ገጽ የደንበኛ አገልግሎት ጊዜ እና ወጪን ይቆጥባል",
    timeQuote: "በድረ-ገጻችን የጥያቄ እና መልስ ክፍል በ45% የደንበኛ አገልግሎት ጥሪዎችን ቀንሰናል",
    professionalAppearance: "ፕሮፌሽናል መልክ",
    credibility: "ተዓማኒነት",
    appearanceDescText:
      "ጥራት ያለው ድረ-ገጽ ለንግድዎ ተዓማኒነትን ይፈጥራል እና ይበልጥ ዋጋ ያለው እንዲመስል ያደርጋል",
    appearanceQuote: "ደንበኞች ድረ-ገጻችን ምክንያት ኩባንያችን ምን ያህል ፕሮፌሽናል እንደሚመስል ጠቅሰዋል",
    businessGrowth: "የንግድ እድገት መሰረት",
    growthDescText: "ጠንካራ የመስመር ላይ መገኘት ለወደፊት እድገት እና ማስፋት መሰረት ይፈጥራል",
    growthQuote: "የመስመር ላይ መገኘታችን ወደ አዳዲስ ገበያዎች እንድናስፋፋ አስችሎናል",
    ourWork: "ስራዎቻችን",
    recentWebsites: "በቅርቡ የተሰሩ ድረ-ገጾች",
    addisRestaurant: "አዲስ ሬስቶራንት",
    restaurantDesc: "ለአዲስ ሬስቶራንት የተሰራ ድረ-ገጽ",
    business: "ንግድ",
    ethioFit: "ኢትዮፊት",
    fitnessDesc: "የአካል ብቃት ማዕከል",
    habeshaBoutique: "ሐበሻ ቡቲክ",
    boutiqueDesc: "የአልባሳት መደብር",
    bunaShop: "ቡና ሾፕ",
    coffeeDesc: "የቡና መደብር",
    testimonials: "የደንበኞች ምስክርነቶች",
    testimonialsDesc: "ደንበኞቻችን ስለ ድረ-ገጾቻቸው ምን እንደሚሉ",
    restaurantTestimonial: "ድረ-ገጹ የሬስቶራንታችንን ሽያጭ በ30% አሳድጓል",
    alemKebede: "አለም ከበደ",
    ownerAddis: "የአዲስ ሬስቶራንት ባለቤት",
    boutiqueTestimonial: "ድረ-ገጹ ምርቶቼን ለማሳየት እና ደንበኞችን ለመሳብ ረድቶኛል",
    tsgstHaile: "ጽጌሰቲ ኃይሌ",
    founderHabesha: "የሐበሻ ቡቲክ መስራች",
    readyToImprove: "ድረ-ገጽዎን ለማሻሻል ዝግጁ ነዎት?",
    getProfessional: "የሙያዊ ድረ-ገጽ ዲዛይን አገልግሎት ያግኙ",
    contactUsToday: "ዛሬ ያግኙን",
    contactUs: "ያግኙን",
    fillForm: "ይህን ቅጽ ይሙሉ",
    fullName: "ሙሉ ስም",
    yourName: "ስምዎ",
    email: "ኢሜይል",
    phoneLabel: "ስልክ ቁጥር",
    serviceWanted: "የሚፈልጉት አገልግሎት",
    selectService: "አገልግሎት ይምረጡ",
    startupSite: "የንግድ ማስጀመሪያ ድረ-ገጽ",
    businessSite: "የንግድ ድረ-ገጽ",
    specialProject: "ልዩ ፕሮጀክት",
    message: "መልዕክት",
    tellUs: "ስለ ፕሮጀክትዎ ይንገሩን",
    sending: "በመላክ ላይ...",
    sendMessage: "መልዕክት ይላኩ",
    professionalSolutions: "ሙያዊ የድረ-ገጽ መፍትሔዎች",
    emailLabel: "ኢሜይል",
    addressLabel: "አድራሻ",
    address: "አዲስ አበባ, ኢትዮጵያ",
    quickLinks: "ፈጣን ማገናኛዎች",
    followUs: "ተከተሉን",
    rightsReserved: "መብቱ በህግ የተጠበቀ ነው",
    salesIncreaseText: "የሽያጭ ጭማሪ",
    salesIncrease: "የሽያጭ ጭማሪ",
    moreAccess: "የተሻለ ተደራሽነት",
    visibilityIncrease: "የሚጨምር ታይነት",
    betterInsights: "የተሻለ ግንዛቤ",
    mobileTraffic: "የሞባይል ትራፊክ",
    mobileFriendlyText: "ሞባይል ተኮር",
    professionalLookText: "ፕሮፌሽናል መልክ",
    growthRateText: "የእድገት መጠን",
  },

  english: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    process: "Process",
    benefits: "Benefits",
    contact: "Contact",
    language: "Language",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",

    hero: {
      title: "Elevate Your Website & Digital Presence",
      subtitle:
        "Grow your business with stunning websites and digital excellence. We take your ideas and deliver quality, reliable, and complete products.",
      ctaButton: "Talk to Us",
      portfolioButton: "View Our Work",
      trustedBy: "Trusted by:",
      imageAlt: "Website design example",
    },

    benefitsSection: {
      title: "How Your Website Can Grow Your Business",
      subtitle: "We're here to help you succeed",

      increasedSales: {
        title: "Increased Sales",
        description:
          "Have a high-quality website and convert your online visitors into paying customers.",
      },
      accessibility: {
        title: "Better Accessibility",
        description:
          "Your website is accessible 24/7, with information always available to your customers.",
      },
      seo: {
        title: "Enhanced Google Visibility",
        description:
          "A search engine optimized website increases visitor count and improves connections.",
      },
      data: {
        title: "Customer Data Analysis",
        description:
          "Understand your website visitors' behavior and make decisions to better modernize your business.",
      },
      timeSaving: {
        title: "Time & Cost Savings",
        description:
          "A website that answers many questions saves customer service time and costs.",
      },
      mobile: {
        title: "Mobile Compatibility",
        description:
          "Our websites are responsive to all devices, looking great on any screen size.",
      },
      professional: {
        title: "Professional Appearance",
        description:
          "A quality website creates credibility for your business and makes it appear more valuable.",
      },
      growth: {
        title: "Business Growth Foundation",
        description:
          "A strong online presence creates a foundation for future growth and expansion.",
      },
    },

    contactForm: {
      title: "Contact Us",
      subtitle: "For any inquiries or price quotes, get in touch with us",
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      service: "Select Service",
      message: "Message",
      send: "Send Message",
      required: "Required",
    },
    contactFormText: "Contact Form",
    ourServices: "Our Services",
    servicesDescription:
      "Website design services tailored to your business needs",
    startupWebsite: "Startup Website",
    birr: "Birr ",
    suitableForSmall: "Suitable for new and small businesses",
    pages: "Pages",
    basicSEO: "Basic Search Engine Optimization",
    socialMedia: "Social Media Integration",
    readyIn3Days: "Ready in 3 Days",
    start: "Start",
    popular: "Popular",
    businessWebsite: "Business Website",
    suitableForGrowing: "Suitable for growing businesses",
    premiumDesign: "Premium Design",
    advancedContactForms: "Advanced Contact Forms",
    enhancedSEO: "Enhanced SEO",
    businessEmail: "Business Email",
    googleMaps: "Google Maps Integration",
    ecommerceStore: "E-commerce Store",
    startSellingOnline: "Start Selling Online",
    productCatalog: "Product Catalog",
    shoppingCartSystem: "Shopping Cart System",
    paymentGateway: "Payment Gateway",
    orderManagement: "Order Management",
    customerAccounts: "Customer Accounts",
    readyIn5Days: "Ready in 5 Days",
    ecommerceSite: "E-commerce Site",
    ourProcess: "Our Process",
    processDescription: "The simple process we use for your website success",
    consultation: "Consultation",
    consultationDesc: "We examine your needs and propose the best solution",
    design: "Design",
    designDesc: "We develop the visual look and feel",
    development: "Development",
    developmentDesc: "The engineering process where we build your site",
    review: "Review",
    reviewDesc: "Detailed inspection and corrections",
    launch: "Launch",
    launchDesc: "Everything is ready to go live",
    websiteBenefits: "Website Benefits",
    benefitsDescription: "How your website can grow your business",
    increasesSales: "Increased Sales",
    salesDescText: "Grows your business and expands your sales",
    salesQuote: "Sales increased by 40% within 12 months through the website",
    betterAccessibility: "Better Accessibility",
    accessDesc:
      "The website gives you freedom without business hours constraints",
    accessQuote: "Having a website means customers can reach me 24/7",
    increasesVisibility: "Increased Visibility",
    visibilityDesc: "Your website makes you rank in search results",
    visibilityQuote: "Our website has generated a high volume of visitors",
    customerData: "Customer Data Analysis",
    dataDesc: "Helps you understand customer preferences and behavior",
    dataQuote: "The data has identified areas we can improve",
    fastDelivery: "Fast Delivery",
    getIn3Days: "Get your website in 3 days",
    professionalDesign: "Professional Design",
    modernBeautiful: "Modern and beautiful appearance",
    mobileResponsive: "Mobile Responsive",
    smoothOnAllDevices: "Runs smoothly on all devices",
    betterForSearch: "Better for Search",
    preparedForSearchEngines: "Prepared for search engines",
    saveTime: "Time & Cost Savings",
    timeSaves:
      "A website that answers many questions saves customer service time and costs",
    timeDescText:
      "A website that answers many questions saves customer service time and costs",
    timeQuote:
      "We've reduced customer service calls by 45% thanks to our website FAQ section",
    professionalAppearance: "Professional Appearance",
    credibility: "Credibility",
    appearanceDescText:
      "A quality website creates credibility for your business and makes it appear more valuable",
    appearanceQuote:
      "Clients have mentioned how professional our company looks because of our website",
    businessGrowth: "Business Growth Foundation",
    growthDescText:
      "A strong online presence creates a foundation for future growth and expansion",
    growthQuote: "Our online presence has enabled us to expand to new markets",
    ourWork: "Our Work",
    recentWebsites: "Recently completed websites",
    addisRestaurant: "Addis Restaurant",
    restaurantDesc: "Website for an Ethiopian restaurant",
    business: "Business",
    ethioFit: "EthioFit",
    fitnessDesc: "Fitness center website",
    habeshaBoutique: "Habesha Boutique",
    boutiqueDesc: "Clothing store website",
    bunaShop: "Buna Coffee Shop",
    coffeeDesc: "Coffee shop website",
    testimonials: "Testimonials",
    testimonialsDesc: "What our clients say about their websites",
    restaurantTestimonial:
      "The website has increased our restaurant's sales by 30%",
    alemKebede: "Alem Kebede",
    ownerAddis: "Owner of Addis Restaurant",
    boutiqueTestimonial:
      "The website has helped me showcase my products and attract customers",
    tsgstHaile: "Tsegist Haile",
    founderHabesha: "Founder of Habesha Boutique",
    readyToImprove: "Ready to improve your website?",
    getProfessional: "Get professional website design services",
    contactUsToday: "Contact Us Today",
    contactUs: "Contact Us",
    fillForm: "Fill out this form",
    fullName: "Full Name",
    yourName: "Your name",
    email: "Email",
    phoneLabel: "Phone Number",
    serviceWanted: "Service Wanted",
    selectService: "Select a Service",
    startupSite: "Startup Website",
    businessSite: "Business Website",
    specialProject: "Special Project",
    message: "Message",
    tellUs: "Tell us about your project",
    sending: "Sending...",
    sendMessage: "Send Message",
    professionalSolutions: "Professional website solutions",
    emailLabel: "Email",
    addressLabel: "Address",
    address: "Addis Ababa, Ethiopia",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    rightsReserved: "All rights reserved",
    salesIncreaseText: "Increased Sales",
    salesIncrease: "Sales Increase",
    moreAccess: "Better Accessibility",
    visibilityIncrease: "Visibility Increase",
    betterInsights: "Better Insights",
    mobileTraffic: "Mobile Traffic",
    mobileFriendlyText: "Mobile Friendly",
    professionalLookText: "Professional Look",
    growthRateText: "Growth Rate",
  },
};

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<"amharic" | "english">("amharic"); // Default language is Amharic
  const [activeTab, setActiveTab] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Get translation based on selected language
  const t = translations[language];

  // Your Telegram bot token (you should store this securely in a real app)
  const TELEGRAM_BOT_TOKEN = "7896894076:AAHvLnbz7WwomCskwN9_go9JvD5Cx-t_ATs";
  const TELEGRAM_CHAT_ID = "5589621167"; // Your personal Telegram chat ID

  // Language preference management
  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language") as
      | "amharic"
      | "english"
      | null;

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language);
  }, [language]);

  // Theme management
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else if (prefersDark) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to the document
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    // Add or remove dark class
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save theme preference
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    console.log("Theme changed:", darkMode ? "dark" : "light"); // Debug logging
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language === "amharic" ? "am" : "en";
  }, [darkMode, language]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    console.log("Toggle theme clicked, new value:", newDarkMode);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const sendToTelegram = async () => {
    const message = `
📞 የአዲስ ድህረ ገጽ ጥያቄ 📞

👤 ስም: ${formData.name}
✉️ ኢሜይል: ${formData.email}
📱 ስልክ: ${formData.phone || "አልተሰጠም"}
🛒 አገልግሎት: ${formData.service || "አልተገለጸም"}

💬 መልዕክት:
${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      const data = await response.json();
      return data.ok;
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const success = await sendToTelegram();

      if (success) {
        setSubmitStatus({
          success: true,
          message: "አመሰግናለሁ! መልዕክትዎ ተልኳል። በቅርብ ጊዜ እናገኛለን።",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: "መልዕክትዎን ለመላክ አልተሳካም። እባክዎን እንደገና ይሞክሩ ወይም በቀጥታ ያግኙን።",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "ስህተት ተከስቷል። እባክዎን ቆይተው ይሞክሩ።",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add this code after the useEffect hooks at the top level
  useEffect(() => {
    const animateMetrics = () => {
      const metrics = document.querySelectorAll(".benefit-metric");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const metric = entry.target;
              const metricFill = metric.querySelector(".metric-fill");
              const dataVisualization = metric.querySelector(
                ".data-visualization"
              );

              if (metricFill) {
                const width = metricFill.getAttribute("data-width");
                if (width) {
                  setTimeout(() => {
                    (metricFill as HTMLElement).style.width = width;
                  }, 300);
                }
              }

              if (dataVisualization) {
                const bars = dataVisualization.querySelectorAll(".data-bar");
                bars.forEach((bar, index) => {
                  const height = bar.getAttribute("data-height");
                  if (height) {
                    setTimeout(() => {
                      (bar as HTMLElement).style.height = height;
                    }, 300 + index * 100);
                  }
                });
              }

              observer.unobserve(metric);
            }
          });
        },
        { threshold: 0.2 }
      );

      metrics.forEach((metric) => {
        observer.observe(metric);
      });
    };

    // Call the animation function after a short delay to ensure DOM is ready
    setTimeout(animateMetrics, 500);
  }, []);

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="container nav-container">
          <div className="logo">
            <h1>WebExpress</h1>
          </div>
          <nav>
            <ul className="nav-menu">
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                  onClick={() => handleTabClick("home")}
                >
                  {t.home}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`nav-link ${
                    activeTab === "services" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("services")}
                >
                  {t.services}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`nav-link ${
                    activeTab === "portfolio" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("portfolio")}
                >
                  {t.portfolio}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className={`nav-link ${
                    activeTab === "process" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("process")}
                >
                  {t.process}
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className={`nav-link ${
                    activeTab === "benefits" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("benefits")}
                >
                  {t.benefits}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn btn-primary"
                >
                  {t.contact}
                </button>
              </li>
              <li>
                <button
                  className="theme-toggle"
                  id="theme-toggle"
                  title={darkMode ? t.lightMode : t.darkMode}
                  aria-label="auto"
                  aria-live="polite"
                  onClick={toggleTheme}
                >
                  <svg
                    className="sun-and-moon"
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <mask className="moon" id="moon-mask">
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="white"
                      />
                      <circle cx="24" cy="10" r="6" fill="black" />
                    </mask>
                    <circle
                      className="sun"
                      cx="12"
                      cy="12"
                      r="6"
                      mask="url(#moon-mask)"
                      fill="currentColor"
                    />
                    <g className="sun-beams" stroke="currentColor">
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  className="language-toggle"
                  title={t.language}
                  aria-label={t.language}
                  onClick={() =>
                    setLanguage(language === "amharic" ? "english" : "amharic")
                  }
                >
                  {language === "amharic" ? "EN" : "አማ"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t.hero.title}</h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
              <div className="button-group">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn btn-primary"
                >
                  {t.hero.ctaButton}
                </button>
                <a href="#portfolio" className="btn btn-outline">
                  {t.hero.portfolioButton}
                </a>
              </div>
              <div className="trusted-by">
                <p>{t.hero.trustedBy}</p>
                <div className="client-logos">
                  <div className="client-logo insa-badge">
                    <FaShieldAlt className="badge-icon" />{" "}
                    <span>INSA Certified</span>
                  </div>
                  <div className="client-logo">Google</div>
                  <div className="client-logo">Facebook</div>
                  <div className="client-logo">Yegara Host</div>
                </div>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="laptop-model">
                  <div className="laptop-base">
                    <div className="laptop-keyboard"></div>
                    <div className="laptop-trackpad"></div>
                  </div>
                  <div className="laptop-screen">
                    <div className="laptop-display">
                      <div className="code-animation">
                        <FaCode className="code-icon" />
                        <div className="typing-code">
                          <span className="code-line">
                            &lt;div className="website"&gt;
                          </span>
                          <span className="code-line">
                            {" "}
                            &lt;header&gt;Your Business&lt;/header&gt;
                          </span>
                          <span className="code-line">
                            {" "}
                            &lt;main&gt;Amazing Content&lt;/main&gt;
                          </span>
                          <span className="code-line">&lt;/div&gt;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">{t.fastDelivery}</h3>
              <p className="feature-desc">{t.getIn3Days}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3 className="feature-title">{t.professionalDesign}</h3>
              <p className="feature-desc">{t.modernBeautiful}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">{t.mobileResponsive}</h3>
              <p className="feature-desc">{t.smoothOnAllDevices}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">{t.betterForSearch}</h3>
              <p className="feature-desc">{t.preparedForSearchEngines}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">{t.ourServices}</h2>
          <p className="section-subtitle">{t.servicesDescription}</p>

          <div className="services-grid">
            {/* Startup Website Card */}
            <div className="service-card">
              <div className="service-header">
                <h3 className="service-title">{t.startupWebsite}</h3>
                <p className="service-price">{t.birr}4,000</p>
              </div>
              <div className="service-content">
                <p className="service-desc">{t.suitableForSmall}</p>
                <ul className="service-features">
                  <li className="service-feature">{t.pages} 3-5</li>
                  <li className="service-feature">{t.contactFormText}</li>
                  <li className="service-feature">{t.basicSEO}</li>
                  <li className="service-feature">{t.socialMedia}</li>
                  <li className="service-feature">{t.readyIn3Days}</li>
                </ul>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn btn-primary service-button"
                >
                  {t.start}
                </button>
              </div>
            </div>

            {/* Business Website Card */}
            <div className="service-card featured">
              <div className="service-badge">{t.popular}</div>
              <div className="service-header">
                <h3 className="service-title">{t.businessWebsite}</h3>
                <p className="service-price">{t.birr}6,000</p>
              </div>
              <div className="service-content">
                <p className="service-desc">{t.suitableForGrowing}</p>
                <ul className="service-features">
                  <li className="service-feature">5-8 {t.pages}</li>
                  <li className="service-feature">{t.premiumDesign}</li>
                  <li className="service-feature">{t.advancedContactForms}</li>
                  <li className="service-feature">{t.enhancedSEO}</li>
                  <li className="service-feature">{t.businessEmail}</li>
                  <li className="service-feature">{t.googleMaps}</li>
                  <li className="service-feature">{t.readyIn5Days}</li>
                </ul>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn btn-primary service-button"
                >
                  {t.start}
                </button>
              </div>
            </div>

            {/* E-commerce Website Card */}
            <div className="service-card">
              <div className="service-header">
                <h3 className="service-title">{t.ecommerceSite}</h3>
                <p className="service-price">{t.birr}10,000</p>
              </div>
              <div className="service-content">
                <p className="service-desc">{t.startSellingOnline}</p>
                <ul className="service-features">
                  <li className="service-feature">{t.productCatalog}</li>
                  <li className="service-feature">{t.shoppingCartSystem}</li>
                  <li className="service-feature">{t.paymentGateway}</li>
                  <li className="service-feature">{t.orderManagement}</li>
                  <li className="service-feature">{t.customerAccounts}</li>
                  <li className="service-feature">{t.readyIn5Days}</li>
                </ul>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn btn-primary service-button"
                >
                  {t.start}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="section-header">
          <h2>{t.ourProcess}</h2>
          <p>{t.processDescription}</p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>{t.consultation}</h3>
            <p>{t.consultationDesc}</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>{t.design}</h3>
            <p>{t.designDesc}</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>{t.development}</h3>
            <p>{t.developmentDesc}</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>{t.review}</h3>
            <p>{t.reviewDesc}</p>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <h3>{t.launch}</h3>
            <p>{t.launchDesc}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="benefits">
        <div className="section-header">
          <h2>{t.websiteBenefits}</h2>
          <p>{t.benefitsDescription}</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <FaChartLine />
            </div>
            <h3>{t.increasesSales}</h3>
            <p>
              Our custom websites are strategically designed to convert visitors
              into customers, with clear calls-to-action and optimized user
              journeys that can significantly boost your sales.
            </p>
            <div className="benefit-metric">
              <div className="metric-bar">
                <div
                  className="metric-fill"
                  data-width="85%"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <div className="metric-value">85% {t.salesIncrease}</div>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FaUsers />
            </div>
            <h3>{t.betterAccessibility}</h3>
            <p>
              We build websites that follow accessibility best practices,
              ensuring your site is usable by everyone, including people with
              disabilities, expanding your potential customer base.
            </p>
            <div className="benefit-metric">
              <div className="search-ranking">
                <div className="ranking-item">3</div>
                <div className="ranking-item">2</div>
                <div className="ranking-item top">1</div>
              </div>
              <div className="metric-value">Top search results</div>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FaSearch />
            </div>
            <h3>{t.increasesVisibility}</h3>
            <p>
              Our SEO-optimized websites help your business rank higher in
              search results, making it easier for potential customers to
              discover your products and services online.
            </p>
            <div className="benefit-metric">
              <div className="data-visualization">
                <div
                  className="data-bar"
                  data-height="30%"
                  style={{ height: "0%" }}
                ></div>
                <div
                  className="data-bar"
                  data-height="40%"
                  style={{ height: "0%" }}
                ></div>
                <div
                  className="data-bar"
                  data-height="60%"
                  style={{ height: "0%" }}
                ></div>
                <div
                  className="data-bar"
                  data-height="70%"
                  style={{ height: "0%" }}
                ></div>
                <div
                  className="data-bar"
                  data-height="90%"
                  style={{ height: "0%" }}
                ></div>
              </div>
              <div className="metric-value">90% {t.visibilityIncrease}</div>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FaChartPie />
            </div>
            <h3>{t.customerData}</h3>
            <p>
              Gain valuable insights with integrated analytics tools that help
              you understand customer behavior, preferences, and interaction
              patterns on your website.
            </p>
            <div className="benefit-metric">
              <div className="metric-bar">
                <div
                  className="metric-fill"
                  data-width="78%"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <div className="metric-value">78% {t.betterInsights}</div>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FaClock />
            </div>
            <h3>{t.saveTime}</h3>
            <p>
              With our efficient development process and easy-to-use content
              management systems, you'll save valuable time that can be
              reinvested in growing your core business.
            </p>
            <div className="benefit-metric">
              <div className="trust-indicator">
                <span className="trust-star active">★</span>
                <span className="trust-star active">★</span>
                <span className="trust-star active">★</span>
                <span className="trust-star active">★</span>
                <span className="trust-star active">★</span>
                <span className="trust-text">5.0 rating</span>
              </div>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FaMobileAlt />
            </div>
            <h3>{t.mobileFriendlyText}</h3>
            <p>
              Our responsive websites automatically adapt to any device size,
              providing an optimal viewing experience on smartphones, tablets,
              and desktops, crucial in today's mobile-first world.
            </p>
            <div className="benefit-metric">
              <div className="metric-bar">
                <div
                  className="metric-fill"
                  data-width="65%"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <div className="metric-value">65% {t.mobileTraffic}</div>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FaPaintBrush />
            </div>
            <h3>{t.professionalLookText}</h3>
            <p>
              A professionally designed website builds trust with your visitors
              and reflects your brand's values and identity through thoughtful
              design, typography, and imagery.
            </p>
            <div className="benefit-metric">
              <div className="growth-chart">
                <div className="growth-line"></div>
                <div className="growth-value">+124%</div>
              </div>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <FaRocket />
            </div>
            <h3>{t.businessGrowth}</h3>
            <p>
              A strategically designed website acts as a powerful business tool
              that helps you reach new markets, engage with customers, and
              ultimately grow your business.
            </p>
            <div className="benefit-metric">
              <div className="metric-bar">
                <div
                  className="metric-fill"
                  data-width="92%"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <div className="metric-value">92% {t.growthRateText}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="section-header">
          <h2>{t.ourWork}</h2>
          <p>{t.recentWebsites}</p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>{t.addisRestaurant}</h3>
              <p>{t.restaurantDesc}</p>
              <span className="portfolio-tag">{t.business}</span>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>{t.ethioFit}</h3>
              <p>{t.fitnessDesc}</p>
              <span className="portfolio-tag">{t.business}</span>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>{t.habeshaBoutique}</h3>
              <p>{t.boutiqueDesc}</p>
              <span className="portfolio-tag">{t.business}</span>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img placeholder"></div>
            <div className="portfolio-content">
              <h3>{t.bunaShop}</h3>
              <p>{t.coffeeDesc}</p>
              <span className="portfolio-tag">{t.business}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-header">
          <h2>{t.testimonials}</h2>
          <p>{t.testimonialsDesc}</p>
        </div>
        <div className="testimonials-container">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>{t.restaurantTestimonial}</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar placeholder-avatar"></div>
              <div className="author-info">
                <h4>{t.alemKebede}</h4>
                <p>{t.ownerAddis}</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>{t.boutiqueTestimonial}</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar placeholder-avatar"></div>
              <div className="author-info">
                <h4>{t.tsgstHaile}</h4>
                <p>{t.founderHabesha}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>{t.readyToImprove}</h2>
        <p>{t.getProfessional}</p>
        <button
          className="cta-button primary"
          onClick={() => setIsContactOpen(true)}
        >
          {t.contactUsToday}
        </button>
      </section>

      {isContactOpen && (
        <div className="contact-modal">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setIsContactOpen(false)}
            >
              ×
            </button>
            <h2>{t.contactUs}</h2>
            <p className="modal-subtitle">{t.fillForm}</p>

            {submitStatus && (
              <div
                className={`submit-status ${
                  submitStatus.success ? "success" : "error"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.fullName}</label>
                <input
                  type="text"
                  id="name"
                  placeholder={t.yourName}
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t.yourName}
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t.phoneLabel}</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+251 91 234 5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">{t.serviceWanted}</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">{t.selectService}</option>
                  <option value={t.startupSite}>{t.startupSite}</option>
                  <option value={t.businessSite}>{t.businessSite}</option>
                  <option value={t.ecommerceSite}>{t.ecommerceSite}</option>
                  <option value="ልዩ ፕሮጀክት">{t.specialProject}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t.tellUs}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.sending : t.sendMessage}
              </button>
            </form>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>WebExpress</h3>
            <p>{t.professionalSolutions}</p>
            <p className="powered-by">
              Powered by{" "}
              <a
                href="https://startupagile.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                startupagile.ai
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h3>{t.emailLabel}</h3>
            <p>
              <strong>{t.emailLabel}:</strong> Kayo@startupagile.app
              Mimetechnology1218@gmail.com
            </p>

            <p>
              <strong>{t.phoneLabel}:</strong> +251933894492 +251961145152
            </p>
            <p></p>
            <p>
              <strong>{t.addressLabel}:</strong> {t.address}
            </p>
          </div>
          <div className="footer-section">
            <h3>{t.quickLinks}</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">{t.ourServices}</a>
              </li>
              <li>
                <a href="#portfolio">{t.ourWork}</a>
              </li>
              <li>
                <a href="#process">{t.ourProcess}</a>
              </li>
              <li>
                <a href="#benefits">{t.websiteBenefits}</a>
              </li>
              <li>
                <a href="#" onClick={() => setIsContactOpen(true)}>
                  {t.contactUs}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t.followUs}</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} WebExpress. {t.rightsReserved}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
