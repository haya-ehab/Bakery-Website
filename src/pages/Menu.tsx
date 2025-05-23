import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useCart } from '../lib/CartContext';
import { toast } from 'react-hot-toast';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';

type MenuSectionName = keyof typeof translations.en.menuSections;
type MenuItemName = keyof typeof translations.en.menuItems;

interface Product {
  id: number;
  name: MenuItemName;
  price: number;
  image: string;
}

interface MenuSection {
  name: MenuSectionName;
  image: string;
  products: Product[];
}

interface MenuProps {
  onNavigate: (page: 'home' | 'menu' | 'about' | 'contact') => void;
}

const menuSections: MenuSection[] = [
  {
    name: 'croissants',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 1,
        name: 'chocolateCroissant',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 2,
        name: 'almondDanish',
        price: 4.29,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 3,
        name: 'butterCroissant',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 4,
        name: 'raspberryDanish',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1506368083636-6defb67639d0?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 18,
        name: 'turkeyClub',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 19,
        name: 'hamCheese',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 20,
        name: 'veggieSandwich',
        price: 6.49,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'wraps',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 21,
        name: 'chickenCaesarWrap',
        price: 7.49,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 22,
        name: 'falafelWrap',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 23,
        name: 'tunaWrap',
        price: 7.29,
        image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'panzini',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 24,
        name: 'classicPanzini',
        price: 8.49,
        image: 'https://images.unsplash.com/photo-1506368083636-6defb67639d0?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 25,
        name: 'cheesePanzini',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'breads',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 5,
        name: 'sourdough',
        price: 5.49,
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 6,
        name: 'wholeWheat',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 7,
        name: 'baguette',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 8,
        name: 'strawberryCake',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 9,
        name: 'chocolateMousse',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 10,
        name: 'lemonTart',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'softDrinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 26,
        name: 'cola',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 27,
        name: 'lemonade',
        price: 2.49,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 28,
        name: 'gingerAle',
        price: 2.29,
        image: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'hotDrinks',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 29,
        name: 'hotChocolate',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 30,
        name: 'herbalTea',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'coldDrinks',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 31,
        name: 'icedLatte',
        price: 4.29,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 32,
        name: 'icedCoffee',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 33,
        name: 'icedMocha',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'coffee',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 11,
        name: 'espressoCapsules',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 12,
        name: 'chocolateCoffee',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 13,
        name: 'turkishCoffee',
        price: 4.29,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 14,
        name: 'frenchCoffee',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  {
    name: 'freshJuices',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
    products: [
      {
        id: 15,
        name: 'orangeJuice',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 16,
        name: 'watermelonJuice',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 17,
        name: 'lemonSparkling',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
];

const Menu = ({ onNavigate }: MenuProps) => {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedSection, setSelectedSection] = useState<MenuSectionName | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(t.addedToCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-bakery-brown">
        {t.menuTitle}
      </h1>

      {/* Menu Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {menuSections.map((section) => (
          <button
            key={section.name}
            onClick={() => setSelectedSection(section.name)}
            className={`relative group overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              selectedSection === section.name ? 'ring-2 ring-bakery-pink' : ''
            }`}
          >
            <img
              src={section.image}
              alt={t.menuSections[section.name]}
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h2 className="absolute bottom-4 left-4 text-xl sm:text-2xl font-bold text-white">
              {t.menuSections[section.name]}
            </h2>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {selectedSection && (
        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-bakery-brown">
            {t.menuSections[selectedSection]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {menuSections
              .find((section) => section.name === selectedSection)
              ?.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={t.menuItems[product.name]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      {t.menuItems[product.name]}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-bakery-brown">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="px-4 py-2 bg-bakery-pink text-white rounded-full hover:bg-bakery-pink/90 transition-colors text-sm sm:text-base"
                      >
                        {t.addToCart}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu; 