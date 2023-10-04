import React, { forwardRef, useState } from "react";
import { Link } from "react-scroll";
import pic from "../../pic.png";
import "./nav.css";
import "../../App.css";

const Nav = ({ children, children1 }, ref) => {
  window.addEventListener("scroll", function () {
    let nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 965);
  });


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
            {children}
            {children1}
            {/* <Button
              handlLanguage={handlLan
								sguage}
              content={isToggled ? "ITA" : "ENG"}
            /> */}
          </span>
        </section>
      </div>
    </nav>
  );
};

export default forwardRef(Nav);
