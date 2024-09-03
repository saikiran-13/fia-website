import React from 'react'
import Title from '../../Common/Title'
import Department from './Department'
import { team } from './data'
const Team = () => {
    return (
        <div id="team" data-aos="fade-up" className='flex flex-col w-full h-fit px-4 py-2 lg:px-20 lg:py-12 justify-center items-center gap-10'>
            <Title title={'Team'} />
            {team.map(({ department, members }, inx) => <Department key={inx + department} department={department} members={members} />)}

        </div>
    )
}

export default Team