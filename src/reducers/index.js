import { combineReducers } from 'redux';

const currentDateReducer = (state='', action) => {
    switch(action.type) {
        case 'GET_DATE':
            return action.payload;
        default:
            return state;
    }
};

const daysOfWeekReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_DAYS': 
            return [...action.payload];
        default:
            return state;
    }
};

const hoursReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_HOURS':
            return [...action.payload];
        default:
            return state;
    }
};

const locationReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_LOCATION':
                return action.payload;
            default:
                return state;
    }
};

const currentWeatherReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_CURRENT_WEATHER':
            return action.payload;
        default:
            return state;
    }
};

const hourlyForecastReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_HOURLY_FORECAST':
            return action.payload;
        default:
            return state;
    }
};

const dailyForecastReducer = (state=[], action) => {
    switch(action.type) {
        case 'GET_DAILY_FORECAST':
            return action.payload;
        default:
            return state; 
    }
};

const userInputReducer = (state="", action) => {
    switch(action.type) {
        case 'GET_USER_INPUT':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    currentDate: currentDateReducer,
    daysOfWeek: daysOfWeekReducer,
    hoursList: hoursReducer,
    location: locationReducer,
    currentWeather: currentWeatherReducer,
    hourlyForecast: hourlyForecastReducer,
    dailyForecast: dailyForecastReducer,
    userInput: userInputReducer
});