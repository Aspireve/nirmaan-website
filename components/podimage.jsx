'use client';

import React, { useState } from 'react';
import './ImageTooltip.css';

const ImageTooltip = () => {
  const tooltips = [
    {
      top: '30%',
      left: '55%',
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-2 w-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: 'Control Systems',
    },
    {
      top: '31%',
      right: '50%',
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-2 w-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: 'Battery Pack BMS',
    },
    {
      top: '65%',
      right: '55%',
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-2 w-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: 'Suspension',
    },
    {
      top: '4%',
      left: '26%',
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-2 w-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: 'Aeroshell',
    },
    {
      top: '43%',
      right: '26%',
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-2 w-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: 'Frames',
    },
    {
      top: '63%',
      right: '40%',
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-2 w-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: 'Traction-L IM',
    },
  ];

  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className="md:flex items-center justify-center h-screen overflow-hidden relative">
      <div className=" scale-105 relative md:hidden">
        <div className="text-center">
          <img
            src="https://utfs.io/f/O1Z0nCiJ5QIDcdUmZCKeKOBsSYGA7qmtIe5i6N3nb9rMkwaZ" // Replace with the path to your image
            alt="Pod"
            className="max-w-full max-h-full mx-auto"
          />
        </div>
        {tooltips.map((tooltip, index) => (
          <div
            key={index}
            className={`tooltip ${activeTooltip === index ? 'active' : ''}`}
            style={{
              top: tooltip.top,
              right: tooltip.right,
              bottom: tooltip.bottom,
              left: tooltip.left,
            }}
            onMouseEnter={() => setActiveTooltip(index)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="tooltip-content">{tooltip.content}</div>
            {activeTooltip === index && (
              <div className="additional-info absolute bg-white p-2 border rounded-md">
                <p>{tooltip.additionalInfo}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left container for text */}
      <div className="md:w-1/2 md:p-8 p-4 ">
        <p className="text-lg text-white italic">
          The Hyperloop seamlessly incorporates a range of critical components
          to ensure its efficient operation as a groundbreaking transportation
          system. These components encompass the aeroshell, which optimizes
          aerodynamics, advanced control systems, battery packs equipped with
          Battery Management Systems (BMS), robust frames ensuring structural
          integrity, suspension systems for a smooth ride, and essential
          elements such as Traction Linear Induction Motors (LIM) for
          propulsion, along with efficient braking systems.
        </p>
        {/* Down arrow SVG centered after text */}
        <a href="#podslider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="absolute md:bottom-7 left-1/2 transform -translate-x-1/2 w-6 h-6"
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

      {/* Right container for image and tooltips */}
      <div className="w-1/2 relative hidden md:block">
        <div className="text-center">
          <img
            src="https://utfs.io/f/O1Z0nCiJ5QIDcdUmZCKeKOBsSYGA7qmtIe5i6N3nb9rMkwaZ" // Replace with the path to your image
            alt="Pod"
            className="max-w-full max-h-full mx-auto"
          />
        </div>
        {tooltips.map((tooltip, index) => (
          <div
            key={index}
            className={`tooltip ${activeTooltip === index ? 'active' : ''}`}
            style={{
              top: tooltip.top,
              right: tooltip.right,
              bottom: tooltip.bottom,
              left: tooltip.left,
            }}
            onMouseEnter={() => setActiveTooltip(index)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="tooltip-content">{tooltip.content}</div>
            {activeTooltip === index && (
              <div className="additional-info absolute bg-white p-2 border rounded-md">
                <p>{tooltip.additionalInfo}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTooltip;
