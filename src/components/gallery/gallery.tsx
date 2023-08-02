import React from 'react';
import {Container, Picture} from './style';
import sidPicture from '../../assets/sid.png';
import martinPicture from '../../assets/martin.png';
import marceloPicture from '../../assets/ellen.png'; //
import elidioPicture from '../../assets/elidio.png';

const Gallery = () => {
  return (
    <>
      <Container>
        <Picture src={sidPicture} 
          alt="Sid - Band Member - Vocal and Eletric Guitar" />
        <Picture src={martinPicture} 
          alt="Martin - Band Member - Vocal and Eletric Guitar" />
        <Picture src={marceloPicture} 
          alt="Marcelo - Band Member - Drummer" />
        <Picture src={elidioPicture} 
          alt="Elídio - Band Member - Bass" />
      </Container>
    </>
  )
};

export default Gallery;