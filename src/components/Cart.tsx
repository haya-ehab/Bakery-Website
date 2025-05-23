import React from 'react';
import { useCart } from '../lib/CartContext';
import { useLanguage } from '../lib/LanguageContext';
import { translations } from '../lib/translations';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity } = useCart();
  const { language } = useLanguage();
  const t = translations[language];

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div 
        className="bg-white w-full max-w-md h-full flex flex-col transition-all duration-300 ease-in-out
          sm:rounded-none rounded-t-2xl sm:rounded-xl
          sm:w-full xs:w-5/6 xs:max-w-sm xs:ml-auto xs:mr-0 xs:rounded-l-2xl xs:rounded-t-none"
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{t.yourCart}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500 text-lg mb-4">{t.emptyCart}</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-bakery-pink text-white rounded-full hover:bg-bakery-pink/90 transition-colors"
              >
                {t.continueShopping}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4 text-gray-500" />
                      </button>
                      <span className="text-gray-800 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 sm:p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-800 font-medium text-base sm:text-lg">{t.total}:</span>
              <span className="text-gray-800 font-bold text-lg sm:text-xl">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full bg-bakery-pink text-white py-3 rounded-lg hover:bg-bakery-pink/90 transition-colors text-base sm:text-lg font-medium"
              onClick={() => {
                // Handle checkout
                console.log('Checkout');
              }}
            >
              {t.checkout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 