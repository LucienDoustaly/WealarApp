import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {

  constructor(public alertCtrl: AlertController) {

  }

  doConfirm(mode) {
    let alert = this.alertCtrl.create({
      title: 'Disconnect Alarm',
      message: 'Are you sure you want to disable the alarm?',
      buttons: [
        {
          text: "NO",
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'YES',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });

    alert.present();

  }
}