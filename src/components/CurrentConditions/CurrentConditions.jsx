import React from 'react';

import CurrentTemp from '../CurrentTemp/CurrentTemp';
import Hourly from '../Hourly/Hourly';

const CurrentConditions = () => {
    return (
        <div className="currentConditions">
            <CurrentTemp />
            <Hourly />
        </div>
    );
};

export default CurrentConditions;