import styled from 'styled-components';
import bannerImage from '../../assets/banner-aurodharma.png';

export const BannerImage = styled.div`
  background: url('${bannerImage}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 60rem;
  width: 100%;
  bottom: 0;

  @media(max-width: 768px) {
    height: 22rem;
    background-size: contain;
    width: 122%;
  }
`;

export const Logo = styled.img`
  width: 40%;
  margin-bottom: 0;

  @media(max-width: 768px) {
    width: 55%;
    margin-top: 300px;
  }
`;

export const Nav = styled.nav`
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  position: relative ;
  height: 0px;
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

  @media(max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  margin: 10px;
  text-decoration: none;

  :hover {
    color: #D1AB24;
  }
`;

