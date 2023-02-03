import React,{forwardRef, useState, useEffect} from "react";
// import { ReactComponent as Logo } from "../../logo.svg";
// import logo from "../../logo.svg"
// import { Link } from "react-router-dom";
import pic from "../../pic.png";
import "./nav.css";
import "../../App.css";

const Nav = ({props}, ref) => {

  return (
    <nav ref={ref} >
      <div style={{display: "flex"}} className="wrapper flex-cont">
        <span>
          {/* <Link >             */}
							<img src={pic} className="picLogo"/>
          {/* </Link> */}
        </span>
        <div>
          <ul className="nav-links">
            {/* <Link to="/"> */}
              <li className="links">AboutMe</li>
            {/* </Link> */}
						{/* <Link to="../components/Mission"> */}
              <li className="links">Mission</li>
            {/* </Link> */}
            {/* <Link to="../components/Projects"> */}
              <li className="links">Projects</li>
            {/* </Link> */}
            {/* <Link to="../components/Blog"> */}
              <li className="links">Blog</li>
            {/* </Link> */}
          </ul>
        </div>
				</div>
    </nav>
  );
};

export default forwardRef(Nav);
