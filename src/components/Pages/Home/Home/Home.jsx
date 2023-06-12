import React from 'react';
import Banner from '../Banner/Banner';
import Video from '../Video/Video';
import { Helmet } from "react-helmet-async";
// import DarkMode from '../../../../utility/DarkMode/DarkMode';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Esatman School | Home</title>
        </Helmet>
        {/* <DarkMode></DarkMode> */}
        <Banner></Banner>
        <Video></Video>
      </div>
    );
};

export default Home;