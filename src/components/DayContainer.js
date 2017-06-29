import React from 'react';
// components
import DayHeader from './DayHeader';
import TimeBlock from './TimeBlock';
// styles
import styles from '../css/dayContainer.css';

const DayContainer = (props) => {
  const times = [
    '5:00PM',
    '5:30PM',
    '6:00PM',
    '6:30PM',
    '7:00PM'
  ]

  const timeBlocks = times.map(time => {
    return (
      <TimeBlock
        time={time}
        key={times.indexOf(time) + 10}
      />
    );
  });

  var className = props.isHidden ? styles.hiddenDayContainer : styles.dayContainer;

  return (
    <div className={className}>
      <DayHeader
        {...props}
      />
      {timeBlocks}
    </div>
  );
};

export default DayContainer;
