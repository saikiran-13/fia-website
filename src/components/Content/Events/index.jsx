import React from 'react'
import { events } from './data'

import Title from '../../Common/Title'
import Timeline from './Timeline'
import upcomingEventsIcon from '../../../assets/upcoming_events.png'
import pastEventsIcon from '../../../assets/past_events.png'
import { Tabs } from './Tabs'


const Events = () => {

    const tabs = [{
        label: 'Upcoming',
        value: 'Upcoming',
        Cmp: <Timeline events={events.Upcoming} icon={upcomingEventsIcon} />
    }, {
        label: 'Past',
        value: 'Past',
        Cmp: <Timeline events={events.Past} icon={pastEventsIcon} />
    }]


    return (
        <div className='flex flex-col w-full h-fit px-20 py-12 justify-center items-center gap-10'>
            <Title title={'Events'} />
            <Tabs tabs={tabs} />
        </div>
    )
}

export default Events