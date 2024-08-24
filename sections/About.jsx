"use client";

import React from "react";
import WobbleCard from "./WobbleCard";
import { TitleText, TypingText } from "../components";

const About = () => (
  <>
    <TypingText title="About Us" textStyles="text-center" />
    <TitleText title={<>What is Nirmaan Hyperloop</>} textStyles="text-center" />
    <WobbleCard />
  </>
);

export default About;
