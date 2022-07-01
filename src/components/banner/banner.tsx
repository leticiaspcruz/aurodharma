import React from 'react';
import { BannerImage, Nav, NavMenu, NavLink, Logo } from './style';
import logoImage from '../../assets/logo-aurodharma.png';

const Banner = () => {
  return (
    <>
      <BannerImage/>
      <Nav>
        <Logo src={logoImage} alt="Logo da banda Aurodharma"/>
        <NavMenu>
          <NavLink href="#about-us">quem somos</NavLink>
          <NavLink href="#music">música</NavLink>
          <NavLink href="#video-music">clipes</NavLink>
          <NavLink href="#tour">próximos eventos</NavLink>
          <NavLink href="#contact">contato</NavLink>
        </NavMenu>
      </Nav>
    </>
  )
};

export default Banner;