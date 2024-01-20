import React, { useState } from "react";

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="relative w-3/5 h-3/5 overflow-hidden">
      {/* Base Image */}
      <img
        src="sliderimage1-new.png"
        alt="Base Image"
        className="w-full h-full object-center"
        style={{
          clipPath: `inset(0 0 0 ${sliderValue}%)`,
          opacity: 1 - sliderValue / 100,
        }}
      />

      {/* Masked Image */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)`, opacity: 1 }}
      >
        <img
          src="sliderimage2.png"
          alt="Masked Image"
          style={{ transform: "scale(0.80)" }}
          className="w-full h-full object-center"
          id="podslider"
        />
      </div>
      <div id="podslider" />

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4"
      />
    </div>
  );
};

export default ImageSlider;
