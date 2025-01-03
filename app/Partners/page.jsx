'use client';

import Image from 'next/image';
import Footer from '../../components/Footer';

const Page = () => {
  const partners = [
    {
      name: 'Pheonix Contact',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDiN9sIjMdFmIrsWPeZvn1GMQqaDKEfJVYTXB2',
      type: 'PLC, sensors & mentorship required for prototype',
      url: 'https://www.phoenixcontact.com/en-in/',
    },
    {
      name: 'Falcon Labs',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QID9ab04XZO1LUFQGPiZoq6uaEHlVMDt9se2NJm',
      type: 'Monetary investment & mentorship',
      url: 'https://www.faclon.com/',
    },
    {
      name: 'Altium',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDAKGVjDXSTZdweqp2MYV0BKDP9G1LmCtxf4nh',
      type: 'Used for simulating and editing semantics',
      url: 'https://www.altium.com/',
    },
    {
      name: 'Solid Works',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDad7OOwvpHvsrWoqcLFUC6jP93lf8wZxD7512',
      type: 'Used for simulation',
      url: 'https://www.solidworks.com/',
    },
    {
      name: 'MSC Software',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDwTtPjfuPOVFYxWds06pvXnag7kqG2M3fC5Zm',
      type: 'Used for modelling & prototyping',
      url: 'https://hexagon.com/company/divisions/manufacturing-intelligence/msc-software?utm_easyredir=www.mscsoftware.com',
    },
    {
      name: 'MathWorks',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDwIkh3AuPOVFYxWds06pvXnag7kqG2M3fC5Zm',
      type: 'Used for simulation & data analysis',
      url: 'https://www.mathworks.com/',
    },
    {
      name: 'AEI',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDcZma4OeKOBsSYGA7qmtIe5i6N3nb9rMkwaZF',
      type: 'Provides components for breaking systems',
      url: '',
    },
    {
      name: 'Ansys',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDFdYhHhQdOc3XnGqgjwmMWUSpDb1L40Vo2uTr',
      type: 'Used for simulation & data analysis',
      url: 'https://www.ansys.com/en-in',
    },
    {
      name: 'True&Tech',
      image:
        'https://utfs.io/f/O1Z0nCiJ5QIDfglu2PnlYyn80uvocQx4NLFkszwUgMEB16Iq',
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
                  <Image
                    className="h-full w-full transition-transform duration-500 group-hover:scale-125 object-contain"
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    width={500} // Replace with appropriate width
                    height={500} // Replace with appropriate height
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
