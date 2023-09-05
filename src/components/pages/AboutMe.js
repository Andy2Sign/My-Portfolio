// import { forwardRef } from "react";
import React from "react";
import "./AboutMe.css";
import "../../App.css";

const AboutMe = ({ img }) => {
  return (
    <article id="AboutMe" className="wrapper ">
      <div className="about_head">
        <h1> About me </h1>{" "}
      </div>{" "}
      <section className="flex_wrap section">
        <span className="avatar_box">
          <img src={img} alt={"Andrea"} />{" "}
        </span>{" "}
        <div className="who">
          <h3> Who 's this guy</h3>{" "}
          <p>
            Passionate Software Engineer <br />
            JavaScript Developer & Business IT Specialist <br />
            Development and Maintenance of Avaloq Core Banking Development of
            user - friendly and interactive web pages{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
    </article>
  );
};

export default AboutMe;
