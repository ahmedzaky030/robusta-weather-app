import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DEGREE, STATUS } from './config/constants';
import { GeoLocationPosition, GeolocationResponse } from './models/geolocation.model';
import { WeatherForecastResponse } from './models/weatherForecast.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentDegree: string = DEGREE.celisius;
  weatherForecast: WeatherForecastResponse;
  cityName: string;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((result: GeoLocationPosition) => {
      const weatherForeCastRequest = this.weatherService.getWeatherForecastOfCity(result.coords.latitude, result.coords.longitude);
      const geolocationRequest = this.weatherService.getCityNameByCoordinates(result.coords.latitude, result.coords.longitude);
      forkJoin({weather: weatherForeCastRequest , geolocation: geolocationRequest}).subscribe(({ weather, geolocation}) => {
        this.handleWeatherResponse(weather);
        this.handleCityNameResponse(geolocation);
      });
    });
  }

  OnChangeDegree(degree: string){
    this.currentDegree = degree;
  }

  handleWeatherResponse(weatherForecast: WeatherForecastResponse){
    this.weatherForecast = weatherForecast;
    this.weatherForecast.currently.timeDate = new Date(this.weatherForecast.currently?.time * 1000);
    this.weatherForecast.daily.data.forEach(item => {
      item.timeDate = new Date(item.time * 1000);
      item.icon.includes(STATUS.clear);
    });

    this.weatherForecast.hourly.data.forEach(item => {
      item.timeDate = new Date(item.time * 1000);
    });
  }

  handleCityNameResponse(geolocation: GeolocationResponse){
    this.cityName = `${geolocation.data[0].county || geolocation.data[0].region}`;
  }

}
