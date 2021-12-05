import React from "react";
import {Title} from "../Skills/skills.style";
import {
  ResumeContainer,
  ResumeTitle,
  ResumeBodyBox,
  ResumeNameTitle,
  ResumeAddress,
  ResumeAddressText,
  ResumeInfoBox,
  ResumeDetailTitle,
  ResumeDetailText,
  ResumeBox,
  HorizontalRule,
} from "./resume.style";

const Resume = () => {
  return (
    <>
      <ResumeContainer>
        <ResumeTitle>
          <Title>RESUME</Title>
        </ResumeTitle>
        <ResumeBox>
          <ResumeBodyBox>
            <ResumeNameTitle>JOHN SOLOMON</ResumeNameTitle>
            <ResumeAddress>
              <ResumeAddressText>
                No.53 Yakubu Gowon Way, <br />
                Jos, Plateau State, <br />
                Nigeria.
                <br />
                Phone: 07088260046 <br />
                Email: Johndev247@gmail.com
              </ResumeAddressText>
            </ResumeAddress>
            <HorizontalRule />
            <ResumeInfoBox>
              <ResumeDetailTitle>Professional Summary</ResumeDetailTitle>
              <ResumeDetailText>
                A Full Stack Web Developer with a passion for web application
                development and success in managing development projects using
                React, Graphql/REST API, and Postgresql/Mongodb. Skilled in
                conceptualizing, designing, development, and deploying software
                containing logical and mathematical solutions to business
                problems. Dedicated to driving innovation with the ability to
                follow industry and technological trends, and facilitating early
                adoption of innovations.
              </ResumeDetailText>
            </ResumeInfoBox>
            <HorizontalRule />
            <ResumeInfoBox>
              <ResumeDetailTitle>Skills Highlight</ResumeDetailTitle>
              <ResumeDetailText>
                <ul>
                  <li>Web Development</li>
    <li>Mobile App Development: ios / Android</li>
                  <li>Git Version Control</li>
                  <li>Cross-Browser Operability</li>
                  <li>Project management</li>
                  <li>Workflow Optimization</li>
                  <li>User Requirements Gathering</li>
                </ul>
              </ResumeDetailText>
            </ResumeInfoBox>
            <HorizontalRule />
            <ResumeInfoBox>
              <ResumeDetailTitle>Education</ResumeDetailTitle>
              <ResumeDetailText>
                University Of Maiduguri, 2020
                <br />
                Bachelor of Science: (Ed) Biology <br />
                Nigeria
              </ResumeDetailText>
            </ResumeInfoBox>
            <HorizontalRule />
            <ResumeInfoBox>
              <ResumeDetailTitle>Technical Skills</ResumeDetailTitle>
              <ResumeDetailText>
                HTML5/HTML and CSS3/CSS, JavaScript, jQuery, React Js,React Native, Graphql,
                Postgresql, Mongodb, Next Js, Prisma, Express Js.
              </ResumeDetailText>
            </ResumeInfoBox>
            <HorizontalRule />
            <ResumeInfoBox>
              <ResumeDetailTitle>Professional Experience</ResumeDetailTitle>
              <ResumeDetailText>
                <h3 style={{fontWeight: "bold"}}>
                  2019-Present: Freelance Developer
                </h3>
                <br />
                Maintain websites and applications, including content updates,
                account administration, debugging, feature enhancements and
                documentations, testing, documentation, and regular upgrades to
                ensure web security and system usability. Identify current
                internet and website requirements, and participate in planning
                and execution of projects by organizing, scheduling, executing,
                and coordinating work assignments to achieve milestone
                deadlines. Support maintenance programming development for web
                pages and web applications. Research new web technologies,
                including software and hardware developments, and recommend
                purchases and changes in design, security, software, and
                hardware.
              </ResumeDetailText>
            </ResumeInfoBox>
          </ResumeBodyBox>
        </ResumeBox>
      </ResumeContainer>
    </>
  );
};

export default Resume;
