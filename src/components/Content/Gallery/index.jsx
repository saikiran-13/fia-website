import React from 'react'
import Title from '../../Common/Title'
import ImageMasonry from './ImageMasonry'

const images = [
    { src: 'https://via.placeholder.com/600x400', alt: 'Placeholder Image 1' },
    { src: 'https://via.placeholder.com/400x600', alt: 'Placeholder Image 2' },
    { src: 'https://via.placeholder.com/800x600', alt: 'Placeholder Image 3' },
    { src: 'https://via.placeholder.com/600x800', alt: 'Placeholder Image 4' },
    { src: 'https://via.placeholder.com/700x500', alt: 'Placeholder Image 5' },
    { src: 'https://via.placeholder.com/500x700', alt: 'Placeholder Image 6' },
    { src: 'https://via.placeholder.com/600x600', alt: 'Placeholder Image 7' },
    { src: 'https://via.placeholder.com/800x800', alt: 'Placeholder Image 8' },
    { src: 'https://via.placeholder.com/1200x800', alt: 'Placeholder Image 9' },
];

const Gallery = () => {
    return (
        <div className='flex flex-col w-full h-fit px-20 py-12 justify-center items-center gap-10'>
            <Title title={'Gallery'} />
            <ImageMasonry images={images} />
        </div>
    )
}

export default Gallery