import { Component } from '@angular/core';
import { AlertController, Refresher } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {
  alarmInfo: any;

  constructor(public alertCtrl: AlertController, public dataProvider: DataProvider) {
    this.dataProvider.getAlarmData().subscribe(data => {
      this.alarmInfo = this.dataProvider.alarmData;
      //this.todayWeather = this.weatherList[0];
      //this.weatherList = this.weatherList.slice(1);
      console.log('alarmInfo',this.alarmInfo);
      //console.log('todayWeather',this.todayWeather);
    });
  }

  doDeactivate() {
    let alert = this.alertCtrl.create({
      title: 'Your alarm is deactivated',
      message: 'Becareful WEALAR has stopped watching your home !',
      buttons: ['OK']
    });
    alert.present();
  }

  doActivate() {
    let alert = this.alertCtrl.create({
      title: 'Your alarm is activated',
      message: 'WEALAR is now watching your home !',
      buttons: ['OK']
    });
    alert.present();
  }

  doRefresh(refresher: Refresher) {
    this.dataProvider.getAlarmData().subscribe(data => {
      this.alarmInfo = data.alarm;
      
      //this.todayWeather = this.weatherList[0];
      //this.weatherList = this.weatherList.slice(1);
      console.log('alarmInfo',this.alarmInfo);
      //console.log('todayWeather',this.todayWeather);
      
      console.log('DOREFRESH', refresher);
      refresher.complete();
    });
  }
}