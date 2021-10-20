import React from "react";
import CandleAnimation from "../../../animations/CandleAnimation/CandleAnimation.component";
import CircleAnimation from "../../../animations/CircleAnimation/CircleAnimation.component";

import {
  AboutContainer,
  TextContainer,
  AboutBox,
  CandleFlex,
} from "./About.styles";

const About = () => {
  return (
    <AboutContainer>
      <h1>עלינו</h1>
      <AboutBox>
      <CircleAnimation />
        <TextContainer>
          <h1>מי אנחנו?</h1>
          <p></p>
        </TextContainer>
{/*         <CircleAnimation>
        <TextContainer>
          <h1>החזון שלנו</h1>
          <p></p>
        </TextContainer>
          <CircleAnimation>
          <TextContainer>
          <h1>עזרה הדדית</h1>
          <p></p>
        </TextContainer>
        </CircleAnimation> */}
      </AboutBox>
      <CandleFlex>
        {" "}
        <CandleAnimation />
        <CandleAnimation />
      </CandleFlex>
    </AboutContainer>
  );
};

export default About;

