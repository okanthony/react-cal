import React from 'react';
import PropTypes from 'prop-types';
// components
import DayHeader from './DayHeader';
import TimeBlock from './TimeBlock';
// styles
import styles from '../css/dayContainer';

const DayContainer = ({ currentTab, times, day, lessons }) => {
    const timeBlocks = times.map((time) => {
        let lesson;
        if (lessons) {
            lesson = lessons.filter(obj => obj.lessonTime === time);
        }

        return (
            <TimeBlock
                key={times.indexOf(time) + 10}
                time={time}
                {...(lesson && lesson.length && { lesson })}
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

DayContainer.defaultProps = {
    lessons: null
};

DayContainer.propTypes = {
    currentTab: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(PropTypes.object),
    times: PropTypes.arrayOf(PropTypes.string).isRequired,
    day: PropTypes.string.isRequired
};
