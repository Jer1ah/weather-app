import React from 'react';
import styles from './App.module.css';

import WeatherApp from '../WeatherApp/WeatherApp';

const App = () => {
    return (
        <div className={styles.app}>
            <WeatherApp />
        </div>
    );
};

export default App;