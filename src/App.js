import React, { useState, useRef } from "react";
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
	Button
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


	const [lingua, setLingua] = useState(engData);
  const [isToggled, setToggle] = useState(false);
  //const [compo, setCompo] = useState([data2]);

  const handlLanguage = () => {
    //if(isToggled ==)
    isToggled == false ? setToggle(true) : setToggle(false);
    lingua != engData ? setLingua(engData) : setLingua(itaData);
    //compo != engCompo ? setCompo(engCompo) : setCompo(itaCompo)
    console.log(isToggled);
    console.log("Lingua " + lingua);
  };

  return (
    <Router>
      <div className="App">
        <ScrollBtn handleScroll={handleScroll} /> <Welcome />
        <div className="main-container">
          <Nav ref={ref} engData={engData} itaData={itaData}>
						{<Button handlLanguage={handlLanguage}
              content={isToggled ? "ITA" : "ENG"}/>}
					</Nav>
        </div>
        <section>
					{
						lingua.map((el) => {
							return <AboutMe key={el.id} {...el} img={pic1}/>
						})
					}
          {/* <AboutMe img={pic1}  /> */}
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
