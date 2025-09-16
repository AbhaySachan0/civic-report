import React from 'react';
import { Camera, Eye, ArrowRight, MapPin } from 'lucide-react';

export default function HeroSection({ language }: { language: 'hi' | 'en' }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-orange-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 pb-20 overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-800 to-purple-600 rounded-full"></div>
      </div>
      
      {/* Ashoka Chakra Pattern */}
      <div className="absolute top-20 right-10 opacity-10">
        <div className="w-48 h-48 border-4 border-blue-800 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-blue-600 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-800 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {language === 'hi' ? 'डिजिटल इंडिया पहल' : 'Digital India Initiative'}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              <span className="text-blue-800 dark:text-blue-400">
                {language === 'hi' ? 'देखें।' : 'See.'}
              </span>{' '}
              <span className="text-orange-600 dark:text-orange-400">
                {language === 'hi' ? 'रिपोर्ट करें।' : 'Report.'}
              </span>{' '}
              <span className="text-green-600 dark:text-green-400">
                {language === 'hi' ? 'समाधान पाएं।' : 'Resolve.'}
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {language === 'hi'
                ? 'नागरिकों को सशक्त बनाना और नागरिक समस्याओं का समाधान करना। हजारों समुदायिक सदस्यों के साथ जुड़ें जो वास्तविक बदलाव ला रहे हैं।'
                : 'Empowering citizens and resolving civic issues. Join thousands of community members driving real change.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                <Camera className="w-5 h-5 mr-2" />
                {language === 'hi' ? 'शिकायत दर्ज करें' : 'File Complaint'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" />
                {language === 'hi' ? 'शिकायतें देखें' : 'View Complaints'}
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border-l-4 border-orange-500 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Smart City Illustration */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-lg border-l-4 border-green-500">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'hi' ? 'स्ट्रीट लाइट ठीक - राजपथ' : 'Street Light Fixed - Rajpath'}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 rounded-lg border-l-4 border-orange-500">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'hi' ? 'गड्ढा रिपोर्ट - मुख्य मार्ग' : 'Pothole Report - Main Road'}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg border-l-4 border-blue-500">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'hi' ? 'कचरा संग्रह - केंद्रीय क्षेत्र' : 'Garbage Collection - Central Zone'}
                  </span>
                </div>

                {/* City Elements */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 rounded-lg text-center border border-blue-300 dark:border-blue-700">
                    <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {language === 'hi' ? 'यातायात' : 'Traffic'}
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-4 rounded-lg text-center border border-green-300 dark:border-green-700">
                    <div className="w-8 h-8 bg-green-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {language === 'hi' ? 'पार्क' : 'Park'}
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 p-4 rounded-lg text-center border border-orange-300 dark:border-orange-700">
                    <div className="w-8 h-8 bg-orange-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {language === 'hi' ? 'सुविधाएं' : 'Facilities'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
