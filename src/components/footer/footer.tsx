import React from 'react';
import { SocialMedia, Link, Container, Text, CopyrightLink } from './style';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
  return (
    <>
      <Container>
        <SocialMedia>
          <Link href="">
            <AiFillFacebook color="white" size="40"/>
          </Link>
          <Link href="">
            <BsInstagram color="white" size="36"/>
          </Link>
          <Link href="">
            <BsYoutube color="white" size="40"/>
          </Link>
        </SocialMedia>
      </Container>
      <Text>copyright © 2022 - website by {' '}
        <CopyrightLink href="">@leticiaspcruz</CopyrightLink>
      </Text>
    </>
  )
};

export default Footer;