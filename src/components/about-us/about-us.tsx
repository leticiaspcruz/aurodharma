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
import { LINKS } from '../../constants';

const AboutUs = () => {
  return (
    <>
    <Container>
      <Section id="about-us">
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
        <Link 
        href={LINKS.SPOTIFY}
        target="_blank">
          Cabeça do Tempo
        </Link>
      </Section>
      <Section id="music">
        <AlbumImage src={albumImage} onClick={() => window.open(LINKS.SPOTIFY, '_blank')} alt="Capa do álbum Cabeça do Tempo"/>
        <Streamings>
          <Link 
            href={LINKS.SPOTIFY}
            target="_blank">
            <FaSpotify color="white" size="30"/>
          </Link>
          <Link 
            href={LINKS.APPLE}
            target="_blank">
            <SiApplemusic color="white" size="30"/>
          </Link>
          <Link 
            href={LINKS.DEEZER}
            target="_blank">
            <FaDeezer color="white" size="30"/>
          </Link>
        </Streamings>
      </Section>
    </Container>
    </>
  )
};

export default AboutUs;