import React from 'react';
import styles from './Hourly.module.css';

const Hourly = () => {
    return (
        <div className={styles.hourly}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <h5>3pm</h5>
                    <img src="#" alt="Weather Icon"/>
                    <span>39&deg;</span>
                </li>
                <li className={styles.listItem}>
                <h5>4pm</h5>
                    <img src="#" alt="Weather Icon"/>
                    <span>40&deg;</span>
                </li>
                <li className={styles.listItem}>
                <h5>5pm</h5>
                    <img src="#" alt="Weather Icon"/>
                    <span>38&deg;</span>
                </li>
            </ul>
        </div>
    );
};

export default Hourly;