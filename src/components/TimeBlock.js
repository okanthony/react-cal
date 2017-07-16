import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/timeLabel';

const TimeBlock = ({ lesson }) => {
    return (
        <div
            className={styles.timeBlock}
        >
            {lesson ? lesson[0].lessonDuration : null}
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
