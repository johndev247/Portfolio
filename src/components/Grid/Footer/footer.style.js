import styled from "styled-components";
import { AiFillGithub, AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram, FiTwitter } from "react-icons/fi";

export const FooterBox = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.variant};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  @media only screen and (min-width: 768px) {
    grid-area: footer;
  }
`;
export const FooterItems = styled.div`
  z-index: 3;
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.variant};
`;

export const CopyRight = styled.div`
  align-self: center;
  margin-left: 0.4em;
  color: ${({ theme }) => theme.text};
  background: unset;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 1em;
  align-self: center;
  background: unset;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const Icons = styled.div`
  z-index: 999;
  margin-left: 0.4em;
  color: ${({ theme }) => theme.text};
  background: unset;

  font-size: 1.5em;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    margin-left: 1.1em;
  }
`;

export const Facebook = styled(AiOutlineFacebook)`
  background-color: ${({ theme }) => theme.facebook};
  border-radius: 0.3em;
`;

export const Instagram = styled(FiInstagram)`
  background-color: ${({ theme }) => theme.instagram};
  border-radius: 0.3em;
`;

export const Twitter = styled(FiTwitter)`
  background-color: ${({ theme }) => theme.twitter};
  border-radius: 0.3em;
`;
export const GitHub = styled(AiFillGithub)`
  background-color: ${({ theme }) => theme.github};
  border-radius: 0.1em;
`;
