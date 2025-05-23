import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-bakery-brown text-white py-8 sm:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Sweet Delights</h3>
            <p className="text-bakery-cream/80 text-xs sm:text-base">
              Bringing joy through delicious baked goods since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Opening Hours</h3>
            <ul className="space-y-1 sm:space-y-2 text-bakery-cream/80 text-xs sm:text-base">
              <li>Monday - Friday: 7am - 7pm</li>
              <li>Saturday: 8am - 6pm</li>
              <li>Sunday: 9am - 4pm</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Connect With Us</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bakery-pink transition-colors"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bakery-pink transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bakery-pink transition-colors"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-bakery-cream/20 text-center text-bakery-cream/60 text-xs sm:text-base">
          <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 