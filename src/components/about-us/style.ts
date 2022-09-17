import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: black;
  height: 30rem;
  margin: 10rem auto;
  padding: 40px;

  @media(max-width: 768px) {
    flex-direction: column;
    height: 42rem;
    margin: 10px;
  }
`;

export const Section = styled.div`
  width: 50%;
  margin: 20px;
  display: flex;
  flex-direction: column; ;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const Title = styled.h1`
  color: #D1AB24;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: 2rem;
  text-align: center;
`;

export const Text = styled.p`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 15px;
  margin: 0;
  text-align: center;
`;

export const Link = styled.a`
  color: #D1AB24;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 15px;
`;

export const Underline = styled.div`
  border-bottom: 2px solid #D1AB24;
  width: 20rem;
  margin: 25px;

  @media(max-width: 768px) {
    width: 17rem;
    margin: 40px;
  }
`;

export const AlbumImage = styled.img`
  width: 60%;
`;

export const Streamings = styled.div`
  width: 50%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;