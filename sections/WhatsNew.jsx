'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex flex-col justify-center"
      >
        <TypingText title="| About Us" />
        <TitleText title={<>What is Nirmaan Hyperloop?</>} />
        <div className="mt-12 flex flex-wrap justify-between gap-6">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter} relative`}
        {...floatingAnimation}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-full h-full object-contain filter drop-shadow-[10px_20px_10px_rgba(255,255,255,0.20)]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
