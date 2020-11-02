import moment from 'moment';
import axios from 'axios';

export const getCurrentDate = () => {
    return {
        type: 'GET_DATE',
        payload: moment().format('MMMM Do yyyy')
    };
};

export const getDays = () => {
    return {
        type: 'GET_DAYS',
        payload: [
            moment().add('1', 'days').format('dddd'),
            moment().add('2', 'days').format('dddd'),
            moment().add('3', 'days').format('dddd'),
            moment().add('4', 'days').format('dddd'),
            moment().add('5', 'days').format('dddd')
        ]
    }
};

export const getHours = () => {
    return {
        type: 'GET_HOURS',
        payload: [
            moment().add('1', 'hours').format('ha'),
            moment().add('2', 'hours').format('ha'),
            moment().add('3', 'hours').format('ha')
        ]
    }
};

export const getLocation = () => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4&q=28124`);
        dispatch({ type: 'GET_LOCATION', payload: data.data[0] });
    }
};

export const getCurrentWeather = () => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/11694_PC?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4&details=true`);
        dispatch({ type: 'GET_CURRENT_WEATHER', payload: data.data[0] });
    };
};

export const getHourlyForecast = () => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/11694_PC?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4`);
        dispatch({ type: 'GET_HOURLY_FORECAST', payload: data.data });
    }
};

export const getDailyForecast = () => {
    return async (dispatch) => {
        const data = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/11694_PC?apikey=yjhc9euukkwR393enGgBNNlSaIA1i0T4&details=true`);
        dispatch({ type: 'GET_DAILY_FORECAST', payload: data.data.DailyForecasts });
    }
};

export const updateUserInput = (input) => {
    return {
        type: 'GET_USER_INPUT',
        payload: input
    }
};