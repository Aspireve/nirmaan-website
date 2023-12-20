import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

function page() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default page;
