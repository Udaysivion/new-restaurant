import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Flame, ChefHat, Search, ArrowUpRight } from 'lucide-react';

export const menuData = [
  // Starters
  { id: 1, name: "Paneer Tikka", category: "Starters", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "Medium", desc: "Cubes of paneer marinated in rare spices and grilled in a traditional clay tandoor.", chefSpecial: true, bestSeller: true, time: "20 mins" },
  { id: 2, name: "Chicken 65", category: "Starters", img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800", type: "Non-Veg", spice: "High", desc: "Spicy, deep-fried chicken delicacy originating from Chennai. Tempered with curry leaves and fiery red chilies.", chefSpecial: false, bestSeller: true, time: "15 mins" },
  
  // Soups
  { id: 3, name: "Manchow Soup", category: "Soups", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "Medium", desc: "Dark brown soup prepared with various vegetables, scallions, and premium soy sauce.", chefSpecial: false, bestSeller: false, time: "15 mins" },
  { id: 4, name: "Chicken Sweet Corn", category: "Soups", img: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=800", type: "Non-Veg", spice: "Low", desc: "Classic comforting soup made with sweet corn kernels and tender pulled chicken.", chefSpecial: false, bestSeller: false, time: "15 mins" },

  // Indian Mains
  { id: 5, name: "Dal Makhani", category: "Indian Mains", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "Low", desc: "Whole black lentils slow-cooked overnight with white butter and fresh cream.", chefSpecial: true, bestSeller: true, time: "20 mins" },
  { id: 6, name: "Butter Chicken", category: "Indian Mains", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800", type: "Non-Veg", spice: "Low", desc: "Tender tandoori chicken cooked in a rich, creamy tomato gravy with kasuri methi.", chefSpecial: true, bestSeller: true, time: "25 mins" },

  // Rice & Biryani
  { id: 7, name: "Dum Biryani", category: "Rice & Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800", type: "Non-Veg", spice: "Medium", desc: "Aromatic aged basmati rice cooked with tender mutton and authentic spices in a sealed pot.", chefSpecial: true, bestSeller: true, time: "30 mins" },
  { id: 8, name: "Jeera Rice", category: "Rice & Biryani", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "None", desc: "Fluffy basmati rice tempered with cumin seeds and fresh coriander.", chefSpecial: false, bestSeller: false, time: "15 mins" },

  // Tandoori
  { id: 9, name: "Tandoori Chicken", category: "Tandoori", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800", type: "Non-Veg", spice: "Medium", desc: "Spring chicken marinated in hung yogurt and ground spices, roasted to perfection.", chefSpecial: false, bestSeller: true, time: "25 mins" },
  { id: 10, name: "Malai Broccoli", category: "Tandoori", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "Low", desc: "Fresh broccoli florets marinated in cream, cheese, and cardamom, charred in the tandoor.", chefSpecial: true, bestSeller: false, time: "20 mins" },

  // Seafood
  { id: 11, name: "Garlic Prawns", category: "Seafood", img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800", type: "Non-Veg", spice: "Low", desc: "Fresh coastal prawns tossed in browned butter, garlic confit, and fine herbs.", chefSpecial: true, bestSeller: false, time: "25 mins" },
  { id: 12, name: "Goan Fish Curry", category: "Seafood", img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4859?auto=format&fit=crop&q=80&w=800", type: "Non-Veg", spice: "High", desc: "Fresh kingfish simmered in a tangy and spicy coconut broth with kokum.", chefSpecial: true, bestSeller: true, time: "25 mins" },

  // Desserts
  { id: 13, name: "Gulab Jamun", category: "Desserts", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "None", desc: "Deep-fried milk solids soaked in warm cardamom and rose-scented sugar syrup.", chefSpecial: false, bestSeller: true, time: "5 mins" },
  { id: 14, name: "Rasmalai", category: "Desserts", img: "https://images.unsplash.com/photo-1624300629298-e9ad39c5950f?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "None", desc: "Soft cottage cheese dumplings poached in saffron-infused sweetened milk.", chefSpecial: true, bestSeller: false, time: "5 mins" },

  // Beverages
  { id: 15, name: "Mango Lassi", category: "Beverages", img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "None", desc: "Classic Indian yogurt drink blended with sweet Alphonso mangoes.", chefSpecial: false, bestSeller: true, time: "5 mins" },
  { id: 16, name: "Masala Chai", category: "Beverages", img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800", type: "Veg", spice: "None", desc: "Strong Assam tea brewed with milk, cardamom, ginger, and cloves.", chefSpecial: true, bestSeller: false, time: "10 mins" }
];

const getCategoryIcon = (category, type) => {
  switch (category) {
    case 'Soups':
      return <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12a8 8 0 0016 0H4zm2-4h.01M10 5h.01M16 6h.01M8 8h.01M14 9h.01M18 4h.01M6 5h.01M12 3h.01" /></svg>;
    case 'Indian Mains':
    case 'Rice & Biryani':
      return <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12v4a6 6 0 01-12 0v-4zM9 4v4M15 4v4M12 3v5" /></svg>;
    case 'Tandoori':
      return <Flame className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />;
    case 'Seafood':
      return <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M22 12c0 1.657-3.134 3-7 3-4.418 0-8.837-1.343-13-3 4.163-1.657 8.582-3 13-3 3.866 0 7 1.343 7 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 12l-5-4v8l5-4zM7 12a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    case 'Desserts':
      return <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4a3 3 0 00-3 3v2H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-3V7a3 3 0 00-3-3z" /></svg>;
    case 'Beverages':
      return <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8l-1 16H9L8 3zM12 3v16" /></svg>;
    default:
      if (type === 'Veg') {
        return <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /></svg>;
      } else {
        return <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.8 4.2c-.6-.6-1.5-.9-2.4-.9-1.9 0-3.5 1.6-3.5 3.5v.3c-2.4 1.3-4 3.9-4 6.9 0 2.8 1.4 5.3 3.5 6.8v.7c0 .6.4 1 1 1s1-.4 1-1v-2c2.5-.2 4.4-2.3 4.4-4.8 0-2.3-1.6-4.2-3.8-4.7V7.8c0-.8.7-1.5 1.5-1.5.4 0 .8.2 1.1.5.3.3.4.7.4 1.1v.6c0 .6.4 1 1 1s1-.4 1-1v-.6c0-.8-.3-1.6-.9-2.2z" /></svg>;
      }
  }
};

const LuxuryMenuGrid = ({ activeCategory, dietaryPreference }) => {
  const filteredMenu = menuData.filter(item => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const dietaryMatch = dietaryPreference === "All" || item.type === dietaryPreference;
    return categoryMatch && dietaryMatch;
  });

  return (
    <section className="py-24 bg-bg border-b border-luxury">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact 3 or 4 column grid for premium menu view */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredMenu.length > 0 ? (
              filteredMenu.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group relative flex flex-col bg-[#0a0a0a] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 rounded-lg overflow-hidden shadow-2xl mx-auto w-full max-w-[320px]"
                >
                  {/* Image Section - Decreased Size */}
                  <div className="relative h-44 w-full overflow-hidden z-10 border-b-[0.5px] border-[#d4af37]/30">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 filter group-hover:brightness-110 opacity-90"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Top Left Badges exactly like the design */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.chefSpecial && (
                        <span className="bg-[#D4AF37] text-black px-2 py-1 text-[8px] uppercase tracking-[0.2em] font-bold flex items-center gap-1 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                          SPECIAL
                        </span>
                      )}
                      {item.bestSeller && (
                        <span className="bg-black/60 backdrop-blur-sm border border-[#D4AF37]/70 text-[#D4AF37] px-2 py-1 text-[8px] uppercase tracking-[0.2em] font-bold shadow-md">
                          POPULAR
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="relative z-20 p-5 flex flex-col flex-grow bg-[#0a0a0a]">
                    
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.type === 'Veg' ? 'bg-[#00b050] shadow-[0_0_6px_rgba(0,176,80,0.6)]' : 'bg-[#ff0000] shadow-[0_0_6px_rgba(255,0,0,0.6)]'}`}></span>
                      <span className="text-[#a0a0a0] text-[8px] tracking-[0.25em] uppercase font-semibold">{item.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-light text-[#f0f0f0] group-hover:text-[#D4AF37] transition-colors duration-500 mb-1">
                      {item.name}
                    </h3>
                    
                    {/* Exact Decorative Elegant Divider */}
                    <div className="flex items-center justify-center gap-2 my-2 opacity-60">
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]/50 flex-1"></div>
                      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[#D4AF37]" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" stroke="none" fill="currentColor" opacity="0.5"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                      </svg>
                      <div className="h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]/50 flex-1"></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#888] font-light leading-relaxed mb-6 text-[11px] flex-grow opacity-90 group-hover:opacity-100 transition-opacity min-h-[48px]">
                      {item.desc}
                    </p>

                    {/* Bottom Centered Circular Icon / Buttons */}
                    <div className="flex items-center justify-center gap-3 pt-3 mt-auto">
                      <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                        {getCategoryIcon(item.category, item.type)}
                      </div>
                      
                      <div className="flex-1 flex gap-2">
                        <a 
                          href="https://www.swiggy.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 flex justify-center items-center py-2 bg-transparent border border-[#fc8019]/20 hover:border-[#fc8019] hover:bg-[#fc8019]/5 transition-all duration-300 rounded-sm group/btn"
                        >
                           <svg viewBox="0 0 120 30" className="h-2 text-[#fc8019] opacity-70 group-hover/btn:opacity-100 transition-all">
                             <text x="60" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="24" fill="currentColor">SWIGGY</text>
                           </svg>
                        </a>
                        <a 
                          href="https://www.zomato.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 flex justify-center items-center py-2 bg-transparent border border-[#cb202d]/20 hover:border-[#cb202d] hover:bg-[#cb202d]/5 transition-all duration-300 rounded-sm group/btn"
                        >
                           <svg viewBox="0 0 120 30" className="h-2 text-[#cb202d] opacity-70 group-hover/btn:opacity-100 transition-all overflow-visible">
                             <text x="60" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontStyle="italic" fontSize="26" fill="currentColor">zomato</text>
                           </svg>
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-32 border border-luxury bg-cream/5"
              >
                <Search size={32} strokeWidth={1} className="text-primary mx-auto mb-6 opacity-50" />
                <h3 className="text-2xl font-heading font-light text-white mb-4">No culinary creations found</h3>
                <p className="text-text-muted font-light">Please select another category to explore our menu.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LuxuryMenuGrid;
