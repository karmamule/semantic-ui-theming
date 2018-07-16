import * as React from "react";
import * as ReactDOM from "react-dom";

import { ColorfulTable } from "./components/ColorfulTable";
import {HelloB} from "./components/Hello-B";
import {HelloA} from "./components/Hello-A";

ReactDOM.render (
    <div>
        <HelloA compiler="Typescript" framework="React" /> 
        <HelloB compiler="Typescript" framework="React" />
        <br/><br/>
        <ColorfulTable color="blue" />
    </div>,
    document.getElementById("example"),
);
