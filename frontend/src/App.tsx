import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Login from './pages/login';
import Signup from './pages/signup'; // ✅ Import Signup page

function App() {
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Always visible */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Page routing */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection language={language} />
              <StatsSection language={language} />
              <FeaturesSection language={language} />
            </>
          }
        />
        <Route
          path="/login"
          element={<Login language={language} />}
        />
        <Route
          path="/signup" // ✅ Add route for signup
          element={<Signup language={language} />}
        />
      </Routes>

      {/* Always visible */}
      <Footer language={language} />
    </div>
  );
}

export default App;
