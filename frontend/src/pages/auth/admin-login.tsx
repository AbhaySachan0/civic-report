import React, { useState, useEffect } from "react";
import { Eye, EyeOff, User, Lock, AlertCircle, CheckCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AdminLoginProps {
  setAdminEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function AdminLogin({ setAdminEmail }: AdminLoginProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const navigate = useNavigate();

  // ✅ Check if already logged in
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedEmail = localStorage.getItem("adminEmail");
    if (storedAuth === "true" && storedEmail) {
      setIsAuthenticated(true);
      setAdminEmail(storedEmail);
    }
  }, [setAdminEmail]);

  const validateEmail = (email: string): boolean => {
    const govEmailPattern = /^[a-zA-Z0-9._%+-]+@gov\.ac\.in$/;
    return govEmailPattern.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Government email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid government email ending with @gov.ac.in";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // ✅ simulate successful login
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("adminEmail", formData.email);
      setAdminEmail(formData.email);
      setIsAuthenticated(true);

      setIsSubmitting(false);
      navigate("/admin-dashboard", { state: { email: formData.email } });
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("adminEmail");
    setAdminEmail("");
    setIsAuthenticated(false);
    navigate("/auth/login");
  };

  // ✅ If already logged in → show logout instead of login form
  if (isAuthenticated) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">You are logged in ✅</h1>
          <p className="text-gray-600 text-sm mb-6">
            Logged in as <span className="font-semibold">{localStorage.getItem("adminEmail")}</span>
          </p>
          <button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>
    );
  }

  // ✅ Default login form (unchanged UI)
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-sm">
            Sign in to your government portal account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Government Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your government email"
                className={`w-full px-4 py-3 border rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-white ${
                  errors.email
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-300 focus:ring-orange-200 focus:border-orange-400"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <div className="absolute right-3 top-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.email}
              </p>
            )}
            {formData.email && validateEmail(formData.email) && (
              <p className="text-green-600 text-xs mt-1 flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Valid government email address
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-3 pr-12 border rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:bg-white ${
                  errors.password
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-300 focus:ring-orange-200 focus:border-orange-400"
                }`}
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 p-1 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
                disabled={isSubmitting}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                disabled={isSubmitting}
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
              disabled={isSubmitting}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing In...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
              Contact System Administrator
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
