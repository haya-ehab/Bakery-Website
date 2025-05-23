import React from 'react';
import { bakeryImages } from '../assets/demoImages'
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

const About = () => {
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
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-bakery-brown mb-12 text-center"
      >
        {t.aboutTitle}
      </motion.h1>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Our Story Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-bakery-brown mb-4">{t.ourStory}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {t.storyContent}
          </p>
        </motion.section>

        {/* Our Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-bakery-brown mb-4">{t.ourValues}</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {Object.entries(t.values).map(([key, value], index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-4 rounded-lg hover:bg-bakery-pink/5 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-bakery-brown mb-2 group-hover:text-bakery-pink transition-colors duration-300">
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
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-bakery-brown mb-4">{t.ourTeam}</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-bakery-brown mb-2 group-hover:text-bakery-pink transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-bakery-brown/80 mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
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
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-bakery-brown mb-4">{t.ourPromise}</h2>
          <motion.ul 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="list-none space-y-3"
          >
            {t.promises.map((promise: string, index: number) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-center text-gray-700 group"
              >
                <span className="w-2 h-2 bg-bakery-pink rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
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