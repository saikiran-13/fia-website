import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Events from './Events'
import Team from './Team'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import FAQ from './FAQ'

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
const Content = () => {
    return (
        <PerfectScrollbar>
            <div className='flex flex-col gap-5 '>
                <Home />
                <AboutUs />
                <Events />
                <Team />
                <Gallery />
                <Testimonials />
                <FAQ />
            </div>
        </PerfectScrollbar>
    )
}

export default Content