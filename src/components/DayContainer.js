import React from 'react';
import PropTypes from 'prop-types';
// components
import DayHeader from './DayHeader';
import TimeBlock from './TimeBlock';
// styles
import styles from '../css/dayContainer';

const DayContainer = (props) => {
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
    if (!props.tabClicked && props.day === 'Monday') {
        containerStyle += ` ${styles.activeDayContainer}`;
    } else if (!props.tabClicked) {
        containerStyle += ` ${styles.hiddenDayContainer}`;
    }

    return (
        <div className={containerStyle}>
            <DayHeader
                {...props}
            />
            {timeBlocks}
        </div>
    );
};

export default DayContainer;

DayContainer.propTypes = {
    tabClicked: PropTypes.bool.isRequired,
    day: PropTypes.string.isRequired
};
