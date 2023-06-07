import React, { useEffect, useState } from "react";

import image1 from "../../../../assets/images/banner/banner-1.png";
import image2 from "../../../../assets/images/banner/banner-2.png";
import image3 from "../../../../assets/images/banner/banner-3.png";
import image5 from "../../../../assets/images/banner/banner-5.png";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const images = [image1, image2, image5, image3];

  const transitionDuration = 3000; 

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setBackgroundImage(images[currentIndex]);

      currentIndex = (currentIndex + 1) % images.length;
    }, transitionDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
      <div
        className="background-changer banner-bg flex items-center justify-center min-h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
  );
};

export default Banner;
