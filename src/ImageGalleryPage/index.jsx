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
            <div className='flex w-full h-fit items-center justify-center cssanimation effect3d'>
                <span className='text-2xl text-center lg:tex-5xl font-bold text-transparent bg-clip-text bg-dark-gradient'>Welcome to the FIA's Vibrant Gallery</span>
            </div>
            <div className='flex w-3/4 h-fit items-center justify-center'>
                <span className='text-md lg:text-lg font-semibold text-color6 text-center'>Experience the vibrant traditions and rich cultural heritage brought to life through the events organized by the Friends of India Association (FIA). From colorful festivals to community gatherings, our gallery showcases moments of celebration, unity, and joy. Explore the memories we've created together as we continue to preserve and share Indian culture with the Clarkson University community and beyond.</span>
            </div>

            {galleryImages?.length ?
                <ImageMasonry images={galleryImages} src='image-gallery-listing' /> : null}
        </div>
    )
}

export default ImageGalleryPage