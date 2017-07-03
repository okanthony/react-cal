import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/dayHeader';

const DayHeader = ({ day }) => {
    return (
        <div
            className={styles.dayHeader}
            id={`${day.toLowerCase()}-header`}
        >
            <span>
                {day}
            </span>
        </div>
    );
};

export default DayHeader;

DayHeader.propTypes = {
    day: PropTypes.string.isRequired
};
