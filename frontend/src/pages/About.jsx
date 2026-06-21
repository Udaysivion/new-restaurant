import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import AboutHero from '../components/about/AboutHero';
import FeaturedAwards from '../components/home/FeaturedAwards';
import OriginTimeline from '../components/about/OriginTimeline';
import AwardsTimeline from '../components/about/AwardsTimeline';
import FounderVision from '../components/about/FounderVision';
import CulinaryTeam from '../components/about/CulinaryTeam';
import OurPhilosophy from '../components/about/OurPhilosophy';
import FinalEmotionalCTA from '../components/about/FinalEmotionalCTA';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-bg min-h-screen"
    >
      <Helmet>
        <title>Our Story & Awards | Taste of Home | Michelin Star Experience</title>
        <meta name="description" content="Discover the legacy, philosophy, and culinary artistry behind Taste of Home's award-winning dining experience." />
      </Helmet>

      <AboutHero />
      <FeaturedAwards />
      <FounderVision />
      <OriginTimeline />
      <OurPhilosophy />
      <AwardsTimeline />
      <CulinaryTeam />
      <FinalEmotionalCTA />

    </motion.div>
  );
};

export default About;