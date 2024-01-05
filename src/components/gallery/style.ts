import styled from 'styled-components';
import tokens from '../../theme/tokens';

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  height: 40%;
  margin-top: 1.25rem;

  @media (max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const Picture = styled.img`
  width: 25%;
  margin: 0;
  transition: transform .3s;
  opacity: 70%;

  :hover {
  transform: scale(1.05);
  opacity: 100%;
  z-index: 90;
  }
`;
