import { Link } from "react-router-dom";
import styled from "styled-components";

export const LeftBar = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  grid-template-rows: 50px 100px 1fr 50px;
  grid-template-areas:
    "mobexit"
    "avatar"
    "navmenu"
    "navfooter";
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.titles};
  background-color: unset;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const LeftSideNav = styled.div`
  background-color: ${({ theme }) => theme.variant};
  grid-area: mobexit;
  width: 100%;
  padding: 0;

  @media only screen and (min-width: 768px) {
  }
`;

export const LeftSideAvatar = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
  justify-content: center;
  grid-area: avatar;
`;

export const Avatar = styled.img`
  width: 7em;
  margin-bottom: 4em;
  height: 7em;
  align-self: center;
  border-radius: 50%;
`;

export const LeftSideMenu = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  grid-area: navmenu;
`;

export const LeftSideMenuList = styled.ul`
  position: relative;
  text-align: left;
  list-style: none;
  padding: 0;
  margin-left: 1em;
  width: 100%;
  @media only screen and (max-width: 337px) {
    margin-left: 3.1em;
  }
`;

export const LeftSideIcons = styled.div`
  margin-right: 0.6em;
  font-size: 1.5em;
  padding: 0;
`;

export const LeftSideMenuItem = styled.li`
  display: flex;
  font-size: 0.9em;
  color: ${({ theme }) => theme.titles};
  padding: 0.3em;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.variant};
    border-radius: 0.3em;
    transition: 0.8s all ease-in-out;
    padding-left: 3px;
  }
`;

export const LeftSideFooter = styled.nav`
  position: absolute;
  padding: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  box-shadow: 4px 6px 18px 1px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.variant};
  color: white;
  grid-area: navfooter;
`;

export const SideSocialIcons = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 1em;
  align-self: center;
  background: unset;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const LeftSideCopyright = styled.div`
  position: relative;
  top: 0.8em;
  left: 2em;
  width: 100%;
  background: unset;
`;

export const LeftSidLine = styled.hr`
  width: 98%;
  padding: 0;
  margin-left: 1px;
`;
