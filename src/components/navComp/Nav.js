import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {

  return (
    <div className="wrapper flex-wrap">
      <div>
        <div>
          {/* <Link to="/">
            <div>
              <img src={logo} />
            </div>
          </Link> */}
        </div>
        <div>
          <ul className="nav-links">
            <Link to="../components/AboutMe">
              <li className="links">About me</li>
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
    </div>
  );
};

export default Nav;
