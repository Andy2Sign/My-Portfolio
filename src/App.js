import React, { useState, useRef, useEffect } from "react";
import pic1 from "./components/images/Avatar.jpg";
import pic2 from "./components/images/FinTech.jpeg";
import pic3 from "./components/images/website_mockup.jpeg";
import pic4 from "./components/images/courses&lessons.png";
import MissionIcon from './components/pages/missionIcon/MissionIcon';
import engFlag from './components/images/english.jpeg';
import itaFlag from './components/images/itaFlag.png';
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
	ThemeBtn,
	BurgerBoughie
} from "./components/pages/export";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./components/pages/AboutMe.css";
import "./components/pages/Mission.css";
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
    setAnime();
    setTimeout(() => {
      !isToggled ? setToggle(true) : setToggle(false);
      lingua != engData ? setLingua(engData) : setLingua(itaData);
    }, 500);

    rmvvAnime();
  };

  function setAnime() {
    document.getElementById("animation").className = "word";
		document.getElementById("animation2").className = "word";
  }
	function rmvvAnime() {
    setTimeout(() => {
      document.getElementById("animation").classList.remove("word");
			document.getElementById("animation2").classList.remove("word");
    }, "1000");
  }

	const [isDark, setDark] = useState(false);
	const [toggled, setToggled] = useState(false);
	const [isClosed, setIsClosed] = useState(false);

	const burgerMove = () =>{
	  setIsClosed(!isClosed);
	}

	const switchTheme = () => {
		!isDark ? setDark('dark-mode') : setDark(false);
		!toggled ? setToggled('dark-mode') : setToggled(false);
		console.log('click')
	}

	useEffect(() => {
	document.documentElement.className = isDark;
	}, [isDark])


  return (
    <Router>
      <div className="App">
				<div className="bodyTheme">
        <ScrollBtn handleScroll={handleScroll} /> <Welcome />
        <div className="main-container">
          <Nav ref={ref} engData={engData} itaData={itaData}>
            {
              <Button
                handlLanguage={handlLanguage}
                flag={isToggled ?  engFlag: itaFlag}
              />
            }
						{
						  <ThemeBtn switchTheme={switchTheme} toggled={toggled}/>	
						}
						{
							<BurgerBoughie/>
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
            return <Mission key={el.id} img={pic2} {...el} children={<MissionIcon/>}/>;
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
				</div>
      </div>{" "}
    </Router>
  );
}

export default App;

// path="/" element={<AboutMe img={photo}/>
