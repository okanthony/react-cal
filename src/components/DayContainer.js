import React from 'react';
import PropTypes from 'prop-types';
// components
import DayHeader from './DayHeader';
import TimeBlock from './TimeBlock';
// styles
import styles from '../css/dayContainer';

const DayContainer = ({ currentTab, day }) => {
    const times = [
        '5:00PM',
        '5:30PM',
        '6:00PM',
        '6:30PM',
        '7:00PM'
    ];

    const timeBlocks = times.map((time) => {
        return (
            <TimeBlock
                time={time}
                key={times.indexOf(time) + 10}
            />
        );
    });

    let containerStyle = `${styles.dayContainer}`;
    if (currentTab === day) {
        containerStyle += ` ${styles.activeDayContainer}`;
    } else {
        containerStyle += ` ${styles.hiddenDayContainer}`;
    }

    return (
        <div className={containerStyle}>
            <DayHeader day={day} />
            {timeBlocks}
        </div>
    );
};

export default DayContainer;

DayContainer.propTypes = {
    currentTab: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired
};
