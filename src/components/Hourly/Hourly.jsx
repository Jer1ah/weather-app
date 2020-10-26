import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Hourly.module.css';

import { getHours } from '../../actions';

import image from '../../images/cloudy.svg';

class Hourly extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getHours();
    }

    render() {
        const listItems = this.props.hours.map((item, index) => {
            return <li className={styles.listItem}>
                        <h5>{item}</h5>
                        <img src={image} alt="Weather Icon"/>
                        <span>39&deg;</span>
                    </li>
        });

        return (
            <div className={styles.hourly}>
                <ul className={styles.list}>
                    {listItems}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        hours: state.hoursList
    };
};

export default connect(mapStateToProps, {
    getHours
})(Hourly);