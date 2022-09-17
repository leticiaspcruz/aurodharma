import styled from 'styled-components';

export const Container = styled.div`
  background: black;
  height: 35rem;
  margin-top: 4rem;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;

  @media(max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 5rem;
  margin-top: 1rem;

  @media(max-width: 768px) {
    margin: 0;
    justify-content: center;
  }
  
`;

export const ColumnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 40px;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 40px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 5rem;
  margin-top: 1rem;
  cursor: pointer;

  @media(max-width: 768px) {
    margin-right: 0;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const YoutubeButton = styled.button`
  color: #D1AB24;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-weight: lighter;
  font-size: 16px;
  text-align: center;
  border: 1px solid #D1AB24;
  padding: 10px;
  cursor: pointer;

  @media(max-width: 768px) {
    margin: 0 36px;
  }
`;

export const Title = styled.h1`
  color: #D1AB24;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: 2rem;
  text-align: right;
`;