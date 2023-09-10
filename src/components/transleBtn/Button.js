import React from "react";
import "./Button.css";

const Button = ({ content, handlLanguage }) => {
  return (
    <div>
      <button onClick={handlLanguage}> {content} </button>
    </div>
  );
};

export default Button;
