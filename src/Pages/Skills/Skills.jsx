import React from "react";
import {
  CardDiscription,
  SkillCadsContainer,
  SkillCardTitle,
  SkillsCard,
  Title,
  Traingle,
  SkillCardBody,
  SkillsBody,
  SkillsContainer,
  SkillsTitle,
  SkillsCardsWrapper,
} from "./skills.style";

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <SkillsTitle>
          <Title>Skills</Title>
        </SkillsTitle>
        <SkillsCardsWrapper>
          <SkillCadsContainer>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> Javascript</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    I Have a good javascrip skills, such as ES6 Features, good
                    cording practice, writing reusable codes and a good code
                    implimentation. I Use Javasript for Both Back-End and
                    Front-End.
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> Git</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    I Use Git For Version Control,Constantly Updating A Repo and
                    Keeping A Decent code
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> Node Js</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                    ultricies ligula sed magna dictum porta. Cras ultricies
                    ligula sed magna dictum porta. Curabitur arcu erat, accumsan
                    id imperdiet et, porttitor at sem.
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> Express Js</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                    ultricies ligula sed magna dictum porta. Cras ultricies
                    ligula sed magna dictum porta. Curabitur arcu erat, accumsan
                    id imperdiet et, porttitor at sem.
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> React Js</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                    ultricies ligula sed magna dictum porta. Cras ultricies
                    ligula sed magna dictum porta. Curabitur arcu erat, accumsan
                    id imperdiet et, porttitor at sem.
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> Mongo Db</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                    ultricies ligula sed magna dictum porta. Cras ultricies
                    ligula sed magna dictum porta. Curabitur arcu erat, accumsan
                    id imperdiet et, porttitor at sem.
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> Postgresql</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                    ultricies ligula sed magna dictum porta. Cras ultricies
                    ligula sed magna dictum porta. Curabitur arcu erat, accumsan
                    id imperdiet et, porttitor at sem.
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
            <SkillsBody>
              <SkillsCard>
                <SkillCardTitle>
                  <Title> HTML/CSS</Title>
                </SkillCardTitle>
                <SkillCardBody>
                  <CardDiscription>
                    Vivamus suscipit tortor eget felis porttitor volutpat. Cras
                    dictum porta. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. ultricies ligula sed magna dictum porta.
                    Cras ultricies ligula sed magna
                  </CardDiscription>
                </SkillCardBody>
              </SkillsCard>
              <Traingle />
            </SkillsBody>
          </SkillCadsContainer>
        </SkillsCardsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
