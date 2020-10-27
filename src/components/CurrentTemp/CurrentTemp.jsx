import React from 'react';
import styles from './CurrentTemp.module.css';

import image from '../../images/storm.svg';

const CurrentTemp = () => {
    return (
        <div className={styles.currentTemp}>
            <img src={image} alt="Weather Icon"/>
            <h3>37&deg;</h3>
            <span>Thunderstorms</span>
        </div>
    );
};

export default CurrentTemp;