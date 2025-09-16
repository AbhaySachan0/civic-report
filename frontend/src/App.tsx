import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <StatsSection language={language} />
      <FeaturesSection language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
