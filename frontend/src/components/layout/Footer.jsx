import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg text-white pt-20 pb-8 border-t border-luxury relative overflow-hidden">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2">
              <Crown className="text-primary" size={32} strokeWidth={1} />
              <span className="text-2xl font-heading font-light tracking-wide text-white">
                Taste of <i className="font-serif text-primary">Home</i>
              </span>
            </Link>
            <p className="text-text-muted leading-relaxed font-light text-sm max-w-sm">
              Premium Family Dining Experience crafted with authentic recipes, finest ingredients, and unforgettable hospitality since 2006.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-luxury flex items-center justify-center text-text-muted hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-all duration-300 group bg-bg/50 backdrop-blur-sm">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-luxury flex items-center justify-center text-text-muted hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300 group bg-bg/50 backdrop-blur-sm">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-luxury flex items-center justify-center text-text-muted hover:border-red-500 hover:text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:-translate-y-1 transition-all duration-300 group bg-bg/50 backdrop-blur-sm">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-luxury flex items-center justify-center text-text-muted hover:border-[#1DA1F2] hover:text-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.5)] hover:-translate-y-1 transition-all duration-300 group bg-bg/50 backdrop-blur-sm">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] font-semibold mb-8 text-primary uppercase">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-text-muted hover:text-white transition-colors inline-block transform hover:translate-x-2 font-light text-sm">Our Story</Link></li>
              <li><Link to="/chefs-special" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-text-muted hover:text-white transition-colors inline-block transform hover:translate-x-2 font-light text-sm">Chef's Special</Link></li>
              <li><Link to="/menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-text-muted hover:text-white transition-colors inline-block transform hover:translate-x-2 font-light text-sm">The Menu</Link></li>
              <li><Link to="/testimonials" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-text-muted hover:text-white transition-colors inline-block transform hover:translate-x-2 font-light text-sm">Testimonials</Link></li>
              <li><Link to="/gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-text-muted hover:text-white transition-colors inline-block transform hover:translate-x-2 font-light text-sm">Gallery</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-text-muted hover:text-white transition-colors inline-block transform hover:translate-x-2 font-light text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs tracking-[0.2em] font-semibold mb-8 text-primary uppercase">Contact Us</h3>
            <ul className="space-y-6 font-light text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={16} />
                <span className="text-text-muted">123 Luxury Avenue, Culinary District, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary flex-shrink-0" size={16} />
                <span className="text-text-muted">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary flex-shrink-0" size={16} />
                <span className="text-text-muted">hello@tasteofhome.com</span>
              </li>
            </ul>
            
            <div className="mt-8 flex gap-4">
               <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center border border-[#fc8019]/30 py-2.5 hover:border-[#fc8019] hover:bg-[#fc8019]/10 transition-all duration-500 bg-bg/50 group">
                 <svg viewBox="0 0 100 30" className="h-3 text-[#fc8019] opacity-80 group-hover:opacity-100 transition-colors">
                   <text x="50" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="currentColor">SWIGGY</text>
                 </svg>
               </a>
               <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center border border-[#cb202d]/30 py-2.5 hover:border-[#cb202d] hover:bg-[#cb202d]/10 transition-all duration-500 bg-bg/50 group">
                 <svg viewBox="0 0 100 30" className="h-3 text-[#cb202d] opacity-80 group-hover:opacity-100 transition-colors">
                   <text x="50" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontStyle="italic" fontSize="26" fill="currentColor">zomato</text>
                 </svg>
               </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xs tracking-[0.2em] font-semibold mb-8 text-primary uppercase">Operating Hours</h3>
            <ul className="space-y-4 font-light text-sm text-text-muted">
              <li className="flex justify-between border-b border-luxury pb-3">
                <span>Lunch (Daily)</span>
                <span className="text-white">12:30 PM - 15:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-luxury pb-3">
                <span>Dinner (Mon-Thu)</span>
                <span className="text-white">18:30 PM - 23:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-luxury pb-3">
                <span>Dinner (Fri-Sun)</span>
                <span className="text-white">18:30 PM - 23:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase">
            <p className="text-text-muted">
              &copy; {new Date().getFullYear()} Taste of Home.
            </p>
            <div className="flex gap-8">
              <Link to="/privacy-policy" className="text-text-muted hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="text-text-muted hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
