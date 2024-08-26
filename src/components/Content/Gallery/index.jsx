import React from 'react'
import Title from '../../Common/Title'
import ImageMasonry from './ImageMasonry'
import { images } from './data'

const Gallery = () => {
    return (
        <div id="gallery" className='flex flex-col w-full h-fit px-20 py-12 justify-center items-center gap-10'>
            <Title title={'Gallery'} />
            <ImageMasonry images={images} />
        </div>
    )
}

export default Gallery