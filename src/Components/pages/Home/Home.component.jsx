import React from "react";

import Cards from "../../Card-list/Card-list.component";

import "./Home.styles.scss";

const Home = () => {
  return (
    <>
      <h1>Home Page!</h1>
      <div className="main-container">
        <Cards />
      </div>
    </>
  );
};

export default Home;
