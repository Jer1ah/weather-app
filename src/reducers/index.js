import { combineReducers } from 'redux';

const currentDateReducer = (state='', action) => {
    switch(action.type) {
        case 'GET_DATE':
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    currentDate: currentDateReducer
});