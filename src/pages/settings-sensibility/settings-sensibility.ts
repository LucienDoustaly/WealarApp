import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@Component({
  selector: 'page-settings-sensibility',
  templateUrl: 'settings-sensibility.html',
})
export class SettingsSensibilityPage {
  activemode: number;
  mode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public settingsProvider: SettingsProvider) {
  }

  ionViewWillEnter() {
    console.log("SettingsProvider activeMode:",this.settingsProvider.activemode);
    this.activemode=this.settingsProvider.activemode;
    this.mode=this.convertActivemode(this.settingsProvider.activemode);
  }

  items: any = {
    'LOW': [
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ],
    'MEDIUM': [
      {
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
      }
    ],
    'HIGH': [
      {
        message: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ac massa gravida libero accumsan auctor et ut diam. Sed feugiat sed nibh at vulputate. Duis lobortis venenatis nisi id lobortis. Pellentesque at imperdiet risus. Nam vel lectus vel enim ullamcorper suscipit vestibulum at orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
      }
    ]
  };

  getItems(type: any) {
    return this.items[type];
  }

  changeMode(mode){
    this.settingsProvider.changeMode(mode);
    this.activemode=this.settingsProvider.activemode;
    console.log('Activemode envoyé:', this.activemode);
    this.settingsProvider.setNotificationMode(this.activemode, this.settingsProvider.smsNotification,this.settingsProvider.weatherNotification, this.settingsProvider.presenceNotification).subscribe(allowed => {
      if (allowed) {
        console.log("Activemode mise a jour",this.settingsProvider.activemode);
      } else {
        console.log("Erreur");
        console.log("Activemode",this.settingsProvider.activemode);
      }
    },
      error => {
        console.log("Erreur",error);
      });
  }

  convertActivemode(activemode){
    if(activemode==0)
      return "LOW";
    if(activemode==1)
      return "MEDIUM";
    if(activemode==2)
      return "HIGH";
  }

  doConfirm(mode) {
    let alert = this.alertCtrl.create({
      title: 'Change the mode',
      message: 'Are you sure you want to change the mode to: '+ mode +'?',
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
            this.changeMode(mode);
          }
        }
      ]
    });

    alert.present();

  }
}
