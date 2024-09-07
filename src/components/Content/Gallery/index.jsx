import React from 'react'
import Title from '../../Common/Title'
import ImageMasonry from './ImageMasonry'
import { useNavigate } from 'react-router-dom';
import { galleryImages } from './data';

const findKeyByValue = (value, obj = galleryImages) => {
    return Object.keys(obj).find(key => obj[key] === value);
}
const Gallery = () => {
    const history = useNavigate();
    const images = Object.values(galleryImages)


    return (
        <div data-aos="fade-up" id="gallery" className='flex flex-col w-full h-fit px-4 py-2 lg:px-20 lg:py-12 justify-center items-center gap-10 '>
            <Title title={'Gallery'} />
            <ImageMasonry images={images} findKeyByValue={findKeyByValue} handleClick={(value) => history(`/image-gallery/${findKeyByValue(value)}`)} />
        </div>
    )
}

export default Gallery