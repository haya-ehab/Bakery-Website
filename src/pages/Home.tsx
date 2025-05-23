import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Bakery"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-8">{t.heroSubtitle}</p>
          <Link
            to="/menu"
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition-colors"
          >
            {t.shopNow}
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.featuredCategories}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cakes */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                alt="Cakes"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Cakes</h3>
                </div>
              </div>
            </div>

            {/* Pastries */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                alt="Pastries"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Pastries</h3>
                </div>
              </div>
            </div>

            {/* Coffee */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                alt="Coffee"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Coffee</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 