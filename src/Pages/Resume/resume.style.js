import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "body";
`;

export const ResumeBox = styled.div`
  grid-area: body;
  display: grid;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 1fr;
`;

export const ResumeTitle = styled.div`
  grid-area: title;
  color: ${({ theme }) => theme.article};
`;

export const ResumeBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 35px;
  box-sizing: content-box;
`;

export const VertLine = styled.div`
  width: 100%;
  height: 100%;
`;

export const ResumeBody = styled.div`
  display: grid;
  width: 95%;
  margin: 3em auto 1em auto;
  height: 45vh;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 1fr;

  @media only screen and (min-width: 768px) {
    width: 70%;
    min-width: 500px;
  }
`;

export const ResumeCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.variant};
  border-radius: 0.3em;
  box-shadow: 0px 0px 17px -4px ${({ theme }) => theme.shadow};
`;

export const ResumeCardTitle = styled.div`
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.text};
  background-color: unset;
`;

export const ResumeCardBody = styled.div`
  width: 100%;
  height: 100%;
`;

export const ResumeCardContent = styled.blockquote`
  width: 94%;
  height: 95%;
  padding: 5px;
  color: ${({ theme }) => theme.article};
`;

export const SquareBox = styled.div`
  z-index: 1;
  width: 90px;
  height: 50px;
  background-color: ${({ theme }) => theme.variant};
  transform: translate(5%, 6em);
`;

export const Year = styled.h3`
  background-color: unset;
  text-align: center;
  padding-top: 0.4em;
  color: ${({ theme }) => theme.text};
`;
