import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Leaf, Clock, MapPin, CheckCircle, Utensils, Heart, ChevronRight, Play, Award } from 'lucide-react';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { FamilyCombos, RestaurantExperience, FounderSection, JourneyTimeline, FestivalBanner } from '../components/home/ExtraSections';
import { AwardsRecognition, TestimonialsCarousel, InstagramGallery } from '../components/home/ExtraSections2';
import { TasteOfHomeExperience } from '../components/home/TasteOfHomeExperience';
import { SignatureExperiences } from '../components/home/SignatureExperiences';
import { LuxuryStatistics } from '../components/home/LuxuryStatistics';
import { FounderEditorial, MasterChefEditorial } from '../components/home/FounderChefEditorials';
import { SignatureCollection } from '../components/home/Collections';
import { LuxurySpaces, EventsAndCelebrations } from '../components/home/SeasonalAndSpaces';
import FeaturedAwards from '../components/home/FeaturedAwards';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// -- Animation Variants --
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// -- Section Components --
const SectionHeader = ({ title, subtitle }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="text-center mb-24">
      <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">~ {subtitle} ~</span>
      <h2 className="text-4xl md:text-6xl font-heading font-light text-white">{title}</h2>
      <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-8"></div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-bg border-b border-luxury">
      {/* Background Image with Deep Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2070')" }}
      ></motion.div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg/90 via-bg/40 to-bg"></div>

      {/* Luxury Dust/Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-30">
         <motion.div animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full filter blur-[1px]"></motion.div>
         <motion.div animate={{ y: [0, -60, 0], opacity: [0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary rounded-full filter blur-[1px]"></motion.div>
         <motion.div animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full filter blur-[1px]"></motion.div>
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-4 text-center mt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }}>
          <span className="inline-block tracking-[0.4em] text-primary text-xs font-semibold mb-8 uppercase">
            A Michelin-Star Experience
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4 }} className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-white mb-8 leading-[1.1] tracking-wide">
          Timeless Culinary <br/><i className="font-serif text-primary">Excellence</i>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.8 }} className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Discover a world where traditional heritage meets modern luxury, crafted with the finest ingredients and unparalleled hospitality.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1 }} className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/reserve" className="w-full sm:w-auto border border-primary text-primary px-10 py-4 font-semibold text-sm tracking-widest uppercase hover:bg-primary hover:text-bg transition-all duration-500">
            Reserve Table
          </Link>
          <Link to="/menu#filters" className="w-full sm:w-auto text-white px-10 py-4 font-semibold text-sm tracking-widest uppercase hover:text-primary transition-colors flex items-center justify-center gap-2 group">
            Explore Menu <ChevronRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-30">
        <span className="text-text-muted text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ height: [0, 40, 0], opacity: [0, 1, 0], top: [0, 20, 40] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-px bg-primary relative h-10"></motion.div>
      </motion.div>
    </section>
  );
};

const HighlightBar = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const highlights = [
    { text: "Michelin Inspired Recipes" },
    { text: "100% Fresh Ingredients" },
    { text: "Award Winning Chef" },
    { text: "Luxury Dining Space" }
  ];

  return (
    <section className="border-b border-luxury bg-cream py-6 relative z-30">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {highlights.map((h, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-center gap-3">
              <Star size={12} className="text-primary" />
              <span className="text-text-muted text-xs tracking-[0.1em] uppercase">{h.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SpecialDishes = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const dishes = [
    { name: "Royal Mutton Biryani", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", type: "Signature", desc: "Slow-cooked organic basmati rice with tender grass-fed mutton, infused with Kashmiri saffron and 24-karat edible gold dust." },
    { name: "Paneer Butter Masala", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800", type: "Vegetarian", desc: "Artisanal cottage cheese in a rich, creamy heirloom tomato gravy topped with fresh double cream and roasted cashews." },
    { name: "Tandoori Lobster Platter", img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800", type: "Chef's Special", desc: "Freshly caught lobster marinated in a secret blend of ground spices and cooked to perfection in a traditional clay oven." },
    { name: "Malai Kofta", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", type: "Vegetarian", desc: "Hand-rolled potato and paneer dumplings deep-fried and served in a luscious, silky cashew nut and almond gravy." }
  ];

  return (
    <section className="py-32 bg-bg border-b border-luxury relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="Signature Menu" subtitle="Chef's Specials" />
        
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-20"
          >
            {dishes.map((dish, idx) => (
              <SwiperSlide key={idx}>
                <div className="group h-full flex flex-col bg-cream/30 border border-luxury hover:border-primary/50 transition-colors duration-500">
                  <div className="relative h-80 overflow-hidden">
                    <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-75 group-hover:brightness-100" />
                    <div className="absolute top-4 left-4 bg-bg/80 backdrop-blur-md px-3 py-1 border border-luxury text-primary text-[10px] tracking-widest uppercase font-bold">
                      {dish.type}
                    </div>
                  </div>
                    <div className="p-8 flex-grow flex flex-col bg-bg border-t border-luxury">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-semibold mb-2 block">{dish.type}</span>
                          <h3 className="text-3xl font-heading font-light text-white group-hover:text-primary transition-colors leading-tight">{dish.name}</h3>
                        </div>
                      </div>
                      <p className="text-text-muted text-sm font-light leading-relaxed mb-10 flex-grow">{dish.desc}</p>
                      <div className="flex gap-4 mt-auto pt-6 border-t border-luxury relative z-10">
                         <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center border border-luxury py-3 hover:border-[#fc8019] hover:bg-[#fc8019]/5 transition-all duration-500 bg-bg/50 group">
                           <svg viewBox="0 0 100 30" className="h-4 md:h-5 text-text-muted group-hover:text-[#fc8019] transition-colors">
                             <text x="50" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="currentColor">SWIGGY</text>
                           </svg>
                         </a>
                         <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center border border-luxury py-3 hover:border-[#cb202d] hover:bg-[#cb202d]/5 transition-all duration-500 bg-bg/50 group">
                           <svg viewBox="0 0 100 30" className="h-4 md:h-5 text-text-muted group-hover:text-[#cb202d] transition-colors">
                             <text x="50" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontStyle="italic" fontSize="26" fill="currentColor">zomato</text>
                           </svg>
                         </a>
                      </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ end, duration = 3, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutPreview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-32 bg-bg border-b border-luxury relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Images - Editorial Layout */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease: "easeOut" }} className="w-full lg:w-1/2 relative">
            <div className="relative z-10 overflow-hidden border border-luxury">
              <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1000" alt="Restaurant Interior" className="w-full h-[600px] object-cover transition-all duration-1000" />
            </div>
            {/* Minimalist Decor */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border border-primary z-0 hidden md:block"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="w-full lg:w-1/2">
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">~ Our Story ~</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-8 leading-tight">
              A Legacy of <br/><i className="font-serif text-primary">Culinary Art</i>
            </h2>
            <div className="w-12 h-px bg-primary mb-8"></div>
            <p className="text-text-muted mb-6 leading-relaxed font-light text-lg">
              Founded by visionary chefs with a passion for authentic Indian cuisine, Taste of Home blends traditional recipes with an avant-garde dining experience. 
            </p>
            <p className="text-text-muted mb-12 leading-relaxed font-light text-lg">
              Every dish tells a story of our heritage, meticulously prepared using handpicked ingredients, custom-ground spices, and techniques that have stood the test of time.
            </p>
            
            <div className="grid grid-cols-2 gap-10 mb-12 border-t border-luxury pt-10">
              <div>
                <h4 className="text-5xl font-heading font-light text-primary mb-3">
                  <AnimatedCounter end={20} duration={2} suffix="+" />
                </h4>
                <p className="text-text-muted text-xs tracking-widest uppercase">Years of Heritage</p>
              </div>
              <div>
                <h4 className="text-5xl font-heading font-light text-primary mb-3">
                  <AnimatedCounter end={50} duration={2} suffix="K" />
                </h4>
                <p className="text-text-muted text-xs tracking-widest uppercase">Loyal Guests</p>
              </div>
            </div>

            <Link to="/about" className="inline-block border border-luxury text-white px-10 py-4 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-bg transition-all duration-500">
              Read the Full Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[700px] border-t border-luxury">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/80 to-bg"></div>
      
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">~ Your Table Awaits ~</span>
        <h2 className="text-5xl md:text-7xl font-heading font-light text-white mb-8">Ready to Experience <br/><i className="font-serif text-primary">Luxury?</i></h2>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mb-8"></div>
        <p className="text-xl text-text-muted mb-6 font-light max-w-2xl mx-auto">Join us for an unforgettable dining experience or enjoy our premium meals delivered straight to your door.</p>
        
        {/* Real-Time Contextual Details */}
        <div className="mb-12 border border-luxury bg-bg/50 backdrop-blur-md p-6 inline-block">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-widest uppercase text-text-muted">
             <span className="flex items-center gap-2"><Clock size={12} className="text-primary" /> Open Daily: 18:00 - 23:30</span>
             <span className="flex items-center gap-2"><MapPin size={12} className="text-primary" /> Valet Parking Available</span>
             <span className="flex items-center gap-2"><Award size={12} className="text-primary" /> Dress Code: Smart Casual</span>
          </div>
          <div className="mt-4 pt-4 border-t border-luxury/50 flex items-center justify-center gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-white text-[10px] tracking-widest uppercase">Limited seating available for this weekend. Reserve early.</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/reserve" className="border border-primary text-primary px-10 py-4 font-semibold text-xs tracking-widest uppercase hover:bg-primary hover:text-bg transition-all duration-500">
            Reserve a Table
          </Link>
          <Link to="/menu#filters" className="border border-luxury text-white px-10 py-4 font-semibold text-xs tracking-widest uppercase hover:border-white transition-all duration-500">
            View the Menu
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-bg"
    >
      <Helmet>
        <title>Taste of Home | Premium Restaurant</title>
        <meta name="description" content="Experience premium family dining at Taste of Home." />
      </Helmet>
      
      <HeroSection />

      {/* --- NEW PHASE 1 LUXURY SECTIONS --- */}
      <TasteOfHomeExperience />
      <SignatureExperiences />
      <LuxuryStatistics />
      <FounderEditorial />
      <MasterChefEditorial />
      <FeaturedAwards />
      <SignatureCollection />
      <LuxurySpaces />
      <EventsAndCelebrations />
      {/* --------------------------------- */}

      <FamilyCombos />
      <JourneyTimeline />
      <AboutPreview />
      <AwardsRecognition />
      <TestimonialsCarousel />
      <InstagramGallery />
      <FestivalBanner />
      <CTASection />
      
    </motion.div>
  );
};

export default Home;
