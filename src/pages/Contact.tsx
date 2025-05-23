import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // const fadeInUp = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: { opacity: 1, y: 0 },
  //   transition: { duration: 0.6 }
  // };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-brown mb-8 sm:mb-12 text-center"
      >
        {t.contactTitle}
      </motion.h1>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-bakery-brown">{t.getInTouch}</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-bakery-pink flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-bakery-brown text-base sm:text-lg">{t.address}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{t.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-bakery-pink flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-bakery-brown text-base sm:text-lg">{t.phone}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{t.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-bakery-pink flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-bakery-brown text-base sm:text-lg">{t.email}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{t.emailContact}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-bakery-pink flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-bakery-brown text-base sm:text-lg">{t.hours}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{t.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-bakery-brown">{t.sendMessage}</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-bakery-pink focus:ring-bakery-pink text-sm sm:text-base transition-colors duration-200"
                    placeholder={t.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-bakery-pink focus:ring-bakery-pink text-sm sm:text-base transition-colors duration-200"
                    placeholder={t.email}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-bakery-pink focus:ring-bakery-pink text-sm sm:text-base transition-colors duration-200"
                    placeholder={t.message}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-bakery-pink text-white py-3 px-6 rounded-lg hover:bg-bakery-pink/90 transition-colors duration-200 text-sm sm:text-base font-medium"
                >
                  {t.send}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 