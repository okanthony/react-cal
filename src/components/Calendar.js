import React from 'react';
import PropTypes from 'prop-types';
// components
import DayContainer from './DayContainer';
import TimeBlocksContainer from './TimeBlocksContainer';
// styles
import styles from '../css/calendar';

const Calendar = ({ days, times, currentTab }) => {
    const dayContainers = days.map((day) => {
        return (
            <DayContainer
                id={`${day.toLowerCase()}-container`}
                day={day}
                key={days.indexOf(day) + 1}
                times={times}
                currentTab={currentTab}
            />
        );
    });

    return (
        <div className={styles.calendar}>
            <TimeBlocksContainer times={times} />
            {dayContainers}
        </div>
    );
};

export default Calendar;

Calendar.propTypes = {
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    times: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentTab: PropTypes.string.isRequired
};
