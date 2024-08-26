import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ImageMasonry = ({ images }) => {
    console.log('images', images)

    return (
        <div className="p-4 w-full bg-color3 rounded-md shadow-lg shadow-color2">
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    640: 1,   // Small screens (sm)
                    768: 2,   // Medium screens (md)
                    1024: 3,  // Large screens (lg)
                    1280: 4,  // Extra-large screens (xl)
                }}
            >
                <Masonry gutter="16px">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt || `Image ${index + 1}`}
                            className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default ImageMasonry;
