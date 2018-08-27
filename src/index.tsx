import * as React from "react";
import * as ReactDOM from "react-dom";
import {ThemingPage} from "./components/app";

ReactDOM.render(
    <ThemingPage activeTheme="default" />,
    document.getElementById("example"),
);
