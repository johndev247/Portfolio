import React from "react";
import {
  ContactBody,
  ContactContainer,
  ContactHeader,
  ContactTitle,
  InputFields,
  TextInput,
  MessageInput,
} from "./contact.style";
import { VarButton } from "../../styles/globalStyles";
import { InputLabel } from "./contact.style";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Contact Me</ContactTitle>
      </ContactHeader>
      <ContactBody>
        {/* <form action="https://formsubmit.co/johndev247@gmail.com" method="POST">
          <InputFields className="TextField-without-border-radius">
            <InputLabel>Full Name</InputLabel>
            <TextInput name="name" type="text" required />
          </InputFields>
          <InputFields>
            <InputLabel>Email </InputLabel>
            <TextInput name="email" type="email" required />
          </InputFields>
          <InputFields className="TextField-without-border-radius">
            <InputLabel>Phone</InputLabel>
            <TextInput name="phone" type="number" required />
          </InputFields>
          <InputFields>
            <InputLabel>Message </InputLabel>
            <MessageInput name="message" type="text" required />
          </InputFields>

          <VarButton onClick={handleSubmit} type="submit">
            Send
          </VarButton>
        </form> */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd4tkMFU-KhJoirIMdNi1Byy8W3NW8MWWQ42rr200-jo5jRqg/viewform?embedded=true"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </ContactBody>
    </ContactContainer>
  );
};

export default Contact;
