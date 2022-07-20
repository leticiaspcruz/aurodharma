import React from 'react';
import { 
  Banner, 
  AboutUs,
  Gallery,
  VideoMusic,
  Tour, 
  Footer,
} from '../../components';

const Homepage = () => {
  return (
    <>
      <Banner/>
      <AboutUs/>
      <Gallery/>
      <VideoMusic/>
      <Tour/>
      <Footer/>
    </>
  )
};

export default Homepage;