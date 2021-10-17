import React from "react";
import { AboutContainer, TextContainer, AboutBox } from "./About.styles";

const About = () => {
  return (
    <AboutContainer>
      <h1>עלינו</h1>
      <AboutBox>
        <TextContainer>
          <h1>מי אנחנו?</h1>
          <p></p>
        </TextContainer>
        <TextContainer>
          <h1>החזון שלנו</h1>
          <p></p>
        </TextContainer>
        <TextContainer>
          <h1>עזרה הדדית</h1>
          <p></p>
        </TextContainer>
      </AboutBox>
    </AboutContainer>
  );
};

export default About;
