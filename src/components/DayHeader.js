import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/dayHeader.css';

const DayHeader = (props) => {
    return (
        <div
            className={styles.dayHeader}
            id={`${props.day.toLowerCase()}-header`}
        >
            <span>
                {props.day}
            </span>
        </div>
    );
};

export default DayHeader;

DayHeader.propTypes = {
    day: PropTypes.string.isRequired
};
