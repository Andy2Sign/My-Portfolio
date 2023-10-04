import React from "react";
import "./BurgerBoughie.css";


const BurgerBoughie = ({ burgerMove }) => {
  return (
		<div onClick={burgerMove}>
     <div className="burger top"/>
		 <div className="burger mid"/>
		 <div className="burger low"/>
		</div>
  );
};

export default BurgerBoughie;
