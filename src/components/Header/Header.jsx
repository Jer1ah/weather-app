import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';

import { getCurrentDate, getCurrentWeather } from '../../actions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCurrentDate();
        this.props.getCurrentWeather();
    }

    render() {
        return (
            <div className={styles.header}>
                <h2>{this.props.city}, {this.props.state}</h2>
                <span>{this.props.currentDate}</span>
            </div>
        );
    }
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

export default connect(MapStateToProps, {
    getCurrentDate,
    getCurrentWeather
})(Header);