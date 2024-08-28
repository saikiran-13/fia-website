import React from 'react'
import fiaLogo from '../../assets/fia_logo.png'
import arrowIcon from '../../assets/arrow.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const whatsappNumber = "+1 (315) 603-8377"; // Your WhatsApp number in international format
    const predefinedMessage = "Hello! I'm interested in joining your organization.";


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

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex w-full px-6 items-center justify-between'>
            <div className='w-10 h-10 bg-color1'>
                <img src={fiaLogo} alt="img not found" />
            </div>
            <div className='flex items-center gap-10'>
                {/* Hamburger icon for mobile/tablet screens */}
                <div className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="material-icons text-color5">
                        {menuOpen ? 'close' : 'menu'}
                    </span>
                </div>

                {/* Sections for larger screens */}
                <div className={`flex-col md:flex-row gap-10 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                    {sections.map((section) => (
                        <div onClick={() => {
                            scrollToSection(section.value);
                            setMenuOpen(false); // Close the menu on section click
                        }} key={section.value}>
                            <span className='cursor-pointer text-color5 font-bold hover:opacity-40'>{section.label}</span>
                        </div>
                    ))}
                </div>

                {/* Join Us button */}
                <div className='flex cursor-pointer h-[40px] pl-4 pr-2 py-2 items-center justify-between gap-2 bg-color6 rounded-full'>
                    <span className='text-color1 font-medium'>Join Us</span>
                    <div className='h-[25px] w-[25px] items-center justify-center bg-color3 rounded-full'>
                        <img src={arrowIcon} alt="img not found" />
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(predefinedMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex cursor-pointer h-[40px] pl-4 pr-2 py-2 items-center justify-between gap-2 bg-color6 rounded-full'
                        >
                            <span className='text-color1 font-medium'>Join Us</span>
                            <div className='h-[25px] w-[25px] items-center justify-center bg-color3 rounded-full'>
                                <img src={arrowIcon} alt="img not found" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header