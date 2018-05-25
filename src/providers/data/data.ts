import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators'
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  weatherData: any;
  alarmData: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
    })
  };
  
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello DataProvider Provider');
    this.weatherData = [];
    this.alarmData = [];
  }

  public setHeader(header){
    this.httpOptions = header;
    console.log("Header dataProvider",this.httpOptions);
  }

  getWeatherList(): Observable<any>{
    if(this.weatherData.length == 0){
      return Observable.fromPromise(this.storage.get("weatherData")).mergeMap((val:any) => {
        if(val == null || val.weather == null){
          return this.http.get("assets/json/weather.json").pipe(
              tap( res => {
                this.weatherData = res.weather;
              })
          );
        }
        else {
          this.weatherData = val.weather;
          return Observable.of({weather: this.weatherData});
        }
      }
    );
    }
    else {
      return Observable.of({weather: this.weatherData});
    }
  }

  getAlarmData(): Observable<any>{
    if(this.alarmData.length == 0){
      return Observable.fromPromise(this.storage.get("alarmData")).mergeMap((val:any) => {
        if(val == null || val.alarm == null){
          return this.http.get("assets/json/alarm.json").pipe(
              tap( res => {
                this.alarmData = res.alarm;
              })
          );
        }
        else {
          this.alarmData = val.alarm;
          return Observable.of({alarm: this.alarmData});
        }
      }
    );
    }
    else {
      return Observable.of({alarm: this.alarmData});
    }
  }

}