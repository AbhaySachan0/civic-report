import React from 'react';
import { Flag, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Government Header */}
        <div className="text-center mb-8 pb-8 border-b border-white/20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-white p-3 rounded-full">
              <Flag className="w-8 h-8 text-blue-800" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">भारत सरकार</h3>
              <p className="text-blue-200">Government of India</p>
            </div>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            डिजिटल इंडिया पहल के तहत नागरिक सेवाओं को बेहतर बनाने के लिए प्रतिबद्ध
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-orange-300">संपर्क जानकारी</h4>
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
                <span className="text-blue-100">नई दिल्ली, भारत</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">त्वरित लिंक</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">हमारे बारे में</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">संपर्क करें</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">नियम और शर्तें</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">गोपनीयता नीति</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">सेवाएं</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">शिकायत दर्ज करें</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">स्थिति जांचें</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">सामुदायिक मंच</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 hover:underline">मोबाइल ऐप</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">सोशल मीडिया</h4>
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
            © 2025 भारत सरकार। सभी अधिकार सुरक्षित।
          </p>
          <p className="text-blue-200 text-sm mt-4 sm:mt-0">
            सामुदायिक पारदर्शिता प्रणाली द्वारा संचालित | डिजिटल इंडिया पहल
          </p>
        </div>
      </div>
    </footer>
  );
}