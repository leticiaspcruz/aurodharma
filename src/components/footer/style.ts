import styled from 'styled-components';
import tokens from '../../theme/tokens';

export const Container = styled.footer`
  display: flex;
  flex-direction: row; ;
  justify-content: center;
`;

export const SocialMedia = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: row; ;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: ${tokens.aurodharma.color.yellowStandard};
  font-family: ${tokens.aurodharma.font.family};
  font-weight: normal;
  font-size: ${tokens.aurodharma.font.size.md};
  margin: 1.25rem;
`;

export const Text = styled.p`
  color: white;
  font-family: ${tokens.aurodharma.font.family};
  font-weight: normal;
  font-size: ${tokens.aurodharma.font.size.sm};
  margin-bottom: 1.25rem;
  text-align: center;
`;

export const CopyrightLink = styled.a`
  color: white;
  font-weight: normal;
  font-size: ${tokens.aurodharma.font.size.sm};
  margin-bottom: 1.25rem;
  margin-top: 0;
  text-align: center;
  text-decoration: underline;
`;