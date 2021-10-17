import React, { useState } from "react";

import { Button } from "../UI/Button/Button.styles";
import { Container } from "../UI/Container/Container.styles";
import { CardListTitle } from "./CardList.styled";

import Card from "../UI/Card/Card.component";
import PopUp from "../UI/PopUp/PopUp.component";

import cards from "../../services/cards";

const Cards = () => {
  const [showPopUp, setshowPopUp] = useState(false);
  const [selectedCard, setselectedCard] = useState({});

  const clickHandler = (id) => {
    const chosenCard = cards.find((card) => card.id === id);
    setshowPopUp(!showPopUp);
    setselectedCard(chosenCard);
  };

  const closeHandler = () => {
    setshowPopUp(false);
  };

  return (
    <Container>
      <CardListTitle>מאמרים</CardListTitle>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            imageUrl={card.imageUrl}
            body={card.body}
            imageRedirect={card.imageRedirect}
            clickHandler={clickHandler}
          >
            <Button
              backgroundColor="#eba6ed"
              variant="contained"
              color="primary"
              onClick={() => clickHandler(card.id)}
            >
              לקרוא עוד
            </Button>
          </Card>
        );
      })}

      {showPopUp && (
        <PopUp card={selectedCard}>
          <Button backgroundColor="#eba6ed" onClick={closeHandler}>
            סגרי
          </Button>
        </PopUp>
      )}
    </Container>
  );
};

export default Cards;
