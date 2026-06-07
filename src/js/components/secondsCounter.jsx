import React from "react";

const SecondsCounter = ({ seconds }) => {
    const digit6 = Math.floor(seconds / 100000) % 10;
    const digit5 = Math.floor(seconds / 10000) % 10;
    const digit4 = Math.floor(seconds / 1000) % 10;
    const digit3 = Math.floor(seconds / 100) % 10;
    const digit2 = Math.floor(seconds / 10) % 10;
    const digit1 = seconds % 10;

    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="digit">{digit6}</div>
            <div className="digit">{digit5}</div>
            <div className="digit">{digit4}</div>
            <div className="digit">{digit3}</div>
            <div className="digit">{digit2}</div>
            <div className="digit">{digit1}</div>
        </div>
    );
};

export default SecondsCounter;
