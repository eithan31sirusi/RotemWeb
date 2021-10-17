import styled from "styled-components";
import BackgroundImg from "./images/cardlistBG.jpg";

export const CardListContainer = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  /*  filter: ${(props) => props.filter || "blur(1.5rem)"}; */
`;

export const CardListTitle = styled.h1`
  align-self: flex-start;
  justify-self: center;
  position: absolute;
`;
