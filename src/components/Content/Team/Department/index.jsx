import React from 'react'
import Card from './Card'
const Department = ({ department, members }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            <span className='text-color6 text-xl font-bold'>{department}</span>
            <div className='flex flex-wrap items-center justify-center'>{members.map(({ name, role, image }, inx) => <Card key={inx + name} name={name} role={role} image={image} />)}</div >
        </div>
    )
}

export default Department