'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const scrollerContent = Array.from(scroller.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scroller.appendChild(duplicatedItem);
      });
    }
  }, [items]);

  const animationDuration = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s';
  const animationDirection = direction === 'left' ? 'forwards' : 'reverse';

  return (
    <div className={cn('relative z-20 overflow-hidden', className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
        style={{
          animation: `scroll ${animationDuration} linear infinite ${animationDirection}`,
        }}
      >
        {items.map((item, index) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 md:w-[350px] bg-white/80"
            key={index}
          >
            <div className="relative">
              <img
                src={`/images/${item.image}`}
                alt={item.title}
                className="w-full h-64 object-cover rounded-ss-2xl rounded-se-2xl block"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black rounded-ss-2xl rounded-se-2xl" />
              <p className="absolute top-3 right-5 text-white text-base z-10">
                {item.date.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>

            <blockquote className="px-10 py-7">
              <span className="relative z-20 font-bold text-xl text-black">
                {item.title}
              </span>
              <div className="relative z-20 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-800 font-normal">
                    {item.caption}
                  </span>
                  <p className="text-black text-base mt-2">
                    <span className="font-bold">Posted by:</span>{' '}
                    {item.username}
                  </p>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
