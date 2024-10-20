'use client';

import { Footer } from '../components';
import {
  About,
  Feedback,
  Hero,
  Insights,
  WhatsNew,
} from '../sections';

const Page = () => (
  <>
    <Hero />
    <div className="relative">
      <About />
    </div>
    <div className="relative">
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <Feedback />
    </div>
    <Footer />
  </>
);

export default Page;
