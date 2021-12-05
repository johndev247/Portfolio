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
import {Container} from "../../styles/globalStyles";
import {Typography} from "@material-ui/core";
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
                  <SpanFour>REST API</SpanFour>
                </CircleFour>
                <CircleFive>
                  <SpanFive>Graphql</SpanFive>
                </CircleFive>
                <CircleSix>
                  <SpanSix>
                    HTML<Break> CSS </Break>
                  </SpanSix>
                </CircleSix>
                <CircleSeven>
                  <SpanSeven>
                    Postgres<Break> SQL </Break>
                  </SpanSeven>
                </CircleSeven>
                <CircleEight>
                  <SpanEight>
                    React<Break> Redux </Break>
                  </SpanEight>
                </CircleEight>
                <IllusPic src={Img} />
              </PicIllus>
            </PicIllusCont>
          </HomePic>
        </Container>
        <Discription>
          <Container>
            <ShowCase>
              <Typography variant="h4">
                <Typed strings={["John Solomon "]} typeSpeed={150} />
              </Typography>
            </ShowCase>
          </Container>
          <Container>
            <Name>
              <FullName variant="h6">
                <Typed
                  strings={[
                    "Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an Ecommerce webapp, customer web portal, and online game webapp. Passionate about software architecture and cloud computing. Regular attendee of web developer meetups.",
                  ]}
                  typeSpeed={80}
                />
              </FullName>
            </Name>
          </Container>
        </Discription>
      </HomePage>
    </>
  );
};

export default Home;
