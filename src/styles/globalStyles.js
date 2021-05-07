import styled, { createGlobalStyle } from "styled-components";

const GlobalSyles = createGlobalStyle`
 * {
   margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    font-family: "Martel Sans", serif;
 }`;

export const Container = styled.div`
  display: flex;
  justify-self: center;
  margin: 2px;
  padding: 5px;
  margin-top: 2px;
`;

export const PriButton = styled.button`
  width: 31%;
  outline: none;
  height: 2.5em;
  border-style: outset;
  color: ${({ theme }) => theme.text};
  border-radius: 3.5em;
  border: 1px solid ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.priButton};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const SecButton = styled.button`
  width: 31%;
  color: ${({ theme }) => theme.text};
  height: 2.5em;
  outline: none;
  border-style: outset;
  border-radius: 3.5em;
  border: 1px solid ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.secButton};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const VarButton = styled.button`
  width: 50%;
  color: ${({ theme }) => theme.text};
  height: 2.5em;
  outline: none;
  border-style: outset;
  border-radius: 3.5em;
  border: 1px solid ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.priButton};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export default GlobalSyles;
