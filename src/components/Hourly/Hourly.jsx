import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Hourly.module.css';

import { getHours } from '../../actions';

import icons from '../../images';
import weatherIconSort from '../../functions';

class Hourly extends Component {
    componentDidMount() {
        this.props.getHours();
    }

    render() {
        let listItems;

        if(this.props.hourlyForecast[1]) {
            listItems = this.props.hours.map((item, index) => {
                return <li className={styles.listItem} key={this.props.hourlyForecast[index].EpochDateTime}>
                            <h5>{item}</h5>
                            <img src={weatherIconSort(this.props.hourlyForecast[index].WeatherIcon, icons)} alt="Weather Icon"/>
                            <span>{this.props.hourlyForecast[index].Temperature.Value}&deg;</span>
                        </li>
            });
        }

        return (
            <div className={styles.hourly}>
                <ul className={styles.list}>
                    {listItems ? listItems : null}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        hours: state.hoursList,
        hourlyForecast: state.hourlyForecast
    }
};

export default connect(mapStateToProps, {
    getHours
})(Hourly);