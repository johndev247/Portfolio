import {Typography} from "@material-ui/core";
import styled from "styled-components";

export const HomePage = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 350px 100px;
  grid-template-areas:
    "main"
    "discription";
  @media only screen and (max-width: 768px) {
    grid-template-columns: 100vw;
  }
`;

export const HomePic = styled.div`
  width: 100%;
  height: 100%;
  grid-area: main;
`;

export const PicIllusCont = styled.div`
  width: 100%;
  height: 100%;
`;

export const Pic = styled.img`
  width: 100%;
  height: 100%;
`;

export const PicIllus = styled.div`
  background-color: ${({theme}) => theme.body};
  width: 350px;
  height: 350px;
  display: flex;
  position: relative;
  justify-content: center;
`;

export const IllusPic = styled.img`
  width: 40%;
  transform: rotate(10deg);
  height: 40%;
  display: flex;
  border-radius: 50%;
  align-self: center;
`;

export const CircleOne = styled.div`
  background-color: ${({theme}) => theme.bubbleBlue};
  position: absolute;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  color: white;
  right: 3em;
  top: 2.7em;
`;
export const CircleTwo = styled.div`
  background-color: ${({theme}) => theme.bubbleGreen};
  position: absolute;
  color: white;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  right: 8.6em;
  top: 0.1em;
`;
export const CircleThree = styled.div`
  background-color: ${({theme}) => theme.bubblePupple};
  position: absolute;
  color: white;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  left: 2.7em;
  top: 2.7em;
`;
export const CircleFour = styled.div`
  background-color: ${({theme}) => theme.bubbleDarkBlue};
  position: absolute;
  color: white;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  right: 8.9em;
  bottom: 0.5em;
`;
export const CircleFive = styled.div`
  background-color: ${({theme}) => theme.bubbleBrown};
  position: absolute;
  color: white;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  right: 0.5em;
  bottom: 8.6em;
`;
export const CircleSix = styled.div`
  background-color: ${({theme}) => theme.bubbleBlack};
  position: absolute;
  color: white;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  left: 2.7em;
  bottom: 2.7em;
`;
export const CircleSeven = styled.div`
  background-color: ${({theme}) => theme.bubblePink};
  position: absolute;
  color: white;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  right: 3em;
  bottom: 2.7em;
`;
export const CircleEight = styled.div`
  background-color: ${({theme}) => theme.bubbleRed};
  position: absolute;
  color: white;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.variant};
  left: 0.5em;
  bottom: 8.6em;
`;

export const SpanOne = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 0.7em;
  left: 0.4em;
  font-size:12px;
`;
export const SpanTwo = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 0.6em;
  left: 0.4em;
`;
export const SpanThree = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 1.3em;
  left: 1.2em;
`;
export const SpanFour = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 1.3em;
  left: 0.2em;
`;
export const SpanFive = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 1.3em;
  left: 0.2em;
`;
export const SpanSix = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 0.7em;
  left: 0.6em;
`;
export const SpanSeven = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 1.3em;
  left: 0.2em;
`;
export const SpanEight = styled.span`
  background-color: unset;
  position: absolute;
  font-weight: bold;
  top: 1.3em;
  left: 0.2em;
`;

export const Break = styled.span`
  position: absolute;
  background-color: unset;
  left: 1em;
  top: 1.3em;
`;

export const Discription = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 50px 70px;
  grid-area: "discription";
  grid-template-areas:
    "name"
    "showcase";
`;

export const Name = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  grid-area: name;
  @media only screen and (max-width: 768px) {
    overflow: scroll;
    height: 140px;
  }
`;
export const FullName = styled(Typography)`
  color: ${({theme}) => theme.titles};
`;

export const ShowCase = styled.div`
  width: 100%;
  height: 100%;
  grid-area: showcase;
  color: ${({theme}) => theme.titles};
`;
