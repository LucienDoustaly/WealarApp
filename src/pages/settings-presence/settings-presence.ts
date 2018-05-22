import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings-presence',
  templateUrl: 'settings-presence.html',
})
export class SettingsPresencePage {

  presenceNotification: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public settingsProvider: SettingsProvider) {
    this.presenceNotification = this.settingsProvider.getPresenceMode();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad presencePage');
  }

  sendPresenceMode(){
    console.log('presenceNotification:', this.presenceNotification);
    this.settingsProvider.sendPresenceMode(this.presenceNotification);
  }

}