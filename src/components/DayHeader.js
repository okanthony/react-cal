import React from 'react';

const DayHeader = (props) => {
  return (
    <div
      id={`${props.day.toLowerCase()}-header`}>
      {props.day}
    </div>
  );
};

export default DayHeader;
