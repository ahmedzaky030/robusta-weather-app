import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.scss']
})
export class WeatherStatusComponent implements OnInit {
  @Input() targetConversion: string;
  @Input() icon: string;
  @Input() degree: number;
  @Input() degreeTime: string;
  constructor() { }

  ngOnInit(): void {
  }

}
