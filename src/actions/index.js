import moment from 'moment';

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