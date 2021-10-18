import styled from "styled-components";
import Background from "./images/aboutBG.jpg";

export const AboutContainer = styled.div`
  h1,
  h2,
  h3,
  label {
    font-family: "Open Sans", sans-serif;
  }
  p {
    font-size: 1rem;
    width: 10%;
    background-color: red;
  }
`;

export const ContactH2 = styled.h3`
  align-self: flex-start;
  justify-self: center;
  position: absolute;
  font-weight: 300;
  width: 15em;
  border-bottom: 2px solid Ivory;
`;

export const AboutBox = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgrey;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  background: pink;
  border: 3px solid rgba(255, 105, 180, 0.8);
  margin: 5em;
  background-color: rgba(255, 80, 180, 0.2);
  color: GhostWhite;
`;

export const CandleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 16em;
`;
