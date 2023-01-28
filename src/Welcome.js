import React from 'react';
import logo from "./logo.svg";
import ScrollBtn from "./ScrollBtn";
import "./App.css";



const Welcome = () => {
 
return(
		<div>
		   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<ScrollBtn/>
      </header>
		</div>
	)
}

export default Welcome;