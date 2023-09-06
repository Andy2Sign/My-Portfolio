import React from "react";
import "./Services.css";
import "../../App.css";

const Services = ({ img1, img2 }) => {
  return (
    <div id="Services">
      <article className="wrapper serv_article">
        <div className="services_box-title">
          <h1> Services </h1>
        </div>
        <div className="flex_wrap handleContent">
          <div className="wbsdev">
            <h2> Web Design & App Development </h2>
            <span className="span_services">
              <img src={img1} className="img_services" />
            </span>
            <ul className="list_services">
              <li> Website Development </li>
              <li> User Experience Design </li>
              <li> Responsive Design </li>
              <li> SEO </li>
            </ul>
          </div>
          <div className="crsless">
            <h2> Courses & Lessons </h2>
            <span className="span_services">
              <img src={img2} className="img_services" />
            </span>
            <ul className="list_services">
              <li> Javascript </li>
              <li> React.js </li>
              <li> Avaloq Core Banking </li>
              <li> SQL </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Services;
