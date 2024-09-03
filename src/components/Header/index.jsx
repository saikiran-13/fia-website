import React from 'react';
import fiaLogo from '../../assets/fia_logo.png';
import hamburger from '../../assets/hamburger.png'
import close from '../../assets/close.png'
import arrowIcon from '../../assets/arrow.png';
import Modal from '../Modal';

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const whatsappNumber = "+13156038377"; // Your WhatsApp number in international format
    const predefinedMessage = "Hello! I'm interested in joining your organization.";

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const onAccept = () => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(predefinedMessage)}`, '_blank');
        closeModal();
    };

    const sections = [
        { label: 'About Us', value: 'about-us' },
        { label: 'Events', value: 'events' },
        { label: 'Team', value: 'team' },
        { label: 'Gallery', value: 'gallery' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex w-full px-0 lg:px-6 items-center justify-between'>
            {/* Left side: Hamburger icon and logo for medium/small screens */}
            <div className='flex items-center'>
                <div className='lg:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                    <div className='w-8 h-8  ml-4 lg:ml-0'>
                        <img src={hamburger} alt="img not found" />
                    </div>
                </div>

                <div className='w-10 h-10 ml-4 lg:ml-0'>
                    <img src={fiaLogo} alt="img not found" />
                </div>
            </div>

            {/* Sections for larger screens */}
            <div className='flex gap-10'>
                <div className='hidden lg:flex items-center gap-10'>
                    <div className='flex gap-10'>
                        {sections.map((section) => (
                            <div
                                onClick={() => scrollToSection(section.value)}
                                key={section.value}
                            >
                                <span className='cursor-pointer text-color5 font-bold hover:opacity-40'>
                                    {section.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side: Join Us button */}
                <div
                    onClick={openModal}
                    className='flex cursor-pointer h-[40px] pl-4 pr-2 py-2 items-center justify-between gap-2 bg-color6 rounded-full mr-4 lg:mr-0'
                >
                    <span className='text-color1 font-medium'>Join Us</span>
                    <div className='h-[25px] w-[25px] items-center justify-center bg-color3 rounded-full'>
                        <img src={arrowIcon} alt="img not found" />
                    </div>
                </div>
            </div>
            <Modal.JoinUs isOpen={isModalOpen} onAccept={onAccept} onClose={closeModal} />

            {/* Sidebar with overlay for mobile screens */}
            {menuOpen && (
                <>
                    <div
                        className='fixed inset-0 bg-black opacity-50 z-40'
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    <div className='fixed top-0 left-0 h-full w-3/5 bg-color1 z-50 shadow-lg flex flex-col lg:hidden'>
                        <div className='flex justify-between items-center  p-6'>
                            <div className='w-10 h-10'>
                                <img src={fiaLogo} alt="img not found" />
                            </div>
                            <div className='w-5 h-5  ml-4 lg:ml-0' onClick={() => setMenuOpen(false)}>
                                <img src={close} alt="img not found" style={{ fit: 'contain' }} />
                            </div>
                        </div>

                        <div className='mt-10 flex flex-col gap-4'>
                            {sections.map((section) => (
                                <div
                                    onClick={() => {
                                        scrollToSection(section.value);
                                        setMenuOpen(false); // Close the menu on section click
                                    }}
                                    key={section.value}
                                    className='border-b border-color5 px-6 py-2 rounded-md'
                                >
                                    <span className='cursor-pointer text-color5 font-bold hover:opacity-40'>
                                        {section.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;
