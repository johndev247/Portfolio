import styled from "styled-components";
export const SkillsContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "body";
`;

export const SkillsTitle = styled.div`
  width: 100%;
  height: 100%;
  grid-area: title;
  text-align: center;
`;

export const SkillCadsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
  grid-template-columns: 1fr 1fr;
  grid-area: body;
  @media only screen and (max-width: 768px) {
    grid-area: body;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 17px;
    box-sizing: content-box;
    display: flex;
    margin-left: 1em;
    padding: 0;
    display: block;
  }
`;

export const SkillsCardsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.h2`
  background-color: unset;
  text-align: center;
  color: ${({theme}) => theme.article};
`;

export const SkillsBody = styled.div`
  position: relative;
  width: 100%;
  @media only screen and (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const SkillsCard = styled.div`
  width: 82%;
  height: 50vh;
  max-height: 300px;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  grid-template-areas:
    "cardtitle cardtitle"
    "cardbody angle";
  border-radius: 1em;
  display: grid;
  background-color: ${({theme}) => theme.cards};
  margin-bottom: 0.5em;
  @media only screen and (max-width: 768px) {
    width: 80%;
    background-color: ${({theme}) => theme.cards};
    height: 50vh;
    margin-bottom: 0.5em;
    box-shadow: 0px 0px 12px 0px ${({theme}) => theme.shadow};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    grid-template-areas:
      "cardtitle"
      "cardbody";
    border-radius: 1em;
  }
`;

export const SkillCardTitle = styled.div`
  grid-area: cardtitle;
  width: 95%;
  background-color: unset;
  margin: 0.5em auto;
`;

export const SkillCardBody = styled.div`
  width: 80%;
  margin: 1.2em auto;
  padding: 0.5em;
  grid-area: cardbody;
  background-color: ${({theme}) => theme.cards};
  border-radius: 1em;
`;

export const CardDiscription = styled.blockquote`
  text-transform: capitalize;
  background-color: ${({theme}) => theme.cards};
  color: ${({theme}) => theme.article};
`;
export const Traingle = styled.div`
  margin: 0;
  padding: 0;
  display: inline-block;
  border-left: 2% solid transparent;
  border-right: 50px solid ${({theme}) => theme.variant};
  border-bottom: 50px solid transparent;
  border-top: 50px solid transparent;
  grid-area: angle;
  width: 0.1%;
  height: 1px;
  position: absolute;
  right: 0.5em;
  top: 7em;
  @media only screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
    display: inline-block;
    border-left: 2% solid transparent;
    border-right: 50px solid ${({theme}) => theme.variant};
    border-bottom: 50px solid transparent;
    border-top: 50px solid transparent;
    grid-area: angle;
    width: 0.1%;
    height: 1px;
    position: absolute;
    top: 7rem;
    transform: none;
    right: 0;
  }
`;

export const VatLine = styled.hr`
  width: 1px;
  height: 100%;
  max-height: 600px;
  position: fixed;
  right: 1.3em;

  @media only screen and (min-width: 768px) {
    position: absolute;
    margin-right: 9%;
  }
`;
