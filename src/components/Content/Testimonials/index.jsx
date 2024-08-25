import React from 'react'
import Title from '../../Common/Title'
import { testimonials } from './data'
import Slider from './Slider'
import Card from './Card'
const Testimonials = () => {
    return (
        <div className='flex flex-col w-full h-fit  md:px-2 md:py-1 lg:px-20 lg:py-0 justify-center items-center gap-2'>
            <Title title={'Testimonials'} />
            <Slider data={testimonials} Cmp={Card} />
        </div>
    )
}

export default Testimonials