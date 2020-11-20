import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <h2>{props.city}, {props.state}</h2>
                <span>{props.currentDate}</span>
            </div> 
        </div>
    );
};

const MapStateToProps = (state) => {
    if(state.location.AdministrativeArea) {
        return {
            currentDate: state.currentDate,
            city: state.location.LocalizedName,
            state: state.location.AdministrativeArea.LocalizedName
        };
    } else {
        return {};
    }
};

export default connect(MapStateToProps)(Header);