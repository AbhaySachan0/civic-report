import { Camera, BarChart3, Map, Trophy, MapPin, Clock, Users, Zap } from "lucide-react";

export const hi = {
  sectionTag: "डिजिटल सुविधाएं",
  sectionHeading: "नागरिक सहभागिता के लिए शक्तिशाली सुविधाएं",
  sectionDescription:
    "हमारा व्यापक प्लेटफॉर्म नागरिक समस्याओं को कुशलता से रिपोर्ट करने, ट्रैक करने और हल करने के लिए आवश्यक सब कुछ प्रदान करता है।",

  features: [
    {
      icon: Camera,
      title: "समस्या रिपोर्ट करें",
      description:
        "फोटो खींचें, अपना स्थान जोड़ें, और हमारे उपयोग में आसान रिपोर्टिंग सिस्टम के साथ नागरिक समस्याओं को तुरंत सबमिट करें।",
      color: "bg-orange-500",
      gradient: "from-orange-50 to-orange-100",
    },
    {
      icon: BarChart3,
      title: "स्थिति ट्रैक करें",
      description:
        "अपनी रिपोर्ट पर लाइव अपडेट प्राप्त करें और वास्तविक समय में प्रगति देखें जब अधिकारी समस्याओं को हल करने के लिए काम करते हैं।",
      color: "bg-green-500",
      gradient: "from-green-50 to-green-100",
    },
    {
      icon: Map,
      title: "हीटमैप्स",
      description:
        "अपने क्षेत्र में समस्या हॉटस्पॉट खोजें और समुदायिक आवश्यकताओं को प्राथमिकता देने में मदद के लिए पैटर्न की पहचान करें।",
      color: "bg-blue-600",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      icon: Trophy,
      title: "लीडरबोर्ड",
      description:
        "शीर्ष योगदानकर्ताओं को पहचानें और सबसे बड़ा प्रभाव डालने वाले समुदायिक सदस्यों का जश्न मनाएं।",
      color: "bg-purple-600",
      gradient: "from-purple-50 to-purple-100",
    },
  ],

  additionalTitle: "अतिरिक्त सुविधाएं",
  additionalDescription: "प्रभावी नागरिक सहभागिता के लिए आवश्यक सब कुछ",
  additionalFeatures: [
    { icon: MapPin, text: "GPS स्थान ट्रैकिंग" },
    { icon: Clock, text: "रियल-टाइम नोटिफिकेशन" },
    { icon: Users, text: "सामुदायिक सहयोग" },
    { icon: Zap, text: "तत्काल सबमिशन" },
  ],
  footer: {
    government: "भारत सरकार",
    governmentSub: "Government of India (English)",
    description: "डिजिटल इंडिया पहल के तहत नागरिक सेवाओं को बेहतर बनाने के लिए प्रतिबद्ध",

    contactTitle: "संपर्क जानकारी",
    contactPhone: "1800-XXX-XXXX",
    contactEmail: "support@gov.in",
    contactAddress: "नई दिल्ली, भारत",

    quickLinksTitle: "त्वरित लिंक",
    quickLinks: ["हमारे बारे में", "संपर्क करें", "नियम और शर्तें", "गोपनीयता नीति"],

    servicesTitle: "सेवाएं",
    services: ["शिकायत दर्ज करें", "स्थिति जांचें", "सामुदायिक मंच", "मोबाइल ऐप"],

    socialMediaTitle: "सोशल मीडिया",

    bottomLeft: "© 2025 भारत सरकार। सभी अधिकार सुरक्षित।",
    bottomRight: "सामुदायिक पारदर्शिता प्रणाली द्वारा संचालित | डिजिटल इंडिया पहल",
  },
  hero: {
    badge: "डिजिटल इंडिया पहल",
    heading: {
      part1: "देखें।",
      part2: "रिपोर्ट करें।",
      part3: "समाधान पाएं।",
    },
    description: "नागरिकों को सशक्त बनाना और नागरिक समस्याओं का समाधान करना। हजारों समुदायिक सदस्यों के साथ जुड़ें जो वास्तविक बदलाव ला रहे हैं।",
    fileComplaint: "शिकायत दर्ज करें",
    viewComplaints: "शिकायतें देखें",
    notifications: [
      "स्ट्रीट लाइट ठीक - राजपथ",
      "गड्ढा रिपोर्ट - मुख्य मार्ग",
      "कचरा संग्रह - केंद्रीय क्षेत्र"
    ],
    cityElements: ["यातायात", "पार्क", "सुविधाएं"]
  },

  stats: {
    badge: "राष्ट्रीय प्रभाव",
    heading: "वास्तविक प्रभाव बना रहे हैं",
    description: "हमारे समुदायों को बेहतर बनाने के लिए मिलकर काम कर रहे हजारों नागरिकों से जुड़ें",
    counters: [
      { end: 12547, label: "शिकायतें दर्ज" },
      { end: 9823, label: "समस्याएं हल" },
      { end: 3456, label: "सक्रिय नागरिक" }
    ]
  },

  header: {
    logoTitle: "भारत सरकार",
    logoSubtitle: "भारत सरकार",
    nav: {
      home: "होम",
      fileComplaint: "शिकायत दर्ज करें",
      community: "समुदाय",
      myComplaints: "मेरी शिकायतें",
    },
    actions: {
      profile: "प्रोफ़ाइल",
      logout: "लॉग आउट",
      login: "लॉगिन",
    },
    langToggle: "EN", // shown when current language is Hindi
  },

  loginPage: {
    nav: { home: "मुख पृष्ठ", fileComplaint: "शिकायत दर्ज करें", community: "समुदाय", myComplaints: "मेरी शिकायतें", login: "लॉगिन" },
    langToggle: "EN",
    headerTitle: "स्वागत है",
    headerSubtitle: "जारी रखने के लिए लॉगिन करें",
    admin: { title: "व्यवस्थापक लॉगिन", subtitle: "शिकायतों का प्रबंधन करें" },
    customer: { title: "ग्राहक लॉगिन", subtitle: "शिकायत दर्ज करें या ट्रैक करें" },
    footer: { help: "सहायता चाहिए?", contact: "संपर्क करें", registerText: "नया उपयोगकर्ता?", registerLink: "रजिस्टर करें" }
  },

  common: {
    digitalIndia: "डिजिटल इंडिया पहल",
    see: "देखें।",
    report: "रिपोर्ट करें।",
    resolve: "समाधान पाएं।",
    submitComplaint: "शिकायत दर्ज करें",
    submitting: "भेजा जा रहा है...",
    fileAnother: "नई शिकायत दर्ज करें",
    trackMyComplaint: "मेरी शिकायत ट्रैक करें",
  },
  complaint: {
    title: "शिकायत शीर्षक *",
    titlePlaceholder: "संक्षेप में समस्या का वर्णन करें...",
    category: "श्रेणी *",
    selectCategory: "कृपया श्रेणी चुनें...",
    description: "विवरण *",
    descriptionPlaceholder: "समस्या के बारे में विस्तृत जानकारी दें...",
    categories: [
      "सड़क और बुनियादी ढांचा",
      "स्ट्रीट लाइटिंग",
      "कचरा संग्रह",
      "जल आपूर्ति",
      "यातायात समस्याएँ",
      "सार्वजनिक सुरक्षा",
      "पार्क और मनोरंजन",
      "ध्वनि प्रदूषण",
      "अन्य",
    ],
    photoEvidence: "फोटो प्रमाण",
    clickPicture: "फोटो खींचें",
    uploadPhoto: "फोटो अपलोड करें",
    removePhoto: "फोटो हटाएँ",
    photoLimit: "10MB तक",
    location: "स्थान *",
    useCurrentLocation: "वर्तमान स्थान का उपयोग करें",
    selectOnMap: "मानचित्र पर चुनें",
    transparencyNote: "आपकी शिकायत को पूर्ण पारदर्शिता के साथ ट्रैक किया जाएगा।",
    successTitle: "शिकायत सफलतापूर्वक दर्ज की गई!",
    successMessage:
      "आपकी नागरिक समस्या दर्ज कर ली गई है और संबंधित विभाग द्वारा समीक्षा की जाएगी।",
    complaintId: "आपकी शिकायत आईडी",
  },
};
