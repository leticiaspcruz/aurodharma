import React from 'react';
import { Container, Picture } from './style';
import sidPicture from '../../assets/sid.png';
import martinPicture from '../../assets/martin.png';
import marceloPicture from '../../assets/marcelo.png'; //
import elidioPicture from '../../assets/elidio.png';
import { Reveal } from '../reveal';

const Gallery = () => {
  return (
    <Reveal width='100%'>
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
    </Reveal>
  )
};

export default Gallery;