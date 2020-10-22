import React from 'react';
import styles from './CurrentTemp.module.css';

const CurrentTemp = () => {
    return (
        <div className={styles.currentTemp}>
            <img src="#" alt="Weather Icon"/>
            <h3>37&deg;</h3>
            <span>Party Cloudy</span>
        </div>
    );
};

export default CurrentTemp;