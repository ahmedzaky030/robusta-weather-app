import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather.component';
import { HeaderComponent } from './header/header.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherFooterComponent } from './weather-footer/weather-footer.component';
import { DegreeSwitchComponent } from './degree-switch/degree-switch.component';
import { DegreeConverterPipe } from './pipes/degree-converter.pipe';
import { WeatherStatusComponent } from './weather-status/weather-status.component';



@NgModule({
  declarations: [WeatherComponent, HeaderComponent, WeatherMainComponent, WeatherFooterComponent,
    DegreeSwitchComponent, DegreeConverterPipe, WeatherStatusComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
