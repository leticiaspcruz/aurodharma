import styled from 'styled-components';
import tokens from '../../theme/tokens';

export const Container = styled.div`
  background: black;
  height: 42rem;
  margin-top: 4rem;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    width: 100%;
    margin: 2rem 0;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 5rem;
  margin-top: 1rem;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    margin: 0 2.5rem;
    justify-content: center;
  }
  
`;

export const ColumnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 2.5rem;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    margin: 0 2.5rem;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    margin-top: 1rem;
  }
`;

export const YoutubeButton = styled.button`
  color: ${tokens.aurodharma.color.yellowStandard};
  background-color: transparent;
  font-family: ${tokens.aurodharma.font.family};
  font-weight: lighter;
  font-size: ${tokens.aurodharma.font.size.md};
  text-align: center;
  text-decoration: underline;
  border: none;
  padding: 0.6rem;
  cursor: pointer;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    margin: -20px 0 36px;
  }
`;

export const Title = styled.h1`
  color: ${tokens.aurodharma.color.yellowStandard};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: bold;
  font-size: ${tokens.aurodharma.font.size.xl};
  margin-top: 2rem;
  text-align: right;
`;
