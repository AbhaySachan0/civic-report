import { useState } from "react";
import { Menu, X, Flag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { translations, SupportedLang } from "../../language";
import DarkModeToggle from "../common/DarkModeToggle";
import { useAuth } from "../../context/AuthContext"; // ✅ import auth context

interface HeaderProps {
  language: SupportedLang;
  setLanguage: (lang: SupportedLang) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const t = translations[language].header;

  const { isAuth, logout } = useAuth(); // ✅ get auth state + logout fn

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === "hi" ? "en" : "hi");

  const handleLogout = () => {
    logout();          // ✅ clears localStorage + updates context
    navigate("/prelogin"); // ✅ redirect
  };

  const handleProtectedNavigation = (path: string) => {
    if (isAuth) {
      navigate(path);
    } else {
      navigate("/prelogin");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* Gradient bar */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-800 p-2 rounded-full border-2 border-orange-400">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-800 dark:text-blue-300">
                {t.logoTitle}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {t.logoSubtitle}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              {t.nav.home}
            </Link>
            <button
              onClick={() => handleProtectedNavigation("/file-complaint")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium"
            >
              {t.nav.fileComplaint}
            </button>
            <button
              onClick={() => handleProtectedNavigation("/community")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium"
            >
              {t.nav.community}
            </button>
            <button
              onClick={() => handleProtectedNavigation("/my-complaints")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium"
            >
              {t.nav.myComplaints}
            </button>

            <div className="flex items-center gap-4">
              {isAuth ? (
                <>
                  <Link to="/profile">
                    <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition">
                      {t.actions.profile}
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    {t.actions.logout}
                  </button>
                </>
              ) : (
                <Link to="/prelogin">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-md">
                    {t.actions.login}
                  </button>
                </Link>
              )}

              {/* Dark mode + Language switch */}
              <div className="flex items-center gap-2">
                <DarkModeToggle />
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {t.langToggle}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2"
              >
                {t.nav.home}
              </Link>
              <button
                onClick={() => handleProtectedNavigation("/file-complaint")}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2 text-left"
              >
                {t.nav.fileComplaint}
              </button>
              <button
                onClick={() => handleProtectedNavigation("/community")}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2 text-left"
              >
                {t.nav.community}
              </button>
              <button
                onClick={() => handleProtectedNavigation("/my-complaints")}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-800 font-medium py-2 text-left"
              >
                {t.nav.myComplaints}
              </button>

              <div className="flex flex-col gap-3 mt-4">
                {isAuth ? (
                  <>
                    <Link to="/profile" className="w-full">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full">
                        {t.actions.profile}
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition w-full"
                    >
                      {t.actions.logout}
                    </button>
                  </>
                ) : (
                  <Link to="/prelogin" className="w-full">
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium w-full">
                      {t.actions.login}
                    </button>
                  </Link>
                )}

                {/* Dark mode + Language */}
                <div className="flex items-center gap-2 px-2">
                  <DarkModeToggle />
                  <button
                    onClick={toggleLanguage}
                    className="px-3 py-2 border rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    {t.langToggle}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
