import React from "react";
import { Title, VatLine } from "../Skills/skills.style";
import {
  ResumeBody,
  ResumeBodyContainer,
  ResumeCard,
  ResumeContainer,
  ResumeTitle,
  SquareBox,
  VertLine,
  ResumeBox,
  Year,
  ResumeCardTitle,
  ResumeCardBody,
  ResumeCardContent,
} from "./resume.style";

const Resume = () => {
  return (
    <>
      <ResumeContainer>
        <ResumeTitle>
          <Title>Experience</Title>
        </ResumeTitle>
        <ResumeBox>
          <ResumeBodyContainer>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Title one</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent>
                    Pellentesque in ipsum id orci porta dapibus. Pellentesque in
                    ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
                    lacinia in, elementum id enim. Quisque velit nisi, pretium
                    ut lacinia in, elementum id enim. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                  </ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year>2013</Year>
              </SquareBox>
            </ResumeBody>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Title one</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent> Contents</ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year>2014</Year>
              </SquareBox>
            </ResumeBody>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Title one</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent> Contents</ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year>2015</Year>
              </SquareBox>
            </ResumeBody>
            <ResumeBody>
              <ResumeCard>
                <ResumeCardTitle>
                  <Title>Title one</Title>
                </ResumeCardTitle>
                <ResumeCardBody>
                  <ResumeCardContent> Contents</ResumeCardContent>
                </ResumeCardBody>
              </ResumeCard>
              <SquareBox>
                <Year>2016</Year>
              </SquareBox>
            </ResumeBody>
          </ResumeBodyContainer>
          <VertLine>
            <VatLine />
          </VertLine>
        </ResumeBox>
      </ResumeContainer>
    </>
  );
};

export default Resume;
