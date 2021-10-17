import React from "react";
import {ContactContainer,FormContainer,FormBox,ContactInput,ContactTextarea,ContactH2 } from './Contacts.style'
import {Button}  from "../../UI/Button/Button.styles";

const Contacts = () => {
  return (
  <ContactContainer>
    <h1>צרי קשר</h1>;
    <FormBox>
    
      <ContactH2> לכל שאלה את מוזמנת לפנות אלינו </ContactH2>

    <FormContainer>
      <label htmlFor="fname">שם פרטי</label>
      <ContactInput type="text" name="fname"/>
      <label htmlFor="mail">כתובת מייל</label>
      <ContactInput type="text" name="mail"/>
      <label for="w3review">תוכן הפניה</label>
<ContactTextarea id="w3review" name="w3review" rows="4" cols="35">
</ContactTextarea>
      <Button type="submit">שלחי</Button>
    </FormContainer>
    </FormBox>
  </ContactContainer>
  )
  
};

export default Contacts;
