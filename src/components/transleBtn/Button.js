import React from "react";
import "./Button.css";
import "../../App.css"
import "../pages/AboutMe.css"


const Button = ({ content, handlLanguage, flag }) => {
	
  return (
    <div>
      <div className="button" id="btn" onClick={handlLanguage}>
			<img className="img" src={flag}/>
			</div>
    </div>
  );
};

export default Button;
