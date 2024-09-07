import React from 'react'
import ImageMasonry from '../components/Content/Gallery/ImageMasonry'
import Title from '../components/Common/Title'
import { useParams } from 'react-router-dom'
import { eventPhotos } from './data'
const ImageGalleryPage = () => {

    const { imgId } = useParams()
    const [galleryImages, setGalleryImages] = React.useState([])

    React.useEffect(() => {
        if (imgId) {
            setGalleryImages(eventPhotos[imgId])
        }
    })
    return (
        <div className='flex flex-col w-full h-fit px-4 py-2 lg:px-20 lg:py-12 justify-center items-center gap-10'>
            <Title title={'Image Gallery Listing'} />
            {galleryImages?.length ?
                <ImageMasonry images={galleryImages} src='image-gallery-listing' /> : null}
        </div>
    )
}

export default ImageGalleryPage