import { Camera, Eye, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { translations, SupportedLang } from "../../language";

interface HeroSectionProps {
  language: SupportedLang;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language].hero;

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
                {t.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              <span className="text-blue-800 dark:text-blue-400">{t.heading.part1}</span>{" "}
              <span className="text-orange-600 dark:text-orange-400">{t.heading.part2}</span>{" "}
              <span className="text-green-600 dark:text-green-400">{t.heading.part3}</span>
            </h1>

            <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/file-complaint">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <Camera className="w-5 h-5 mr-2" />
                  {t.fileComplaint}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>

              <button className="group bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" />
                {t.viewComplaints}
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border-l-4 border-orange-500 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                {t.notifications.map((note, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center space-x-4 p-4 rounded-lg border-l-4 ${
                      idx === 0 ? "from-green-50 to-blue-50 border-green-500 dark:from-green-900 dark:to-blue-900" :
                      idx === 1 ? "from-orange-50 to-red-50 border-orange-500 dark:from-orange-900 dark:to-red-900" :
                      "from-blue-50 to-purple-50 border-blue-500 dark:from-blue-900 dark:to-purple-900"
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full animate-pulse ${
                      idx === 0 ? "bg-green-500" : idx === 1 ? "bg-orange-500" : "bg-blue-500"
                    }`}></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{note}</span>
                  </div>
                ))}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  {t.cityElements.map((el, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg text-center border ${
                        idx === 0 ? "from-blue-100 to-blue-200 border-blue-300 dark:from-blue-900 dark:to-blue-800 dark:border-blue-700" :
                        idx === 1 ? "from-green-100 to-green-200 border-green-300 dark:from-green-900 dark:to-green-800 dark:border-green-700" :
                        "from-orange-100 to-orange-200 border-orange-300 dark:from-orange-900 dark:to-orange-800 dark:border-orange-700"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                          idx === 0 ? "bg-blue-600" : idx === 1 ? "bg-green-600" : "bg-orange-600"
                        }`}
                      >
                        {idx === 0 && <MapPin className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">{el}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
