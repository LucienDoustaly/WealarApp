import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings-sms',
  templateUrl: 'settings-sms.html',
})
export class SettingsSmsPage {

  smsNotification: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public settingsProvider: SettingsProvider) {
    this.smsNotification = this.settingsProvider.getSmsMode();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsSmsPage');
  }

  sendSmsMode(){
    console.log('smsNotification:', this.smsNotification);
    this.settingsProvider.sendSmsMode(this.smsNotification);
  }

}
