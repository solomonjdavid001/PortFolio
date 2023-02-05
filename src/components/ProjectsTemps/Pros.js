import "./Pros.css";
import React from "react";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";
import CardsProject from "./CardsProject";

const Pros = (props) => {
  return (
    <div className="project-card">
      <img src={pro1} alt="" />
      <h2 className="project-title">Project Title</h2>
      <div className="pro-details">
        <p>This is </p>
        <div className="pro-btns">
          <NavLink to="/" className="btn">
            View
          </NavLink>
          <NavLink to="/" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Pros;
