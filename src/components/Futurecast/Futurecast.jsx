import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Futurecast.module.css';

import { getDays } from '../../actions';

import image from '../../images/cloudy.svg';

class Futurecast extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDays();
    }

    render() {
        const listItems = this.props.daysOfWeek.map((item, index) => {
            return <li className={styles.listItem}>
                <h4>{item}</h4>
                <img src={image} alt="Weather Icon"/>
                <div className={styles.highTemp}>
                    <span>high</span>
                    <h5>54&deg;</h5>
                </div>
                <div className={styles.lowTemp}>
                    <span>low</span>
                    <h5>34&deg;</h5>
                </div>
                <div className={styles.rainChance}>
                    <span>rain</span>
                    <h5>13%</h5>
                </div>
            </li>
        })

        return (
            <div className={styles.futurecast}>
                <ul className={styles.list}>
                    {listItems}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        daysOfWeek: state.daysOfWeek
    };
};

export default connect(mapStateToProps, {
    getDays
})(Futurecast);