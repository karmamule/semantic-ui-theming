interface IForecastPeriod {
    number: number;
    name: string;
    startTime: string;
    endTime: string;
    isDayTime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend: string | null;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}
  
interface IForecastData {
    "@context": [any];
    type: string;
    geometry: any;
    properties: {
        updated: string,
        units: string,
        forecastGenerator: string,
        generatedAt: string,
        updateTime: string,
        validTimes: string,
        elevation: {
            value: number,
            unitCode: string,
        },
        periods: [IForecastPeriod];
    };
}

interface IWeatherTableProps {
    tableTitle: string;
    initialRowsPerPage: number;
}

interface IWeatherTableState {
    hasData: boolean;
    location: string;
    hourlyForecasts: IForecastPeriod[];
    tableData: IForecastPeriod[];
    page: number;
    rowsPerPage: number;
}

interface IWeatherIconProps {
    forecast: string;
}

type WeatherTableProps = IWeatherTableProps;

type WeatherIconProps = IWeatherIconProps;