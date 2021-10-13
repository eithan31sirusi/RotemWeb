import styled, { keyframes } from "styled-components";

import Background from "./images/iframe_bg.svg";

/* key frames animations */

const borderAnimation = keyframes`
 0% {box-shadow: 0px 0px 70px 20px #fffaf0 inset;
 }
 15% {box-shadow: 0px 0px 60px 16px #fffaf0 inset;
  border: 3px solid #fffaf0 0.1; }
 30% {box-shadow: 0px 0px 50px 14px #fffaf0 inset;
  border: 3px solid #fffaf0 0.3;}
 45% {box-shadow: 0px 0px 40px 12px #fffaf0 inset;
  border: 3px solid #fffaf0 0.5; }
 60% {
  box-shadow: 0px 0px 30px 10px #fffaf0 inset;
  border: 3px solid #fffaf0 0.7; }
 75% {
  box-shadow: 0px 0px 20px 9px #fffaf0 inset;
  border: 3px solid #fffaf0 0.9; }
 100% {
  box-shadow: 0px 0px 15px 8px  #fffaf0 inset;
  border: 3px solid #fffaf0 1; }`;

export const IframeContainer = styled.div`
  background-image: url(${Background});
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 3rem;
`;

export const TitleH1 = styled.h1`
  margin: 0;
  padding-top: 3rem;
`;
export const IframeRow = styled.div`
  padding-bottom: 6rem;
  border: 3px solid rgba(0, 0, 0, 0);

  border-radius: 2em;
  padding: 1rem;
  margin: 2em;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 3px solid #fffaf0 0.5;
    box-shadow: 0px 0px 30px 10px #fffaf0 inset;
    animation-name: ${borderAnimation};
    animation-duration: 1.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
`;

export const IframeHr = styled.hr`
  width: 20rem;
  border-color: Ivory;
  border-style: solid;
`;
