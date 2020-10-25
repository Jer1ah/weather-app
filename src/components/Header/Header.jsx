import React, { Component } from 'react';
import styles from './Header.module.css';

import { getCurrentDate } from '../../actions';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h2>Charlotte, North Carolina</h2>
                <span>April 12th 2019</span>
            </div>
        );
    }
};

export default Header;