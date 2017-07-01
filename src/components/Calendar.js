import React from 'react';
import PropTypes from 'prop-types';
// components
import DayContainer from './DayContainer';
// styles
import styles from '../css/calendar';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillMount() {
        if (window.matchMedia('(max-width: 550px)').matches) {
            this.setState({ isHidden: true });
        }
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        let isHidden = false;
        if (window.matchMedia('(max-width: 550px)').matches) {
            isHidden = true;
        }
        this.setState({ isHidden });
    }

    render() {
        const dayContainers = this.props.days.map((day) => {
            return (
                <DayContainer
                    id={`${day.toLowerCase()}-container`}
                    day={day}
                    key={this.props.days.indexOf(day) + 1}
                    isHidden={day === 'Monday' ? false : this.state.isHidden}
                />
            );
        });

        return (
            <div className={styles.calendar}>
                {dayContainers}
            </div>
        );
    }
}

export default Calendar;

Calendar.propTypes = {
    days: PropTypes.arrayOf(PropTypes.string).isRequired
};
