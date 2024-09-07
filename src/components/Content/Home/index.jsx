import React from 'react'
import { useTab } from '../../../provider/TabProvider'
import Typewriter from './Typewriter'
import sideImage from '../../../assets/sideImage.png'
const Home = () => {
    const { activeTab, setActiveTab } = useTab();

    const handleClick = () => {

        setActiveTab('upcoming')

        const element = document.getElementById('events');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='flex w-full lg:h-[100vh] px-4 py-2  lg:px-20 lg:pt-12 justify-center lg:justify-start mb-10 lg:mb-0 '>
            <div className='flex flex-col w-full lg:w-3/5'>
                <div className='flex flex-col gap-2 w-full mb-10 lg:mb-20'>
                    <span className='text-4xl lg:text-6xl font-bold text-color5'>FRIENDS OF <span className='font-bold text-4xl lg:text-6xl text-transparent bg-clip-text bg-indian-gradient'> INDIA</span></span>
                    <span className='text-4xl lg:text-6xl font-bold text-color5'>ASSOCIATION</span>
                </div>
                <div className='w-[340px] mb-10'>
                    <Typewriter />
                </div>
                <div className='group w-fit px-4 py-2 rounded-full border-[1px] bg-color6 glassmorphism-hover hover:border-color6' onClick={handleClick}>
                    <span className='text-lg font-medium text-color1 group-hover:text-color6 transition-colors duration-300'>
                        Upcoming Events
                    </span>
                </div>


            </div>
            <div className='hidden items-start lg:flex lg:w-2/5'>
                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#77B6FB" d="M60.8,-20.1C66.9,-1,51.7,24.6,30.4,39.4C9.2,54.3,-18.1,58.3,-36,46.1C-54,33.9,-62.6,5.4,-55.1,-15.8C-47.5,-36.9,-23.8,-50.6,1.8,-51.2C27.4,-51.8,54.7,-39.2,60.8,-20.1Z" transform="translate(100 100)" />
                </svg> */}
                <img src={sideImage} alt="img not found" className='animate-pulse' />
            </div>
        </div>
    )
}

export default Home