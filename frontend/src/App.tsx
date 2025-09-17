import { useState ,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Login from './pages/login';
import Signup from './pages/signup';
import ProtectedRoute from './components/ProtectedRoute';
import FileComplaint from './pages/file-complaint'; // ✅ added import

function App() {
  // ✅ Language state

  const [language, setLanguage] = useState<'hi' | 'en'>(
  (localStorage.getItem('language') as 'hi' | 'en') || 'en'
);

// whenever language changes, save it
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);


  // ✅ Authentication state
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header receives language + setLanguage for toggle */}
      <Header
        language={language}
        setLanguage={setLanguage}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />

      {/* Page routing */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <HeroSection language={language} />
                <StatsSection language={language} />
                <FeaturesSection language={language} />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login language={language} setIsAuth={setIsAuth} />}
        />
        <Route
          path="/signup"
          element={<Signup language={language} setIsAuth={setIsAuth} />}
        />
        <Route
          path="/file-complaint"
          element={
            <ProtectedRoute>
              <FileComplaint language={language} /> {/* ✅ pass language here */}
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;
