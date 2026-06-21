import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* WhatsApp Button */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="group flex items-center gap-4">
        <span className="bg-bg border border-luxury px-4 py-2 text-[10px] tracking-widest uppercase font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 backdrop-blur-sm">
          WhatsApp Us
        </span>
        <div className="w-12 h-12 bg-bg border border-luxury text-white flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-500">
          <MessageCircle size={20} strokeWidth={1} />
        </div>
      </a>

      {/* Call Button */}
      <a href="tel:+919876543210" className="group flex items-center gap-4">
        <span className="bg-bg border border-luxury px-4 py-2 text-[10px] tracking-widest uppercase font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 backdrop-blur-sm">
          Call Now
        </span>
        <div className="w-12 h-12 bg-bg border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-bg transition-all duration-500">
          <Phone size={20} strokeWidth={1} />
        </div>
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-bg border border-luxury text-text-muted flex items-center justify-center hover:text-white hover:border-white transition-all duration-500 mt-2"
          >
            <ArrowUp size={20} strokeWidth={1} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
