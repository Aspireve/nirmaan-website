'use client';

import React from 'react';
import { WobbleCards } from './WobbleCard';
import { TitleText, TypingText } from '../components';
import { LampContainer } from '../components/ui/highlights';

const About = () => (
  <LampContainer>
    <TypingText title="About Us" textStyles="text-center" />
    <TitleText
      title={<>What is Nirmaan Hyperloop</>}
      textStyles="text-center"
    />
    <WobbleCards />
  </LampContainer>
);

export default About;
