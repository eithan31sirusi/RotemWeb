import React from "react";
import { ScrollDiv, Scrollbg } from "./Scroll.styles";

const Scroll = (props) => {
  return (
    <Scrollbg>
      <ScrollDiv>{props.children}</ScrollDiv>
    </Scrollbg>
  );
};

export default Scroll;
