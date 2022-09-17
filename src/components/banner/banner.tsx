import React, { useState } from 'react';
import { BannerImage, Nav, NavMenu, NavLink, Logo } from './style';
import logoImage from '../../assets/logo-aurodharma.png';
import { ContactModal } from '../contact';
const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const toggle = ()=> { setShowModal(!showModal) };
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
          <NavLink onClick={toggle}>contato</NavLink>
        </NavMenu>
      </Nav>
      {showModal && <ContactModal/>}
    </>
  )
};

export default Banner;