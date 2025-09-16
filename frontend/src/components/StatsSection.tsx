import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  language: 'hi' | 'en';
}

function Counter({ end, duration = 2000, suffix = '', label, language }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center group hover:scale-105 transition-transform duration-300">
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-700 dark:text-gray-300 font-semibold">{label}</div>
    </div>
  );
}

export default function StatsSection({ language }: { language: 'hi' | 'en' }) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-orange-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {language === 'hi' ? 'राष्ट्रीय प्रभाव' : 'National Impact'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {language === 'hi' ? 'वास्तविक प्रभाव बना रहे हैं' : 'Creating Real Impact'}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {language === 'hi'
              ? 'हमारे समुदायों को बेहतर बनाने के लिए मिलकर काम कर रहे हजारों नागरिकों से जुड़ें'
              : 'Join thousands of citizens working together to improve our communities.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <Counter 
              end={12547} 
              label={language === 'hi' ? 'शिकायतें दर्ज' : 'Complaints Filed'} 
              language={language}
            />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
            <Counter 
              end={9823} 
              label={language === 'hi' ? 'समस्याएं हल' : 'Issues Resolved'} 
              language={language}
            />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
            <Counter 
              end={3456} 
              label={language === 'hi' ? 'सक्रिय नागरिक' : 'Active Citizens'} 
              language={language}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
