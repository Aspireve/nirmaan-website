'use client';

import Image from 'next/image';
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
      <CardSpotlight className="h-full md:w-96 w-full z-10">
        <div className="inset-0 z-20 md:p-10 p-4 h-full">
          <Image
            src="https://utfs.io/f/O1Z0nCiJ5QIDdM1Z1XH4DOMa8I9UWlQVYjyANzp0fRSLxi65"
            alt="Anjanikumar Dubey"
            width={500} // Replace with the actual width of your image
            height={250} // Replace with the actual height of your image
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
        <div className="relative w-full lg:h-[550px] h-auto min-h-[210px] rounded-2xl group">
          <Image
            src="https://utfs.io/f/O1Z0nCiJ5QIDMq07NBIf4DjC8kXy3BPdxYwe0g1FLOUGVRnQ"
            alt="nirmaan pod"
            width={500} // Replace with the actual width of your image
            height={500} // Replace with the actual height of your image
            className="w-full h-full object-fill rounded-2xl transition-transform duration-1000 scale-110 group-hover:scale-100"
          />
          <img
            src="https://utfs.io/f/O1Z0nCiJ5QIDOpIHleiJ5QIDy7LoZXzKY1vc4k2ba9gVmGep"
            alt="nirmaan pod"
            className="absolute top-0 left-0 w-full h-full object-fill rounded-2xl transition-transform duration-1000 scale-110 group-hover:scale-125"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
