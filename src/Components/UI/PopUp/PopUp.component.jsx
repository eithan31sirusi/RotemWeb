import React from "react";

import "./PopUp.styles.scss";

// const PopUp = ({ title, imageUrl, body, closeHandler }) => {
const PopUp = ({ card }) => {
  return (
    <div className="popup-postion">
      <a href={card.imageRedirect} className="popup-link">
        <div className="image-container">
          <img src={card.imageUrl} alt="" />
        </div>
        <div className="popup-content">
          <div className="popup-title">
            <h3 className="popup-title-h3">{card.title}</h3>
          </div>
          <div className="popup-body">
            <p className="popup-body-p">{card.body}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PopUp;
