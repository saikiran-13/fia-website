import React from 'react'
import ImageMasonry from '../components/Content/Gallery/ImageMasonry'
import Title from '../components/Common/Title'
import { useParams } from 'react-router-dom'
import { images } from '../components/Content/Gallery/data'
const ImageGalleryPage = () => {

    const { imgId } = useParams()
    const [galleryImages, setGalleryImages] = React.useState([])

    const pageDynamicImages = {
        '600x400': images,
    }

    React.useEffect(() => {
        if (imgId) {
            setGalleryImages(pageDynamicImages[imgId])
        }
    })
    return (
        <div className='flex flex-col w-full h-fit px-20 py-12 justify-center items-center gap-10'>
            <Title title={'Image Gallery Listing'} />
            {galleryImages?.length ?
                <ImageMasonry images={galleryImages} /> : null}
        </div>
    )
}

export default ImageGalleryPage