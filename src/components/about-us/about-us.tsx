import React from 'react';
import { 
  Container, 
  Section, 
  Title, 
  Text, 
  Link, 
  Underline, 
  AlbumImage, 
  Streamings,  
} from './style';
import albumImage from '../../assets/album-aurodharma.png';
import { FaSpotify, FaDeezer } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

const AboutUs = () => {
  return (
    <>
    <Container>
      <Section>
        <Title>quem somos</Title>
        <Text>
          Uma banda que traz ideias que viajam de dentro da mente para 
          o cotidiano, traz nas mensagens a sutileza primordial do rock ao peso 
          dos sons contemporâneos.
        </Text>
        <Underline/>
        <Text>
          Escute agora o nosso último álbum
        </Text>
        <Link href="">Cabeça do Tempo</Link>
      </Section>
      <Section>
        <Title>música</Title>
        <AlbumImage src={albumImage} alt="Capa do álbum Cabeça do Tempo"/>
        <Streamings>
          <Link 
            href="https://open.spotify.com/artist/1kBvwRKTkyr1xSKoWV9ND3?si=rLdvHjT7QF2hXyuAzpLEeA">
            <FaSpotify color="white" size="30"/>
          </Link>
          <Link 
            href="https://music.apple.com/us/artist/aurodharma/1523712756">
            <SiApplemusic color="white" size="30"/>
          </Link>
          <Link 
            href="https://deezer.page.link/VT17pxBNXCBHoUdR6">
            <FaDeezer color="white" size="30"/>
          </Link>
        </Streamings>
      </Section>
    </Container>
    </>
  )
};

export default AboutUs;