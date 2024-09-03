import React from 'react'
import Title from '../../Common/Title'
import Accordion from './Accordion'
import { faqs } from './data'
const FAQ = () => {
    return (
        <div data-aos="fade-up" className='flex flex-col w-full h-fit px-4 py-2 lg:px-20 lg:py-12  justify-center items-center gap-10'>
            <Title title={'FAQ'} />
            <Accordion faqs={faqs} />
        </div>
    )
}

export default FAQ