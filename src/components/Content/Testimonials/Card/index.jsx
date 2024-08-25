import React from 'react'

const Card = ({ author, message }) => {
    return (
        <div class="w-full mx-10 px-6 py-4  bg-color1 border-color3 rounded-lg shadow-md shadow-color2 hover:bg-color2 ">
            <p className="font-normal text-color4 group-hover:text-color1">{message}</p>
            <div className='flex items-center justify-end'>
                <span className="mb-2 text-xl font-bold tracking-tight text-color6 hover:text-color5">- {author}</span>
            </div>
        </div>
    )
}

export default Card