import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollBtn from "./ScrollBtn";


const Welcome = () => {
	return(
		<div>
		   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<ScrollBtn style={{position: "absolute", right: "30px",  textAlign: "center"}}/>
      </header>
		</div>
	)
}

export default Welcome;