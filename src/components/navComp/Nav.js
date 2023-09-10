import React, { useState, forwardRef } from "react";
import Button from "../transleBtn/Button";
// import ScrollSpy from "react-ui-scrollspy";
// import { ReactComponent as Logo } from "../../logo.svg";
// import logo from "../../logo.svg"
import { Link } from "react-scroll";
import pic from "../../pic.png";
import "./nav.css";
import "../../App.css";
// import "../../data/engData";
// import "../../data/itaData";

const Nav = ({ engData, itaData }, ref) => {
  // useEffect((Events) => {
  //   Events.scrollEvent.register("begin", function () {
  //     console.log("begin", arguments);
  //   });

  // Events.scrollEvent.register("end", function () {
  //   console.log("end", arguments);
  // });
  // ScrollSpy.update();
  // return () => {
  //   Events.scrollEvent.remove("begin");
  //   Events.scrollEvent.remove("end");
  // };
  //}, []);
  window.addEventListener("scroll", function () {
    let nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 965);
  });


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
    <nav ref={ref} spy={true}>
      <div style={{ display: "flex" }} className="wrapper flex-cont">
        <span>
          <Link to="/" spy={true} smooth={true}>
            <img src={pic} className="picLogo" />
          </Link>
        </span>
        <section className="flex_wrap flex_cont">
          <div>
            <ul className="nav-links">
              <Link to="AboutMe" spy={true} smooth={true}>
                <li className="links"> AboutMe </li>
              </Link>
              <Link to="Mission" spy={true} smooth={true}>
                <li className="links"> Mission </li>
              </Link>
              <Link to="Services" spy={true} smooth={true}>
                <li className="links"> Services </li>
              </Link>
              <Link to="Blog" spy={true} smooth={true}>
                <li className="links"> Blog </li>
              </Link>
            </ul>
          </div>
          <span className="flex_wrap flex_btn">
            <Button
              handlLanguage={handlLanguage}
              content={isToggled ? "ITA" : "ENG"}
            />
          </span>
        </section>
      </div>
    </nav>
  );
};

export default forwardRef(Nav);
