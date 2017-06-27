import React from 'react';
//components
import Calendar from './components/Calendar';
//styles
import styles from './css/app.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Calendar />
    </div>
  );
};

export default App;
