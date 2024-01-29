import { Footer, Navbar } from "../components";
import { Post } from "../components/Post";
import StarsCanvas from "../components/Starscanvas";
import {
  About,
  Explore,
  Feedback,
  Hero,
  Insights,
  WhatsNew,
  GetStarted,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <StarsCanvas />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>

    <div className="relative">
      <Insights />
      <div className="gradient-03 z-0" />
      <Feedback />
    </div>
    <Footer />
    
  </div>
);

export default Page;
