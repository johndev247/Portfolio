import React from "react";
import { Links, PriButton, SecButton } from "../../styles/globalStyles";
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
                <BodyTitle>Todo App</BodyTitle>
                <BodyImage src="https://react-redux-toolkit-todo.herokuapp.com/" />
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
                <CardTitle>Project 2</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle> Social Media App</BodyTitle>
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
                <BodyTitle> School System</BodyTitle>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Project 4</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle> Bussiness Platform</BodyTitle>
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
                <BodyTitle> School System</BodyTitle>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Project 4</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle> Bussiness Platform</BodyTitle>
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
                <BodyTitle> School System</BodyTitle>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
            <Projects>
              <CardHeader>
                <CardTitle>Project 4</CardTitle>
              </CardHeader>
              <CardBody>
                <BodyTitle> Bussiness Platform</BodyTitle>
                <BodyImage />
              </CardBody>
              <CardButtons>
                <PriButton>Live</PriButton>
                <SecButton>Code</SecButton>
              </CardButtons>
            </Projects>
          </PortfolioContainer>
        </ProjectLists>
      </PortfolioGrid>
    </>
  );
};

export default Portfolio;
