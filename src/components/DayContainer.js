import React from 'react';
import DayHeader from './DayHeader';
import TimeBlock from './TimeBlock';

const DayContainer = (props) => {
  let times = [
    '5:00PM',
    '5:30PM',
    '6:00PM',
    '6:30PM',
    '7:00PM'
  ]

  let timeBlocks = times.map(time => {
    return (
      <TimeBlock
        className='time-block'
        time={time}
        key={times.indexOf(time) + 10}
      />
    )
  });

  return (
    <div>
      <DayHeader
        className='day-header'
        {...props}
      />
      {timeBlocks}
    </div>
  );
};

export default DayContainer;
