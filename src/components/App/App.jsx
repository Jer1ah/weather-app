import React from 'react';
import styles from './App.module.css';

import WeatherApp from '../WeatherApp/WeatherApp';
import Zipcode from '../Zipcode/Zipcode';

const App = () => {
    return (
        <div className={styles.app}>
            <Zipcode />
            <WeatherApp />
        </div>
    );
};

export default App;