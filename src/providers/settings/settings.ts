import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  //variable 
    //sensibility
  activemode: string;
    //sms
  smsNotification: boolean;
    //presence
  presenceNotification: boolean;
    //weather
  weatherNotification: boolean;

  constructor(public http: HttpClient) {
    console.log('Hello SettingsProvider Provider');
  }
  
  //Sensibility
  public getMode() {
    return this.activemode;
  }

  public numberModeToString(mode:number){
    if(mode==0){
      return this.activemode = "LOW";
    }
    if(mode==1){
      return this.activemode = "MEDIUM";
    }
    if(mode==2){
      return this.activemode = "HIGH";
    }
  }

  public stringModeToNumber(mode:string){
    if(mode=="LOW"){
      return 0;
    }
    if(mode=="MEDIUM"){
      return 1;
    }
    if("HIGH"){
      return 2;
    }
  }

  public changeMode(mode:string){
    return this.activemode = mode;
  }

  //Notification
    //sms
  public getSmsMode(){
    return this.smsNotification;
  }

  public sendSmsMode(state){
    console.log('SmsMode State',state);
    this.smsNotification = state;
  }

  //presence
  public getPresenceMode(){
    return this.presenceNotification;
  }

  public sendPresenceMode(state){
    console.log('PresenceMode State',state);
    this.presenceNotification = state;
  }

  //weather
  public getWeatherMode(){
    return this.weatherNotification;
  }

  public sendWeatherMode(state){
    console.log('weatherMode State',state);
    this.weatherNotification = state;
  }
}
