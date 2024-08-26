import React from 'react'
import Title from '../../Common/Title'
import Department from './Department'
import { team } from './data'
const Team = () => {
    return (
        <div id="team" className='flex flex-col w-full h-fit px-20 py-12 justify-center items-center gap-10'>
            <Title title={'Team'} />
            {team.map(({ department, members }, inx) => <Department key={inx + department} department={department} members={members} />)}

        </div>
    )
}

export default Team