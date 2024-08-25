import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import { getColor } from '../../../../utility';
import Arrow from './Arrow';

const CustomDotList = styled.ul`
  position: absolute;
  bottom: -30px; /* Position the dots below the carousel */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 5px;
  }

  button {
    background-color: #ccc;
    border-radius: 50%;
    width: 12px;
    height: 12px;

    &.react-multi-carousel-dot--active {
      background-color: #2382f7;
    }
  }
`;

const Slider = ({ data, Cmp }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className=' relative md:w-full lg:w-1/2 mx-auto' style={{ overflow: 'visible' }}>
            <Carousel
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 0.5s ease-in-out"
                transitionDuration={500}
                containerClass="relative "
                removeArrowOnDeviceType={['tablet', 'mobile']}
                slidesToSlide={1} // Ensure only one slide moves at a time
                showDots={true} // Enable dots
                arrows={true} // Enable arrows
                renderButtonGroupOutside={true} // Render arrows outside the carousel
                customDotList={<CustomDotList />} // Custom dot list using styled-components
                customLeftArrow={<Arrow />} // Custom left arrow
                customRightArrow={<Arrow side='right' />} // Custom right arrow
            >
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-center lg:px-10 lg:py-10 md:px-2 md:py-1">
                        {item ? <Cmp {...item} /> : <div>Item not found</div>}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
