import React from 'react';
import Banner from '../Banner/Banner';
import Video from '../Video/Video';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Esatman School | Home</title>
        </Helmet>
        <Banner></Banner>
        <Video></Video>
      </div>
    );
};

export default Home;