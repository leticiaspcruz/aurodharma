import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row; ;
  justify-content: center;
`;

export const SocialMedia = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row; ;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: #D1AB24;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 15px;
  margin: 20px;
`;

export const Text = styled.p`
  color: white;
  font-family:'Poppins', sans-serif;
  font-weight: normal;
  font-size: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

export const CopyrightLink = styled.a`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 12px;
  margin-bottom: 30px;
  margin-top: 0;
  text-align: center;
  text-decoration: underline;
`;