
import { Flag, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// 1. Define props type
interface FooterProps {
  language: 'hi' | 'en';
}

// 2. Use props in the function
export default function Footer({ language }: FooterProps) {
  const isHindi = language === 'hi';

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Government Header */}
        <div className="text-center mb-8 pb-8 border-b border-white/20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-white p-3 rounded-full">
              <Flag className="w-8 h-8 text-blue-800" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">
                {isHindi ? 'भारत सरकार' : 'Government of India'}
              </h3>
              <p className="text-blue-200">
                {isHindi ? 'Government of India (English)' : 'भारत सरकार (Hindi)'}
              </p>
            </div>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            {isHindi
              ? 'डिजिटल इंडिया पहल के तहत नागरिक सेवाओं को बेहतर बनाने के लिए प्रतिबद्ध'
              : 'Committed to improving citizen services under the Digital India initiative'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-orange-300">
              {isHindi ? 'संपर्क जानकारी' : 'Contact Information'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">support@gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-300" />
                <span className="text-blue-100">
                  {isHindi ? 'नई दिल्ली, भारत' : 'New Delhi, India'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">
              {isHindi ? 'त्वरित लिंक' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">
                  {isHindi ? 'हमारे बारे में' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">
                  {isHindi ? 'संपर्क करें' : 'Contact'}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">
                  {isHindi ? 'नियम और शर्तें' : 'Terms & Conditions'}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">
                  {isHindi ? 'गोपनीयता नीति' : 'Privacy Policy'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">
              {isHindi ? 'सेवाएं' : 'Services'}
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white">{isHindi ? 'शिकायत दर्ज करें' : 'File Complaint'}</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">{isHindi ? 'स्थिति जांचें' : 'Check Status'}</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">{isHindi ? 'सामुदायिक मंच' : 'Community Forum'}</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">{isHindi ? 'मोबाइल ऐप' : 'Mobile App'}</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">
              {isHindi ? 'सोशल मीडिया' : 'Social Media'}
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            {isHindi
              ? '© 2025 भारत सरकार। सभी अधिकार सुरक्षित।'
              : '© 2025 Government of India. All rights reserved.'}
          </p>
          <p className="text-blue-200 text-sm mt-4 sm:mt-0">
            {isHindi
              ? 'सामुदायिक पारदर्शिता प्रणाली द्वारा संचालित | डिजिटल इंडिया पहल'
              : 'Powered by Community Transparency System | Digital India Initiative'}
          </p>
        </div>
      </div>
    </footer>
  );
}
