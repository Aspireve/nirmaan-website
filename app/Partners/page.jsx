"use client";
import { Navbar } from "../../components";
import Footer from "../../components/Footer";
import StarsCanvas from "../../components/Starscanvas";

function page() {
  return (
    <>
      <div className="w-screen h-full bg-black">
        <Navbar />
        <StarsCanvas/>
        <div className=" text-white">
        <div className="text-5xl flex justify-center font-semibold items-center pb-10 pt-5 text-white">
            <div className="bg-purple-500 w-20 h-3"></div>
            <div className="px-3">PARTNERS</div>
            
            <div className="bg-purple-500 w-20 h-3"></div>
        </div>
          <div className="text-center px-16 mb-10 text-lg">
            We would like to thank our sponsors for their interest in our
            Nirmaan Hyperloop. Your contribution makes it possible to continue
            making strides towards our goal of advancing a new mode of
            transport. We cannot succeed without the generosity of supporters
            like you. We are so fortunate to have such generous donors and we
            can never thank you enough for all the support you've shown us. We
            hope that we can count on your support in the upcoming years as
            well!
          </div>

          <div className="flex min-h-screen justify-center">
            <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
              {/* card */}
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="pheonix.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      Pheonix Contact
                    </div>
                    PLC, sensors & mentorship required for prototype
                  </div>
                  <a
                    href="https://www.phoenixcontact.com/en-in/"
                    target="_blank"
                  >
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="falcon.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      Falcon Labs
                    </div>
                    Monetary investment & mentorship{" "}
                  </div>
                  <a href="https://www.faclon.com/" target="_blank">
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96  flex items-center">
                  <img
                    className="h-auto  w-full transition-transform duration-500 group-hover:scale-125"
                    src="Altium.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      Altium
                    </div>
                    Used for simulating and editing semantics
                  </div>
                  <a href="https://www.altium.com/" target="_blank">
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="solidworks.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      Solid Works
                    </div>
                    Used for simulation
                  </div>
                  <a href="https://www.solidworks.com/" target="_blank">
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
               <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="msc.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      MSC Software
                    </div>
                    Used for modelling & prototyping
                  </div>
                  <a
                    href="https://hexagon.com/company/divisions/manufacturing-intelligence/msc-software?utm_easyredir=www.mscsoftware.com"
                    target="_blank"
                  >
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="mathworks.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      MathWorks
                    </div>
                    Used for simulation & data analysis
                  </div>
                  <a href="https://www.mathworks.com/" target="_blank">
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="aei.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      AEI
                    </div>
                    Provides components for breaking systems
                  </div>
                  <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="ansys.png"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      Ansys
                    </div>
                    Used for simulation & data analysis
                  </div>
                  <a href="https://www.ansys.com/en-in" target="_blank">
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="arrowtex.png"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      ArrowTex
                    </div>
                    Provides carbon fiber
                  </div>
                  <a
                    href="https://www.arrowtechnicaltextiles.in/"
                    target="_blank"
                  >
                    <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </a>
                </div>
              </div>
             <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 md:col-start-2">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                    src="truetech.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      True&Tech
                    </div>
                    Provides monetary support
                  </div>
                  <button className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </div>
              </div>  
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
