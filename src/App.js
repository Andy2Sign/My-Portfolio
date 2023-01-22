import React from "react";
import Welcome from "./Welcome";
import { AboutMe, Projects, Blog } from "./components/export";
import Nav from "./components/navComp/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Welcome />

        <div className="main-container">
          <Nav />
          <Routes>
            <Route path="./components/AboutMe" element={<AboutMe />} />
            <Route path="./components/Projects" element={<Projects />} />
            <Route path="./components/Blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
