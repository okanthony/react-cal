import React from 'react';
// components
import TabHeader from './TabHeader';
// styles
import styles from '../css/tabsContainer.css';

const TabsContainer = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const tabHeaders = days.map((day) => {
    return (
      <TabHeader
        id={`${day.toLowerCase()}-tab`}
        day={day.slice(0, 3)}
        key={days.indexOf(day) + 100}
      />
    );
  });
  return (
    <div className={styles.tabsContainer}>
      {tabHeaders}
    </div>
  );
};

export default TabsContainer;
