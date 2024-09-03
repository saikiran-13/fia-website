import React, { useState, useEffect, useRef } from 'react';
const Card = ({ logo, heading, description, btnLabel = 'Show More' }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const contentRef = useRef(null);

    // Function to handle the click event
    const handleToggleText = () => {
        setShowFullText(prevState => !prevState);
    };

    // Check if content is overflowing
    useEffect(() => {
        const contentHeight = contentRef.current.scrollHeight;
        if (contentHeight > 150) {
            setIsOverflowing(true);
        }
    }, [description]);

    return (
        <div className="relative flex flex-col mt-6 bg-color1 text-color3 shadow-md bg-clip-border rounded-xl w-full lg:w-96 ">
            <div className="p-6">
                <div className='flex gap-2'>
                    <div className='w-[28px] h-[28px] items-center justify-center'>
                        <img src={logo} alt='img not found' width={'100%'} height={'100%'} />
                    </div>
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-color6">
                        {heading}
                    </h5>
                </div>

                <div
                    ref={contentRef}
                    className={`block font-sans text-base antialiased font-light leading-relaxed text-inherit overflow-hidden transition-all duration-300 ${showFullText ? 'max-h-full' : 'max-h-[150px]'}`}
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {description}
                </div>
            </div>
            {isOverflowing && (
                <div className="p-6 pt-0">
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-color6 text-color1 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={handleToggleText}
                    >
                        {showFullText ? 'Show Less' : btnLabel}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Card;
