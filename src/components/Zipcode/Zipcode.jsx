import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Zipcode.module.css';

import { getLocation } from '../../actions';

class Zipcode extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLocation();
    }

    render() {
        return (
            <div className={styles.zipcode}>
                <input type="text" className={styles.input} placeholder="enter zipcode"/>
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
    getLocation
})(Zipcode);