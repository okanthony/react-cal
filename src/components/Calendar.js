import React from 'react';
// components
import DayContainer from './DayContainer';
// styles
import styles from '../css/calendar.css';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: false
    }
  }

  componentDidMount() {
    if (window.matchMedia('(max-width: 550px)').matches) {
      this.setState({isHidden: true});
    }
  }

  render() {
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
          isHidden={day === 'Monday' ? false : this.state.isHidden}
        />
      );
    });

    return (
      <div className={styles.calendar}>
        {dayContainers}
      </div>
    );
  }
};

export default Calendar;
