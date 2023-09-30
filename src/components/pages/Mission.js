import React from "react";
import "./Mission.css";
import "../../App.css";

const Mission = ({ img, text, children }) => {
  return (
    <div id="Mission">
      <article className="wrapper mission_article">
        <div className=" mission_box-title">
          <h1> Mission </h1>
        </div>
        <div className="flex_wrap handleContent">
          <span className="span-box_img">
            <img src={img} className="img-mission" />
          </span>
          <div className="miss_descr">
            {children}
            <span id="animation2">
              <p> {text} </p>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

//

export default Mission;
