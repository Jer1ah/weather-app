import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Zipcode.module.css';

import { getLocation, 
         updateUserInput,
         getDailyForecast,
         getCurrentWeather,
         getHourlyForecast
} from '../../actions';

class Zipcode extends Component {
    constructor(props) {
        super(props);
        this.userInput = React.createRef();
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.locationInfo.Key !== this.props.locationInfo.Key) {
            this.props.getDailyForecast(nextProps.locationInfo.Key);
            this.props.getHourlyForecast(nextProps.locationInfo.Key);
            this.props.getCurrentWeather(nextProps.locationInfo.Key);
            return true;
        } 
        return false;
    }

    getLocationHandler = (input) => {
        this.props.getLocation(input);
        this.userInput.current.value = "";
    }

    render() {
        return (
            <div className={styles.zipcode}>
                <div className={styles.wrapper}>
                    <input type="text" 
                        ref={this.userInput} 
                        className={styles.input} 
                        placeholder="enter zipcode"
                        onKeyUp={() => this.props.updateUserInput(this.userInput.current.value)}
                    />
                    <button className={styles.button}
                            onClick={() => this.getLocationHandler(this.props.userInput)}
                    >Get Weather</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        locationInfo: state.location,
        userInput: state.userInput
    }
};

export default connect(mapStateToProps, {
    getLocation,
    updateUserInput,
    getCurrentWeather,
    getDailyForecast,
    getHourlyForecast
})(Zipcode);