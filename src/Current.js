import React from "react";
import FormattedDate from "./FormatDate";
import CurrentTemperature from "./CurrentTemperature";
import CurrentIcon from "./CurrentIcon";


export default function CurrentInfo(props) {
    //console.log(props.data.date)
    return (
        <div className="row my-3">
            <div className="col-8">
                <div className="currentDate">
                    <FormattedDate date={props.data.date} />
                </div>
                <h1 className="display-4 fs-2">{props.data.city}</h1>
                <CurrentTemperature temp={props.data.temperature} />
                <h3 className="display-2 fs-5 text-capitalize">{props.data.description}</h3>               
            </div>
            <div className="col">               
                <CurrentIcon icon={props.data.icon} />              
                <div className="display-6 fs-6 mx-1">
                    Humidity: {props.data.humidity} <br/>
                    Wind: {props.data.wind}
                </div>
            </div>

        </div>
    )
}