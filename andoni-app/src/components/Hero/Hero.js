import React from "react";
import "./Hero.css";
import LogoP from "../../assets/images/croped-logo.png";

const Hero = () => {
  return (
    <div id="home" className="Hero">
      <img src={LogoP} alt="logo" />
      <button className="Button-Do">Download CV</button>
    </div>
  );
};

export default Hero;
