import styled from 'styled-components';
import bannerImage from '../../assets/aurodharma.jpg';
import tokens from '../../theme/tokens';

export const BannerImage = styled.div`
  background: url('${bannerImage}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;
  width: 100%;
  bottom: 0;
  opacity: 70%;
  background-position: center top -120px;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    height: 22rem;
    background-position: center top -45px;
  }
`;

export const Logo = styled.img`
  width: 40%;
  margin-bottom: 0;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    width: 70%;
    margin-top: 80%;
  }
`;

export const Nav = styled.nav`
  background: transparent;
  font-family: ${tokens.aurodharma.font.family};
  font-weight: normal;
  position: relative ;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  bottom: 15rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 0;
  cursor: pointer;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  margin: 10px;
  text-decoration: none;
  text-shadow: ${tokens.aurodharma.shadow.text};

  :hover {
    color: ${tokens.aurodharma.color.yellowStandard};
  }
`;

