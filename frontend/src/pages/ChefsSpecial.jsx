import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import MenuHero from '../components/menu/MenuHero';
import ChefsCuratedCollection from '../components/menu/ChefsCuratedCollection';
import TodaysSpecial from '../components/menu/TodaysSpecial';
import SeasonalCollections from '../components/menu/SeasonalCollections';
import SignatureDishShowcase from '../components/menu/SignatureDishShowcase';
import PairingExperience from '../components/menu/PairingExperience';
import WeekendExperience from '../components/menu/WeekendExperience';
import IntimateFeasts from '../components/menu/IntimateFeasts';

const ChefsSpecial = () => {
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
        <title>Chef's Special | Taste of Home | Michelin Star Experience</title>
        <meta name="description" content="Immerse yourself in our Executive Chef's most exclusive curated collections and seasonal symphonies." />
      </Helmet>

      {/* SECTION 1: Luxury Cinematic Menu Hero */}
      <MenuHero />

      {/* SECTION 2: Chef's Curated Collection (Premium top 4) */}
      <ChefsCuratedCollection />

      {/* SECTION 3: Today's Special Experience */}
      <TodaysSpecial />

      {/* SECTION 4: Seasonal Collection (Fashion style layout) */}
      <SeasonalCollections />

      {/* SECTION 5: Signature Dish Showcase */}
      <SignatureDishShowcase />

      {/* SECTION 6: Curated Pairings */}
      <PairingExperience />

      {/* SECTION 7: Intimate Feasts */}
      <IntimateFeasts />

      {/* SECTION 8: Weekend Degustation Banner */}
      <WeekendExperience />

    </motion.div>
  );
};

export default ChefsSpecial;
