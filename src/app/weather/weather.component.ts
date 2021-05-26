import { Component, OnInit } from '@angular/core';
import { DEGREE } from './config/constants';
import { GeoLocationPosition } from './models/geolocation.model';
import { WeatherForecastResponse } from './models/weatherForecast.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentDegree: string = DEGREE.celisius;
  myCurrentPosition: GeoLocationPosition;
  weatherForecast: WeatherForecastResponse;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((result: GeoLocationPosition) => {
      this.myCurrentPosition = result
      this.weatherService.getWeatherForecastOfCity(this.myCurrentPosition.coords.latitude, this.myCurrentPosition.coords.longitude).subscribe(res => {
        this.weatherForecast = res;
        this.weatherForecast.currently.timeDate = new Date(this.weatherForecast.currently?.time * 1000);
        this.weatherForecast.daily.data.forEach(item => {
          item.timeDate = new Date(item.time * 1000);
        })

        this.weatherForecast.hourly.data.forEach(item => {
          item.timeDate = new Date(item.time * 1000);
        })
      })
    });
  }

  OnChangeDegree(degree: string){
    this.currentDegree = degree;
  }

}
