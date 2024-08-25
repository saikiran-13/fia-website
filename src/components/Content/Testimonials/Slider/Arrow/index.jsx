import React from 'react'
import sideArrow from '../../../../../assets/side_arrow.png'
import styled from 'styled-components';

const CustomArrow = styled.button`
  position: absolute;
  left: ${({ side }) => (side === 'left' ? '10px' : 'unset')};
  right: ${({ side }) => (side === 'right' ? '10px' : 'unset')};
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:hover {
    opacity: 0.75;
  }
`;

const Arrow = ({ side = 'left', onClick }) => {
    return (
        <CustomArrow side={side} onClick={onClick}>
            <div className='w-12 h-12 bg-color1 p-2 rounded-full'>
                <img src={sideArrow} alt="arrow" style={{ transform: side === 'left' ? 'rotate(180deg)' : 'rotate(0deg)', width: '100%', height: '100%' }} />
            </div>
        </CustomArrow>
    )
}

export default Arrow