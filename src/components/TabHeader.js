import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/tabHeader';

const TabHeader = ({ tabClick, day, dayAbbrev }) => {
    const handleClick = () => {
        return tabClick(day);
    };

    return (
        <a
            href='#'
            className={styles.tabHeader}
            onClick={handleClick}
        >
            <span>
                {dayAbbrev}
            </span>
        </a>
    );
};

export default TabHeader;

TabHeader.propTypes = {
    dayAbbrev: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    tabClick: PropTypes.func.isRequired
};
