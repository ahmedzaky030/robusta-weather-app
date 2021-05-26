import { Component, OnInit } from '@angular/core';
import { DEGREE } from './config/constants';
import { GeoLocationPosition } from './models/geolocation.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentDegree: string = DEGREE.celisius;
  myCurrentPosition: GeoLocationPosition;
  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((result: GeoLocationPosition) => this.myCurrentPosition = result);
  }

  OnChangeDegree(degree: string){
    debugger;
    this.currentDegree = degree;
  }

}
