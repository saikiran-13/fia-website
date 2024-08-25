import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Events from './Events'
import Team from './Team'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
const Content = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Home />
            <AboutUs />
            <Events />
            <Team />
            <Gallery />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default Content