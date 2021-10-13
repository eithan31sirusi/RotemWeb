import styled from "styled-components";

export const Container = styled.div`
  width: 100;
  max-width: 100%;
  background-color: ${(props) =>
    props.backgorundColor || "rgba(255, 105, 180, 0.5)"};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  /*  filter: ${(props) => props.filter || "blur(1.5rem)"}; */
`;
