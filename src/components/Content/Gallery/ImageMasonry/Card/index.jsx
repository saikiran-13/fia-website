import React from 'react';

const Card = ({ imageSrc, altText }) => {
    return (
        <div className="relative overflow-hidden rounded-lg group">
            <img src={imageSrc} alt={altText} className="w-full h-auto transition-transform duration-300 group-hover:scale-105 group-hover:border-2 group-hover:border-orange-500" />
            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-center text-sm py-2 px-4 rounded shadow-lg transition-all duration-300 group-hover:bottom-5">
                View All
            </div>
        </div>
    );
};

export default Card;
