import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "./images/loginBG.jpg";

export const ContactContainer = styled.div`
h1, h2 ,h3 {
    font-family: 'Open Sans', sans-serif;   
}

label {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
}
`;

export const ContactH2 = styled.h3`
align-self: flex-start;
justify-self: center;
position: absolute;
font-weight: 300;
width:15em;
  border-bottom: 2px solid Ivory;
`




export const FormBox = styled.div`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: cover;
background-color: lightgrey;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 50%;
    width: 70vh;
    height: 70vh;
    background: pink;
    margin: 5em;
    background-color: rgba(255, 105, 180, 0.2);
    position: absolute;
`

export const ContactInput = styled.input`
padding: 0.2em;
margin-bottom: 2em;
margin-top: 1em;
font-size: 1rem;
font-family: 'Open Sans', sans-serif;
border-radius: 0.5em;
border: none;
width: 40%;
text-align: right;
`

export const ContactTextarea = styled.textarea`
border-radius: 0.5em;
margin-bottom: 0.5em;
font-size: 1rem;
font-family: 'Open Sans', sans-serif;
`

export const LogninLink = styled(Link)`
font-size: 1.2rem;
color: black;
font-family: 'Open Sans', sans-serif;
`

export const LogniParagraph = styled.p`
font-size: 1.2rem;
font-family: 'Open Sans', sans-serif;
`