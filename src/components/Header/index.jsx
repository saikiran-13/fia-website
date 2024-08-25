import React from 'react'
import fiaLogo from '../../assets/fia_logo.png'
import arrowIcon from '../../assets/arrow.png'

const Header = () => {

    const sections = [{
        label: 'About Us',
        value: "about-us",
    }, {
        label: "Events",
        value: "events",
    }, {
        label: 'Team',
        value: "team",
    }, {
        label: "Gallery",
        value: "gallery"
    }]

    return (
        <div className='flex w-full px-6 items-center justify-between'>
            <div className='w-10 h-10 bg-color1'>
                <img src={fiaLogo} alt="img not found" />
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex gap-10'>
                    {sections.map((section) => (<div>
                        <span className='cursor-pointer text-color5 font-bold hover:opacity-40'>{section.label}</span></div>))}
                </div>
                <div className='flex cursor-pointer h-[40px] pl-4 pr-2 py-2 items-center justify-between gap-2 bg-color6 rounded-full'>
                    <span className='text-color1 font-medium'>Join Us</span>
                    <div className='h-[25px] w-[25px] items-center justify-center bg-color3 rounded-full'>
                        <img src={arrowIcon} alt="img not found" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header