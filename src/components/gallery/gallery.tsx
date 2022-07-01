import React from 'react';
import {Container, Picture} from './style';
import sidPicture from '../../assets/sid.png';
import martinPicture from '../../assets/martin.png';
import ellenPicture from '../../assets/ellen.png'; //
import russoPicture from '../../assets/russo.png';

const Gallery = () => {
  return (
    <>
      <Container>
        <Picture src={sidPicture} 
          alt="Sid - Band Member - Vocal and Eletric Guitar" />
        <Picture src={martinPicture} 
          alt="Martin - Band Member - Vocal and Eletric Guitar" />
        <Picture src={ellenPicture} 
          alt="Ellen - Band Member - Drummer" />
        <Picture src={russoPicture} 
          alt="Russo - Band Member - Bass" />
      </Container>
    </>
  )
};

export default Gallery;