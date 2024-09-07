import React, { useState } from 'react';

const Image = ({ src, fallbackSrc = "https://placehold.co/300x200/0f3375/white?text=Image+Unavailable", alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)} // Use fallback image on error
            {...props}
        />
    );
};

export default Image;
