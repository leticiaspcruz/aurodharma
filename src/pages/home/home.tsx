import React from 'react';
import { 
  Banner, 
  AboutUs,
  Gallery,
  VideoMusic,
  Tour, 
} from '../../components';

const Homepage = () => {
  return (
    <>
      <Banner/>
      <AboutUs/>
      <Gallery/>
      <VideoMusic/>
      <Tour/>
    </>
  )
};

export default Homepage;