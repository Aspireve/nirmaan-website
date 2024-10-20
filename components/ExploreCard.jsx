'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = React.memo(
  ({ id, imgUrl, title, index, active, handleClick }) => (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onMouseEnter={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className={`rounded-[24px] ${active !== id ? 'opacity-40' : ''}`}
        priority
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bg-gradient-to-b from-transparent from-10% to-black bottom-0 p-8 flex w-full h-full justify-end flex-col rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} justify-end w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <Image
              src="/logo1.png"
              alt="headset"
              layout="intrinsic"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Our Domain
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            doloremque temporibus maiores corrupti, ducimus libero est deleniti
            recusandae eveniet dolores.
          </p>
        </div>
      )}
    </motion.div>
  ),
);

export default ExploreCard;
