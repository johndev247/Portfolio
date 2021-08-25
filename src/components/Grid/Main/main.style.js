import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "topNav"
    "mainBody";
`;

export const TopNav = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  position: relative;
  background-color: ${({theme}) => theme.variant};
  grid-area: topNav;
`;
export const MainBody = styled.div`
  width: 100;
  height: 85vh;
  max-height: 660px;
  grid-area: mainBody;
`;
