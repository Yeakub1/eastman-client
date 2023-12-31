import React from 'react';
import Banner from '../Banner/Banner';
import Video from '../Video/Video';
import { Helmet } from "react-helmet-async";
import PopulerClass from '../PopulaClass/PopulerClass';
import Instructors from '../../Instructors/Instructors';
import PopularInstrocuro from '../PopularInstrocuro';
// import DarkMode from '../../../../utility/DarkMode/DarkMode';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Esatman School | Home</title>
        </Helmet>
        {/* <DarkMode></DarkMode> */}
        <Banner></Banner>
        <PopulerClass></PopulerClass>
        <Video></Video>
        <PopularInstrocuro></PopularInstrocuro>
      </div>
    );
};

export default Home;