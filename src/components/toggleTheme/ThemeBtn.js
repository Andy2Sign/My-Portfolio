import React from "react";
import "./ThemeBtn.css";
import "../../App.css";

const ThemeBtn = ({ switchTheme}) => {
  return (
    <div className="main-box">
			<div onClick={switchTheme} className="toggle">
       <div className="notch">
				<div className="shape sm"/>
				<div className="shape sm"/>
				<div className="shape md"/>
				{/* <div className="shape lg"/> */}
			 </div>
			</div>
      {/* <button onClick={switchTheme}>Switch</button> */}
    </div>
  );
};

export default ThemeBtn;
