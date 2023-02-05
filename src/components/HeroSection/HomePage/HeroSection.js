import "./HeroSection.css";
import React from 'react';
import IntroImg from '../../../assets/intro-bg.jpg';
import {Link} from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi there, I'm a </p>
            <h1>React Dev.</h1>
            <div>
                <Link to="/project" className="btn">projects</Link>
                <Link to="/contact" className="btn btn-light">contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection