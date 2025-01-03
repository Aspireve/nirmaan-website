import Image from 'next/image';
import React, { useState } from 'react';

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="relative md:w-3/5 md:h-3/5 overflow-hidden">
      {/* Base Image */}
      <Image
        src="https://utfs.io/f/O1Z0nCiJ5QIDKbfPrWsPTXYS0nqEcuo8siDkVvCL2bIBGMzJ"
        alt="Base"
        className="w-full h-full object-center"
        style={{
          clipPath: `inset(0 0 0 ${sliderValue}%)`,
          opacity: 1 - sliderValue / 100,
        }}
        width={800} // Replace with the actual width of the image
        height={600} // Replace with the actual height of the image
      />

      {/* Masked Image */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)`, opacity: 1 }}
      >
        <Image
          src="https://utfs.io/f/O1Z0nCiJ5QIDw1pEXpPuPOVFYxWds06pvXnag7kqG2M3fC5Z"
          alt="Masked"
          className="w-full h-full object-center"
          style={{ transform: 'scale(0.80)' }}
          id="podslider"
          width={800} // Replace with the actual width of the image
          height={600} // Replace with the actual height of the image
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
