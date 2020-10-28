import React from 'react';
import { connect } from 'react-redux';
import styles from './CurrentTemp.module.css';

import image from '../../images/storm.svg';

const CurrentTemp = (props) => {
    return (
        <div className={styles.currentTemp}>
            <img src={image} alt="Weather Icon"/>
            <h3>{props.currentTemp}&deg;</h3>
            <span>Thunderstorms</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    if(state.currentWeather.Temperature) {
        return {
            currentTemp: state.currentWeather.Temperature.Imperial.Value
        };
    } else {
        return {};
    }
};

export default connect(mapStateToProps)(CurrentTemp);