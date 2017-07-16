import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/timeLabel';

const TimeLabel = ({ time }) => {
    return (
        <div className={styles.timeBlock}>
            {time}
        </div>
    );
};

export default TimeLabel;

TimeLabel.propTypes = {
    time: PropTypes.string.isRequired
};
