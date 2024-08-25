import React from 'react';
import { getColor } from '../../../../../utility';
import {
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const Card = ({ event, icon }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: getColor('color1'), color: getColor('color6') }}
            contentArrowStyle={{ borderRight: '7px solid var(--color2)' }}
            iconStyle={{ background: 'var(--color3)', color: 'var(--color6)' }}
            icon={
                <div className="p-3 w-full h-full bg-color6 rounded-full">
                    <img src={icon} alt={event.title} width={'100%'} height={'100%'} />
                </div>
            }
        >
            <span className=" text-color6 text-lg font-bold ">{event.title}</span>
            <div className='p-2 rounded-lg bg-color6 b-[color2] shadow-md w-fit mt-2'>
                <span className='text-color1'>{event.timeline}</span>
            </div>
            <p className='text-color3 font-medium'>{event.description}</p>
        </VerticalTimelineElement>
    );
};

export default Card;
