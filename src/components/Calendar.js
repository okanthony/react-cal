import React from 'react';
import DayContainer from './DayContainer'

const Calendar = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  let dayContainers = days.map(day => {
    return (
      <DayContainer
        className='day-container'
        id={`${day.toLowerCase()}-container`}
        day={day}
        key={days.indexOf(day) + 1}
      />
    )
  });

  return (
    <div className='calendar'>
      {dayContainers}
    </div>
  );
};

export default Calendar;
