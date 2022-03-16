import styled from "styled-components";

export const PortfolioGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "title"
    "list";
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-row-gap: 2px;
    height: 100%;
    width: 100%;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  grid-area: title;
`;
export const Title = styled.h1`
  color: ${({theme}) => theme.titles};
`;

export const PortfolioContainer = styled.div`
  grid-area: list;
  display: grid;
  width: 85%;
  height: 100%;
  margin: 1em 0 0 5em;
  overflow-y: scroll;
  box-sizing: content-box;
  padding-right: 13em;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr;
  grid-auto-rows: 2fr;
  grid-row-gap: 1.5em;
  grid-column-gap: 1em;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 500px;
    height: 100%;
    margin-left: 8.5em;
    padding-right: 30%;
    overflow-y: scroll;
    box-sizing: content-box;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding-right: 35%;
    margin-left: 8.1rem;
    overflow-y: scroll;
    box-sizing: content-box;
  }
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    width: 66%;
    height: 100%;
    padding-right: 35%;
    margin-left: 5.1rem;
    overflow-y: scroll;
    box-sizing: content-box;
  }
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    width: 66%;
    height: 100%;
    padding-right: 35%;
    margin-left: 3.8rem;
    overflow-y: scroll;
    box-sizing: content-box;
  }
  @media only screen and (max-width: 300px) {
    display: flex;
    flex-direction: column;
    width: 66%;
    height: 100%;
    padding-right: 35%;
    margin-left: 2.6rem;
    overflow-y: scroll;
    box-sizing: content-box;
  }
`;

export const ProjectLists = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Projects = styled.div`
  background-color: ${({theme}) => theme.variant};
  display: grid;
  margin-left: 1em;
  border-radius: 1em;
  margin: 0.5em 0;
  box-shadow: 0px 1px 5px 1px ${({theme}) => theme.shadow};
  grid-template-areas:
    "header"
    "body"
    "buttons";
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 1em 0;
  grid-area: header;
`;

export const CardBody = styled.div`
  display: flex;
  color: ${({theme}) => theme.titles};
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-area: body;
`;

export const BodyTitle = styled.h3`
  color: ${({theme}) => theme.titles};
  text-align: center;
`;
export const BodyImage = styled.img`
  width: 98%;
  margin: 0 auto;
  height: 70%;
  max-height: 120px;
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 100%;
  margin-bottom: 1em;
  grid-area: buttons;
`;

export const CardTitle = styled.h2`
  color: ${({theme}) => theme.titles};
  text-align: center;
`;

export const ProjectDescription = styled.blockquote`
  color: ${({theme}) => theme.titles};
  width: 98%;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
`;
