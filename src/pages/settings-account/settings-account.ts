import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ChangePasswordPage } from '../change-password/change-password';

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

  goToChangePassword() {
    console.log("Go to Change password");
    this.navCtrl.push(ChangePasswordPage);
  }
}
