import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Purification', href: '#purification' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md py-3 border-b border-brand-blue-light/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-brand-blue-medium animate-float"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
            </svg>
            <span className="text-2xl font-bold tracking-wider text-brand-blue-dark">
              AİVRA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-brand-blue-navy hover:text-brand-blue-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:18002338731"
              className="flex items-center space-x-2 text-sm font-semibold text-brand-blue-dark hover:text-brand-blue-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>1800 233 8731</span>
            </a>
            <button
              onClick={onEnquireClick}
              className="bg-brand-blue-medium text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-brand-blue-dark hover:shadow-brand-blue-medium/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-blue-navy hover:text-brand-blue-medium focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-brand-blue-light/20 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-brand-blue-navy hover:bg-brand-blue-light/50 hover:text-brand-blue-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-brand-blue-light/20 px-4 space-y-3">
              <a
                href="tel:18002338731"
                className="flex items-center space-x-3 text-base font-semibold text-brand-blue-dark"
              >
                <Phone className="w-5 h-5 text-brand-blue-medium" />
                <span>1800 233 8731</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onEnquireClick();
                }}
                className="w-full bg-brand-blue-medium text-white text-center py-3 rounded-full text-base font-semibold shadow-md hover:bg-brand-blue-dark transition-all duration-300"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
