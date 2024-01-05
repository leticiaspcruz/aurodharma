import React from 'react';
import { 
  Container, 
  Title } 
from './style';

import { InfoButton } from '.';
import { nextEvents } from './mock';
import { Reveal } from '../reveal';

const Tour = () => {

  return (
    <>
      <Container id="tour">
        {nextEvents.moreInfo ? (
            <Reveal width='100%'>
              <Title>{nextEvents.moreInfo}</Title>
            </Reveal>
        ) : (
        <>
            <Reveal width='100%'>
              <Title>Próximos Eventos</Title>
            </Reveal>
            <Reveal width='100%'>
              <InfoButton nextEvents={nextEvents} />
            </Reveal>
        </>
        )}
      </Container>
    </>
  )
};

export default Tour;