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

        const times = [
            '5:00PM',
            '5:30PM',
            '6:00PM',
            '6:30PM',
            '7:00PM',
            '7:30PM',
            '8:00PM'
        ];

        return (
            <div className={styles.wrapper}>
                <TabsContainer
                    days={days}
                    tabClick={this.tabClick}
                />
                <Calendar
                    days={days}
                    times={times}
                    currentTab={this.state.currentTab}
                />
            </div>
        );
    }
}

export default App;
