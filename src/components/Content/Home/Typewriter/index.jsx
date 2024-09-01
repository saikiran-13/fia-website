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
            <span className='text-xl font-medium text-color4 opacity-75'>
                We aim to create a platform that not only nurtures academic success but also strengthens community bonds by{' '}
            </span>
            <span className='text-xl font-medium text-color6'>
                {text}
                <span style={{ color: 'inherit', animation: 'blink 1s step-end infinite' }}>
                    {'|'}
                </span>
            </span>
        </React.Fragment>
    );
};

export default Typewriter_;
