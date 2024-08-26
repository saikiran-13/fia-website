import React from 'react'
import { useTab } from '../../../provider/TabProvider'
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
        <div className='w-full h-[500px] px-20 py-12 justify-center items-center'>
            <div className='flex flex-col w-3/5'>
                <div className='flex flex-col gap-2 w-full mb-14'>
                    <span className='text-6xl font-bold text-color5'>FRIENDS OF <span className='font-bold text-6xl text-transparent bg-clip-text bg-indian-gradient'> INDIA</span></span>
                    <span className='text-6xl font-bold text-color5'>ASSOCIATION</span>
                </div>
                <div className='w-[500px] mb-10'>
                    <span className='text-2xl font-medium text-color4 opacity-75'>"Building Bridges, Celebrating Cultures, Uniting Hearts, Uplifting Traditions"</span>
                </div>
                <div className='group w-fit px-4 py-2 rounded-full border-[1px] bg-color6 glassmorphism-hover hover:border-color6' onClick={handleClick}>
                    <span className='text-l font-medium text-color1 group-hover:text-color6 transition-colors duration-300'>
                        Upcoming Events
                    </span>
                </div>


            </div>
            <div className='w-2/5'></div>
        </div>
    )
}

export default Home