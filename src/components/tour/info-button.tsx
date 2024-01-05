import React from 'react';
import { 
  Button, 
  Day,
  Month,
  Text,
  InfoButtonContainer,
} 
from './style';

interface NextEventsInterface {
  nextEvents: {
    eventLink?: string,
    dayNumber?: string,
    monthName?: string,
    locationName?: string,
    moreInfo?: string,
  }
}

const InfoButton: React.FC<NextEventsInterface> = ({ nextEvents }) => {

  if (!nextEvents) return null;

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