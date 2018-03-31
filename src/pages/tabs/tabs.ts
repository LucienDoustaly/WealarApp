import { Component } from '@angular/core';

import { AlarmPage } from '../alarm/alarm';
import { WeatherPage } from '../weather/weather';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { LoadingController, Loading } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  loading:Loading;
  tab1Root = HomePage;
  tab2Root = AlarmPage;
  tab3Root = WeatherPage;
  tab4Root = SettingsPage;

  constructor(private loadingCtrl: LoadingController) {

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}