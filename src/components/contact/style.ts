import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 400px;
  width: 90%;
  height: auto;
  z-index: 100;
  border-radius: 8px;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  color: #D1AB24;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-direction: column;
  gap: 16px;
  margin: 12px;
`;

export const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #D1AB24;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    border: 1px solid #F1C40F;
    background-color: #D1AB24;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #D1AB24;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;
