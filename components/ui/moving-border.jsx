'use client';

import React, { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { cn } from '../../utils/cn';

let pathLength = null;

export const Button = ({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) => (
  <Component
    className={cn(
      'bg-transparent relative text-xl p-[1px] overflow-hidden',
      containerClassName,
    )}
    style={{ borderRadius }}
    aria-label="button"
    role="button"
    tabIndex={0}
    {...otherProps}
  >
    <div
      className="absolute inset-0"
      style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
    >
      <MovingBorder duration={duration} rx="15%" ry="15%">
        <div className={cn('h-8 w-8 rounded-full bg-[#c37cd4]', borderClassName)} />
      </MovingBorder>
    </div>

    <div
      className={cn(
        'relative bg-transparent border backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased',
        className,
      )}
      style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
    >
      {children}
    </div>
  </Component>
);

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = '10%',
  ry = '10%',
  ...otherProps
}) => {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    if (!pathLength && pathRef.current) {
      pathLength = pathRef.current.getTotalLength();
    }
    if (pathLength) {
      const pxPerMillisecond = pathLength / duration;
      progress.set((time * pxPerMillisecond) % pathLength);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

  const transform = useMotionTemplate`
    translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)
  `;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          stroke="skyblue"
          strokeWidth="0"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
