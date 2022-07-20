import React from 'react';
import { 
  Container, 
  Title } 
from './style';

import { InfoButton } from '.';

const Tour = () => {
  return (
    <>
    <Container>
      <Title>Próximos Eventos</Title>
      <InfoButton/>
    </Container>
    </>
  )
};

export default Tour;