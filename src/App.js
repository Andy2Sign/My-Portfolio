import React from "react";
import photo from "./components/images/andrea_photo.png";
import picture from "./components/images/FinTech.jpeg";
import Welcome from "./Welcome";
import { Nav, AboutMe, Mission, Projects, Blog } from "./components/export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/AboutMe.css";
import "./components/Mission.css";

function App() {
	
  return (
    <Router>
      <div className="App">
        <Welcome />

        <div className="main-container">
          <Nav />
          <Routes>
            <Route  path="/" element={<AboutMe img={photo}/>} />
						<Route path="./components/Mission" element={<Mission />} />
            <Route path="./components/Projects" element={<Projects />} />
            <Route path="./components/Blog" element={<Blog />} />
          </Routes>
        </div>
        {/* <section>
				<AboutMe img={photo}/>
        </section> */}
				<section>
					<Mission img={picture}/>
				</section>
      </div>
    </Router>
  );
}

export default App;
