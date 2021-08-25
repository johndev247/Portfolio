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
  BodyImage,
  ProjectDescription,
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
                <CardTitle> ECommers App</CardTitle>
              </CardHeader>
              <CardBody>
                <ProjectDescription>
                  FullStack Ecommers App Like Amazon, Using The MERN STACK.
                </ProjectDescription>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Investment App</CardTitle>
              </CardHeader>
              <CardBody>
                <ProjectDescription>
                  FullStack Product Investment App, Using The MERN STACK +
                  Graphql.
                </ProjectDescription>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Todo App</CardTitle>
              </CardHeader>
              <CardBody>
                <ProjectDescription>
                  Todo Task Check Listing App, Using React Js and Redux
                </ProjectDescription>
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
                <CardTitle>Tetris Game</CardTitle>
              </CardHeader>
              <CardBody>
                <ProjectDescription>
                  Advanced Tetris Game, Using React Js and Styled Components
                </ProjectDescription>
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
