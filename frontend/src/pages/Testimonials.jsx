import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote, Video, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SectionHeader = ({ title, subtitle }) => (
  <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-24">
    <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">~ {subtitle} ~</span>
    <h2 className="text-4xl md:text-6xl font-heading font-light text-white">{title}</h2>
    <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-8"></div>
  </motion.div>
);

const Testimonials = () => {
  const allReviews = [
    { name: "Priya Sharma", type: "Google Review", rating: 5, text: "The most authentic Indian food I have ever tasted outside of my grandmother's kitchen. The luxury ambience is a bonus!" },
    { name: "Rahul Verma", type: "Food Critic", rating: 5, text: "A masterful display of spices and traditional cooking methods. The Mutton Biryani is absolute perfection." },
    { name: "Ananya Desai", type: "Family Dinner", rating: 5, text: "We celebrated our parent's 50th anniversary here. The staff made us feel like royalty. Unforgettable experience." },
    { name: "Karan Singh", type: "Corporate Event", rating: 5, text: "Hosted our annual company dinner here. Flawless execution, brilliant food, and top-tier service." },
    { name: "Neha Gupta", type: "Celebrity", rating: 5, text: "My absolute favorite spot in the city. The Dal Makhani is to die for!" },
    { name: "Amit Patel", type: "Google Review", rating: 4, text: "Great food, premium feel. Highly recommend reserving a table in advance because they are always booked." },
    { name: "Sneha Reddy", type: "Private Dining Experience", rating: 5, text: "They went out of their way to make our private anniversary dinner absolutely magical. Thank you Taste of Home!" },
    { name: "Vikram Malhotra", type: "Food Blogger", rating: 5, text: "A 5-star experience from the moment you walk through the doors." },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-bg min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Testimonials | Taste of Home</title>
        <meta name="description" content="Read what our guests have to say about their royal dining experience." />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Stunning Hero */}
      <div className="relative pt-32 pb-40 flex items-center justify-center min-h-[60vh] overflow-hidden mb-24 border-b border-[#d4af37]/20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000" alt="Restaurant Interior" className="w-full h-full object-cover transform scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#d4af37] tracking-[0.3em] uppercase text-[10px] font-bold mb-6 block drop-shadow-md">
            ~ The Legacy ~
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-6xl md:text-8xl font-heading font-light mb-6 text-white drop-shadow-lg">
            Guest Stories
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-lg text-[#cccccc] font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Don't just take our word for it. Hear from the thousands of happy families who have dined with us and experienced our authentic royal ambience.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video Testimonial Placeholder */}
        <section className="mb-32">
           <SectionHeader title="Watch Our Stories" subtitle="Featured Reviews" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
              ].map((img, i) => (
                <div key={i} className="relative aspect-video bg-bg border border-luxury overflow-hidden group cursor-pointer">
                  <img src={img} alt="Video Thumbnail" className="w-full h-full object-cover filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border border-primary text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-bg transition-colors duration-500">
                      <Video size={24} strokeWidth={1} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white z-20">
                    <h4 className="font-heading font-light text-2xl tracking-wide mb-1">The Royal Experience</h4>
                    <p className="text-primary text-xs uppercase tracking-widest font-semibold">Family Dinner</p>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* Written Reviews */}
        <section>
          <SectionHeader title="Wall of Love" subtitle="Customer Reviews" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allReviews.map((rev, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }} 
                className="bg-[#0a0a0a] px-6 py-6 rounded-lg border border-[#d4af37]/30 h-full flex flex-col relative group hover:border-[#d4af37]/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-2xl items-center text-center"
              >
                {/* Subtle Decorative Watermark */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-[#d4af37] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6">
                  {idx % 4 === 0 && <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>}
                  {idx % 4 === 1 && <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.8 4.2c-.6-.6-1.5-.9-2.4-.9-1.9 0-3.5 1.6-3.5 3.5v.3c-2.4 1.3-4 3.9-4 6.9 0 2.8 1.4 5.3 3.5 6.8v.7c0 .6.4 1 1 1s1-.4 1-1v-2c2.5-.2 4.4-2.3 4.4-4.8 0-2.3-1.6-4.2-3.8-4.7V7.8c0-.8.7-1.5 1.5-1.5.4 0 .8.2 1.1.5.3.3.4.7.4 1.1v.6c0 .6.4 1 1 1s1-.4 1-1v-.6c0-.8-.3-1.6-.9-2.2z"/></svg>}
                  {idx % 4 === 2 && <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12h16M4 12a8 8 0 0016 0H4z"/></svg>}
                  {idx % 4 === 3 && <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 10h12v4a6 6 0 01-12 0v-4z"/></svg>}
                </div>

                <div className="text-[#d4af37] text-4xl font-serif leading-none mt-1 mb-1 font-bold opacity-90">“</div>
                
                <div className="flex justify-center text-[#d4af37] mb-4 gap-1">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} fill="currentColor" stroke="none" size={12}/>)}
                </div>
                
                <p className="text-[#cccccc] font-serif text-[12px] leading-[1.6] mb-5 flex-grow px-1">
                  {rev.text}
                </p>
                
                <div className="flex flex-col items-center mt-auto w-full z-10 relative">
                  <h4 className="text-[28px] text-[#d4af37] mb-2 font-light tracking-wide" style={{ fontFamily: "'Great Vibes', cursive" }}>{rev.name}</h4>
                  
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-2"></div>
                  
                  <p className="text-[8px] text-[#888888] font-bold tracking-[0.25em] uppercase">{rev.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
};

export default Testimonials;
