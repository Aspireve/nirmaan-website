// TeamMember.js

import Image from 'next/image';
import React from 'react';

const TeamMember = ({ name, position, image, linkedin }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 min-h-full">
    <div className="relative rounded-full overflow-hidden m-2.5">
      <Image
        src={image} // Replace with actual image URL
        alt={name}
        className="w-full h-full aspect-square object-cover transition-transform transform hover:scale-105 blur-[4px] duration-1000"
        style={{ filter: 'blur(0px)' }}
        width={800} // Replace with actual image width
        height={800} // Replace with actual image height
      />

      {/* Overlay with member information */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-center">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{position}</p>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-2"
          >
            <img
              src="https://utfs.io/f/O1Z0nCiJ5QIDlANdCCg6RjHkSpGIM7fogNzA8X1Q5iCZWB9b" // Replace with actual LinkedIn logo URL
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>

    {/* Show the name below each team member */}
    <div className="mt-2 text-center">
      <p className="text-m  italic text-white">{name}</p>
    </div>
  </div>
);

export default TeamMember;
