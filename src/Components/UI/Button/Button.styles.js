import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 0.5rem;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  margin-bottom: 1rem;

  &:hover {
    background-color: ivory;
    cursor: pointer;
  }
  &:active {
    background-color: green;
  }
`;
