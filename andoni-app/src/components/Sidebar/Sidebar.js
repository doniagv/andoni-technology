import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";
import logo from "../../assets/images/logo.png";

const Sidebar = (props) => {
  return (
    <Menu>
      <img src={logo} alt="Logo" width="40px"></img>
      <a className="menu-item" href="#home">
        Home
      </a>
      <a className="menu-item" href="#about">
        About
      </a>
      <a className="menu-item" href="#skills">
        Skills
      </a>
      <a className="menu-item" href="#portfolio">
        Portfolio
      </a>
      <a className="menu-item" href="#contact">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;
