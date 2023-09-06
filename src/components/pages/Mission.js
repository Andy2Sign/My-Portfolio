import React from "react";
import "./Mission.css";
import "../../App.css";

const Mission = ({ img }) => {
  return (
    <article id="Mission" className="wrapper mission_article">
      <div className=" mission_box-title">
        <h1> Mission </h1>{" "}
      </div>{" "}
      <div className="flex_wrap handleContent">
        <span className="span-box_img">
          <img src={img} className="img-mission" />
        </span>{" "}
        <div className="miss_descr">
          <p>
            The purpose of this page is knowledge sharing. <br />
            This can be that place where you can feel free to ask and share.{" "}
            <br />
            Programming is not just a job but can be so much more.Is that
            something that can open your mind and finally ask the right
            questions. <br />
            If you are looking for a new path or challenge you are in the right
            place. <br /> Here you can lay a solid foundation all the way to
            advanced concepts that you will be able to put into practice in your
            everyday work. <br /> Finally live in the present but constantly
            looking toward the future. <br /> For me it has meant not only the
            beginning of a new career but has opened up endless possibilities
            just waiting to be grasped. <br />
            I would be happy to be able to share this with you... <br />
            <em> I am sure it will change your life </em>{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </article>
  );
};

export default Mission;
