import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/timeBlock';

const TimeBlock = ({ time }) => {
    return (
        <div className={styles.timeBlock}>
            {time}
        </div>
    );
};

export default TimeBlock;

TimeBlock.propTypes = {
    time: PropTypes.string.isRequired
};
