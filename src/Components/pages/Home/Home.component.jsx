import React from "react";

import CardList from "../../Card-list/CardList.component";
import Iframe from "../../UI/Iframe/Iframe.component";

import { HomeContainer } from "./Home.styled";
import "./Home.styled.js";
import "./home.css";
/* אל תשכח לסיים את הרקע השחור לפופ אפ
יש לנו פונקציה שמחזירה סטרינג בהתאם לתנאי
נשאר רק לבדוק האם  צריך סטיי בשביל השינוי
*/
const Home = () => {
  const bgBlurHandler = (popVal) => {
    let setPop = popVal;
    if (setPop === true) {
      return "blur";
    } else {
      return "";
    }
  };

  return (
    <HomeContainer className={bgBlurHandler}>
      <h1>דף הבית</h1>
      <CardList bgBlurHandler={bgBlurHandler} />
      <Iframe />
    </HomeContainer>
  );
};

export default Home;
