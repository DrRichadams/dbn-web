import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';


function About() {
  return (
    <div>
        <Banner title="About Us" text="What we do" bgImage="about.png" />
        <AboutUs />
    </div>
  )
}

export default About