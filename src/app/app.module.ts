import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AlarmPage } from '../pages/alarm/alarm';
import { WeatherPage } from '../pages/weather/weather';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { WeatherDetailsPage } from '../pages/weather-details/weather-details';
import { SettingsPresencePage } from '../pages/settings-presence/settings-presence';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlarmPage,
    WeatherPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    WeatherDetailsPage,
    SettingsPresencePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    MyApp,
    AlarmPage,
    WeatherPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    WeatherDetailsPage,
    SettingsPresencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DataProvider
  ]
})
export class AppModule {}
