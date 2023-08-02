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
          <ContactButton onClick={()=> window.open(
              "https://api.whatsapp.com/send?phone=5511983551895", '_blank'
              )}>whatsapp</ContactButton>
          <ContactButton onClick={()=> window.open(
              "mailto:aurodharma@gmail.com", '_blank'
              )}>e-mail</ContactButton>
        </ButtonsContainer>
      </ModalContainer>
     </Overlay>
    }
    </>
  )
};

export default ContactModal;