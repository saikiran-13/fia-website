import React from 'react';
import Title from '../../Common/Title';
import Card from './Card';
import { data } from './data';

const AboutUs = () => {
    return (
        <div id="about-us" className='flex flex-col w-full h-fit px-20 py-12 sm:px-2 md:py-1 justify-center items-center gap-10'>
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
