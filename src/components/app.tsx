import * as React from "react";
import {WeatherTable} from "./weather-table";
import { Image } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

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
    private acadianLogoSource: string = "/src/resources/AcadianLogo.gif";

    public render() {
        return(
                <div>
                    <div id="appHeader">
                    <Image src={this.acadianLogoSource} floated="left" verticalAlign="middle" className="appHeaderImage" />
                    <Header as="h1" inverted textAlign="right" verticalAlign="middle">Hourly Forecasts</Header>
                    </div>
                    <h2 className="ui header">Boston's Weather Forecast</h2>
                    <WeatherTable tableTitle="Boston's Hourly Forecast" initialRowsPerPage={5} />
                </div>
        );
    }
}
