import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Zipcode.module.css';

import { getLocation, updateUserInput } from '../../actions';

class Zipcode extends Component {
    constructor(props) {
        super(props);
        this.userInput = React.createRef();
    }

    componentDidMount() {
        this.props.getLocation();
        console.log(this.userInput.current.value);
    }

    render() {
        return (
            <div className={styles.zipcode}>
                <input type="text" 
                       ref={this.userInput} 
                       className={styles.input} 
                       placeholder="enter zipcode"
                       onKeyUp={() => this.props.updateUserInput(this.userInput.current.value)}
                />
                <button className={styles.button}>Get Weather</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        locationInfo: state.location
    }
};

export default connect(mapStateToProps, {
    getLocation,
    updateUserInput
})(Zipcode);