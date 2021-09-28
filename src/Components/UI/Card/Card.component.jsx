import React from "react";

import "./Card.styles.scss";

const Card = (props) => {
  return (
    <div className="card-container">
      <div>
        <a href={props.imageRedirect} className="card-link">
          <div className="image-container">
            <img src={props.imageUrl} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3 className="card-title-h3">{props.title}</h3>
            </div>
            <div className="card-body">
              <p className="card-body-p">{props.body}</p>
            </div>
          </div>
        </a>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
