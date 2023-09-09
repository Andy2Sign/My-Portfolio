import React from "react";

import pic from "../../pic.png";
import "../../App.css";
import "./Footer.css";

const Footer = () => {
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
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
