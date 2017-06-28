import React from 'react';
// components
import Calendar from './components/Calendar';
import TabsContainer from './components/TabsContainer';
// styles
import styles from './css/app.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <TabsContainer />
      <Calendar />
    </div>
  );
};

export default App;
