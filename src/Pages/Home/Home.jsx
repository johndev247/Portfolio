import React from "react";
import Typed from "react-typed";
import {
  CircleEight,
  CircleFive,
  CircleFour,
  CircleOne,
  CircleSeven,
  CircleSix,
  CircleThree,
  CircleTwo,
  Discription,
  FullName,
  HomePage,
  HomePic,
  IllusPic,
  Name,
  PicIllus,
  PicIllusCont,
  ShowCase,
  SpanOne,
  SpanTwo,
  SpanThree,
  SpanFour,
  SpanFive,
  SpanSix,
  SpanSeven,
  SpanEight,
  Break,
} from "./homePage";
import Img from "../../images/IMG.jpg";
import { Container } from "../../styles/globalStyles";
import { Typography } from "@material-ui/core";
const Home = () => {
  return (
    <>
      <HomePage>
        <Container>
          <HomePic>
            <PicIllusCont>
              <PicIllus>
                <CircleOne>
                  <SpanOne>
                    Express <Break> Js </Break>
                  </SpanOne>
                </CircleOne>
                <CircleTwo>
                  <SpanTwo>
                    Mongo <Break> Db </Break>
                  </SpanTwo>
                </CircleTwo>
                <CircleThree>
                  <SpanThree>Git</SpanThree>
                </CircleThree>
                <CircleFour>
                  <SpanFour>Javasript</SpanFour>
                </CircleFour>
                <CircleFive>
                  <SpanFive>Node Js</SpanFive>
                </CircleFive>
                <CircleSix>
                  <SpanSix>
                    HTML /<Break> CSS </Break>
                  </SpanSix>
                </CircleSix>
                <CircleSeven>
                  <SpanSeven>
                    Postgres<Break> SQL </Break>
                  </SpanSeven>
                </CircleSeven>
                <CircleEight>
                  <SpanEight>React Js</SpanEight>
                </CircleEight>
                <IllusPic src={Img} />
              </PicIllus>
            </PicIllusCont>
          </HomePic>
        </Container>
        <Discription>
          <Container>
            <Name>
              <FullName variant="h5">
                <Typed strings={["JOHN SOLOMON"]} typeSpeed={120} />
              </FullName>
            </Name>
          </Container>
          <Container>
            <ShowCase>
              <Typography variant="h4">
                <Typed
                  strings={[
                    "Front-End ",
                    "Back-End ",
                    "FullStack ",
                    "Git",
                    "Mongo Db ",
                    "React Js ",
                    "JavaScript ",
                  ]}
                  typeSpeed={100}
                  backDelay={80}
                  loop
                />
              </Typography>
            </ShowCase>
          </Container>
        </Discription>
      </HomePage>
    </>
  );
};

export default Home;
