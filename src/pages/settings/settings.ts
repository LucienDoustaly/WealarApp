import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { SettingsPresencePage } from '../settings-presence/settings-presence'

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

  goToPresence() {
    console.log("Go to Presence");
    this.navCtrl.push(SettingsPresencePage);
  }
}
