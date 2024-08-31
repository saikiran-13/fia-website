import React from 'react'
import Icon from '../../../../Icon'
const Card = ({ name, role, image, links }) => {
    debugger
    console.log('links', links, 'role', role)

    return (
        <div className="w-[150px] min-h-[300px] items-start text-center mr-10 mb-10">
            <div className="relative mx-auto mb-4 w-36 h-36 rounded-full border-2 border-color3 shadow-lg items-center justify-center overflow-hidden">
                <img className="w-full h-full transform transition-transform duration-300 hover:scale-125 hover:grayscale object-cover" src={image} alt={`${name} Avatar`} />
            </div>
            <h3 className="mb-1 text-xl font-bold tracking-tight text-color5">
                <a href="#">{name}</a>
            </h3>
            <p className="text-color3 text-md">{role}</p>
            <div className='flex gap-2 mt-2 justify-center items-center cursor-pointer'>
                {Object.keys(links).map((icon) => <Icon icon={icon} onClick={() => window.open(links[icon], '_blank')} key={links[icon]} />)}
            </div>
        </div>
    )
}

export default Card
