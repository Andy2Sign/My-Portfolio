// import { forwardRef } from "react";
import React from "react";
import "./AboutMe.css"



const AboutMe = ({ img }) => {
  return (
    <article id="AboutMe"  className="wrapper ">
      <div className="about_head">
        <h2>About me</h2>
      </div>
      <section className="flex_wrap section">
        <span className="circle_photo">
          <img src={img} alt={"Andrea"} />
        </span>
        <div className="who">
          <h3>Who's this guy</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            sint facilis temporibus doloremque? Totam vero corrupti placeat
            consectetur illum voluptate fugit impedit optio in similique?
            Obcaecati rem nam inventore ipsam!
          </p>
        </div>
      </section>
    </article>
  );
};

export default AboutMe;
