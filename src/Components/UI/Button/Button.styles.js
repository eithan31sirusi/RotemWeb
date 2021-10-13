import styled from "styled-components";

export const Button = styled.button`
  width: 9rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 105, 180, 0.5);
  color: black;
  margin-bottom: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  box-shadow: 5px 5px 8px grey;
  transition: 0.2s ease-in;

  &:hover {
    background-color: ivory;
    cursor: pointer;
    box-shadow: 0px 0px 30px 10px #fffaf0;
  }
`;
