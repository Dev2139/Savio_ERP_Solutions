import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Vision', path: '/vision' },
  { name: 'Technology', path: '/technology' },
  { name: 'Services', path: '/services' },
  { name: 'Savio ERP', path: '/savio-erp' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1766251626/adibqnkhlbfv5hjdyssw.png" alt="Savio ERP Logo" className="h-12 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="block h-0.5 w-full bg-accent mt-1 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border" id="mobile-menu">
          <nav className="container-custom py-4 flex flex-col gap-2" role="navigation" aria-label="Mobile Primary">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-primary hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 w-full">
              <Button variant="cta" className="w-full">
                Book a Demo
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
