import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings-sms',
  templateUrl: 'settings-sms.html',
})
export class SettingsSmsPage {

  smsNotification: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsSmsPage');
  }

  showSms(){
    console.log('smsNotification:', this.smsNotification)
  }

}
