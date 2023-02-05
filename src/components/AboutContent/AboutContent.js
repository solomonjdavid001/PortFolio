import './AboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';
import React1 from '../../assets/rr.avif';
import React2 from '../../assets/ab.avif'
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am passionate about developing innovative and user-friendly software solutions. I specialize in Java, JavaScript, Figma, React and I have experience working on a wide range of projects in IOT, Frontend, Backend.</p>
            <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className="img" alt="hi"/>
                </div>
                <div className='img-stack bottom'>
                <img src={React2} className="img" alt="hi"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;