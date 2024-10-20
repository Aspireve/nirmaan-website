import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-box';
import { items } from '../constants/about.text';

export const WobbleCards = () => (
  <BentoGrid className="mx-auto max-w-4xl">
    {items.map((item, i) => (
      <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={item.header}
        className={
          i === 2
            ? 'md:col-span-2 flex flex-row-reverse items-center gap-5'
            : ''
        }
      />
    ))}
  </BentoGrid>
);
