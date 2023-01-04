import React from "react";
import "../css/button.css";

function Button({ classes, buttonTxt, iconSrc }) {
  return (
    <button className={classes}>
      <span>{buttonTxt}</span>
    </button>
  );
}

export default Button;
