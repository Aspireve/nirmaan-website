"use client";
import React, { useState } from "react";
import "./ImageTooltip.css";

const ImageTooltip = () => {
  const tooltips = [
    {
      top: "28%",
      left: "55%",
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: "Additional info for Tooltip 1",
    },
    {
      top: "45%",
      right: "48%",
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: "Additional info for Tooltip 2",
    },
    {
      top: "65%",
      right: "55%",
      content: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      additionalInfo: "Additional info for Tooltip 2",
    },
  ];

  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden relative">
      {/* Left container for text */}
      <div className="w-1/2 p-8">
        <p className="text-lg text-white italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien.
        </p>
        <p className="text-lg text-white italic">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc.
        </p>
        {/* Down arrow SVG centered after text */}
        <a href="#podslider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="absolute bottom-7 left-1/2 transform -translate-x-1/2 w-6 h-6"
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
      <div className="w-1/2 relative">
        <div className="text-center">
          <img
            src="podimage2.png" // Replace with the path to your image
            alt="Pod"
            className="max-w-full max-h-full mx-auto"
          />
        </div>
        {tooltips.map((tooltip, index) => (
          <div
            key={index}
            className={`tooltip ${activeTooltip === index ? "active" : ""}`}
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
