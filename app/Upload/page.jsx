"use client";

import { Navbar } from "../../components";
import Footer from "../../components/Footer";
import UploadForm from "../../components/UploadForm";

function page() {
  return (
    <>
      <div className="w-screen h-full bg-black">
        <Navbar />
        <UploadForm />

        <Footer />
      </div>
    </>
  );
}
export default page;