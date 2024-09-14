import React from 'react';
import { moreInformationList, connectList, mobileConnectList, socialMediaList, address } from './data';
import Icon from '../Icon';
import wave from '@/assets/wave.svg';

const Footer = () => {

    // Conditional background image based on environment
    const backgroundImageUrl = import.meta.env.MODE === 'development'
        ? `url(${wave})` // Local path during development
        : `url('/assets/wave.svg')`; // Absolute path in production
    return (
        <div
            className="flex items-end relative text-center max-h-[550px] h-[400px]"
            style={{
                backgroundImage: backgroundImageUrl,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom 10%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex relative z-10 px-4 w-full text-left justify-between items-end text-color1 pb-2">
                <div className='w-[65%] lg:w-[40%] ml-2 font-medium'>
                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    {connectList.map((item, index) => (
                        <div className='hidden lg:flex text-color6 font-medium' key={index} >
                            <span>{item.label}</span>&nbsp;
                            <div className='cursor-pointer' onClick={() => window.open(item.link, '_blank')}>
                                <span>{item.value}</span>
                            </div>
                        </div>
                    ))}

                    <div className="flex lg:hidden mb-2 gap-2">
                        {mobileConnectList.map((item, index) => (
                            <Icon key={index} icon={item.icon} onClick={() => window.open(item.link, '_blank')} />
                        ))}

                    </div>

                    <div className='hidden lg:flex gap-2 md:text-[10px] lg:text-xl mt-2 pr-8'>
                        <Icon icon={address.icon} />
                        <span>{address.label}</span>
                        <span>{address.value}</span>
                    </div>
                    <span className='lg:hidden block'>&copy; Friends of India Association</span>

                </div>
                <div className='w-[35%] lg:w-[30%] gap-2 mb-3 lg:mb-0'>
                    <h3 className="text-md lg:text-lg font-semibold mb-4 ">Follow Us</h3>
                    <div className="flex mb-6 gap-2">
                        {socialMediaList.map((item, index) => (
                            <Icon key={index} icon={item.icon} onClick={() => window.open(item.link, '_blank')} />
                        ))}

                    </div>
                    <span className='hidden lg:block'>&copy; Friends of India Association</span>
                </div>


                <div className='hidden lg:flex  w-[30%] flex-col gap-1'>
                    <h3 className="text-lg font-semibold mb-4">More Information:</h3>
                    <div className='flex flex-wrap gap-4'  >
                        {moreInformationList.map((item, index) => (
                            <div className=' border-b-[1px] border-b-color6 cursor-pointer'><a href={item.link} target="_blank" rel="noopener noreferrer" className="text-color6 font-medium">{item.label}</a></div>
                        ))}
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Footer;
