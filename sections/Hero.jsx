'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { heroNavVariants } from '../utils/motion';
import { Button } from '../components/ui/moving-border';

const Hero = () => {
  const heroTitle = useMemo(() => 'Nirmaan Hyperloop', []);
  const heroSubtitle = useMemo(() => 'Implementing the Future', []);

  return (
    <section className=" h-[95vh] text-white relative overflow-clip">
      <motion.div
        initial={{ opacity: 0, translateX: '200%' }}
        animate={{ opacity: 1, translateX: '0' }}
        transition={{ duration: 2, delay: 0.7 }}
        className="absolute w-full bottom-20  md:bottom-5  md:scale-100"
      >
        <img
          src="/herorender.png"
          alt="hero_cover"
          className="w-full h-fit brightness-[0.6] scale-[2] object-left md:scale-100 overflow-clip object-contain md:brightness-[0.45]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center absolute  w-full top-1/2 translate-y-[-65%] right-1/2 translate-x-[50%]"
      >
        <motion.h1
          variants={heroNavVariants}
          initial="hidden"
          whileInView="show"
          className="text-[50px] leading-[50px] md:text-6xl  lg:text-8xl font-bold mb-4 sm:mb-8 opacity-80 z-50"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          {heroTitle}
        </motion.h1>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-80"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
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
    </section>
    // <section className="py-20 text-white relative h-[80vh]  ">
    //   <motion.div
    //     initial={{ opacity: 0, scale: 1, translateX: '200%' }}
    //     animate={{ opacity: 1, scale: 1, translateX: '0' }}
    //     transition={{ duration: 2, delay: 0.7 }}
    //     className="mt-2 absolute bottom-0 right-0 w-full overflow-hidden md:-bottom-20 "
    //   >
    //     <img
    //       src="/herorender.png"
    //       alt="hero_cover"
    //       className="w-full h-full -translate-y-[10%] brightness-[1]  object-contain md:brightness-[0.45] scale-125"
    //     />
    //   </motion.div>
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6 }}
    //     className="max-w-4xl mx-auto text-center"
    //   >
    //     <motion.h1
    //       variants={heroNavVariants}
    //       initial="hidden"
    //       whileInView="show"
    //       className="text-6xl md:text-6xl lg:text-8xl font-bold mb-8 opacity-80 z-50"
    //       style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
    //     >
    //       {heroTitle}
    //     </motion.h1>
    //     <motion.h1
    //       className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-80"
    //       style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
    //     >
    //       {heroSubtitle}
    //     </motion.h1>

    //     <Button
    //       duration={2000}
    //       borderRadius="25rem"
    //       className="bg-white text-black font-bold py-2 px-6 rounded-full text-xl transition duration-300 ease-in-out transform border-2 hover:bg-transparent hover:text-white hover:shadow-lg"
    //     >
    //       Explore
    //     </Button>
    //   </motion.div>
    // </section>
  );
};

export default Hero;
