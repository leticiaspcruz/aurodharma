import React from 'react';
import {Overlay, Container, Title, ContactButton} from './style';

const ContactModal = () => {
  return (
    <>
      <Overlay>
        <Container id="contact">
          <Title>fale com a banda!</Title>
          <ContactButton onClick={()=> {window.open(
              "https://api.whatsapp.com/send?phone=5511983551895"
              )}}>WhatsApp</ContactButton>
          <ContactButton onClick={()=> {window.open(
              "mailto:aurodharma@gmail.com"
              )}}>E-mail</ContactButton>
        </Container>
      </Overlay>
    </>
  )
};

export default ContactModal;