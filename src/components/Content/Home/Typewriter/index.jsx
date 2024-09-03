import React from 'react';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';

const Typewriter_ = () => {
    const [text] = useTypewriter({
        words: ['Building Bridges', 'Celebrating Cultures', 'Uniting Hearts', 'Uplifting Traditions'],
        loop: 0, // Set to 0 for infinite loop
        typeSpeed: 70, // Speed of typing
        deleteSpeed: 50, // Speed of deleting
        delaySpeed: 1000, // Delay before starting to delete
        cursor: true, // Show the blinking cursor
        cursorStyle: '|', // Custom cursor style
    });

    return (
        <React.Fragment>
            <span className='text-xl lg:text-2xl font-medium text-color4 opacity-75'>
                We aim to create a platform that not only nurtures academic success but also strengthens community bonds by{' '}
            </span>
            <span className='text-xl lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse'>
                {text}
                <span style={{ color: 'inherit', animation: 'blink 1s step-end infinite' }}>
                    {'|'}
                </span>
            </span>
        </React.Fragment>
    );
};

export default Typewriter_;
