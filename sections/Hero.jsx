"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="py-24 text-white bg-black">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center"
      style={{ zIndex: 5 }}
    >
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
        style={{ zIndex: 5 }}
      >
        Implementing the Future with
      </motion.h1>
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
        style={{ zIndex: 5 }}
      >
        Nirmaan Hyperloop
      </motion.h1>

      <motion.p
        className="text-2xl md:text-2xl mb-8 sm:p-2 md:p-2 hidden sm:flex justify-center italic"
        style={{ zIndex: 5 }}
      >
        Implementing the Future
      </motion.p>

      <motion.div className="flex justify-center">
        <a
          href="#explore"
          className="bg-white text-black font-bold py-2 px-6 rounded-full"
          style={{ zIndex: 5 }}
        >
          Explore Domains
        </a>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-2 relative"
      style={{ zIndex: 5 }}
    >
      <div className="absolute w-full h-full" style={{ zIndex: 5 }} />

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        src="/herorender.png"
        alt="hero_cover"
        className="w-full h-full object-fill mix-blend-multiply"
        style={{ zIndex: 5 }}
      />
    </motion.div>
  </section>
);

export default Hero;
