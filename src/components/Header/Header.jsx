import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';

import { getCurrentDate } from '../../actions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCurrentDate();
    }

    render() {
        return (
            <div className={styles.header}>
                <h2>Charlotte, North Carolina</h2>
                <span>{this.props.currentDate}</span>
            </div>
        );
    }
};

const MapStateToProps = (state) => {
    return {
        currentDate: state.currentDate
    };
};

export default connect(MapStateToProps, {
    getCurrentDate
})(Header);