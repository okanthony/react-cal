import React from 'react';

const DayHeader = (props) => {
  return (
    <div
      className='day-header'
      id={`${props.day.toLowerCase()}-header`}>
      {props.day}
    </div>
  );
};

export default DayHeader;
