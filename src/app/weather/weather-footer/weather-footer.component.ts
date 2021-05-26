import { Component, Input, OnInit } from '@angular/core';
import { WeatherForecastResponse } from '../models/weatherForecast.model';

@Component({
  selector: 'app-weather-footer',
  templateUrl: './weather-footer.component.html',
  styleUrls: ['./weather-footer.component.scss']
})
export class WeatherFooterComponent implements OnInit {
  @Input() targetConversion: string;
  @Input() weatherForecast: WeatherForecastResponse;
  activeTab = 'hourly';
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(selectedTab: string){
    this.activeTab = selectedTab;
  }

}
