import React from "react";

import {
  CardContainer,
  CardImage,
  CardLink,
  CardContent,
  CardParagraph,
  CardTitle,
} from "./Card.stylese";

const Card = (props) => {
  return (
    <CardContainer className="card-container">
      <div>
        <CardLink href={props.imageRedirect} className="card-link">
          <CardImage src={props.imageUrl} alt="" />
          <CardContent className="card-content">
            <CardTitle className="card-title">
              <h2 className="card-title-h3">{props.title}</h2>
            </CardTitle>
            <div className="card-body">
              <CardParagraph className="card-body-p">
                {props.body}
              </CardParagraph>
            </div>
          </CardContent>
        </CardLink>
      </div>
      {props.children}
    </CardContainer>
  );
};

export default Card;
