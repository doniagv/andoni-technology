import React from "react";
import ProgressBar from "../Bar/Bar";
import "./SkillSection.css";

const testData = [
  { title: "Front-end", bgcolor: "#2a9d8f", completed: 90 },
  { title: "Back-end", bgcolor: "#e76f51", completed: 80 },
  { title: "Reactjs", bgcolor: "#2a9d8f", completed: 75 },
  { title: "Javascript", bgcolor: "#e76f51", completed: 85 },
  { title: "Wordpress", bgcolor: "#2a9d8f", completed: 90 },
  { title: "Woocommerce", bgcolor: "#e76f51", completed: 65 },
];

const SkillSection = () => {
  return (
    <div id="skills">
      <h2>My Skills</h2>
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          title={item.title}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default SkillSection;
