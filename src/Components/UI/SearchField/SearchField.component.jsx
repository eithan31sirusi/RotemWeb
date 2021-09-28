import React from "react";

import "./SearchField.styles.scss";

const SearchField = (props) => {
  console.log(props, "from search");

  return (
    <div className="input">
      <input type="search" name="" id="" onChange={props.clickHandler} />
    </div>
  );
};

export default SearchField;
