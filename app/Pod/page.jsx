"use client";
import React from "react";
import { Navbar } from "../../components";
import Footer from "../../components/Footer";
import StarsCanvas from "../../components/Starscanvas";
import ImageTooltip from "../../components/podimage";
import ImageSlider from "../../components/ImageSlider";
import Stats from "../../components/Stats";

function Page() {
  return (
    <>
      <div className="w-screen h-full bg-black">
        <StarsCanvas />
        <Navbar />

        <div className="flex justify-center mt-10">
          {/* Left container with video */}
          <div className="relative w-1/2 rounded-2xl overflow-hidden ml-6 transform scale-80">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="podpage2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right container with text */}
          <div className="w-1/2 p-8 relative">
            <div className="text-white">
              <h2 className="text-3xl mb-4 font-semibold mt-3">
                Pushing the boundaries of innovation!
              </h2>
              <p className="text-lg italic">
                Nirmaan Hyperloop stands at the forefront of innovation,
                continually pushing boundaries in the realm of high-speed
                transportation. With an unwavering commitment to advancing
                technology, Nirmaan Hyperloop pioneers groundbreaking solutions
                that redefine the future of transportation.
              </p>
              <p className="text-lg italic">
                Fueled by a passion for efficiency and sustainability, the team
                tirelessly explores new horizons, ensuring that each stride
                brings us closer to a transformative and futuristic
                transportation landscape.
              </p>
            </div>
            {/* Down arrow SVG centered after text */}
            <a href="#podimage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-10" id="podimage">
          <ImageTooltip />
        </div>
        <div className="flex justify-center">
          <ImageSlider />
        </div>
        <Stats />
        <Footer />
      </div>
    </>
  );
}

export default Page;
