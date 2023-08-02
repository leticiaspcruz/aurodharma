import React from 'react';
import {Overlay, ModalContainer, ModalTitle, ButtonsContainer, CloseButton, ContactButton} from './style';

interface ContactModalProps {
  toggle: ()=> void,
  isOpen: boolean,
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, toggle }) => {
  return (
    <>
     {isOpen && 
     <Overlay>
       <ModalContainer>
        <CloseButton onClick={toggle}>X</CloseButton>
        <ModalTitle>fale com a banda</ModalTitle>
        <ButtonsContainer>
          <ContactButton>whatsapp</ContactButton>
          <ContactButton>e-mail</ContactButton>
        </ButtonsContainer>
      </ModalContainer>
     </Overlay>
    }
    </>
  )
};

export default ContactModal;