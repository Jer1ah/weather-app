import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './WeatherApp.module.css';

import Header from '../Header/Header';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import FutureCast from '../Futurecast/Futurecast';

import { getCurrentDate,
         getCurrentWeather,
         getHourlyForecast,
         getDailyForecast,
         getLocation
} from '../../actions';

class WeatherApp extends Component {
    componentDidMount() {
        this.props.getCurrentDate();
        this.props.getCurrentWeather('11739_PC');
        this.props.getHourlyForecast('11739_PC');
        this.props.getDailyForecast('11739_PC');
        this.props.getLocation(28214);
    }

    render() {
        return (
            <div className={styles.weatherApp}>
                <Header />
                <div className={styles.wrapper}>
                    <CurrentConditions />
                    <FutureCast />
                </div>
            </div>
        );
    }
};

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps, {
    getCurrentDate,
    getCurrentWeather,
    getDailyForecast,
    getHourlyForecast,
    getLocation
})(WeatherApp);