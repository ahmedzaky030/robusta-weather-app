export interface WeatherForecastResponse {
    latitude: number;
    longitude: number;
    timezone: string;
    currently: { 
        summary: string;
        icon: string;
        time: number;
        timeDate: Date;
        temperature: number;
    };
    hourly: {
        summary: string;
        icon: string;
        data: WeatherForecastUnit[];
    };
    daily: {
        summary: string;
        icon: string;
        data: WeatherForecastUnit[];
    }

}

export interface WeatherForecastUnit {
    time: number;
    timeDate: Date;
    summary: string;
    icon: string;
    temperature: number;
}