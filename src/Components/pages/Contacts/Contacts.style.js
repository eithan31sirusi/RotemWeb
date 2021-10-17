import styled from "styled-components";
import Background from "./images/contactBG.jpg";

export const ContactContainer = styled.div`
  h1,
  h2,
  h3,
  label {
    font-family: "Open Sans", sans-serif;
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

export const FormBox = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgrey;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 450px;
  height: 450px;
  background: pink;
  border: 3px solid rgba(255, 105, 180, 0.8);
  margin: 5em;
  background-color: rgba(255, 105, 180, 0.2);
`;

export const ContactInput = styled.input`
  padding: 0.2em;
  margin-bottom: 2em;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  border-radius: 0.5em;
  border: none;
  width: 40%;

  &:focus {
    outline: none;
    border-color: #719ece;
  }
`;

export const ContactTextarea = styled.textarea`
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  border: none;
  resize: none;

  &:focus {
    outline: none;
    border-color: #719ece;
  }
`;
