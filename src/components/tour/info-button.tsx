import React from 'react';
import { 
  Button, 
  Day,
  Month,
  Text,
  InfoButtonContainer,
} 
from './style';

import { NextEvents } from './mock';

const InfoButton = () => {
  return (
    <>
      <InfoButtonContainer>
        <Button>
          <Day>{NextEvents.dayNumber}</Day>
          <Month>{NextEvents.monthName}</Month>
          <Text>{NextEvents.locationName}</Text>
        </Button>
      </InfoButtonContainer>
    </>
  )
};

export default InfoButton;