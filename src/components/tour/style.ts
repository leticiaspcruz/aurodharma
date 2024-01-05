import styled from 'styled-components';
import tokens from '../../theme/tokens';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  width: 550px;
  background: transparent;
  border: 1px solid ${tokens.aurodharma.color.yellowStandard};
  padding: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    border: 1px solid ${tokens.aurodharma.color.yellowLight};
    background-color: ${tokens.aurodharma.color.yellowStandard};
  }

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const Day = styled.h1`
  color: ${tokens.aurodharma.color.white};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: bold;
  font-size: ${tokens.aurodharma.font.size.lg};
  margin: 0.3rem;
`;

export const Text = styled.p`
  color: ${tokens.aurodharma.color.white};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: lighter;
  font-size: ${tokens.aurodharma.font.size.md};
  margin: 0.3rem;
  padding-top: 0.3rem;
`;

export const Month = styled.p`
  color: ${tokens.aurodharma.color.white};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: lighter;
  font-size: ${tokens.aurodharma.font.size.sm};
  margin: 0.3rem;
  margin-left: 0 !important;
  padding-top: 0.3rem;
`;

export const Title = styled.h1`
  color: ${tokens.aurodharma.color.white};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: lighter;
  font-size: ${tokens.aurodharma.font.size.xl};
  text-align: center;
`;

export const Container = styled.div`
  margin: 0 2.25rem;
  color: ${tokens.aurodharma.color.yellowStandard};

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    margin-top: 75%;
    margin-left: 2.25rem;
    margin-right: 2.25rem;
  }
`;

export const InfoButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media(max-width: ${tokens.aurodharma.breakpoints.tablet}) {
    flex-direction: column;
  }
`;