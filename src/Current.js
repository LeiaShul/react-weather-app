import React from "react";
import FormattedDate from "./FormatDate";


export default function CurrentInfo(props) {
    //console.log(props.data.date)
    return (
        <div className="row my-3">
            <div className="col-8">
                <div className="currentDate">
                    <FormattedDate date={props.data.date} />
                </div>
                <h1 className="display-4 fs-2">{props.data.city}</h1>
                

            </div>
            <div className="col">

            </div>

        </div>
    )
}