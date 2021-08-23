import React from "react";
import {Links, PriButton, SecButton} from "../../styles/globalStyles";
import {
  PortfolioContainer,
  PortfolioGrid,
  Projects,
  Title,
  TitleSection,
  ProjectLists,
  CardHeader,
  CardBody,
  CardButtons,
  CardTitle,
  BodyTitle,
  BodyImage,
} from "./portfolio.style";
import tetrisPic from "../../images/tetris.png";
import todoPic from "../../images/todo.png";

const Portfolio = () => {
  return (
    <>
      <PortfolioGrid>
        <TitleSection>
          <Title>Projects</Title>
        </TitleSection>
        <ProjectLists>
          <PortfolioContainer>
            <Projects>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle> ECommers App</BodyTitle>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle> Investment App</BodyTitle>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle>Todo App</BodyTitle>
                <BodyImage src={todoPic} />
              </CardBody>
              <CardButtons>
                <PriButton>
                  <Links
                    target="blank"
                    href="https://react-redux-toolkit-todo.herokuapp.com/"
                  >
                    Live
                  </Links>
                </PriButton>
                <SecButton>
                  <Links
                    target="blank"
                    href="https://github.com/johndev247/React-Redux-Todo"
                  >
                    Code
                  </Links>
                </SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Project 4</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle>Tetris Game</BodyTitle>
                <BodyImage src={tetrisPic} />
              </CardBody>
              <CardButtons>
                <PriButton>
                  <Links target="blank" href="https://playtetro.herokuapp.com">
                    Live
                  </Links>
                </PriButton>
                <SecButton>
                  <Links
                    target="blank"
                    href="https://github.com/johndev247/tetris"
                  >
                    Code
                  </Links>
                </SecButton>
              </CardButtons>
            </Projects>
          </PortfolioContainer>
        </ProjectLists>
      </PortfolioGrid>
    </>
  );
};

export default Portfolio;
