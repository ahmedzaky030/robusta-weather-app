import { Component, Input, OnInit } from '@angular/core';
import { STATUS } from '../config/constants';

@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.scss']
})
export class WeatherStatusComponent implements OnInit {
  @Input() targetConversion: string;
  @Input() icon: string;
  @Input() temperature: number;
  @Input() temperatureHigh: number;
  @Input() temperatureLow: number;
  @Input() degreeTime: string;
  status = STATUS;
  constructor() { }

  ngOnInit(): void {
  }

}
