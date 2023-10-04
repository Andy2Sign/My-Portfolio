import React from "react";
import "./Button.css";
import "../../App.css"
// import "../pages/AboutMe.css"


const Button = ({ handlLanguage, flag }) => {
	
  return (
    <div>
      <div onClick={handlLanguage}>
			<img className="img" src={flag}/>
			</div>
    </div>
  );
};

export default Button;
