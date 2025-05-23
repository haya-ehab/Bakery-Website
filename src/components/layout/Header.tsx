import React, { useState } from 'react'
import { ShoppingCart, Menu as MenuIcon, X as CloseIcon } from 'lucide-react'
import { useCart } from '../../lib/CartContext'
import { useLanguage } from '../../lib/LanguageContext'
import { translations } from '../../lib/translations'

interface HeaderProps {
  onNavigate: (page: 'home' | 'menu' | 'about' | 'contact') => void
  onCartToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onCartToggle }) => {
  const { items } = useCart()
  const { language } = useLanguage()
  const t = translations[language]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-bakery-cream/95 backdrop-blur supports-[backdrop-filter]:bg-bakery-cream/60 transition-shadow duration-300 shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-xl sm:text-2xl font-bold text-bakery-brown hover:scale-105 transition-transform duration-200 bg-transparent border-none cursor-pointer"
        >
          Sweet Delights
        </button>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer text-base lg:text-lg"
          >
            {t.home}
          </button>
          <button 
            onClick={() => onNavigate('menu')} 
            className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer text-base lg:text-lg"
          >
            {t.menu}
          </button>
          <button 
            onClick={() => onNavigate('about')} 
            className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer text-base lg:text-lg"
          >
            {t.about}
          </button>
          <button 
            onClick={() => onNavigate('contact')} 
            className="text-bakery-brown hover:text-bakery-pink transition-colors duration-200 hover:scale-105 bg-transparent border-none cursor-pointer text-base lg:text-lg"
          >
            {t.contact}
          </button>
        </nav>

        {/* Cart and Mobile Menu Button (side by side, right side) */}
        <div className="flex items-center gap-2">
          {/* Cart Button */}
          <button
            onClick={onCartToggle}
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
          {/* Mobile Menu Button (immediately next to cart) */}
          <button
            className="md:hidden p-2 rounded transition hover:bg-bakery-pink/30 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon className="h-7 w-7 text-bakery-brown" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-60 bg-black/60 transition-opacity duration-300 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Sidebar Drawer */}
          <div className="fixed top-0 right-0 z-70 bg-white shadow-lg flex flex-col px-8 py-10 md:hidden
            rounded-b-2xl rounded-t-2xl border-t-2 border-b-2 border-pink-100
            transition-transform duration-300 ease-in-out animate-slide-in-right w-4/5 max-w-sm">
            {/* Close Button and Title */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-bakery-brown">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-bakery-pink/30 transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon className="h-6 w-6 text-bakery-brown" />
              </button>
            </div>
            <nav className="flex flex-col justify-evenly gap-8 flex-1">
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('home') }} 
                className="text-bakery-brown text-lg font-semibold hover:text-bakery-pink transition-colors duration-200 text-left"
              >
                {t.home}
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('menu') }} 
                className="text-bakery-brown text-lg font-semibold hover:text-bakery-pink transition-colors duration-200 text-left"
              >
                {t.menu}
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('about') }} 
                className="text-bakery-brown text-lg font-semibold hover:text-bakery-pink transition-colors duration-200 text-left"
              >
                {t.about}
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('contact') }} 
                className="text-bakery-brown text-lg font-semibold hover:text-bakery-pink transition-colors duration-200 text-left"
              >
                {t.contact}
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header 