import React from "react";
import Welcome from "./Welcome";
import { AboutMe, Projects, Blog } from "./components/export";
import Nav from "./components/navComp/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/AboutMe.css";
import photo from "./components/images/andrea_photo.png";

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
        <section>
          <AboutMe img={photo} />
        </section>
      </div>
    </Router>
  );
}

export default App;
