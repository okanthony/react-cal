import React from 'react';
// components
import Calendar from './components/Calendar';
import TabsContainer from './components/TabsContainer';
// styles
import styles from './css/app';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabClicked: false,
            currentTab: 'Monday'
        };
        this.tabClick = this.tabClick.bind(this);
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
                    tabClicked={this.state.tabClicked}
                    currentTab={this.state.currentTab}
                />
            </div>
        );
    }
}

export default App;
