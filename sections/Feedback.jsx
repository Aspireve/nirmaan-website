"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import EarthCanvas from "../components/canvas/Earth";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Upkar Chaurasiya
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Team Lead
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “Hyperloop, a visionary leap in transportation, envisions sleek
          capsules zipping through vacuum tubes at incredible speeds. A
          game-changer for city connections, it promises a future of efficient,
          high-speed travel.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="pt-15 relative flex-1 flex justify-center items-center bg-white bg-opacity-30 rounded-2xl "
      >
        <img
          src="/pod1.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-fill rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
