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
  Button,
} from "./components/pages/export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/pages/AboutMe.css";
import engData from "./data/engData";
import itaData from "./data/itaData";

function App() {
  const ref = useRef(null);
  const handleScroll = () => {
    //ref.current.classList.add("sticky")
    if (!ref || !ref.current) {
      return;
    }

    ref.current.scrollIntoView({ behavior: "smooth", top: 0 });
  };

  const [lingua, setLingua] = useState(engData);
  const [isToggled, setToggle] = useState(false);
	

  const handlLanguage = () => {
    //if(isToggled ==)
    isToggled == false ? setToggle(true) : setToggle(false);
		
		

	  // if (isToggled){
	  //  	document.getElementById("animation").className = 'word';
		// 	//document.getElementById("animation").classList.remove('word');
		// }

    lingua != engData ? setLingua(engData) : setLingua(itaData);

    //compo != engCompo ? setCompo(engCompo) : setCompo(itaCompo)

		//document.getElementById('animation').style.animation = "switch 3s ease-in-out";
    //let word = document.getElementById("animation");
    //word.classList.toggle("word");
    //console.log("word");
		setAnime();
		rmvvAnime();
		
		;

	
  
  };

	
	function setAnime(){

		document.getElementById("animation").className = 'word';
	}
	
	function rmvvAnime(){
		setTimeout(() => {
			document.getElementById("animation").classList.remove('word');
			
		}, "1000")
		
	}
// rmvvAnime();

  return (
    <Router>
      <div className="App">
        <ScrollBtn handleScroll={handleScroll} /> <Welcome />
        <div className="main-container">
          <Nav ref={ref} engData={engData} itaData={itaData}>
            {
              <Button
                handlLanguage={handlLanguage}
                content={isToggled ? "ENG" : "ITA"}
              />
            }
          </Nav>
        </div>
        <section>
          {lingua[0].map((el) => {
            return <AboutMe key={el.id} {...el} img={pic1} />;
          })}
        </section>{" "}
        <section>
          {lingua[1].map((el) => {
            return <Mission key={el.id} img={pic2} {...el} />;
          })}
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
