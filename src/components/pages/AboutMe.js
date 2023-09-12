// import { forwardRef } from "react";
import React from "react";
import "./AboutMe.css";
import "../../App.css";

const AboutMe = ({ img, title, text }) => {
  return (
    <div id="AboutMe">
      <article className="wrapper ">
        <div className="about_head">
          <h1> About me </h1>
        </div>
        <section className="flex_wrap section">
          <span className="avatar_box">
            <img src={img} alt={"Andrea"} />
          </span>
          <div className="who">
            <h3 id="animation" >{title}</h3> 
						<p id="animation" className="linebreak ">{text}</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AboutMe;
