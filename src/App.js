import React, { useRef } from "react";
import pic1 from "./components/images/Avatar.jpg";
import pic2 from "./components/images/FinTech.jpeg";
import pic3 from "./components/images/website_mockup.jpeg";
import pic4 from "./components/images/courses&lessons.png";
import Welcome from "./Welcome";
import ScrollBtn from "./ScrollBtn";
import {
  Nav,
  AboutMe,
  Mission,
  Services,
  Blog,
  Footer,
} from "./components/pages/export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import engData from "./data/engData";
import itaData from './data/itaData';


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
        <ScrollBtn handleScroll={handleScroll} /> <Welcome />
        <div className="main-container">
          <Nav ref={ref} engData={engData} itaData={itaData}/>
        </div>
        <section>
          <AboutMe img={pic1} title={engData[0].title} />{" "}
        </section>{" "}
        <section>
          <Mission img={pic2} />{" "}
        </section>{" "}
        <section>
          <Services img1={pic3} img2={pic4} />{" "}
        </section>{" "}
        <section>
          <Blog />
        </section>{" "}
        <section>
          <Footer />
        </section>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;

// path="/" element={<AboutMe img={photo}/>
