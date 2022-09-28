import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  font-size: 30px;
  text-align: center;
  z-index: 100;
  max-width: 800px;
  padding: 30px;
  position: relative;
  top: 150px;
  left: 15%;
  right: 15%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);  
`;

export const ContactButton = styled.button`
  background: #D1AB24;
  width: 80%;
  padding: 30px;
  margin: 10px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
`;

export const Title = styled.h1`
  color: #D1AB24;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 40px;
  right: -15px;
  top: -20px;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  background: #D1AB24;
  border-radius: 50%;
  font-size: 16px;
  color: black;
`;