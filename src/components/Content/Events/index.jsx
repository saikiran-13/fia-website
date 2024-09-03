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
        value: 'upcoming',
        Cmp: <Timeline events={events.Upcoming} icon={upcomingEventsIcon} />
    }, {
        label: 'Past',
        value: 'past',
        Cmp: <Timeline events={events.Past} icon={pastEventsIcon} />
    }]


    return (
        <div id="events" className='flex flex-col w-full h-fit px-4 py-2 lg:px-20 lg:py-12 justify-center items-center gap-10'>
            <Title title={'Events'} />
            <Tabs tabs={tabs} />
        </div>
    )
}

export default Events