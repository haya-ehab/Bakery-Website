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

const Menu = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const t = translations[language];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${t.menuItems[product.name]} ${t.addToCart}`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-bakery-brown mb-12 text-center">{t.menuTitle}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menuSections.map((section, idx) => (
          <Dialog.Root key={section.name} open={openSection === idx} onOpenChange={open => setOpenSection(open ? idx : null)}>
            <Dialog.Trigger asChild>
              <button className="flex flex-col items-center w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4 focus:outline-none transform hover:scale-105 active:scale-95 duration-200 group">
                <img src={section.image} alt={t.menuSections[section.name]} className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity duration-200" />
                <span className="text-lg font-bold text-bakery-brown mb-2 group-hover:text-bakery-pink transition-colors duration-200">{t.menuSections[section.name]}</span>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-8 focus:outline-none">
                <Dialog.Title className="text-2xl font-bold text-bakery-brown mb-6 text-center">{t.menuSections[section.name]}</Dialog.Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.products.map(product => (
                    <div key={product.id} className="flex flex-col items-center bg-bakery-cream rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 active:scale-95">
                      <img src={product.image} alt={t.menuItems[product.name]} className="w-28 h-28 object-cover rounded mb-2" />
                      <h3 className="font-bold text-bakery-brown mb-1">{t.menuItems[product.name]}</h3>
                      <p className="text-bakery-brown mb-2">${product.price.toFixed(2)}</p>
                      <button
                        className="bg-bakery-brown text-white px-4 py-2 rounded hover:bg-bakery-pink transition-colors duration-200 hover:scale-105 active:scale-95"
                        onClick={() => handleAddToCart(product)}
                      >
                        {t.addToCart}
                      </button>
                    </div>
                  ))}
                </div>
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 text-bakery-brown text-2xl font-bold">&times;</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </div>
  );
};

export default Menu; 