import React, { useEffect, useState } from "react";

import image1 from "../../../../assets/images/banner/banner-1.png";
import image2 from "../../../../assets/images/banner/banner-2.png";
import image3 from "../../../../assets/images/banner/banner-3.png";
import image5 from "../../../../assets/images/banner/banner-5.png";
import Spinner from "../../../../utility/Spinner/Spinner";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const images = [image1, image2, image5, image3];
     const [loading, setloading] = useState(true);

  const transitionDuration = 3000; 

  useEffect(() => {
    setloading(true)
    let currentIndex = 0;

    const interval = setInterval(() => {
      setBackgroundImage(images[currentIndex]);

      currentIndex = (currentIndex + 1) % images.length
      setloading(false);
    }
      
      , transitionDuration);


    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }


  return (
      <div
        className="background-changer banner-bg flex items-center justify-center min-h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
  );
};

export default Banner;
