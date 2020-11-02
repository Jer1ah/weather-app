import React from 'react';
import { connect } from 'react-redux';
import styles from './CurrentTemp.module.css';

import icons from '../../images';
import weatherIconSort from '../../functions';

const CurrentTemp = (props) => {
    return (
        <div className={styles.currentTemp}>
            <img src={weatherIconSort(props.weatherIcon, icons)} alt="Weather Icon"/>
            <h3>{props.currentTemp}&deg;</h3>
            <span>{props.currentCondtion}</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    if(state.currentWeather.Temperature) {
        return {
            currentTemp: state.currentWeather.Temperature.Imperial.Value,
            currentCondtion: state.currentWeather.WeatherText,
            weatherIcon: state.currentWeather.WeatherIcon
        };
    } else {
        return {};
    }
};

export default connect(mapStateToProps)(CurrentTemp);