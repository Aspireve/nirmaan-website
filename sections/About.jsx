'use client';

import React from 'react';
import { WobbleCards } from './WobbleCard';
import { TitleText, TypingText } from '../components';
import { LampContainer } from '../components/ui/highlights';

const About = () => (
  <div className="h-full mt-5">
    <LampContainer />
    <TypingText title="About Us" textStyles="text-center" />
    <TitleText
      title={<>What is Nirmaan Hyperloop</>}
      textStyles="text-center"
    />
    <WobbleCards />
  </div>
);

export default About;
