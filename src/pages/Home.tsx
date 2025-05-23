import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (page: 'home' | 'menu' | 'about' | 'contact') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Bakery"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-100">
            {t.heroSubtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF69B4] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl font-medium hover:bg-[#FF1493] transition-colors shadow-lg"
            onClick={() => onNavigate('menu')}
          >
            {t.shopNow}
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14 text-bakery-brown"
          >
            {t.featuredCategories}
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {/* Cakes */}
            <motion.div 
              variants={fadeInUp}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                alt="Cakes"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold transform group-hover:scale-110 transition-transform duration-300">
                    {t.cakes}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Pastries */}
            <motion.div 
              variants={fadeInUp}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                alt="Pastries"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold transform group-hover:scale-110 transition-transform duration-300">
                    {t.pastries}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Coffee */}
            <motion.div 
              variants={fadeInUp}
              className="relative group overflow-hidden rounded-2xl shadow-lg sm:col-span-2 lg:col-span-1"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80"
                alt="Coffee"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold transform group-hover:scale-110 transition-transform duration-300">
                    {t.coffee}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 