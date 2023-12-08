"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        We, at{" "}
        <span className="font-extrabold text-white">Nirmaan Hyperloop</span>,
        aim to develop and innovate new modes of transport. Founded in 2018, now
        a team of 40 creative minds from various engineering domains, Nirmaan
        Hyperloop aims to build a Globally recognizable Hyperloop pod. The team
        aims to research the entire{" "}
        <span className="font-extrabold text-white">Hyperloop Ecosystem</span>{" "}
        to bring this technology to reality as soon and as efficiently as
        possible. These Competitions provide us with a platform to present our
        skills. We look forward to more challenges in the future!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
