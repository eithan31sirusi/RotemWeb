import React, { useState } from "react";

import { Button } from "../UI/Button/Button.styles";
import { Container } from "../UI/Container/Container.styles";

import Card from "../UI/Card/Card.component";
import PopUp from "../UI/PopUp/PopUp.component";

import cards from "../../services/cards";

import { CardListContainer } from "./CardList.styled";

const Cards = (props) => {
  const [showPopUp, setshowPopUp] = useState(false);
  const [selectedCard, setselectedCard] = useState({});

  const clickHandler = (id) => {
    const chosenCard = cards.find((card) => card.id === id);
    props.bgBlurHandler(showPopUp);
    setshowPopUp(!showPopUp);
    setselectedCard(chosenCard);
  };

  const closeHandler = () => {
    props.bgBlurHandler(showPopUp);
    setshowPopUp(false);
  };

  return (
    <Container>
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
        <CardListContainer>
          <PopUp card={selectedCard}>
            <Button backgroundColor="#eba6ed" onClick={closeHandler}>
              סגרי
            </Button>
          </PopUp>
        </CardListContainer>
      )}
    </Container>
  );
};

export default Cards;
