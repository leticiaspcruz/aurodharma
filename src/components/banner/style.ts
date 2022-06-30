import styled from 'styled-components';

export const BannerImage = styled.div`
  background: grey;
  height: 45rem;
`;

export const Logo = styled.img`
  width: 40%;
  margin-bottom: 0;
`;

export const Nav = styled.nav`
  background: transparent;
  font-family: Poppins;
  font-weight: normal;
  position: relative ;
  height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  bottom: 12rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 0;
  cursor: pointer;
`;

export const NavLink = styled.a`
  color: white;
  margin: 10px;
  text-decoration: none;

  :hover {
    color: #D1AB24;
  }
`;