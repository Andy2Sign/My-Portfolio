// import { forwardRef } from "react";
import React from "react";
import "./AboutMe.css";
import "../../App.css";
//import GitHubIcon from "@mui/icons-material/GitHub";
//import { FaBeer } from "@react-icons/all-files/fa/FaBeer";


const AboutMe = ({ img, title, text }) => {
  return (
    <div id="AboutMe">
      <article className="wrapper ">
        <div className="about_head">
          <h1> About me </h1>{" "}
        </div>{" "}
        <section className="flex_wrap section">
          <span className="avatar_box">
            <img src={img} alt={"Andrea"} />{" "}
          </span>{" "}
          <div className="who">
            <span id="animation">
              <h2> {title} </h2> 
							<p> {text} </p>
            </span>
          </div>{" "}
        </section>{" "}
      </article>{" "}
    </div>
  );
};

export default AboutMe;
