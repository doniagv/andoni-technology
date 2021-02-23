import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      {props.illustration}
      <p className="skill-t">{props.skill}</p>
      <p className="desc">{props.description}</p>
      <div className="level-div">
        <p className="level">{props.level}</p>
      </div>
    </div>
  );
};

export default Card;
