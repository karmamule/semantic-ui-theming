import * as React from "react";
import "isomorphic-fetch";
import { Table } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import { Dimmer } from "semantic-ui-react";
import * as moment from "moment";
import { Icon, Pagination } from "semantic-ui-react";

type Props = WeatherTableProps;

// type IconProps = WeatherIconProps;

interface ITablePagerProps {
    handlePageChange: (event: any, data: any) => void;
    currentPage: number;
}

const placeholderForecast: IForecastPeriod = {
    detailedForecast: "n/a",
    endTime: "n/a",
    icon: "n/a",
    isDayTime: false,
    name: "no forecast",
    number: 0,
    shortForecast: "n/a",
    startTime: moment().format("MM/DD/YYYY h:mm a"),
    temperature: 0,
    temperatureTrend: null,
    temperatureUnit: "F",
    windDirection: "n/a",
    windSpeed: "n/a",
};

const logError = (error: any) => {
    console.log(`Got an error: ${error}`);
};

export class WeatherTable extends React.Component<Props, IWeatherTableState> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            hasData: false, 
            hourlyForecasts: [placeholderForecast], 
            location: "Boston", 
            page: 1,
            rowsPerPage: props.initialRowsPerPage, 
            tableData: [placeholderForecast],
        };
        fetch("https://api.weather.gov/points/42.3601,-71.0589/forecast/hourly", {
            headers: {
                "Accept": "application/json",
                "User-Agent": "acadian-materialui-demo",
            },
            method: "GET",
        })
        .then(response =>  response.json() as Promise<IForecastData>,
        )
        .then(forecastData => {
            this.setState({hourlyForecasts: forecastData.properties.periods, tableData: this.getTableData(forecastData.properties.periods, this.state.page), hasData: true});
            // this.setState({hourlyForecast: forecastData.periods, hasData: true});
        })   
        .catch(logError);
    }  

    /* I'm sure there are more elegant ways to do this in ES6 */
    private getTableData = (data: IForecastPeriod[], page: number): IForecastPeriod[] => {
        let {rowsPerPage} = this.state;
        let newTableData: IForecastPeriod[] = [];
        let startIndex: number = (page - 1) * rowsPerPage;
        let endIndex: number = startIndex + rowsPerPage;
        for (let i: number = startIndex; i < endIndex; i++) {
            newTableData.push(data[i]);
        }
        return newTableData;
    }

    private handlePageChange = (event: any, data: any) => {
        const newPage = data.activePage;
        this.setState( {page: newPage, tableData: this.getTableData(this.state.hourlyForecasts, newPage)} );
    }

    public render() {
        const { hourlyForecasts, tableData, rowsPerPage } = this.state;

        const numPages = (hourlyForecasts.length % rowsPerPage) === 0 ? 
            hourlyForecasts.length / rowsPerPage :
            Math.floor(hourlyForecasts.length / rowsPerPage);

        const TablePager = (props: ITablePagerProps) => (
            <Pagination
              defaultActivePage={props.currentPage}
              ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
              firstItem={{ content: <Icon name="angle double left" />, icon: true }}
              lastItem={{ content: <Icon name="angle double right" />, icon: true }}
              prevItem={{ content: <Icon name="angle left" />, icon: true }}
              nextItem={{ content: <Icon name="angle right" />, icon: true }}
              totalPages={numPages}
              onPageChange={props.handlePageChange}
            />
        );
        
        const tableRows: any[] = [];
        let k: number = 1;      
        for (const hour of tableData) {
            const tableCells: any[] = [];
            tableCells.push(<Table.Cell key={k++}>{moment(hour.startTime).format("MM/DD/YYYY h:mm a")}</Table.Cell>); 
            tableCells.push(<Table.Cell key={k++}></Table.Cell>);
            tableCells.push(<Table.Cell key={k++}>{hour.temperature}</Table.Cell>);
            tableCells.push(<Table.Cell key={k++}>{hour.windSpeed}</Table.Cell>);
            tableCells.push(<Table.Cell key={k++}>{hour.shortForecast}</Table.Cell>);
            tableRows.push(<Table.Row key={k++}>{tableCells}</Table.Row>);
        }

        return (
            <div>
                <Segment>
                    <Dimmer active={!this.state.hasData}>
                        <h2>Loading...</h2>
                    </Dimmer>
                    <Table striped singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Hour</Table.HeaderCell>
                                <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                                <Table.HeaderCell>Temperature</Table.HeaderCell>
                                <Table.HeaderCell>Wind</Table.HeaderCell>
                                <Table.HeaderCell>Forecast</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>{tableRows}</Table.Body>
                    </Table>
                    <TablePager handlePageChange={this.handlePageChange} currentPage={this.state.page} />
                </Segment>
            </div>
            );        
    }
}

