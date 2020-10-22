import React from 'react';
import styles from './WeatherApp.module.css';

import Header from '../Header/Header';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import FutureCast from '../Futurecast/Futurecast';

const WeatherApp = () => {
    return (
        <div className={styles.weatherApp}>
            <Header />
            <div className={styles.wrapper}>
                <CurrentConditions />
                <FutureCast />
            </div>
        </div>
    );
};

export default WeatherApp;