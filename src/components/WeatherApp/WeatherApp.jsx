import React from 'react';

import Header from '../Header/Header';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import FutureCast from '../Futurecast/Futurecast';

const WeatherApp = () => {
    return (
        <div className="weatherApp">
            <Header />
            <div className="weatherApp__wrapper">
                <CurrentConditions />
                <FutureCast />
            </div>
        </div>
    );
};

export default WeatherApp;