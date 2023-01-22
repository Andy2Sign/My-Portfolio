import React from "react";
import logo from "./logo.svg";
import "./App.css";


const Welcome = () => {
	return(
		<div>
		   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
      </header>
		</div>
	)
}

export default Welcome;