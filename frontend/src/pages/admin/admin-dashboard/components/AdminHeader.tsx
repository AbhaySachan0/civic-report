import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ⚡️ added useNavigate
import DarkModeToggle from "../../../../components/common/DarkModeToggle";

interface AdminHeaderProps {
  adminEmail: string | null;
  onLogout: () => void;
}

export default function AdminHeader({ adminEmail, onLogout }: AdminHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // ⚡️ hook for navigation

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    onLogout(); // clear auth/session state
    navigate("/prelogin"); // ⚡️ redirect
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* Gradient bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-white to-blue-800"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-700 p-2 rounded-full border-2 border-blue-300">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-bold text-blue-800 dark:text-blue-300">
              Admin Panel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/admin/dashboard"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/manage-complaints"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium"
            >
              Complaints
            </Link>
            <Link
              to="/admin/analytics"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium"
            >
              Analytics
            </Link>
            <Link
              to="/admin/settings"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium"
            >
              Settings
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {adminEmail && (
                <span className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-[150px]">
                  {adminEmail}
                </span>
              )}
              <DarkModeToggle />
              <button
                onClick={handleLogout} // ⚡️ updated
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
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
                to="/admin/dashboard"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium py-2"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/manage-complaints"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium py-2"
              >
                Complaints
              </Link>
              <Link
                to="/admin/analytics"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium py-2"
              >
                Analytics
              </Link>
              <Link
                to="/admin/settings"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium py-2"
              >
                Settings
              </Link>

              <div className="flex flex-col gap-3 mt-4">
                {adminEmail && (
                  <span className="text-sm text-gray-600 dark:text-gray-400 px-2 truncate">
                    {adminEmail}
                  </span>
                )}
                <DarkModeToggle />
                <button
                  onClick={handleLogout} // ⚡️ updated
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition w-full"
                >
                  Logout
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
