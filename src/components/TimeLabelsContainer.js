import React from 'react';
import PropTypes from 'prop-types';
// components
import TimeLabel from './TimeLabel';
import TimeHeader from './TimeHeader';
// styles
import styles from '../css/dayContainer';

const TimeLabelsContainer = ({ times }) => {
    const timeBlocks = times.map((time) => {
        return (
            <TimeLabel
                time={time}
                key={times.indexOf(time) + 10}
            />
        );
    });

    return (
        <div className={styles.dayContainer}>
            <TimeHeader />
            {timeBlocks}
        </div>
    );
};

export default TimeLabelsContainer;

TimeLabelsContainer.propTypes = {
    times: PropTypes.arrayOf(PropTypes.string).isRequired
};
