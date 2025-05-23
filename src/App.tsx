import React, { useState } from "react"
import { Toaster } from "react-hot-toast"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import Cart from "./components/Cart"
import { CartProvider } from "./lib/CartContext"
import { LanguageProvider } from "./lib/LanguageContext"
import LanguageToggle from "./components/LanguageToggle"
import "./App.css"

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [page, setPage] = useState<"home" | "menu" | "about" | "contact">("home")

  const toggleCart = () => setIsCartOpen(prev => !prev)

  return (
    <LanguageProvider>
      <CartProvider>
        <Toaster position="top-right" />
        <div className="min-h-screen bg-bakery-cream">
          <Header onNavigate={setPage} onCartToggle={toggleCart} />
          <main className="container mx-auto px-4 py-8">
            {page === "home" && <Home onNavigate={setPage} />}
            {page === "menu" && <Menu onNavigate={setPage} />}
            {page === "about" && <About onNavigate={setPage} />}
            {page === "contact" && <Contact onNavigate={setPage} />}
          </main>
          <Footer />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <LanguageToggle />
        </div>
      </CartProvider>
    </LanguageProvider>
  )
}

export default App