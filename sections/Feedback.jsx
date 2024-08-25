'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { CardSpotlight } from '../components/ui/spotlight';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <CardSpotlight className="h-auto w-96 z-10">
        <div className="absolute inset-0 z-20 p-10">
          <img
            src="/team/Anjanikumar-Dubey.jpg"
            className="h-1/2 w-full object-cover"
          />
          <div className="feedback-gradient z-20" />
          <div>
            <h4 className="mt-[24px] font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Anjanikumar Dubey
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Team Lead
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[14px] text-[14px] text-white">
            “Hyperloop, a visionary leap in transportation, envisions sleek
            capsules zipping through vacuum tubes at incredible speeds. A
            game-changer for city connections, it promises a future of
            efficient, high-speed travel.”
          </p>
        </div>
      </CardSpotlight>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="pt-15 relative flex-1 flex justify-center items-center overflow-hidden bg-white bg-opacity-30 rounded-2xl "
      >
        <img
          src="/pod1.png"
          alt="nirmaan pod"
          className="w-full lg:h-[550px] h-auto min-h-[210px] object-fill rounded-2xl hover:scale-125 duration-1000 transition-all"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
