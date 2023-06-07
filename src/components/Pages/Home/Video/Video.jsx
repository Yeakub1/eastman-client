import React from 'react';
import video from "../../../../assets/images/banner/Music Video.mp4";

const Video = () => {
    return (
      <div className="max-w-7xl mx-auto mt-20 min-h-scree">
        <h1 className="text-center font-bold text-4xl mb-10">
          Your <span className="text-[#EF43CF]">Favorite</span> Music
        </h1>
        <video autoPlay loop muted src={video} type="video/mp4"></video>
      </div>
    );
};

export default Video;