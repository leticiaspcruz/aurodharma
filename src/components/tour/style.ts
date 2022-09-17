import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  width: 550px;
  background: transparent;
  border: 1px solid #D1AB24;
  padding: 20px;
  cursor: pointer;

  @media(max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const Day = styled.h1`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 25px;
  margin: 6px;
`;

export const Text = styled.p`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: lighter;
  font-size: 15px;
  margin: 6px;
  padding-top: 6px;
`;

export const Month = styled.p`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: lighter;
  font-size: 15px;
  margin: 6px;
  margin-left: 0 !important;
  padding-top: 6px;
`;

export const Title = styled.h1`
  color: #D1AB24;
  font-family: 'Poppins', sans-serif;
  font-weight: lighter;
  font-size: 20px;
  text-align: center;
`;

export const Container = styled.div`
  margin: 0 36px;

  :hover {
  color: #f1f1f1;
  }
`;

export const InfoButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;