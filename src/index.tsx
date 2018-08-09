import * as React from "react";
import * as ReactDOM from "react-dom";
import {WeatherTable} from "./components/weatherTable";

ReactDOM.render (
    <div>
        <h2 className="ui header">Boston's Weather Forecast</h2>
        <WeatherTable tableTitle="Boston's Hourly Forecast" initialRowsPerPage={5} />
    </div>,
    document.getElementById("example"),
);
