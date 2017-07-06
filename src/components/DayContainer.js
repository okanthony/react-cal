import React from 'react';
import PropTypes from 'prop-types';
// components
import DayHeader from './DayHeader';
import LessonBlock from './LessonBlock';
// styles
import styles from '../css/dayContainer';

const DayContainer = ({ currentTab, times, day }) => {
    const lessonBlocks = times.map((time) => {
        return (
            <LessonBlock
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
            {lessonBlocks}
        </div>
    );
};

export default DayContainer;

DayContainer.propTypes = {
    currentTab: PropTypes.string.isRequired,
    times: PropTypes.arrayOf(PropTypes.string).isRequired,
    day: PropTypes.string.isRequired
};
