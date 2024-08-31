import { Footer, TitleText, TypingText } from '../components';
import Contact from '../components/contact';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/testarea';
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
    <Contact />
    <Footer />
  </>
);

export default Page;
