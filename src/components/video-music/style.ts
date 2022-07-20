import styled from 'styled-components';

export const Container = styled.div`
  background: black;
  height: 35rem;
`;

export const Column = styled.div`
  width: 50%;
  margin: 20px;
  display: flex;
  flex-direction: column; ;
  justify-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 5rem;
  margin-top: 4rem;
`;

export const ColumnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 0 2rem;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 5rem;
  margin-top: 1rem;
`;

export const YoutubeButton = styled.button`
  color: #D1AB24;
  background-color: transparent;
  font-family: Poppins;
  font-weight: lighter;
  font-size: 16px;
  text-align: center;
  border: 1px solid #D1AB24;
  padding: 10px;
`;

export const Title = styled.h1`
  color: #D1AB24;
  font-family: Poppins;
  font-weight: bold;
  font-size: 20px;
  margin-top: 2rem;
  text-align: right;
`;