import styled from "styled-components";
export const Button = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${({theme}) => theme.variant};
  box-shadow: 0px 0px 3px 1px #262527;
  background-color: ${({theme}) => theme.text};
  width: 75px;
  height: 31px;
  cursor: pointer;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
`;

export const Round = styled.div`
  position: absolute;
  background-color: ${({theme}) => theme.variant};
  width: 25px;
  border-radius: 50%;
  height: 25px;
  margin-top: 3px;
  margin-left: -2px;
  margin-right: 3px;
  transition: 0.1s all ease-in;
  right: ${({right}) => (right ? 0 : "44px")};
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
`;

export const ToggleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: unset;
  justify-content: space-between;
`;
export const LeftLabel = styled.div`
  position: absolute;
  top: 8px;
  left: 33px;
  background: unset;
  font-size: 0.7em;
  font-family: "Martel Sans";
  font-weight: bold;
  letter-spacing: 0.07em;
  display: ${({left}) => (left ? "block" : "none")};
`;
export const RightLabel = styled.div`
  position: absolute;
  top: 8px;
  right: 33px;
  background: unset;
  font-size: 0.7em;
  font-family: "Martel Sans";
  font-weight: bold;
  letter-spacing: 0.07em;
  display: ${({right}) => (right ? "block" : "none")};
`;
