import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/timeBlock';

const TimeBlock = (props) => {
    return (
        <div className={styles.timeBlock}>
            {props.time}
        </div>
    );
};

export default TimeBlock;

TimeBlock.propTypes = {
    time: PropTypes.string.isRequired
};
