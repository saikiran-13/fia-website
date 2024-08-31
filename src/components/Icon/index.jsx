import React from 'react'
import { icons } from './data'
const Icon = ({ icon, width = 6, height = 6, onClick = null }) => {
    return (
        <div onClick={onClick} className={`w-${width} h-${height} items-center justify-center cursor-pointer`}><img style={{ width: '100%', height: '100%' }} src={icons[icon]} alt="img not found" fit="contain" /></div>
    )
}

export default Icon