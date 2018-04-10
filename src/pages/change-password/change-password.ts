import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  changeSuccess = false;
  passwordCredentials = { password: '', confirm_password: '' };
 
  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController) { }
 
  public changePassword() {
    if(this.passwordCredentials.password == this.passwordCredentials.confirm_password){
      this.auth.changePassword(this.passwordCredentials).subscribe(success => {
        if (success) {
          this.changeSuccess = true;
          this.showPopup("Success", "Password changed.");
        } else {
          this.showPopup("Error", "Problem change password.");
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    }
    else{
      this.showPopup("Error", "Passwords are not the same.");
    }
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
              this.nav.pop();
            }
          }
        }
      ]
    });
    alert.present();
  }
}