import React from 'react';
import PropTypes from 'prop-types';
// components
import TabHeader from './TabHeader';
// styles
import styles from '../css/tabsContainer';

const TabsContainer = ({ days, tabClick }) => {
    const tabHeaders = days.map((day) => {
        return (
            <TabHeader
                id={`${day.toLowerCase()}-tab`}
                day={day}
                dayAbbrev={day.slice(0, 3)}
                key={days.indexOf(day) + 100}
                tabClick={tabClick}
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
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    tabClick: PropTypes.func.isRequired
};
