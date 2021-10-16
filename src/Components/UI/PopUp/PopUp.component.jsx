import React from "react";

import { PopUpBg, PopUpContainer, ImageContainer, Pbody } from "./PopUp.styled";

// const PopUp = ({ title, imageUrl, body, closeHandler }) => {
const PopUp = (props) => {
  return (
    <PopUpBg>
      <PopUpContainer>
        <ImageContainer>
          <img src={props.card.imageUrl} alt="" />
        </ImageContainer>
        <div className="popup-content">
          <div className="popup-title">
            <h1 className="popup-title-h3">{props.card.title}</h1>
          </div>
          <div className="popup-body">
            <Pbody className="popup-body-p">{props.card.body}</Pbody>
          </div>
        </div>
        {props.children}
      </PopUpContainer>
    </PopUpBg>
  );
};

export default PopUp;
