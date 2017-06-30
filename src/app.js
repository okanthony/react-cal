import React from 'react';
// components
import Calendar from './components/Calendar';
import TabsContainer from './components/TabsContainer';
// styles
import styles from './css/app.css';

const App = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <div className={styles.wrapper}>
      <TabsContainer days={days} />
      <Calendar days={days} />
    </div>
  );
};

export default App;
