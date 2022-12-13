import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Current from "./Current";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            wind: response.data.wind.speed,
            city: response.data.city  

        })
        //console.log(weatherData.time)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
        const apiKey = "f47ba60caff07e6404ed5a22ca0t3o31";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    function Update(event) {
        event.preventDefault();
        setCity(event.target.value);
    }
    if (weatherData.ready) {
        return (
            <div className="weather">
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-8">
                            <input type="search" className="form-control" placeholder="Enter a city" name="city" onChange={Update}></input>
                        </div>       
                        <div className="col-auto px-0">
                            <button className="btn btn-outline-light mx-0" type="Submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>                                               
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-light mx-0" type="Submit"><FontAwesomeIcon icon={faLocationDot} /></button>                                               
                        </div>
                    </div>
                </form>
                <div className="current m-3">
                    <Current data={weatherData} />
                </div>
            </div>
        )
    }
    else {
        search();
        return "Loading...";
    }

}