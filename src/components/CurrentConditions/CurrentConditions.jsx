import React from 'react';
import styles from './CurrentConditions.module.css';

import CurrentTemp from '../CurrentTemp/CurrentTemp';
import Hourly from '../Hourly/Hourly';

const CurrentConditions = () => {
    return (
        <div className={styles.currentConditions}>
            <CurrentTemp />
            <Hourly />
        </div>
    );
};

export default CurrentConditions;