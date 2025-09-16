import React, { useState, useEffect } from 'react';
import { Menu, X, Flag, Sun, Moon } from 'lucide-react';

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Header({ language, setLanguage }: { language: 'hi' | 'en', setLanguage: (lang: 'hi' | 'en') => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md border-b-4 border-orange-500 sticky top-0 z-50 transition-colors duration-300">
      {/* Government Header Bar */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-1"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-800 p-2 rounded-full border-2 border-orange-400">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-800 dark:text-blue-300">
                {language === 'hi' ? 'भारत सरकार' : 'Government of India'}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'hi' ? 'भारत सरकार' : 'Govt. of India'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-500">
              {language === 'hi' ? 'होम' : 'Home'}
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-500">
              {language === 'hi' ? 'शिकायत दर्ज करें' : 'File Complaint'}
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-500">
              {language === 'hi' ? 'समुदाय' : 'Community'}
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-orange-500">
              {language === 'hi' ? 'मेरी शिकायतें' : 'My Complaints'}
            </a>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-md">
                {language === 'hi' ? 'लॉगिन' : 'Login'}
              </button>
              <DarkModeToggle />
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {language === 'hi' ? 'EN' : 'हिं'}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2 transition-colors duration-200">
                {language === 'hi' ? 'होम' : 'Home'}
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2 transition-colors duration-200">
                {language === 'hi' ? 'शिकायत दर्ज करें' : 'File Complaint'}
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2 transition-colors duration-200">
                {language === 'hi' ? 'समुदाय' : 'Community'}
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2 transition-colors duration-200">
                {language === 'hi' ? 'मेरी शिकायतें' : 'My Complaints'}
              </a>

              <div className="flex items-center gap-2 mt-3">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium w-full">
                  {language === 'hi' ? 'लॉगिन' : 'Login'}
                </button>
                <DarkModeToggle />
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {language === 'hi' ? 'EN' : 'हिं'}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
