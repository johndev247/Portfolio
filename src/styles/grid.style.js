import styled from "styled-components";

const Grid = styled.div`
  position: relative;
  display: grid;
  width: 100vw;
  margin: 0 auto;
  max-width: 1200px;
  max-height: 750px;
  height: 100vh;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 1fr 50px;
  grid-template-areas:
    "side main"
    "side footer";
  @media only screen and (max-width: 768px) {
    display: flex;
    position: relative;
    height: 100vh;
    max-height: unset;
  }
`;

export const LeftSideGrid = styled.nav`
  transition: 0.01s all ease-in;
  box-shadow: -3px 0px 20px 1px ${({theme}) => theme.shadow};
  grid-area: side;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    position: fixed;
    width: 50%;
    height: 100vh;
    top: 0;
    padding: 0;
    left: ${({hide}) => (hide ? "-50% " : " 0 ")};
    box-shadow: 1px 1px 10px 3px ${({theme}) => theme.shadow};
    transition: 0.2s all ease-in;
  }
  @media only screen and (max-width: 337px) {
    position: fixed;
    left: ${({hide}) => (hide ? "-100% " : " 0 ")};
    box-shadow: unset;
    width: 100%;
  }
`;

export const RightSideGrid = styled.nav`
  display: none;
  @media only screen and (max-width: 768px) {
    background-color: ${({theme}) => theme.variant};
    position: fixed;
    display: grid;
    padding: 0;
    top: 0;
    right: -50%;
    width: 50%;
    height: 100vh;
    box-shadow: 2px 2px 5px 5px ${({theme}) => theme.shadow};
    grid-area: leftGrid;
  }
`;

export const MainGrid = styled.div`
  width: 100%;
  box-shadow: 1px 0px 20px 2px ${({theme}) => theme.shadow};
  grid-area: main;
`;

export const FooterGrid = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  grid-area: footer;
  box-shadow: 1px 4px 24px 2px ${({theme}) => theme.shadow};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export default Grid;
