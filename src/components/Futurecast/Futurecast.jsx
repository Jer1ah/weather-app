import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Futurecast.module.css';

import { getDays } from '../../actions';

import icons from '../../images';
import weatherIconSort from '../../functions';

class Futurecast extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDays();
    }

    render() {
        let listItems;
        if(this.props.dailyForecast[0]) {
            listItems = this.props.daysOfWeek.map((item, index) => {
                return <li className={styles.listItem}>
                    <h4>{item}</h4>
                    <img src={weatherIconSort(this.props.dailyForecast[index].Day.Icon, icons)} alt="Weather Icon"/>
                    <div className={styles.highTemp}>
                        <span>high</span>
                        <h5>{this.props.dailyForecast[index].Temperature.Maximum.Value}&deg;</h5>
                    </div>
                    <div className={styles.lowTemp}>
                        <span>low</span>
                        <h5>{this.props.dailyForecast[index].Temperature.Minimum.Value}&deg;</h5>
                    </div>
                    <div className={styles.rainChance}>
                        <span>rain</span>
                        <h5>{this.props.dailyForecast[index].Day.PrecipitationProbability}%</h5>
                    </div>
                </li>
            });
        }

        return (
            <div className={styles.futurecast}>
                <ul className={styles.list}>
                    {listItems ? listItems : null}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        daysOfWeek: state.daysOfWeek,
        dailyForecast: state.dailyForecast
    };
};

export default connect(mapStateToProps, {
    getDays
})(Futurecast);