import React from 'react';
import PropTypes from 'prop-types';
// components
import LessonBlock from './LessonBlock';
// styles
import styles from '../css/timeLabel';

const TimeBlock = ({ lesson }) => {
    return (
        <div className={styles.timeBlock}>
            {lesson
                && <LessonBlock lesson={lesson[0]} />
            }
        </div>
    );
};

export default TimeBlock;

TimeBlock.defaultProps = {
    lesson: null
};

TimeBlock.propTypes = {
    lesson: PropTypes.arrayOf(PropTypes.object)
};
