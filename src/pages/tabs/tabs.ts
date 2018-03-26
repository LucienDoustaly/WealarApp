import { Component } from '@angular/core';

import { AlarmPage } from '../alarm/alarm';
import { WeatherPage } from '../weather/weather';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AlarmPage;
  tab3Root = WeatherPage;

  constructor() {

  }
}