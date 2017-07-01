import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/tabHeader';

const TabHeader = (props) => {
    return (
        <a
            href='#'
            className={styles.tabHeader}
            onClick={props.onClick}
        >
            <span>
                {props.dayAbbrev}
            </span>
        </a>
    );
};

export default TabHeader;

TabHeader.propTypes = {
    dayAbbrev: PropTypes.string.isRequired
};
