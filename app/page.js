import { Footer } from '../components';
import {
  About,
  Explore,
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
      <Explore />
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
