import React from 'react';
import PropTypes from 'prop-types';
// components
import TimeBlock from './TimeBlock';
import TimeHeader from './TimeHeader';
// styles
import styles from '../css/timeBlocksContainer';

const TimeBlocksContainer = ({ times }) => {
    const timeBlocks = times.map((time) => {
        return (
            <TimeBlock
                time={time}
                key={times.indexOf(time) + 10}
            />
        );
    });

    return (
        <div className={styles.timeBlocksContainer}>
            <TimeHeader />
            {timeBlocks}
        </div>
    );
};

export default TimeBlocksContainer;

TimeBlocksContainer.propTypes = {
    times: PropTypes.arrayOf(PropTypes.string).isRequired
};
