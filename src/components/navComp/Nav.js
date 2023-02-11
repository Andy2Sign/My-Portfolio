import React,{forwardRef, useState} from "react";
// import { ReactComponent as Logo } from "../../logo.svg";
// import logo from "../../logo.svg"
import { Link } from "react-scroll";
import pic from "../../pic.png";
import "./nav.css";
import "../../App.css";

const Nav = ({props}, ref) => {
    const [fix, setFix] = useState(false);

		const setFixed = () => {
			if(window.scrollY >= 390){
				setFix(true)
			}
		}
  return (
    <nav ref={ref} >
      <div style={{display: "flex"}} className="wrapper flex-cont">
        <span>
          <Link to="/" spy={true} smooth={true}>            
							<img src={pic} className="picLogo"/>
          </Link>
        </span>
        <div>
          <ul className="nav-links">
            <Link to="AboutMe" spy={true} smooth={true}>
              <li className="links">AboutMe</li>
            </Link> 
						<Link to="Mission" spy={true} smooth={true}>
              <li className="links">Mission</li>
            </Link>
             <Link to="Services">
              <li className="links">Services</li>
             </Link> 
             <Link to="Blog">
              <li className="links">Blog</li>
            </Link> 
          </ul>
        </div>
				</div>
    </nav>
  );
};

export default forwardRef(Nav);
