import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 z-50"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageToggle; 