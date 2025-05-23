import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-bakery-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sweet Delights</h3>
            <p className="text-bakery-cream/80">
              Bringing joy through delicious baked goods since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-bakery-cream/80">
              <li>Monday - Friday: 7am - 7pm</li>
              <li>Saturday: 8am - 6pm</li>
              <li>Sunday: 9am - 4pm</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bakery-pink transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bakery-pink transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bakery-pink transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-bakery-cream/20 text-center text-bakery-cream/60">
          <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 