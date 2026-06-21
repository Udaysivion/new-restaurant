import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ChefsSpecial = lazy(() => import('./pages/ChefsSpecial'));
const Menu = lazy(() => import('./pages/Menu'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Reservation = lazy(() => import('./pages/Reservation'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-bg">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
      <p className="text-primary font-heading font-semibold text-lg tracking-widest uppercase">Taste of Home</p>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chefs-special" element={<ChefsSpecial />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Toaster position="bottom-center" toastOptions={{ style: { background: '#1A1A1A', color: '#F7E8D0', borderRadius: '100px', padding: '16px 24px' } }} />
        <div className="flex flex-col min-h-screen bg-bg">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
