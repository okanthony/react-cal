import React, { Component } from 'react';
import moment from 'moment';
// components
import Calendar from './components/Calendar';
import TabsContainer from './components/TabsContainer';
// styles
import styles from './css/app';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: moment().format('dddd')
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
        const todaysDate = moment();
        const nextSixDays = [...Array(6)];
        const days = [todaysDate.format('dddd')];

        nextSixDays.forEach(() => {
            days.push(todaysDate.add(1, 'days').format('dddd'));
        });

        const times = [
            '1:00PM',
            '1:30PM',
            '2:00PM',
            '2:30PM',
            '3:00PM',
            '3:30PM',
            '4:00PM'
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
