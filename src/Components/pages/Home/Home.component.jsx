import React from "react";

import CardList from "../../Card-list/CardList.component";
import Iframe from "../../UI/Iframe/Iframe.component";

import { HomeContainer } from "./Home.styled";
import "./Home.styled.js";

const Home = () => {
  return (
    <HomeContainer>
      <CardList />
      <Iframe />
    </HomeContainer>
  );
};

export default Home;
