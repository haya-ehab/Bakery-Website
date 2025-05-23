import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../lib/CartContext'
import { useLanguage } from '../../lib/LanguageContext'
import { translations } from '../../lib/translations'

interface HeaderProps {
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const Header: React.FC = () => {
  const { items } = useCart()
  const { language } = useLanguage()
  const t = translations[language]

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-bakery-cream/95 backdrop-blur supports-[backdrop-filter]:bg-bakery-cream/60 transition-shadow duration-300 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-bakery-brown hover:scale-105 transition-transform duration-200">
          Sweet Delights
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105">
            {t.home}
          </Link>
          <Link to="/menu" className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105">
            {t.menu}
          </Link>
          <Link to="/about" className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105">
            {t.about}
          </Link>
          <Link to="/contact" className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105">
            {t.contact}
          </Link>
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