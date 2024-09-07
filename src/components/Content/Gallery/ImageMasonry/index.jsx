import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getColor } from '../../../../utility';
import Image from '../../../Image';
const ImageMasonry = ({ images, handleClick = null, src = "home", findKeyByValue = false }) => {
    const [loaded, setLoaded] = useState(false);
    console.log('images', images)

    useEffect(() => {
        // Simulate image loading
        const loadImages = () => {
            setTimeout(() => {
                setLoaded(true);
            }, 2000); // Simulate a delay
        };

        loadImages();
    }, []);

    return (
        <div className={`p-4 w-full ${src === 'home' ? 'bg-color2' : 'bg-[transparent]'} rounded-md shadow-lg shadow-color2 glassmorphism-hover:hover`}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    640: 1,   // Small screens (sm)
                    768: 2,   // Medium screens (md)
                    1024: 3,  // Large screens (lg)
                    1280: 4,  // Extra-large screens (xl)
                }}
            >
                <Masonry gutter="16px">
                    {loaded ? (
                        images.map((image, index) => (
                            <div
                                onClick={handleClick ? () => handleClick(image) : null}
                                key={index}
                                className="relative group w-full h-auto rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                            >
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Image ${index + 1} not found`}
                                    className="w-full h-auto rounded-lg"
                                />
                                {
                                    src === 'home' && <div className='bg-[rgba(0,0,0,0.6)] w-full flex py-2 absolute bottom-0 m-auto items-center justify-center'><span className='text-color1 text-center font-semibold'>{findKeyByValue(image)}</span></div>
                                }

                                {/* View All text overlay */}
                                {src === 'home' && <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    View All
                                </div>}
                            </div>

                        ))
                    ) : (
                        Array(8).fill(0).map((_, index) => (
                            <Skeleton
                                key={index}
                                height={300}
                                style={{ marginBottom: '16px', borderRadius: '8px' }}
                                baseColor={getColor('color1')}
                                highlightColor={getColor('color2')}
                            />
                        ))
                    )}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default ImageMasonry;
