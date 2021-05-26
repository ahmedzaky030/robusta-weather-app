import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-footer',
  templateUrl: './weather-footer.component.html',
  styleUrls: ['./weather-footer.component.scss']
})
export class WeatherFooterComponent implements OnInit {
  @Input() targetConversion: string;
  activeTab: string ='hourly'
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(selectedTab: string){
    this.activeTab = selectedTab;
  }

}
