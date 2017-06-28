import React from 'react';
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
