import React from 'react';
import wave from '../../assets/wave.svg'; // Adjust the import path if needed
import { moreInformationList, connectList, socialMediaList, address } from './data';
import Icon from '../Icon';

const Footer = () => {
    return (
        <div
            className="flex items-end relative text-center max-h-[550px] h-[400px]"
            style={{
                backgroundImage: `url(${wave})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom 10%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex relative z-10 px-4 w-full text-left justify-between items-end text-color1 pb-2">
                <div className='w-[40%] ml-2 font-medium'>
                    <div className='flex gap-2 text-xl'>
                        <Icon icon={address.icon} />
                        <span>{address.label}</span>
                        <span>{address.value}</span>
                    </div>
                    <div className="mb-6 mt-2">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        {connectList.map((item, index) => (
                            <div className='flex text-color6 font-medium' key={index} >
                                <span>{item.label}</span>&nbsp;
                                <div className='cursor-pointer' onClick={() => window.open(item.link, '_blank')}>
                                    <span>{item.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='w-[30%] gap-2'>
                    <h3 className="text-lg font-semibold mb-4 ">Follow Us</h3>
                    <div className="flex mb-6 gap-2">
                        {socialMediaList.map((item, index) => (
                            <Icon key={index} icon={item.icon} onClick={() => window.open(item.link, '_blank')} />
                        ))}

                    </div>
                    <span>&copy; Friends of India Association</span>
                </div>

                <div className='w-[30%] flex flex-col gap-1'>
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
