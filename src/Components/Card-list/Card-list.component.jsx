import React, { useState } from "react";

import { Button } from "../UI/Button/Button.styles";
import { Container } from "../UI/Container/Container.styles";

import Card from "../UI/Card/Card.component";
import PopUp from "../UI/PopUp/PopUp.component";

import cards from "../../services/cards";

import "./Cards.styles.scss";

const Cards = () => {
  const [showPopUp, setshowPopUp] = useState(false);
  const [selectedCard, setselectedCard] = useState({});

  const clickHandler = (id) => {
    const chosenCard = cards.find((card) => card.id === id);
    setshowPopUp(!showPopUp);
    setselectedCard(chosenCard);
  };

  const closeHandler = () => {
    return setshowPopUp(false);
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
              backgroundColor="red"
              variant="contained"
              color="primary"
              onClick={() => clickHandler(card.id)}
            >
              View More
            </Button>
          </Card>
        );
      })}

      {showPopUp && (
        <div className="popup-container">
          <PopUp card={selectedCard} />
          <div className="btn-container">
            <Button
              className="btn"
              variant="contained"
              color="primary"
              onClick={closeHandler}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cards;
