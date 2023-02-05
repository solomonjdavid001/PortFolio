import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HomePage/HeroSection';
import Footer from '../components/Footer/Footer';
// import Scrollup from '../components/ScrollToTop/scrollup';

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        {/* <Scrollup/> */}
        <Footer/>
    </div>
  )
}

export default Home