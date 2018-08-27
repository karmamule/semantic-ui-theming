import * as React from "react";
import {WeatherTable} from "./weather-table";

interface ISemanticUiThemingState {
    currentThemeInfo: string;
}

interface IThemingPageProps {
    activeTheme: string;
}

export class ThemingPage extends React.Component<IThemingPageProps, ISemanticUiThemingState> {
    constructor(props: IThemingPageProps) {
        super(props);
        this.state = { 
            currentThemeInfo: "none",
        };
    }
    public render() {
        return(
                <div>
                    <h2 className="ui header">Boston's Weather Forecast</h2>
                    <WeatherTable tableTitle="Boston's Hourly Forecast" initialRowsPerPage={5} />
                </div>
        );
    }
}
