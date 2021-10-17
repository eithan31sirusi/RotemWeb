import React from "react";
import {ContactContainer,FormContainer,FormBox,ContactInput,LogniParagraph,LogninLink } from './Login.style'
import {Button}  from "../../UI/Button/Button.styles";

const Login = () => {
  return (
  <ContactContainer>
    <h1>צרי קשר</h1>;
    <FormBox>
    <FormContainer>
      <label htmlFor="mail">שם משתמשת</label>
      <ContactInput type="text" name="mail"/>
      <label htmlFor="password">סיסמא</label>
      <ContactInput type="text" name="password"/>
      <Button type="submit">התחברי</Button>
      <LogniParagraph>עדיין לא נרשמת? לחצי <LogninLink><b>כאן</b></LogninLink></LogniParagraph>
    </FormContainer>

    </FormBox>
  </ContactContainer>

  )
  
};

export default Login;