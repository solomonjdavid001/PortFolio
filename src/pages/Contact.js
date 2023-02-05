import React from 'react'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import HeroSection2 from '../components/HeroSection/Other_Pages/HeroSection2'
import Navbar from '../components/Navbar/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="CONTACT" text="Reach out to me."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact