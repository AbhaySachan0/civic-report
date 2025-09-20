// import React from "react";
import { translations, SupportedLang } from "../language";

interface FeaturesSectionProps {
  language: SupportedLang;
}

export default function FeaturesSection({ language }: FeaturesSectionProps) {
  const t = translations[language];

  return (
    <section className="py-20 relative transition-colors duration-500 bg-white dark:bg-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {t.sectionTag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.sectionHeading}
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            {t.sectionDescription}
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-300 hover:-translate-y-2"
            >
              <div
                className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-200 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} dark:from-gray-800 dark:to-gray-900 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div
          className="rounded-3xl p-8 sm:p-12 border 
          bg-gradient-to-r from-blue-50 to-orange-50 
          dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 
          border-orange-200 dark:border-gray-700 transition-colors duration-500"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              {t.additionalTitle}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t.additionalDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.additionalFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 
                  bg-white dark:bg-gray-700 
                  rounded-xl p-4 shadow-sm hover:shadow-md 
                  transition-shadow duration-200 
                  border-l-4 border-orange-300 dark:border-gray-600"
              >
                <div
                  className="w-10 h-10 
                  bg-gradient-to-br from-orange-100 to-orange-200 
                  dark:from-orange-700 dark:to-orange-800 
                  rounded-lg flex items-center justify-center flex-shrink-0"
                >
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
