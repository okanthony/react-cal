import React, { Component } from 'react';
// components
import Calendar from './components/Calendar';
import TabsContainer from './components/TabsContainer';
// styles
import styles from './css/app';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'Monday'
        };
        this.tabClick = this.tabClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.currentTab !== nextState.currentTab) {
            return true;
        }
        return false;
    }

    tabClick(day) {
        this.setState({ currentTab: day });
    }

    render() {
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        return (
            <div className={styles.wrapper}>
                <TabsContainer
                    days={days}
                    tabClick={this.tabClick}
                />
                <Calendar
                    days={days}
                    currentTab={this.state.currentTab}
                />
            </div>
        );
    }
}

export default App;
