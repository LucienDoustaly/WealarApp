import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherList: any;
  todayWeather: any;

  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.dataProvider.getWeatherList().subscribe(data => {
      this.weatherList = data.weather;
      this.todayWeather = this.weatherList[0];
      this.weatherList = this.weatherList.slice(1);
      console.log('weatherList',this.weatherList);
      console.log('todayWeather',this.todayWeather);
    });
  }
}