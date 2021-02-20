import React from "react";
import "./About.css";
import personal from "../../assets/images/personal-min.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="inner-about">
        <div>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            velit metus, pharetra non eros eget, feugiat posuere purus. Sed
            felis massa, bibendum ac dapibus eu, dignissim eu ex. Praesent odio
            sapien, feugiat eget enim sit amet, bibendum tincidunt lorem. Mauris
            ipsum ex, faucibus sit amet laoreet aliquet, ornare sit amet nulla.
            In nibh purus, ullamcorper quis augue vitae, sagittis egestas
            sapien. Nam mattis pulvinar est eu auctor. Cras nec eros ac massa
            pretium sodales a non turpis.
          </p>
        </div>
        <img src={personal} alt="PersonalPhoto"></img>
      </div>
    </div>
  );
};

export default About;
