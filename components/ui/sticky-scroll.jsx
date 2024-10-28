'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { teamMentors } from '../../constants';
import TeamMember from '../Teammember';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isSticky, setIsSticky] = React.useState(false); // New state to track sticky status
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'];
  const linearGradients = [
    'linear-gradient(to bottom right, transparent, transparent)',
    'linear-gradient(to bottom right, transparent, transparent)',
    'linear-gradient(to bottom right, transparent, transparent)',
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={`h-[100vh] overflow-y-auto flex justify-center relative max-w-7xl mx-auto space-x-10 rounded-md p-10 scrollbar-hide ${isSticky ? 'fixed top-0' : ''}`} // Conditional class for sticky
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-4/6">
        <div className="flex-1 w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="h-full my-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100 flex flex-wrap -mx-4 mb-6 justify-center min-h-[50vh]"
              >
                {item?.arr?.map((member) => (
                  <TeamMember key={index} {...member} />
                ))}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          'hidden lg:block h-60 w-2/6 rounded-md bg-white sticky top-10 overflow-hidden',
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
