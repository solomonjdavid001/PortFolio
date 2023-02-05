import React from 'react'
import AboutContent from '../components/AboutContent/AboutContent'
import Footer from '../components/Footer/Footer'
import HeroSection2 from '../components/HeroSection/Other_Pages/HeroSection2'
import Navbar from '../components/Navbar/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="ABOUT" text="I like coding"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About