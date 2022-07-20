import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  height: 40%;
  margin-top: 20px;
`;

export const Picture = styled.img`
  width: 25%;
  margin: 0;
  transition: transform .3s;
  opacity: 70%;

  :hover {
  transform: scale(1.05);
  opacity: 100%;
  }
`;
