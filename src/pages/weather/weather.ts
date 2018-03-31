import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/map';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'page-eather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  loading:Loading;
  weatherList: any;
  todayWeather: any;

  constructor(public navCtrl: NavController, public dataProvider: DataProvider, private loadingCtrl: LoadingController) {
    this.dataProvider.getWeatherList().subscribe(data => {
      this.weatherList = data.weather;
      this.todayWeather = this.weatherList[0];
      this.weatherList = this.weatherList.slice(1);
      console.log('weatherList',this.weatherList);
      console.log('todayWeather',this.todayWeather);
    });
  }

  ionViewWillEnter(){
    this.showLoading();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    this.loading.present();

  setTimeout(() => {
    this.loading.dismiss();
  }, 1000);
  }
}