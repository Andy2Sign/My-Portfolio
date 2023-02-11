import React, { useRef } from "react";
import photo from "./components/images/andrea_photo.png";
import picture from "./components/images/FinTech.jpeg";
import Welcome from "./Welcome";
import ScrollBtn from "./ScrollBtn";
import { Nav, AboutMe, Mission, Services, Blog } from "./components/pages/export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";




function App() {
  const ref = useRef(null);
  const handleScroll = () => {
    if (!ref || !ref.current) {
      return;
    }
    ref.current.scrollIntoView({ behavior: "smooth", top: 0 });
  };

  return (
    <Router>
      <div className="App">
        <ScrollBtn handleScroll={handleScroll} />
        <Welcome />

        <div className="main-container">
          <Nav ref={ref} />
          {/* <Routes>
            <Route path="/" element={<AboutMe img={photo}  />} />
						<Route path="./components/pages/Mission" element={<Mission />} />
            <Route path="./components/pages/Projects" element={<Services />} />
            <Route path="./components/pages/Blog" element={<Blog />} />
          </Routes> */}
        </div>
        <section>
          <AboutMe img={photo} />
        </section>
        <section>
          <Mission img={picture} />
        </section>
      </div>
    </Router>
  );
}

export default App;


// path="/" element={<AboutMe img={photo}/>