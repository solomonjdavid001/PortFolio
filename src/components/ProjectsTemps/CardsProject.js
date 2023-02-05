import "./CardProject.css";
import React from "react";
import { NavLink } from 'react-router-dom';

const CardsProject = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="" />
      <h2 className={props.title}>Project Title</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
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

export default CardsProject;
