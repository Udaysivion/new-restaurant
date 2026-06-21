import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import MenuCategoryNav from '../components/menu/MenuCategoryNav';
import LuxuryMenuGrid from '../components/menu/LuxuryMenuGrid';
import MostOrdered from '../components/menu/MostOrdered';
import OrderExperienceCTA from '../components/menu/OrderExperienceCTA';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [dietaryPreference, setDietaryPreference] = useState("All"); // All, Veg, Non-Veg

  useEffect(() => {
    // If there's a hash, wait a tiny bit for render then scroll
    if (window.location.hash === '#filters') {
      setTimeout(() => {
        const element = document.getElementById('filters');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-bg min-h-screen pt-32"
    >
      <Helmet>
        <title>The Menu | Taste of Home | Michelin Star Experience</title>
        <meta name="description" content="Browse our complete collection of culinary masterpieces." />
      </Helmet>

      {/* Impressive Mouth-watering Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center items-center text-center mb-16 overflow-hidden -mt-32 pt-32 border-b border-luxury">
        {/* Background Image with Parallax-like positioning */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Mouth-watering Indian Feast" 
            className="w-full h-[120%] object-cover object-center transform -translate-y-10 filter brightness-[0.6] contrast-125 saturate-110"
          />
          {/* Gradients to blend text perfectly */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-100"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block drop-shadow-md">
              ~ The Culinary Journey ~
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-white mb-6 drop-shadow-2xl">
              The Menu
            </h1>
            <p className="text-gray-200 font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed drop-shadow-md">
              A comprehensive journey through our carefully curated offerings, prepared with uncompromising dedication to traditional Indian gastronomy. Prepared to satisfy your deepest cravings.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto mt-12 animate-pulse"
          ></motion.div>
        </div>
      </div>

      {/* Most Ordered Collection (Moved up before grid for flow) */}
      <MostOrdered />

      {/* Elegant Filter Console */}
      <div id="filters" className="scroll-mt-32">
        <MenuCategoryNav 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          dietaryPreference={dietaryPreference}
          setDietaryPreference={setDietaryPreference}
        />
      </div>

      {/* The Core Menu Grid (Luxury cards) */}
      <LuxuryMenuGrid 
        activeCategory={activeCategory} 
        dietaryPreference={dietaryPreference}
      />

      {/* Order Experience & Final CTA */}
      <OrderExperienceCTA />

    </motion.div>
  );
};

export default Menu;