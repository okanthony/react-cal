import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from '../css/tabHeader.css';

const TabHeader = (props) => {
    return (
        <a className={styles.tabHeader}>
            <span>
                {props.day}
            </span>
        </a>
    );
};

export default TabHeader;

TabHeader.propTypes = {
    day: PropTypes.string.isRequired
};
