import React from 'react';
import { SocialMedia, Link, Container, Text, CopyrightLink } from './style';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { Reveal } from '../reveal';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <Container>
        <SocialMedia>
         <Reveal width='100%'>
          <Link href="https://www.facebook.com/aurodharma" 
            target="_blank">
              <AiFillFacebook color="white" size="40"/>
            </Link>
         </Reveal>
        <Reveal width='100%'>
          <Link href="https://www.instagram.com/aurodharma/"
            target="_blank">
              <BsInstagram color="white" size="36"/>
            </Link>
        </Reveal>
        <Reveal width='100%'>
          <Link href="https://www.youtube.com/channel/UCOxfPv7E1ujJqTJs3DazSYQ"
            target="_blank">
              <BsYoutube color="white" size="40"/>
            </Link>
        </Reveal>
        </SocialMedia>
      </Container>
     <Reveal width='100%'>
      <Text>copyright © {getCurrentYear()} - website by {' '}
          <CopyrightLink href="https://campsite.bio/leticiaspcruz"
          target="_blank">
            @leticiaspcruz
          </CopyrightLink>
        </Text>
     </Reveal>
    </>
  )
};

export default Footer;