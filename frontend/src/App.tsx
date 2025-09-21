import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import HeroSection from "./components/home/HeroSection";
import StatsSection from "./components/home/StatsSection";
import FeaturesSection from "./components/home/FeaturesSection";
import Footer from "./components/layout/Footer";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/common/ProtectedRoute";
import FileComplaint from "./pages/file-complaint";
import PreLogin from "./pages/prelogin";
import AdminLogin from "./pages/auth/admin-login";
import AdminDashboard from "./pages/admin/admin-dashboard/AdminDashboard";
import { useAuth } from "./context/AuthContext"; // ✅ import context

function App() {
  const location = useLocation();
  const { isAuth } = useAuth(); // ✅ now using context instead of local state

  const [language, setLanguage] = useState<"hi" | "en">(
    (localStorage.getItem("language") as "hi" | "en") || "en"
  );

  const [adminEmail, setAdminEmail] = useState(
    localStorage.getItem("adminEmail") || ""
  );

  // ✅ keep language in localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleAdminLogout = () => {
    localStorage.removeItem("adminEmail");
    setAdminEmail("");
  };

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {!isAdminRoute && (
        <Header
          language={language}
          setLanguage={setLanguage}
          // ⛔ removed isAuth & setIsAuth props, Header should use useAuth()
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <ProtectedRoute>
                <>
                  <HeroSection language={language} />
                  <StatsSection language={language} />
                  <FeaturesSection language={language} />
                </>
              </ProtectedRoute>
            ) : (
              <PreLogin language={language} setLanguage={setLanguage} />
            )
          }
        />

        <Route
          path="/prelogin"
          element={<PreLogin language={language} setLanguage={setLanguage} />}
        />

        <Route path="/login" element={<Login language={language} />} />
        <Route path="/signup" element={<Signup language={language} />} />

        <Route
          path="/admin-login"
          element={<AdminLogin setAdminEmail={setAdminEmail} />}
        />

        <Route
          path="/admin-dashboard"
          element={
            <AdminDashboard
              adminEmail={adminEmail}
              onLogout={handleAdminLogout}
            />
          }
        />

        <Route
          path="/file-complaint"
          element={
            <ProtectedRoute>
              <FileComplaint language={language} />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer language={language} />}
    </div>
  );
}

export default App;
