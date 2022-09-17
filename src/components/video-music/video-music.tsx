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
  const ClipeDiva = () => {
    return (
    <iframe 
      width="100%" height="100%" 
      src="https://www.youtube.com/embed/HwEgXZzG1Rw" 
      title="YouTube video player" 
      frameBorder="0" allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    )
  }

  const ClipeKarma = () => {
    return (
      <iframe 
      width="100%" height="100%" 
      src="https://www.youtube.com/embed/-4Ps7iTHrdY" 
      title="YouTube video player" frameBorder="0" allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    )
  }

  return (
    <>
    <Container>
        <TitleDiv>
          <Title>últimos clipes</Title>
        </TitleDiv>
        <div>
          <ColumnsDiv>
            <Column>
              <ClipeDiva/>
            </Column>
            <Column>
              <ClipeKarma/>
            </Column>
          </ColumnsDiv>
        </div>
        <ButtonDiv>
          <YoutubeButton type="button" 
          onClick={()=> {window.open(
            "https://www.youtube.com/channel/UCOxfPv7E1ujJqTJs3DazSYQ"
            )}}>
            inscreva-se em nosso canal
          </YoutubeButton>
        </ButtonDiv>
    </Container>
    </>
  )
};

export default VideoMusic;