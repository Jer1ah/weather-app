import moment from 'moment';

export const getCurrentDate = () => {
    return {
        type: 'GET_DATE',
        payload: moment().format('MMMM Do yyyy')
    };
};