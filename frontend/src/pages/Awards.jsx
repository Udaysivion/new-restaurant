import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal, Map } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SectionHeader = ({ title, subtitle }) => (
  <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-24 relative z-10">
    <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">~ {subtitle} ~</span>
    <h2 className="text-4xl md:text-6xl font-heading font-light text-white">{title}</h2>
    <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-8"></div>
  </motion.div>
);

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
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

const Awards = () => {
  const awardsData = [
    { title: "Restaurant of the Year", org: "National Culinary Board", year: "2024", desc: "Awarded for outstanding contribution to the hospitality industry.", icon: <Trophy size={40}/> },
    { title: "Best Family Dining Experience", org: "Times Food Awards", year: "2023", desc: "Recognized as the top destination for family gatherings in the state.", icon: <Star size={40}/> },
    { title: "Master Chef Excellence", org: "Global Kitchen Awards", year: "2021", desc: "Our Head Chef Rajeev Sharma was honored for his authentic recipes.", icon: <Award size={40}/> },
    { title: "Top 50 Premium Restaurants", org: "Culinary Excellence Guide", year: "2020", desc: "Listed among the top 50 most luxurious restaurants in the country.", icon: <Medal size={40}/> },
  ];

  const pressMentions = [
    { pub: "The Daily Gastronome", quote: "A revolution in traditional Indian luxury dining." },
    { pub: "Elite Lifestyle Magazine", quote: "Where every meal feels like a royal banquet." },
    { pub: "Food Network", quote: "The absolute best Mutton Biryani you will ever eat." },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-bg min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Awards & Recognition | Taste of Home</title>
        <meta name="description" content="Explore our awards, press mentions, and certificates of culinary excellence." />
      </Helmet>

      {/* Hero */}
      <div className="bg-bg text-white py-32 relative overflow-hidden border-b border-luxury mb-24">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10 filter grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576615278693-e407886477d9?auto=format&fit=crop&q=80&w=2000')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <Trophy size={48} className="text-primary mx-auto mb-8 opacity-50" strokeWidth={1} />
          <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">~ Recognition ~</span>
          <h1 className="text-5xl md:text-7xl font-heading font-light mb-6 text-white">Hall of Fame</h1>
          <p className="text-lg text-text-muted font-light max-w-2xl mx-auto">Celebrating years of hard work, passion, and culinary excellence.</p>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-10"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics */}
        <section className="mb-32">
          <div className="bg-transparent p-10 md:p-16 border border-luxury flex flex-col md:flex-row justify-around items-center gap-10 text-center relative overflow-hidden group hover:border-primary transition-colors duration-500">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
             
             <div className="relative z-10">
               <h4 className="text-6xl font-heading font-light text-primary mb-4"><AnimatedCounter end={15} suffix="+" /></h4>
               <p className="text-white font-light tracking-[0.2em] uppercase text-xs">National Awards</p>
             </div>
             <div className="hidden md:block w-px h-24 bg-luxury relative z-10"></div>
             <div className="relative z-10">
               <h4 className="text-6xl font-heading font-light text-primary mb-4"><AnimatedCounter end={50} suffix="+" /></h4>
               <p className="text-white font-light tracking-[0.2em] uppercase text-xs">Media Mentions</p>
             </div>
             <div className="hidden md:block w-px h-24 bg-luxury relative z-10"></div>
             <div className="relative z-10">
               <h4 className="text-6xl font-heading font-light text-primary mb-4"><AnimatedCounter end={5} suffix=" Stars" /></h4>
               <p className="text-white font-light tracking-[0.2em] uppercase text-xs">Average Rating</p>
             </div>
          </div>
        </section>

        {/* Awards Timeline */}
        <section className="mb-32">
          <SectionHeader title="Achievements" subtitle="Trophies" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {awardsData.map((award, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="bg-transparent p-8 border border-luxury hover:border-primary transition-all duration-500 group flex flex-col sm:flex-row items-start gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 transform translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors duration-500"></div>
                
                <div className="w-20 h-20 border border-luxury text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-bg transition-colors duration-500 relative z-10">
                  {award.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-heading font-light text-white leading-tight">{award.title}</h3>
                    <span className="border border-primary text-primary px-3 py-1 text-[10px] tracking-widest uppercase flex-shrink-0">{award.year}</span>
                  </div>
                  <p className="text-primary font-semibold text-xs tracking-wider uppercase mb-4">{award.org}</p>
                  <p className="text-text-muted font-light leading-relaxed text-sm">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Press Mentions */}
        <section>
           <SectionHeader title="Press Coverage" subtitle="In The Media" />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressMentions.map((press, i) => (
                <div key={i} className="bg-transparent p-10 text-center border border-luxury hover:border-primary transition-colors duration-500 group">
                   <Star className="text-primary mx-auto mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500" size={32} strokeWidth={1} />
                   <p className="text-text-muted italic font-light leading-relaxed mb-8 text-sm">"{press.quote}"</p>
                   <h4 className="text-white font-light tracking-[0.2em] uppercase text-xs">— {press.pub}</h4>
                </div>
              ))}
           </div>
        </section>

      </div>
    </motion.div>
  );
};

export default Awards;
