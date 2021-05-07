import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  background-color: unset;
  width: 60%;
  max-width: 350px;
  grid-template-rows: 50px 1fr;
  height: 480px;
  margin: 1rem auto 2rem auto;
  border-radius: 0.2em;
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.shadow};

  align-content: center;
`;

export const ContactHeader = styled.div`
  display: flex;
  background-color: unset;
  flex-direction: column;
  width: 80%;
  margin: 1.8rem auto;
  height: 60px;
`;

export const ContactTitle = styled.h2`
  text-align: center;
  background-color: unset;
  color: ${({ theme }) => theme.titles};
  padding-top: 0;
  font-weight: bold;
`;
export const ContactBody = styled.div`
  display: flex;
  background-color: unset;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
`;

export const InputFields = styled.div`
  background-color: unset;
  width: 90%;
  margin: 0 auto 0.5rem auto;
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.5em;
  padding: 0.3em;
  font-size: 1.1em;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.inputText};
`;

export const MessageInput = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.5em;
  padding: 0.3em;
  height: 6em;
  font-size: 0.9em;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.inputText};
`;

export const InputLabel = styled.label`
  background-color: unset;
  color: ${({ theme }) => theme.titles}; ;
`;
