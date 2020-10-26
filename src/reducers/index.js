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

export default combineReducers({
    currentDate: currentDateReducer,
    daysOfWeek: daysOfWeekReducer,
    hoursList: hoursReducer
});