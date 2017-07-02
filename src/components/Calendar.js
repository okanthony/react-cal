import React from 'react';
import PropTypes from 'prop-types';
// components
import DayContainer from './DayContainer';
// styles
import styles from '../css/calendar';

const Calendar = (props) => {
    const dayContainers = props.days.map((day) => {
        return (
            <DayContainer
                id={`${day.toLowerCase()}-container`}
                day={day}
                key={props.days.indexOf(day) + 1}
                tabClicked={props.tabClicked}
                currentTab={props.currentTab}
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

Calendar.propTypes = {
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentTab: PropTypes.string.isRequired
};
