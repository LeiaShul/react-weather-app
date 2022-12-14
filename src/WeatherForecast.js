import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import { ThreeDots} from 'react-loader-spinner';

export default function Forecast(props) {
    let [forecast, setForecast] = useState(null);
    let [loaded, setLoaded] = useState(false);
    
    function handleResponse(response) {
        setForecast(response.data.daily);  
        setLoaded(true);
    }

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function load() {
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiKey = "f47ba60caff07e6404ed5a22ca0t3o31"
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse); 
    }

    if (loaded) {
        return (
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className="col" key={index}>
                                <ForecastDay data={dailyForecast} />
                            </div>
                        );
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        )
    }
    else {
        load();
        return <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="white" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{justifyContent: 'center'}}
            wrapperClassName=""
            visible={true}
        />;
    }
}