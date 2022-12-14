import React  from "react";
export default function CurrentTemperature(props) {

    return (
        <div className="currentTemperature">
            <h2 className="display-1">
                <span className="temp">{Math.round(props.temp)}</span>
                <span className="unit">°C</span>
            </h2>
        </div>
    )
}