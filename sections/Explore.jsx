'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const handleClick = useCallback((worldId) => {
    setActive(worldId);
  }, []);

  return (
    <section className={styles.paddings} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col pt-10`}
      >
        <TypingText title="Our Domains" textStyles="text-center" />
        <TitleText title="Explore Our Domains" textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[40vh] gap-5">
          {exploreWorlds.map((world) => (
            <ExploreCard
              key={world.id}
              {...world}
              active={active}
              handleClick={() => handleClick(world.id)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
