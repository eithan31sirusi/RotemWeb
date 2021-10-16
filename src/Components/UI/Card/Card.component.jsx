import React from "react";

import {
  CardContainer,
  CardImage,
  CardContent,
  CardParagraph,
  CardTitle,
} from "./Card.stylese";

const Card = (props) => {
  return (
    <CardContainer className="card-container">
      <CardImage src={props.imageUrl} alt="" />
      <CardContent className="card-content">
        <CardTitle className="card-title">
          <h3 className="card-title-h3">{props.title}</h3>
        </CardTitle>
        <CardParagraph className="card-body-p">{props.body}</CardParagraph>
      </CardContent>
      {props.children}
    </CardContainer>
  );
};

export default Card;
