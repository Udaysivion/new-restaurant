import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Crown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: "Chef's Special", path: '/chefs-special' },
    { name: 'The Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';
  const navbarClasses = `fixed w-full z-50 transition-all duration-700 ${
    isScrolled || !isHomePage
      ? 'bg-bg/95 backdrop-blur-md border-b border-luxury py-4 text-white'
      : 'bg-transparent py-8 text-white'
  }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 z-50">
              <Crown className="text-primary" size={32} strokeWidth={1} />
              <span className="text-2xl font-heading font-light tracking-wide text-white">
                Taste of <i className="font-serif text-primary">Home</i>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`text-xs tracking-[0.2em] uppercase transition-all hover:text-primary relative group ${
                    location.pathname === link.path 
                      ? 'text-primary font-semibold' 
                      : 'text-text-muted font-light'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-full h-px bg-primary transform origin-left transition-transform duration-500 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-light">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <Link to="/reserve" className="border border-luxury text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-bg transition-all duration-500 flex items-center gap-2">
                <span>Reserve</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden z-50 p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 flex flex-col h-screen border-b border-luxury"
          >
            <div className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-2xl font-heading tracking-widest uppercase ${
                    location.pathname === link.path ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto mb-10 flex flex-col gap-4">
              <a href="tel:+919876543210" className="w-full py-4 border border-luxury text-white text-xs tracking-widest uppercase flex justify-center items-center gap-2 hover:bg-white/5 transition-colors">
                <Phone size={16} />
                Call +91 98765 43210
              </a>
              <Link to="/reserve" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-primary text-bg py-4 text-xs tracking-widest uppercase font-semibold flex justify-center items-center gap-2 hover:bg-white transition-colors">
                Reserve Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
