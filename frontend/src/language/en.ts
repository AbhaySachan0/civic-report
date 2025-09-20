import { Camera, BarChart3, Map, Trophy, MapPin, Clock, Users, Zap } from "lucide-react";

export const en = {
  sectionTag: "Digital Features",
  sectionHeading: "Powerful Features for Citizen Engagement",
  sectionDescription:
    "Our comprehensive platform provides everything needed to efficiently report, track, and resolve citizen issues.",

  features: [
    {
      icon: Camera,
      title: "Report Issues",
      description:
        "Capture a photo, add your location, and submit citizen issues instantly with our easy-to-use reporting system.",
      color: "bg-orange-500",
      gradient: "from-orange-50 to-orange-100",
    },
    {
      icon: BarChart3,
      title: "Track Status",
      description:
        "Receive live updates on your report and see progress in real-time as officials work to resolve issues.",
      color: "bg-green-500",
      gradient: "from-green-50 to-green-100",
    },
    {
      icon: Map,
      title: "Heatmaps",
      description:
        "Discover problem hotspots in your area and help prioritize community needs by identifying patterns.",
      color: "bg-blue-600",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      icon: Trophy,
      title: "Leaderboard",
      description:
        "Recognize top contributors and celebrate community members making the biggest impact.",
      color: "bg-purple-600",
      gradient: "from-purple-50 to-purple-100",
    },
  ],

  additionalTitle: "Additional Features",
  additionalDescription: "Everything needed for effective citizen engagement",
  additionalFeatures: [
    { icon: MapPin, text: "GPS Location Tracking" },
    { icon: Clock, text: "Real-time Notifications" },
    { icon: Users, text: "Community Collaboration" },
    { icon: Zap, text: "Instant Submission" },
  ],
  footer: {
    government: "Government of India",
    governmentSub: "भारत सरकार (Hindi)",
    description: "Committed to improving citizen services under the Digital India initiative",

    contactTitle: "Contact Information",
    contactPhone: "1800-XXX-XXXX",
    contactEmail: "support@gov.in",
    contactAddress: "New Delhi, India",

    quickLinksTitle: "Quick Links",
    quickLinks: ["About Us", "Contact", "Terms & Conditions", "Privacy Policy"],

    servicesTitle: "Services",
    services: ["File Complaint", "Check Status", "Community Forum", "Mobile App"],

    socialMediaTitle: "Social Media",

    bottomLeft: "© 2025 Government of India. All rights reserved.",
    bottomRight: "Powered by Community Transparency System | Digital India Initiative",
  },
  hero: {
    badge: "Digital India Initiative",
    heading: {
      part1: "See.",
      part2: "Report.",
      part3: "Resolve.",
    },
    description: "Empowering citizens and resolving civic issues. Join thousands of community members driving real change.",
    fileComplaint: "File Complaint",
    viewComplaints: "View Complaints",
    notifications: [
      "Street Light Fixed - Rajpath",
      "Pothole Report - Main Road",
      "Garbage Collection - Central Zone"
    ],
    cityElements: ["Traffic", "Park", "Facilities"]
  },

  stats: {
    badge: "National Impact",
    heading: "Creating Real Impact",
    description: "Join thousands of citizens working together to improve our communities.",
    counters: [
      { end: 12547, label: "Complaints Filed" },
      { end: 9823, label: "Issues Resolved" },
      { end: 3456, label: "Active Citizens" }
    ]
  },

  header: {
    logoTitle: "Government of India",
    logoSubtitle: "Govt. of India",
    nav: {
      home: "Home",
      fileComplaint: "File Complaint",
      community: "Community",
      myComplaints: "My Complaints",
    },
    actions: {
      profile: "Profile",
      logout: "Logout",
      login: "Login",
    },
    langToggle: "हिं", // shown when current language is English
  },

  loginPage: {
    nav: { home: "Home", fileComplaint: "File Complaint", community: "Community", myComplaints: "My Complaints", login: "Login" },
    langToggle: "HI",
    headerTitle: "Welcome",
    headerSubtitle: "Login to continue",
    admin: { title: "Admin Login", subtitle: "Manage complaints" },
    customer: { title: "Customer Login", subtitle: "File or track complaints" },
    footer: { help: "Need help?", contact: "Contact us", registerText: "New user?", registerLink: "Register" }
  }
  
};
