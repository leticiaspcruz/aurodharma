import React from 'react';
import { SocialMedia, Link, Container, Text, CopyrightLink } from './style';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
  return (
    <>
      <Container>
        <SocialMedia>
          <Link href="https://www.facebook.com/aurodharma" 
          target="_blank">
            <AiFillFacebook color="white" size="40"/>
          </Link>
          <Link href="https://www.instagram.com/aurodharma/"
          target="_blank">
            <BsInstagram color="white" size="36"/>
          </Link>
          <Link href="https://www.youtube.com/channel/UCOxfPv7E1ujJqTJs3DazSYQ"
          target="_blank">
            <BsYoutube color="white" size="40"/>
          </Link>
        </SocialMedia>
      </Container>
      <Text>copyright © 2022 - website by {' '}
        <CopyrightLink href="https://campsite.bio/leticiaspcruz"
        target="_blank">
          @leticiaspcruz
        </CopyrightLink>
      </Text>
    </>
  )
};

export default Footer;