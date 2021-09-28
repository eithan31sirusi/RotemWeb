import React from "react";
import "./Scroll.styles.scss";

const Scroll = (props) => {
  return <div className="scroll_container">{props.children}</div>;
};

export default Scroll;
