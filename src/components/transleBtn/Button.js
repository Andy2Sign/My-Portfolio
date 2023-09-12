import React from "react";
import "./Button.css";
import "../../App.css";
import AboutMe from "../pages/AboutMe";
import "../pages/AboutMe.css"
import { click } from "@testing-library/user-event/dist/click";

const Button = ({ content, handlLanguage }) => {

	
  return (
    <div>
      <button id="btn" onClick={handlLanguage}> {content} </button>
    </div>
  );
};

export default Button;
