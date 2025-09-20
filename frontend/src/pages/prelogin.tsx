// import React from "react";
import { Shield, Users, Globe, Moon } from "lucide-react";
import { translations, SupportedLang } from "../language";
import { useNavigate } from "react-router-dom";

function PreLogin({
  language,
}: {
  language: SupportedLang;
  setLanguage: (lang: SupportedLang) => void;
}) {
  const t = translations[language].loginPage;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header Icon and Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t.headerTitle}
              </h2>
              <p className="text-gray-600">{t.headerSubtitle}</p>
            </div>

            {/* Login Options */}
            <div className="space-y-4">
              {/* Admin Login - inactive for now */}
              <button className="w-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Shield className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {t.admin.title}
                    </h3>
                    <p className="text-sm text-gray-600">{t.admin.subtitle}</p>
                  </div>
                </div>
              </button>

              {/* Customer Login - navigates to login page */}
              <button
                onClick={() => navigate("/login")}
                className="w-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Users className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {t.customer.title}
                    </h3>
                    <p className="text-sm text-gray-600">{t.customer.subtitle}</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Footer Links */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                {t.footer.help}{" "}
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  {t.footer.contact}
                </a>
              </p>
              <p className="mt-2">
                {t.footer.registerText}{" "}
                <a
                  href="#"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  {t.footer.registerLink}
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PreLogin;
