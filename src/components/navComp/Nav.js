import React from "react";
// import { ReactComponent as Logo } from "../../logo.svg";
// import logo from "../../logo.svg"
import { Link } from "react-router-dom";
import pic from "../../pic.png";
import "./nav.css";
import "../../App.css";

const Nav = () => {

  return (
    <nav>
      <div style={{display: "flex"}} className="wrapper flex-cont">
        <span>
          <Link to="/">            
							<img src={pic} className="picLogo"/>
          </Link>
        </span>
        <div>
          <ul className="nav-links">
            <Link to="../components/AboutMe">
              <li className="links">AboutMe</li>
            </Link>
            <Link to="../components/Projects">
              <li className="links">Projects</li>
            </Link>
            <Link to="../components/Blog">
              <li className="links">Blog</li>
            </Link>
          </ul>
        </div>
				</div>
    </nav>
  );
};

export default Nav;
