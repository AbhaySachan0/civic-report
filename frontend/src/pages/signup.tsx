import React, { useState } from "react";
import {
  User,
  Eye,
  EyeOff,
  Mail,
  Lock,
  UserPlus,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import

function SignupPage({ language }: { language: "hi" | "en" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const navigate = useNavigate(); // ✅ hook for navigation

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Registration data:", formData);

    alert(
      language === "hi"
        ? "रजिस्ट्रेशन सबमिट किया गया!"
        : "Registration submitted!"
    );

    // ✅ After successful signup, redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
        {/* Avatar Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
            <UserPlus className="h-8 w-8 text-blue-600 dark:text-blue-300" />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {language === "hi" ? "खाता बनाएं" : "Create Account"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {language === "hi"
              ? "अपने सरकारी पोर्टल खाते के लिए पंजीकरण करें"
              : "Register for your government portal account"}
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {language === "hi" ? "पूरा नाम" : "Full Name"}
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 pl-12"
                placeholder={
                  language === "hi"
                    ? "अपना पूरा नाम दर्ज करें"
                    : "Enter your full name"
                }
                required
              />
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {language === "hi" ? "ईमेल पता" : "Email Address"}
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 pl-12"
                placeholder={
                  language === "hi"
                    ? "अपना ईमेल दर्ज करें"
                    : "Enter your email"
                }
                required
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {language === "hi" ? "पासवर्ड" : "Password"}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 pl-12"
                placeholder={
                  language === "hi"
                    ? "अपना पासवर्ड दर्ज करें"
                    : "Enter your password"
                }
                required
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {language === "hi" ? "पासवर्ड की पुष्टि करें" : "Confirm Password"}
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 pl-12"
                placeholder={
                  language === "hi"
                    ? "पासवर्ड की पुष्टि करें"
                    : "Confirm your password"
                }
                required
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-gray-600 rounded"
              required
            />
            <label
              htmlFor="agreeToTerms"
              className="ml-3 text-sm text-gray-700 dark:text-gray-300"
            >
              {language === "hi" ? "मैं सहमत हूं" : "I agree to the"}{" "}
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                {language === "hi"
                  ? "नियम और शर्तें"
                  : "Terms and Conditions"}
              </a>{" "}
              {language === "hi" ? "और" : "and"}{" "}
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                {language === "hi" ? "गोपनीयता नीति" : "Privacy Policy"}
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <UserPlus className="h-5 w-5" />
            <span>{language === "hi" ? "खाता बनाएं" : "Create Account"}</span>
          </button>

          {/* Sign In */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {language === "hi" ? "पहले से खाता है?" : "Already have an account?"}{" "}
              <Link
                to="/login" // ✅ navigate back to login
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                {language === "hi"
                  ? "यहां साइन इन करें"
                  : "Sign in here"}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
