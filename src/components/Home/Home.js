import React from 'react'
import Hero from '../Hero/Hero'
import Stats from '../Stats/Stats'
import Testimonials from '../Testimonials/Testimonials'
import './home.css'


const Home = () => {
  return <div className='home-body'>
      <Hero/>
      <Testimonials/>
    </div>

}

export default Home