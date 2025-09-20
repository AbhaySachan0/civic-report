import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/ProtectedRoute";
import FileComplaint from "./pages/file-complaint";
import PreLogin from "./pages/prelogin";

function App() {
  const [language, setLanguage] = useState<"hi" | "en">(
    (localStorage.getItem("language") as "hi" | "en") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header
        language={language}
        setLanguage={setLanguage}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />

      <Routes>
        {/* Root path */}
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

        {/* PreLogin route (for header button redirects) */}
        <Route
          path="/prelogin"
          element={<PreLogin language={language} setLanguage={setLanguage} />}
        />

        {/* Login / Signup */}
        <Route
          path="/login"
          element={<Login language={language} setIsAuth={setIsAuth} />}
        />
        <Route
          path="/signup"
          element={<Signup language={language} setIsAuth={setIsAuth} />}
        />

        {/* Protected pages */}
        <Route
          path="/file-complaint"
          element={
            <ProtectedRoute>
              <FileComplaint language={language} />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer language={language} />
    </div>
  );
}

export default App;
