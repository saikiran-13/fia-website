import React from 'react';
import Title from '../../Common/Title';
import Card from './Card';
import { data } from './data';

const AboutUs = () => {
    return (
        <div id="about-us" data-aos="fade-up" className='flex flex-col w-full h-fit px-4 py-2 lg:px-20 lg:py-2 justify-center items-center gap-10'>
            <Title title={'About Us'} />
            <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-10'>
                {data.map((item, index) => (
                    <Card key={index} logo={item.logo} heading={item.heading} description={item.description} />
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
