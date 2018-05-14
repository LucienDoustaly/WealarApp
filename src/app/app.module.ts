import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AlarmPage } from '../pages/alarm/alarm';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { WeatherDetailsPage } from '../pages/weather-details/weather-details';
import { SettingsSensibilityPage } from '../pages/settings-sensibility/settings-sensibility';
import { SettingsSmsPage } from '../pages/settings-sms/settings-sms';
import { SettingsWeatherPage } from '../pages/settings-weather/settings-weather';
import { SettingsPresencePage } from '../pages/settings-presence/settings-presence';
import { SettingsAccountPage } from '../pages/settings-account/settings-account';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ChangeInformationsPage } from '../pages/change-informations/change-informations';

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
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    WeatherDetailsPage,
    SettingsSensibilityPage,
    SettingsSmsPage,
    SettingsWeatherPage,
    SettingsPresencePage,
    SettingsAccountPage,
    ChangePasswordPage,
    ChangeInformationsPage
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
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    WeatherDetailsPage,
    SettingsSensibilityPage,
    SettingsSmsPage,
    SettingsWeatherPage,
    SettingsPresencePage,
    SettingsAccountPage,
    ChangePasswordPage,
    ChangeInformationsPage
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
