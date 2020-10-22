import React from 'react';
import styles from './Futurecast.module.css';

const Futurecast = () => {
    return (
        <div className={styles.futurecast}>
            <ul className="futurecast__list">
                <li className="futurecast__listItem">
                    <h4>Thursday</h4>
                    <img src="#" alt="Weather Icon"/>
                    <div className="highTemp">
                        <span>High</span>
                        <h5>79&deg;</h5>
                    </div>
                    <div className="lowTemp">
                        <span>Low</span>
                        <h5>58&deg;</h5>
                    </div>
                    <div className="rainChance">
                        <span>Rain</span>
                        <h5>27%</h5>
                    </div>
                </li>
                <li className="futurecast__listItem">
                <h4>Friday</h4>
                    <img src="#" alt="Weather Icon"/>
                    <div className="highTemp">
                        <span>High</span>
                        <h5>79&deg;</h5>
                    </div>
                    <div className="lowTemp">
                        <span>Low</span>
                        <h5>58&deg;</h5>
                    </div>
                    <div className="rainChance">
                        <span>Rain</span>
                        <h5>27%</h5>
                    </div>
                </li>
                <li className="futurecast__listItem">
                <h4>Saturday</h4>
                    <img src="#" alt="Weather Icon"/>
                    <div className="highTemp">
                        <span>High</span>
                        <h5>79&deg;</h5>
                    </div>
                    <div className="lowTemp">
                        <span>Low</span>
                        <h5>58&deg;</h5>
                    </div>
                    <div className="rainChance">
                        <span>Rain</span>
                        <h5>27%</h5>
                    </div>
                </li>
                <li className="futurecast__listItem">
                <h4>Sunday</h4>
                    <img src="#" alt="Weather Icon"/>
                    <div className="highTemp">
                        <span>High</span>
                        <h5>79&deg;</h5>
                    </div>
                    <div className="lowTemp">
                        <span>Low</span>
                        <h5>58&deg;</h5>
                    </div>
                    <div className="rainChance">
                        <span>Rain</span>
                        <h5>27%</h5>
                    </div>
                </li>
                <li className="futurecast__listItem">
                <h4>Monday</h4>
                    <img src="#" alt="Weather Icon"/>
                    <div className="highTemp">
                        <span>High</span>
                        <h5>79&deg;</h5>
                    </div>
                    <div className="lowTemp">
                        <span>Low</span>
                        <h5>58&deg;</h5>
                    </div>
                    <div className="rainChance">
                        <span>Rain</span>
                        <h5>27%</h5>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Futurecast;