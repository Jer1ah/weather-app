import React from 'react';

const Hourly = () => {
    return (
        <div className="hourly">
            <ul className="hourly__list">
                <li className="hourly__listItem">
                    <h5>3pm</h5>
                    <img src="#" alt="Weather Icon"/>
                    <span>39&deg;</span>
                </li>
                <li className="hourly__listItem">
                <h5>4pm</h5>
                    <img src="#" alt="Weather Icon"/>
                    <span>40&deg;</span>
                </li>
                <li className="hourly__listItem">
                <h5>5pm</h5>
                    <img src="#" alt="Weather Icon"/>
                    <span>38&deg;</span>
                </li>
            </ul>
        </div>
    );
};

export default Hourly;