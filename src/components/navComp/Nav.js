import React, { forwardRef, useState, useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";
// import { ReactComponent as Logo } from "../../logo.svg";
// import logo from "../../logo.svg"
import { Link } from "react-scroll";
import pic from "../../pic.png";
import "./nav.css";
import "../../App.css";

const Nav = ({ props }, ref) => {
    // useEffect((Events) => {
    //   Events.scrollEvent.register("begin", function () {
    //     console.log("begin", arguments);
    //   });

    //   Events.scrollEvent.register("end", function () {
    //     console.log("end", arguments);
    //   });
    //   ScrollSpy.update();
    //   return () => {
    //     Events.scrollEvent.remove("begin");
    //     Events.scrollEvent.remove("end");
    //   };
    // }, []);

    return ( <
        nav ref = { ref }
        spy = { true } >
        <
        div style = {
            { display: "flex" } }
        className = "wrapper flex-cont" >
        <
        span >
        <
        Link to = "/"
        spy = { true }
        smooth = { true } >
        <
        img src = { pic }
        className = "picLogo" / >
        <
        /Link>{" "} <
        /span>{" "} <
        div >
        <
        ul className = "nav-links" >
        <
        Link to = "AboutMe"
        spy = { true }
        smooth = { true } >
        <
        li className = "links" > AboutMe < /li>{" "} <
        /Link>{" "} <
        Link to = "Mission"
        spy = { true }
        smooth = { true } >
        <
        li className = "links" > Mission < /li>{" "} <
        /Link>{" "} <
        Link to = "Services" >
        <
        li className = "links" > Services < /li>{" "} <
        /Link>{" "} <
        Link to = "Blog" >
        <
        li className = "links" > Blog < /li>{" "} <
        /Link>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /div>{" "} <
        /nav>
    );
};

export default forwardRef(Nav);