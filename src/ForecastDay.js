import React from "react";
import WeatherIcon from "./WeatherIcon";
  
export default function ForecastDay(props) {
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    function maxTemp() {
        let max = Math.round(props.data.temperature.maximum);
        return `${max}°`
    }
    function minTemp() {
        let min = Math.round(props.data.temperature.minimum);
        return `${min}°`
    }

    return (
        <div className="card text-center">
            <div className="card-body">
                <div className="card-title fs-6">
                    <h5>
                        {day()}
                    </h5>
                    <h6 className="card-subtitle text-muted">
                        {maxTemp()}/{minTemp()}
                    </h6>
                    <div className="card-text">
                        <WeatherIcon icon={props.data.condition.icon_url} width='60px' />
                    </div>
                </div>
            </div>
        </div>
    )
}