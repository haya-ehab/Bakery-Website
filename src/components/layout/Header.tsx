import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../lib/CartContext'
import { useLanguage } from '../../lib/LanguageContext'
import { translations } from '../../lib/translations'

interface HeaderProps {
  onNavigate: (page: 'home' | 'menu' | 'about' | 'contact') => void
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { items } = useCart()
  const { language } = useLanguage()
  const t = translations[language]

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-bakery-cream/95 backdrop-blur supports-[backdrop-filter]:bg-bakery-cream/60 transition-shadow duration-300 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-bakery-brown hover:scale-105 transition-transform duration-200 bg-transparent border-none cursor-pointer">
          Sweet Delights
        </button>
        <nav className="hidden md:flex gap-6">
          <button onClick={() => onNavigate('home')} className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer">
            {t.home}
          </button>
          <button onClick={() => onNavigate('menu')} className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer">
            {t.menu}
          </button>
          <button onClick={() => onNavigate('about')} className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer">
            {t.about}
          </button>
          <button onClick={() => onNavigate('contact')} className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer">
            {t.contact}
          </button>
        </nav>
        <button
          className={`relative p-2 rounded-full transition-all duration-200 hover:bg-bakery-pink/30 active:scale-95 ${totalItems > 0 ? 'bg-bakery-pink/40 scale-110' : ''}`}
          aria-label="Toggle cart"
        >
          <ShoppingCart className="h-6 w-6 text-bakery-brown" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-bakery-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header 