import React from "react";
import logo from "./logo.svg";
// import ScrollBtn from "./ScrollBtn";
import "./App.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Welcome;
