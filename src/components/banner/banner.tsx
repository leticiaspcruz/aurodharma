import React from 'react';
import { BannerImage, Nav, NavMenu, NavLink, Logo } from './style';
import logoImage from '../../assets/logo-aurodharma.png';
import { ContactModal } from '../contact';
import { useModal } from '../../hooks';

const Banner = () => {
  const { isOpen, toggle } = useModal();

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
      <ContactModal isOpen={isOpen} toggle={toggle} />
    </>
  )
};

export default Banner;