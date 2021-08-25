import React from "react";
import {SkillsContainer, Title, VatLine} from "./skills.style";
import {
  ResumeBody,
  ResumeBodyContainer,
  ResumeCard,
  ResumeTitle,
  SquareBox,
  VertLine,
  ResumeBox,
  Year,
  ResumeCardTitle,
  ResumeCardBody,
  ResumeCardContent,
} from "../Resume/resume.style";

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <ResumeTitle>
          <Title>Skills</Title>
        </ResumeTitle>
        <ResumeBox>
          <ResumeBodyContainer>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Frontend</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent>
                    veteran in react js, using react hooks and redux for state
                    management. Always work with the best practices and keeping
                    a clean code.
                  </ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year>React Js</Year>
              </SquareBox>
            </ResumeBody>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Git</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent>
                    proficient in Git/Github. Use it For Version Control,
                    Constant Update of Repository, sharing of code and working
                    with team.
                  </ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year> Git</Year>
              </SquareBox>
            </ResumeBody>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Backend</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent>
                    I utilise the power of qraphql in the backend Api with
                    apollo client in the frontend. I use it to optimize backend
                    queries. I also have A vast Knowledge in working with
                    Express Js for REST API.
                  </ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year>API</Year>
              </SquareBox>
            </ResumeBody>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Database</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent>
                    In the choice of databases, I prefer using Mongodb for
                    projects with less relations, also skillful in SQL such as
                    Posgresql with Prisma. I user it for projects with so much
                    relations.
                  </ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year>Database</Year>
              </SquareBox>
            </ResumeBody>
          </ResumeBodyContainer>
          <VertLine>
            <VatLine />
          </VertLine>
        </ResumeBox>
      </SkillsContainer>
    </>
  );
};

export default Skills;
