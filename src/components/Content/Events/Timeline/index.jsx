import React from 'react';
import {
    VerticalTimeline,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS for styling

import Card from './Card';

const Timeline = ({ events, icon }) => {

    if (!events || !events.length) return null

    return (
        <VerticalTimeline>
            {events.map((event, index) => (
                <Card key={event.timeline + index} icon={icon} event={event} />
            ))}
        </VerticalTimeline>
    );
};

export default Timeline;
