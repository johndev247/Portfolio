import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const MobileExit = styled(FaTimes)`
  font-size: 2em;
  z-index: 55;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.variant};
  position: absolute;
  border-radius: 0.2em;
  left: 0.3em;
  top: 0.3em;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.variant};
    transition: 0.3s all ease-in-out;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled(FaBars)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    font-size: 2em;
    color: white;
    background-color: ${({ theme }) => theme.variant};
    border-radius: 0.2em;
    position: absolute;
    left: 0.3em;
    top: 0.3em;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.variant};
      transition: 0.3s all ease-in-out;
    }
  }
`;
