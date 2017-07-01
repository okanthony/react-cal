import React from 'react';
import PropTypes from 'prop-types';
// components
import TabHeader from './TabHeader';
// styles
import styles from '../css/tabsContainer';

const TabsContainer = (props) => {
    const tabHeaders = props.days.map((day) => {
        return (
            <TabHeader
                id={`${day.toLowerCase()}-tab`}
                day={day.slice(0, 3)}
                key={props.days.indexOf(day) + 100}
            />
        );
    });

    return (
        <div className={styles.tabsContainer}>
            {tabHeaders}
        </div>
    );
};

export default TabsContainer;

TabsContainer.propTypes = {
    days: PropTypes.arrayOf(PropTypes.string).isRequired
};
