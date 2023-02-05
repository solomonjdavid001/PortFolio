import React from 'react'
// import CardsProject from '../components/ProjectsTemps/CardsProject'
import Footer from '../components/Footer/Footer'
import HeroSection2 from '../components/HeroSection/Other_Pages/HeroSection2'
import Navbar from '../components/Navbar/Navbar'
// import Work from '../components/ProjectsTemps/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="PROJECTS" text="Some of my most recent works."/>
      <Footer/>
    </div>
  )
}

export default Project