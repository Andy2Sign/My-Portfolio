import React from "react";
import "./ThemeBtn.css";

const ThemeBtn = ({ switchTheme }) => {
  return (
    <div className="main-box">
			<div className="toggle">
       <div className="notch">
			 </div>
			</div>
      {/* <button onClick={switchTheme}>Switch</button> */}
    </div>
  );
};

export default ThemeBtn;
