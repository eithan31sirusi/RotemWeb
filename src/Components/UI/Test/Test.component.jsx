import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/Card";
import Typography from "@material-ui/core/Card";
import { Button, CardActionArea, CardActions } from "@material-ui/core";

const Test = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.sec"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Test;

/*     <div className="card-container">
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
    </div> */
