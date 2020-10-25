import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import styles from './App.module.css';

import reducers from '../../reducers';

import WeatherApp from '../WeatherApp/WeatherApp';
import Zipcode from '../Zipcode/Zipcode';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

const App = () => {
    return (
        <Provider store={store}>
            <div className={styles.app}>
                <Zipcode />
                <WeatherApp />
            </div>
        </Provider>
    );
};

export default App;