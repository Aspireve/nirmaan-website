'use client';

import Footer from '../../components/Footer';

const Page = () => {
  const partners = [
    {
      name: 'Pheonix Contact',
      image: 'pheonix.webp',
      type: 'PLC, sensors & mentorship required for prototype',
      url: 'https://www.phoenixcontact.com/en-in/',
    },
    {
      name: 'Falcon Labs',
      image: 'falcon.webp',
      type: 'Monetary investment & mentorship',
      url: 'https://www.faclon.com/',
    },
    {
      name: 'Altium',
      image: 'Altium.jpg',
      type: 'Used for simulating and editing semantics',
      url: 'https://www.altium.com/',
    },
    {
      name: 'Solid Works',
      image: 'solidworks.webp',
      type: 'Used for simulation',
      url: 'https://www.solidworks.com/',
    },
    {
      name: 'MSC Software',
      image: 'msc.webp',
      type: 'Used for modelling & prototyping',
      url: 'https://hexagon.com/company/divisions/manufacturing-intelligence/msc-software?utm_easyredir=www.mscsoftware.com',
    },
    {
      name: 'MathWorks',
      image: 'mathworks.webp',
      type: 'Used for simulation & data analysis',
      url: 'https://www.mathworks.com/',
    },
    {
      name: 'AEI',
      image: 'aei.webp',
      type: 'Provides components for breaking systems',
      url: '',
    },
    {
      name: 'Ansys',
      image: 'ansys.png',
      type: 'Used for simulation & data analysis',
      url: 'https://www.ansys.com/en-in',
    },
    {
      name: 'True&Tech',
      image: 'truetech.webp',
      type: 'Provides monetary support',
      url: '',
    },
  ];
  return (
    <>
      <div className=" text-white">
        <div className="text-5xl flex justify-center font-semibold items-center pb-10 pt-5 text-white">
          <div className="bg-purple-500 w-14 h-3" />
          <div className="px-3">PARTNERS</div>

          <div className="bg-purple-500 w-14 h-3" />
        </div>
        <div className="text-center px-16 mb-10 text-lg">
          We would like to thank our sponsors for their interest in our Nirmaan
          Hyperloop. Your contribution makes it possible to continue making
          strides towards our goal of advancing a new mode of transport. We
          cannot succeed without the generosity of supporters like you. We are
          so fortunate to have such generous donors and we can never thank you
          enough for all the support you've shown us. We hope that we can count
          on your support in the upcoming years as well!
        </div>

        <div className="flex min-h-screen justify-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {/* card */}
            {partners.map((partner) => (
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-60 w-96">
                  <img
                    className="h-full w-full transition-transform duration-500 group-hover:scale-125 object-contain"
                    src={partner.image}
                    alt={`${partner.name} logo`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="font-dmserif text-3xl font-bold text-white">
                      {partner.name}
                    </div>
                    {partner.type}
                  </div>
                  <button
                    onClick={() => {
                      window.location.href = partner.url;
                    }}
                    type="button"
                    className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
            {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-60 w-96">
                <img
                  className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                  src="falcon.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-dmserif text-3xl font-bold text-white">
                    Falcon Labs
                  </div>
                  Monetary investment & mentorship{' '}
                </div>
                <a
                  href="https://www.faclon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-dmserif text-3xl font-bold text-white">
                    Altium
                  </div>
                  Used for simulating and editing semantics
                </div>
                <a
                  href="https://www.altium.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-dmserif text-3xl font-bold text-white">
                    Solid Works
                  </div>
                  Used for simulation
                </div>
                <a
                  href="https://www.solidworks.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
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
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-dmserif text-3xl font-bold text-white">
                    MathWorks
                  </div>
                  Used for simulation & data analysis
                </div>
                <a
                  href="https://www.mathworks.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-dmserif text-3xl font-bold text-white">
                    AEI
                  </div>
                  Provides components for breaking systems
                </div>
                <button
                  type="button"
                  className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-dmserif text-3xl font-bold text-white">
                    Ansys
                  </div>
                  Used for simulation & data analysis
                </div>
                <a
                  href="https://www.ansys.com/en-in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
                    See More
                  </button>
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
              <div className="h-60 w-96">
                <img
                  className="h-full w-full object-none transition-transform duration-500 group-hover:scale-125"
                  src="truetech.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/64 group-hover:via-black/60 group-hover:to-black/64" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-dmserif text-3xl font-bold text-white">
                    True&Tech
                  </div>
                  Provides monetary support
                </div>
                <button
                  type="button"
                  className="rounded-full bg-[#25618B] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
