import React from "react";
import "./ThemeBtn.css";

const ThemeBtn = ({ switchTheme }) => {
  return (
    <div className="main-box">
			<div className="toggle">
       <span className="notch">
			 </span>
			</div>
      {/* <button onClick={switchTheme}>Switch</button> */}
    </div>
  );
};

export default ThemeBtn;
