import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ChangeInformationsPage } from '../change-informations/change-informations';

@Component({
  selector: 'page-settings-account',
  templateUrl: 'settings-account.html',
})
export class SettingsAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsAccountPage');
  }

  goToChangeInformations() {
    console.log("Go to Change information");
    this.navCtrl.push(ChangeInformationsPage);
  }

}
