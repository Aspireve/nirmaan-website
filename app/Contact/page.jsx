import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import StarsCanvas from "../../components/Starscanvas";

function page() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <StarsCanvas/>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default page;
