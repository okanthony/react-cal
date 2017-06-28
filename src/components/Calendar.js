import React from 'react';
// components
import DayContainer from './DayContainer';
// styles
import styles from '../css/calendar.css';

const Calendar = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayContainers = days.map((day) => {
    return (
      <DayContainer
        id={`${day.toLowerCase()}-container`}
        day={day}
        key={days.indexOf(day) + 1}
      />
    );
  });

  return (
    <div className={styles.calendar}>
      {dayContainers}
    </div>
  );
};

export default Calendar;
