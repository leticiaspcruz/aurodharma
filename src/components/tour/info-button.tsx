import React from 'react';
import { 
  Button, 
  Day,
  Month,
  Text,
  InfoButtonContainer,
} 
from './style';

import { nextEvents } from './mock';

const InfoButton = () => {
  return (
    <>
      <InfoButtonContainer>
        <Button type="button" 
          onClick={()=> {window.open(
            nextEvents.eventLink
            )}}>
          <Day>{nextEvents.dayNumber}</Day>
          <Month>{nextEvents.monthName}</Month>
          <Text>{nextEvents.locationName}</Text>
        </Button>
      </InfoButtonContainer>
    </>
  )
};

export default InfoButton;