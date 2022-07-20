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
    width="400" height="300" 
    src="https://www.youtube.com/embed/HwEgXZzG1Rw" 
    title="YouTube video player" 
    frameBorder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  )

  const clipeKarma =(
    <iframe 
    width="400" height="233" 
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
        <div>
          <ColumnsDiv>
            <Column>
              {clipeDiva}
            </Column>
            <Column>
              {clipeKarma}
            </Column>
          </ColumnsDiv>
        </div>
        <ButtonDiv>
          <YoutubeButton>inscreva-se em nosso canal</YoutubeButton>
        </ButtonDiv>
    </Container>
    </>
  )
};

export default VideoMusic;