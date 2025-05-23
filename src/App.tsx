import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Cart from './components/Cart'
import { CartProvider } from './lib/CartContext'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from './lib/LanguageContext'
import LanguageToggle from './components/LanguageToggle'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <LanguageProvider>
      <CartProvider>
        <Toaster position="top-right" />
        <Router>
          <div className="min-h-screen bg-bakery-cream">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <LanguageToggle />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  )
}

export default App 