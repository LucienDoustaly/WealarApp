import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { SettingsSensibilityPage } from '../settings-sensibility/settings-sensibility';
import { SettingsSmsPage } from '../settings-sms/settings-sms';
import { SettingsWeatherPage } from '../settings-weather/settings-weather';
import { SettingsPresencePage } from '../settings-presence/settings-presence';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  username = '';
  email = '';
  constructor(public navCtrl: NavController, private auth: AuthServiceProvider, private app: App) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

  goToSensibility() {
    console.log("Go to Presence");
    this.navCtrl.push(SettingsSensibilityPage);
  }

  goToSms() {
    console.log("Go to Sms");
    this.navCtrl.push(SettingsSmsPage);
  }

  goToWeather() {
    console.log("Go to weather");
    this.navCtrl.push(SettingsWeatherPage);
  }

  goToPresence() {
    console.log("Go to presence");
    this.navCtrl.push(SettingsPresencePage);
  }
}
