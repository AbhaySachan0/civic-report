import { useState, FormEvent } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ import context

interface LoginProps {
  language: "hi" | "en";
}

function Login({ language }: LoginProps) {
  const { login } = useAuth(); // ✅ use context login
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const user = storedUsers.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      alert(language === "hi" ? "सफलतापूर्वक लॉगिन हुआ!" : "Login successful!");

      // ✅ Save user in context (also updates localStorage internally)
      login(user.email, "customer");

      navigate("/");
    } else {
      alert(
        language === "hi"
          ? "गलत ईमेल या पासवर्ड!"
          : "Invalid email or password!"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <User className="w-8 h-8 text-blue-600 dark:text-blue-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {language === "hi" ? "वापस स्वागत है" : "Welcome Back"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {language === "hi"
              ? "अपने सरकारी पोर्टल खाते में साइन इन करें"
              : "Sign in to your government portal account"}
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {language === "hi" ? "ईमेल पता" : "Email Address"}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
              focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
              bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
              transition-colors duration-200"
              placeholder={language === "hi" ? "अपना ईमेल दर्ज करें" : "Enter your email"}
              required
            />
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
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                transition-colors duration-200"
                placeholder={language === "hi" ? "अपना पासवर्ड दर्ज करें" : "Enter your password"}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-orange-500 border-gray-300 dark:border-gray-600 rounded focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                {language === "hi" ? "मुझे याद रखें" : "Remember me"}
              </span>
            </label>
            <a
              href="#"
              className="text-sm text-orange-600 hover:text-orange-700 font-medium"
            >
              {language === "hi" ? "पासवर्ड भूल गए?" : "Forgot password?"}
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Lock className="w-4 h-4" />
            <span>{language === "hi" ? "साइन इन करें" : "Sign In"}</span>
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {language === "hi" ? "क्या आपका खाता नहीं है?" : "Don't have an account?"}{" "}
            <Link
              to="/signup"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {language === "hi" ? "यहां रजिस्टर करें" : "Register here"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
