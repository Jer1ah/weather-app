import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <h2>Charlotte, North Carolina</h2>
            <span>April 12th 2019</span>
        </div>
    );
};

export default Header;