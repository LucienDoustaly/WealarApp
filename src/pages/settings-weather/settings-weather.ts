import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings-weather',
  templateUrl: 'settings-weather.html',
})
export class SettingsWeatherPage {

  weatherNotification: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public settingsProvider: SettingsProvider) {
    this.weatherNotification = this.settingsProvider.getWeatherMode();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad presencePage');
  }

  sendWeatherMode(){
    console.log('weatherNotification:', this.weatherNotification);
    this.settingsProvider.sendWeatherMode(this.weatherNotification);
  }

}