import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = ['All', 'Interior', 'Culinary Arts', 'Events', 'Heritage'];

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000", category: "Interior", title: "Main Dining Hall" },
    { id: 2, src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000", category: "Culinary Arts", title: "Chef's Signature Platter" },
    { id: 3, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000", category: "Interior", title: "Private Dining Suite" },
    { id: 4, src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000", category: "Events", title: "Corporate Gala" },
    { id: 5, src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1000", category: "Culinary Arts", title: "Saffron Infused Biryani" },
    { id: 6, src: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=1000", category: "Culinary Arts", title: "Tandoori Specialties" },
    { id: 7, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000", category: "Interior", title: "The Atrium" },
    { id: 8, src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1000", category: "Culinary Arts", title: "Artisan Desserts" },
    { id: 9, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000", category: "Events", title: "Wedding Reception" },
    { id: 10, src: "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&q=80&w=1000", category: "Heritage", title: "Traditional Thali Preparation" },
    { id: 11, src: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=1000", category: "Heritage", title: "Aged Spices Collection" },
  ];

  const filteredImages = activeTab === 'All' ? images : images.filter(img => img.category === activeTab);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-bg min-h-screen pt-24 pb-20 relative">
      <Helmet>
        <title>Visual Journey | Taste of Home</title>
        <meta name="description" content="Explore our luxurious restaurant interiors, culinary masterpieces, and grand events." />
      </Helmet>

      {/* Hero */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center items-center text-center mb-16 overflow-hidden -mt-24 pt-24 border-b border-luxury">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Restaurant Ambience" 
            className="w-full h-[120%] object-cover object-center transform -translate-y-10 filter brightness-[0.7] contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-100"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center mt-12">
          <span className="text-primary tracking-[0.3em] uppercase text-xs font-bold mb-4 block drop-shadow-md">~ Authentic Ambience & Portfolio ~</span>
          <h1 className="text-5xl md:text-7xl font-heading font-light mb-6 text-white drop-shadow-2xl">Visual Journey</h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">A curated gallery of our culinary art, elegant heritage spaces, and unforgettable moments.</p>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-10 animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-[10px] tracking-widest uppercase font-semibold transition-all border ${activeTab === tab ? 'border-primary text-primary' : 'border-luxury text-text-muted hover:border-primary hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div 
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group border border-luxury overflow-hidden aspect-[4/5] cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 backdrop-blur-sm bg-bg/20">
                  <div className="w-12 h-12 border border-white text-white flex items-center justify-center rounded-full mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={20} strokeWidth={1} />
                  </div>
                  <span className="text-primary text-[10px] tracking-widest uppercase font-semibold mb-2">{img.category}</span>
                  <h3 className="text-white font-light text-xl text-center px-4 tracking-wide">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors flex items-center gap-2 text-xs tracking-widest uppercase z-50"
              onClick={() => setSelectedImage(null)}
            >
              Close <X size={24} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain border border-luxury shadow-2xl" 
            />
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <h3 className="text-white font-light text-2xl tracking-wide mb-2">{selectedImage.title}</h3>
              <p className="text-primary text-[10px] tracking-widest uppercase font-semibold">{selectedImage.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Gallery;