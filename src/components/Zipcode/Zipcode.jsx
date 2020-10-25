import React from 'react';
import styles from './Zipcode.module.css';

const Zipcode = () => {
    return (
        <div className={styles.zipcode}>
            <input type="text" className={styles.input} placeholder="enter zipcode"/>
        </div>
    );
};

export default Zipcode;