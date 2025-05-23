import { bakeryImages } from '../assets/demoImages'
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: t.teamContent,
      image: bakeryImages.team.sarah,
      bio: 'With over 15 years of experience, Sarah brings traditional French baking techniques to our kitchen.'
    },
    {
      name: 'Emma Chen',
      role: t.teamContent,
      image: bakeryImages.team.michael,
      bio: 'Emma specializes in creating innovative pastries that combine classic techniques with modern flavors.'
    },
    {
      name: 'John Rodriguez',
      role: t.teamContent,
      image: bakeryImages.team.emma,
      bio: "John artistic background helps her create stunning, custom-designed cakes for special occasions."
    }
  ]

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
    <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-brown mb-8 sm:mb-12 text-center"
      >
        {t.aboutTitle}
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Our Story Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-bakery-brown mb-4 sm:mb-6">{t.ourStory}</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {t.storyContent}
          </p>
        </motion.section>

        {/* Our Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-bakery-brown mb-6 sm:mb-8">{t.ourValues}</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          >
            {Object.entries(t.values).map(([, value], index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-4 sm:p-6 rounded-xl hover:bg-bakery-pink/5 transition-colors duration-300"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-bakery-brown mb-2 group-hover:text-bakery-pink transition-colors duration-300">
                  {value}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Our Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-bakery-brown mb-6 sm:mb-8">{t.ourTeam}</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto mb-4 sm:mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-bakery-brown mb-2 sm:mb-3 group-hover:text-bakery-pink transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-bakery-brown/80 mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-700 text-sm sm:text-base">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Our Promise Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-bakery-brown mb-6 sm:mb-8">{t.ourPromise}</h2>
          <motion.ul 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="list-none space-y-3 sm:space-y-4"
          >
            {t.promises.map((promise: string, index: number) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-center text-gray-700 group text-base sm:text-lg"
              >
                <span className="w-2 h-2 bg-bakery-pink rounded-full mr-3 sm:mr-4 group-hover:scale-150 transition-transform duration-300" />
                {promise}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 