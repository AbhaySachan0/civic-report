// import React from 'react';
import { Camera, BarChart3, Map, Trophy, MapPin, Clock, Users, Zap } from 'lucide-react';

interface FeaturesSectionProps {
  language: 'hi' | 'en';
}

const featuresData = {
  hi: [
    { icon: Camera, title: 'समस्या रिपोर्ट करें', description: 'फोटो खींचें, अपना स्थान जोड़ें, और हमारे उपयोग में आसान रिपोर्टिंग सिस्टम के साथ नागरिक समस्याओं को तुरंत सबमिट करें।', color: 'bg-orange-500', gradient: 'from-orange-50 to-orange-100' },
    { icon: BarChart3, title: 'स्थिति ट्रैक करें', description: 'अपनी रिपोर्ट पर लाइव अपडेट प्राप्त करें और वास्तविक समय में प्रगति देखें जब अधिकारी समस्याओं को हल करने के लिए काम करते हैं।', color: 'bg-green-500', gradient: 'from-green-50 to-green-100' },
    { icon: Map, title: 'हीटमैप्स', description: 'अपने क्षेत्र में समस्या हॉटस्पॉट खोजें और समुदायिक आवश्यकताओं को प्राथमिकता देने में मदद के लिए पैटर्न की पहचान करें।', color: 'bg-blue-600', gradient: 'from-blue-50 to-blue-100' },
    { icon: Trophy, title: 'लीडरबोर्ड', description: 'शीर्ष योगदानकर्ताओं को पहचानें और सबसे बड़ा प्रभाव डालने वाले समुदायिक सदस्यों का जश्न मनाएं।', color: 'bg-purple-600', gradient: 'from-purple-50 to-purple-100' }
  ],
  en: [
    { icon: Camera, title: 'Report Issues', description: 'Capture a photo, add your location, and submit citizen issues instantly with our easy-to-use reporting system.', color: 'bg-orange-500', gradient: 'from-orange-50 to-orange-100' },
    { icon: BarChart3, title: 'Track Status', description: 'Receive live updates on your report and see progress in real-time as officials work to resolve issues.', color: 'bg-green-500', gradient: 'from-green-50 to-green-100' },
    { icon: Map, title: 'Heatmaps', description: 'Discover problem hotspots in your area and help prioritize community needs by identifying patterns.', color: 'bg-blue-600', gradient: 'from-blue-50 to-blue-100' },
    { icon: Trophy, title: 'Leaderboard', description: 'Recognize top contributors and celebrate community members making the biggest impact.', color: 'bg-purple-600', gradient: 'from-purple-50 to-purple-100' }
  ]
};

const additionalFeaturesData = {
  hi: [
    { icon: MapPin, text: 'GPS स्थान ट्रैकिंग' },
    { icon: Clock, text: 'रियल-टाइम नोटिफिकेशन' },
    { icon: Users, text: 'सामुदायिक सहयोग' },
    { icon: Zap, text: 'तत्काल सबमिशन' }
  ],
  en: [
    { icon: MapPin, text: 'GPS Location Tracking' },
    { icon: Clock, text: 'Real-time Notifications' },
    { icon: Users, text: 'Community Collaboration' },
    { icon: Zap, text: 'Instant Submission' }
  ]
};

export default function FeaturesSection({ language }: FeaturesSectionProps) {
  const features = featuresData[language];
  const additionalFeatures = additionalFeaturesData[language];

  return (
    <section className="py-20 relative transition-colors duration-500 bg-white dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {language === 'hi' ? 'डिजिटल सुविधाएं' : 'Digital Features'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === 'hi' ? 'नागरिक सहभागिता के लिए शक्तिशाली सुविधाएं' : 'Powerful Features for Citizen Engagement'}
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {language === 'hi'
              ? 'हमारा व्यापक प्लेटफॉर्म नागरिक समस्याओं को कुशलता से रिपोर्ट करने, ट्रैक करने और हल करने के लिए आवश्यक सब कुछ प्रदान करता है।'
              : 'Our comprehensive platform provides everything needed to efficiently report, track, and resolve citizen issues.'}
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-300 hover:-translate-y-2"
            >
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-200 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">{feature.description}</p>
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} dark:from-gray-800 dark:to-gray-900 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="rounded-3xl p-8 sm:p-12 border 
          bg-gradient-to-r from-blue-50 to-orange-50 
          dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 
          border-orange-200 dark:border-gray-700 transition-colors duration-500">
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              {language === 'hi' ? 'अतिरिक्त सुविधाएं' : 'Additional Features'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {language === 'hi' ? 'प्रभावी नागरिक सहभागिता के लिए आवश्यक सब कुछ' : 'Everything needed for effective citizen engagement'}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-3 
                  bg-white dark:bg-gray-700 
                  rounded-xl p-4 shadow-sm hover:shadow-md 
                  transition-shadow duration-200 
                  border-l-4 border-orange-300 dark:border-gray-600"
              >
                <div className="w-10 h-10 
                  bg-gradient-to-br from-orange-100 to-orange-200 
                  dark:from-orange-700 dark:to-orange-800 
                  rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-orange-600" />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
