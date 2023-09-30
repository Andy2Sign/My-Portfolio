import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import pic from "../../pic.png";
import "../../App.css";
import "./Footer.css";

const Footer = () => {
  const gitHubStyle = { color: "white", fontSize: "30px" };
  return (
    <div>
      <footer>
        <div className="flex_wrap handleFooter">
          <span>
            <img src={pic} className="picBox" />
          </span>
          <ul>
            <li>
              Contact<em>Me</em>
            </li>
            <li>LinkedIn</li>
            <li>
              <BiLogoGithub style={gitHubStyle}/>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
