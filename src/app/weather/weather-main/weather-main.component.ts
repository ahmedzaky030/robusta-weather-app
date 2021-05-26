import { Component, Input, OnInit } from '@angular/core';
import { STATUS } from '../config/constants';
import { WeatherForecastResponse } from '../models/weatherForecast.model';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {
  @Input() targetConversion: string;
  @Input() currentlyWeatherForecast: WeatherForecastResponse;
  iconStatus = STATUS;
  constructor() { }

  ngOnInit(): void {
  }

}
