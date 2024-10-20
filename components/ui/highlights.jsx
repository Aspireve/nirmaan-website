'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const LampContainer = ({ children, className }) => (
  <div
    className={cn(
      'relative flex flex-col bg-transparent items-center justify-start  w-full rounded-md z-40',
      className,
    )}
  >
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
      <motion.div
        initial={{ width: '2rem' }}
        whileInView={{ width: '20rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="absolute inset-auto z-30 h-36 w-80 top-0  rounded-full  bg-slate-400  opacity-25 blur-3xl"
      />
    </div>

    <div className="absolute z-50 flex top-0 pt-5 flex-col items-center px-5">
      {children}
    </div>
  </div>
);
