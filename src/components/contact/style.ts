import styled from 'styled-components';
import tokens from '../../theme/tokens';

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
  padding: 1.25rem;
  max-width: 25rem;
  width: 90%;
  height: auto;
  z-index: 100;
  border-radius: 8px;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  color: ${tokens.aurodharma.color.yellowStandard};
  font-weight: bold;
  font-family: ${tokens.aurodharma.font.family};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2.5rem;
  flex-direction: column;
  gap: 1rem;
  margin: 0.75rem;
`;

export const ContactButton = styled.button`
  padding: 0.6rem 1.25rem;
  background-color: transparent;
  border: 1px solid ${tokens.aurodharma.color.yellowStandard};
  color: ${tokens.aurodharma.color.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: ${tokens.aurodharma.font.family};
  font-weight: bold;
  font-size: ${tokens.aurodharma.font.size.ml};

  &:hover {
    border: 1px solid ${tokens.aurodharma.color.yellowLight};
    background-color: ${tokens.aurodharma.color.yellowStandard};
    transition: background-color 0.3s ease;
 }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${tokens.aurodharma.color.yellowStandard};
  font-weight: bold;
  font-family: ${tokens.aurodharma.font.family};

  &:hover {
    color: ${tokens.aurodharma.color.white};
    transition: 0.3s ease;
  }
`;
