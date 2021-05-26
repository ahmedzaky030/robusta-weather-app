import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WAETHER_API_URL, CITY_API_URL } from './config/constants';
import {map } from 'rxjs/operators'
import { WeatherForecastResponse } from './models/weatherForecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForecastOfCity(latitude: number, longitude: number){
    const URL = WAETHER_API_URL.replace('{{API_KEY}}', environment.apiKey).replace('{{Latitude}}',latitude.toString()).replace('{{Longitude}}',longitude.toString());
    return this.http.get(URL).pipe(map((response: WeatherForecastResponse) => response))
  }

  getCityNameByCoordinates(latitude: number, longitude: number){
    const URL = CITY_API_URL.replace('{{API_KEY}}', environment.apiKey).replace('{{Latitude}}',latitude.toString()).replace('{{Longitude}}',longitude.toString());
    return this.http.get(URL).pipe(map((response: WeatherForecastResponse) => response));
  }
}
