import { Flag, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { translations, SupportedLang } from "../language";

interface FooterProps {
  language: SupportedLang;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language].footer;

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Government Header */}
        <div className="text-center mb-8 pb-8 border-b border-white/20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-white p-3 rounded-full">
              <Flag className="w-8 h-8 text-blue-800" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">{t.government}</h3>
              <p className="text-blue-200">{t.governmentSub}</p>
            </div>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-orange-300">{t.contactTitle}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">{t.contactPhone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">{t.contactEmail}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">{t.contactAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">{t.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {t.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">{t.servicesTitle}</h4>
            <ul className="space-y-3">
              {t.services.map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="text-blue-100 hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">{t.socialMediaTitle}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">{t.bottomLeft}</p>
          <p className="text-blue-200 text-sm mt-4 sm:mt-0">{t.bottomRight}</p>
        </div>
      </div>
    </footer>
  );
}
