import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-change-informations',
  templateUrl: 'change-informations.html',
})
export class ChangeInformationsPage {
  changeSuccess = false;
  userCredentials = { username: '', userphone: '' };

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController) {
    let info = this.auth.getUserInfo();
    this.userCredentials.username = info['username'];
    this.userCredentials.userphone = info['phone'];
  }

  public changeInformations() {
    this.auth.changeInformation(this.userCredentials).subscribe(success => {
      if (success) {
        this.changeSuccess = true;
        this.showPopup("Success", "Informations changed.");
      } else {
        this.showPopup("Error", "Problem change informations.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.changeSuccess) {
              this.navCtrl.pop();
            }
          }
        }
      ]
    });
    alert.present();
  }
}