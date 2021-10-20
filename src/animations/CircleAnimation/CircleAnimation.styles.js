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
  z-index: 0;
`;

export const Circle = styled.div`
  position: relative;
  width: 80vh;
  height: 80vh;
  background: linear-gradient(white, DeepPink);
  opacity: 0.5;
  border-radius: 50%;
  animation: ${Roler} 10s linear infinite;
  margin: 5em;

  &::after {
    content: "";
    position: absolute;
    top: 35px;
    right: 35px;
    bottom: 35px;
    left: 35px;
    border-radius: 50%;
    background-color: rgba(255, 80, 180, 0.5);
  }
`;
