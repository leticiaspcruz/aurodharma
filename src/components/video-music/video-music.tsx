import React from 'react';
import { 
  Container, 
  Column, 
  ColumnsDiv, 
  TitleDiv, 
  ButtonDiv,
  YoutubeButton,
  Title } 
from './style';

const VideoMusic = () => {
  const clipeDiva =(
    <iframe 
    width="460" height="315"
    src="https://www.youtube.com/embed/HwEgXZzG1Rw" 
    title="YouTube video player" 
    frameBorder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  )

  const clipeKarma =(
    <iframe 
    width="460" height="315" 
    src="https://www.youtube.com/embed/-4Ps7iTHrdY" 
    title="YouTube video player" frameBorder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  )

  return (
    <>
    <Container>
      <TitleDiv>
        <Title>últimos clipes</Title>
      </TitleDiv>
      <ColumnsDiv>
        <Column>
          {clipeDiva}
        </Column>
        <Column>
          {clipeKarma}
        </Column>
      </ColumnsDiv>
      <ButtonDiv>
        <YoutubeButton>inscreva-se em nosso canal</YoutubeButton>
      </ButtonDiv>
    </Container>
    </>
  )
};

export default VideoMusic;