import styled from 'styled-components';
import tokens from '../../theme/tokens';


export const Container = styled.div`
  display: flex;
  height: 30rem;
  margin: 5rem auto;
  padding: 2.5rem;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    height: 42rem;
    margin: 0.3rem;
  }
`;

export const Section = styled.div`
  width: 50%;
  margin: 1.25rem;
  display: flex;
  flex-direction: column; ;
  justify-content: center;
  align-items: center;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    width: 100%;
    margin: 0.6rem 0;
  }
`;

export const Title = styled.h1`
  color: ${tokens.aurodharma.color.yellowLight};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: bold;
  font-size: ${tokens.aurodharma.font.size.xxl};
  margin-top: 2rem;
  text-align: center;
`;

export const Text = styled.p`
  color: white;
  font-family: ${tokens.aurodharma.font.family};
  font-weight: normal;
  font-size: ${tokens.aurodharma.font.size.md};
  margin: 0;
  text-align: center;
`;

export const Link = styled.a`
  color: ${tokens.aurodharma.color.yellowStandard};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: normal;
  font-size: ${tokens.aurodharma.font.size.md};
`;

export const Underline = styled.div`
  border-bottom: 2px solid ${tokens.aurodharma.color.yellowStandard};
  width: 20rem;
  margin: 1.5rem;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    width: 17rem;
    margin: 2.5rem;
  }
`;

export const AlbumImage = styled.img`
  width: 60%;
  cursor: pointer;
  transition: transform .3s;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    width: 42%;
  }

  @media(min-width: ${tokens.aurodharma.breakpoints.super}) {
    width: 30%;
  }

  :hover {
  transform: scale(1.05);
  }
`;

export const Streamings = styled.div`
  width: 56%;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
