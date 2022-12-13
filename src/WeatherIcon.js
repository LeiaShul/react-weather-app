import React from "react";

export default function WeatherIcon(props) {
    return (
        <div>
            <img src={props.icon} alt="weather icon" width={props.width}></img>
        </div>
    )
}