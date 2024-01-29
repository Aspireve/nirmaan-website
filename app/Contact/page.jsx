import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import StarsCanvas from "../../components/Starscanvas";

function page() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        
        <div className="z-0">
        <StarsCanvas style={{zIndex:0}} />
        </div>
        <div className="z-50"><ContactForm /></div>
        <Footer />
      </div>
    </>
  );
}

export default page;
