import styled, { keyframes } from "styled-components";

const Roler = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

export const CircilContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: start;
`;

export const Circle = styled.div`
  position: relative;
  width: 50vh;
  height: 50vh;
  background: linear-gradient(red, blue);
  border-radius: 50%;
  animation: ${Roler} 2s linear infinite;
  margin: 5em;

  &::after {
    content: "";
    position: absolute;
    top: 35px;
    right: 35px;
    bottom: 35px;
    left: 35px;
    border-radius: 50%;
    background-color: rgba(255, 80, 180, 1);
  }
`;
