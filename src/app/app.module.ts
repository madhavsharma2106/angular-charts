import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartService } from "./services/chart.service";
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ChartThreeComponent } from './chart-three/chart-three.component';
import { ChartFourComponent } from './chart-four/chart-four.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartTwoComponent,
    ChartThreeComponent,
    ChartFourComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
