// import {useRef} from "react";

import { Link } from "react-router-dom";

const ScrollBtn = () => {
	// const ref = useRef(null);
  // const scrollClick = () => {
  //   ref.current?.scrollClick({ behavior: "smooth" });
	// 	console.log("Funziono");
  // };
  return (
    <section className="sec-btn">
			<Link to="../AboutMe">
      <button className="btn">
        Click me
      </button>
			</Link>
    </section>
  );
};

export default ScrollBtn;
