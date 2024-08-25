'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { Button } from '../components/ui/moving-border';

const Hero = () => {
  const heroTitle = useMemo(() => 'Nirmaan Hyperloop', []);
  const heroSubtitle = useMemo(() => 'Implementing the Future', []);

  return (
    <section className="py-24 text-white relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="text-6xl md:text-6xl lg:text-8xl font-bold mb-8 opacity-80"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          {heroTitle}
        </motion.h1>
        <motion.h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-65">
          {heroSubtitle}
        </motion.h1>

        <Button
          duration={2000}
          borderRadius="25rem"
          className="bg-white text-black font-bold py-2 px-6 rounded-full text-xl transition duration-300 ease-in-out transform border-2 hover:bg-transparent hover:text-white hover:shadow-lg"
        >
          Explore
        </Button>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.4, translateX: '100%' }}
        animate={{ opacity: 1, scale: 1, translateX: '0' }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mt-2"
      >
        <img
          src="/herorender.png"
          alt="hero_cover"
          className="w-full h-full object-fill mix-blend-multiply"
        />
      </motion.div> */}
    </section>
  );
};

export default Hero;
