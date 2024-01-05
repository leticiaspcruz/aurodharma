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
import { Reveal } from '../reveal';

const VideoMusic = () => {
  const ClipeDiva = () => {
    return (
    <iframe 
      width="100%" height="300px" 
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
      width="100%" height="300px"
      src="https://www.youtube.com/embed/-4Ps7iTHrdY" 
      title="YouTube video player" frameBorder="0" allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    )
  }
  return (
    <>
    <Container id="video-music">
        <Reveal>
          <TitleDiv>
            <Title>clipes</Title>
          </TitleDiv>
        </Reveal>
        <div>
          <ColumnsDiv>
           <Reveal width="100%">
            <Column>
                <ClipeDiva/>
            </Column>
           </Reveal>
           <Reveal width="100%">
            <Column>
              <ClipeKarma/>
            </Column>
           </Reveal>
          </ColumnsDiv>
        </div>
        <Reveal width="100%">
          <ButtonDiv>
            <YoutubeButton type="button" 
            onClick={()=> {window.open(
              "https://www.youtube.com/channel/UCOxfPv7E1ujJqTJs3DazSYQ"
              )}}>
              inscreva-se em nosso canal
            </YoutubeButton>
          </ButtonDiv>
        </Reveal>
    </Container>
    </>
  )
};

export default VideoMusic;
