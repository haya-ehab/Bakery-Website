import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-bakery-brown mb-12 text-center">{t.contactTitle}</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-bakery-brown mb-4">{t.getInTouch}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-bakery-brown">{t.address}</h3>
                  <p className="text-gray-600">{t.address}</p>
                </div>
                <div>
                  <h3 className="font-bold text-bakery-brown">{t.phone}</h3>
                  <p className="text-gray-600">{t.phone}</p>
                </div>
                <div>
                  <h3 className="font-bold text-bakery-brown">{t.email}</h3>
                  <p className="text-gray-600">{t.emailContact}</p>
                </div>
                <div>
                  <h3 className="font-bold text-bakery-brown">{t.hours}</h3>
                  <p className="text-gray-600">{t.hours}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-bakery-brown mb-4">{t.sendMessage}</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bakery-pink focus:ring-bakery-pink"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bakery-pink focus:ring-bakery-pink"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.message}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bakery-pink focus:ring-bakery-pink"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-bakery-brown text-white py-2 px-4 rounded-md hover:bg-bakery-pink transition-colors duration-200"
                >
                  {t.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 