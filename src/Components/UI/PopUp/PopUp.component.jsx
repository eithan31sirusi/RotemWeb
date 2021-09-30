import React from "react";

import {
  PopUpBg,
  PopUpContainer,
  ImageContainer,
  PopUpLink,
} from "./PopUp.styled";

// const PopUp = ({ title, imageUrl, body, closeHandler }) => {
const PopUp = (props) => {
  return (
    <PopUpBg>
      <PopUpContainer>
        <PopUpLink href={props.card.imageRedirect}>
          <ImageContainer>
            <img src={props.card.imageUrl} alt="" />
          </ImageContainer>
          <div className="popup-content">
            <div className="popup-title">
              <h3 className="popup-title-h3">{props.card.title}</h3>
            </div>
            <div className="popup-body">
              <p className="popup-body-p">{props.card.body}</p>
            </div>
          </div>
        </PopUpLink>
        {props.children}
      </PopUpContainer>
    </PopUpBg>
  );
};

export default PopUp;
