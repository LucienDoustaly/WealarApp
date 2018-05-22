import { SettingsProvider } from './../settings/settings';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  username: string;
  wealarid: string;

  constructor(username: string, wealarid: string) {
    this.username = username;
    this.wealarid = wealarid;
  }

  set(username: string, wealarid: string) {
    this.username = username;
    this.wealarid = wealarid;
  }
}

interface Response {
  data: {
    Token: string;
    UserName: string;
    WEALARID: string;
    Preferences: {
      presenceNotification: boolean;
      smsNotification: boolean;
      weatherNotification: boolean;
      securityMode: number;
    };
    Phone: string;
  }
}

@Injectable()
export class AuthServiceProvider {

  currentUser: User;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
    })
  };

  constructor(private http: HttpClient, private settingsProvider: SettingsProvider) {}

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let httpParams = {
          username: credentials.username,
          password: credentials.password
        };

        this.http.post<Response>("http://localhost:9000/public/login", httpParams, this.httpOptions)
          .subscribe(
            (val) => {
              this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer '+val.data.Token);
              this.settingsProvider.httpOptions = this.httpOptions;
              this.currentUser = new User(val.data.UserName, val.data.WEALARID);
              this.settingsProvider.sendPresenceMode(val.data.Preferences.presenceNotification);
              this.settingsProvider.sendSmsMode(val.data.Preferences.smsNotification);
              this.settingsProvider.sendWeatherMode(val.data.Preferences.weatherNotification);
              this.settingsProvider.numberModeToString(val.data.Preferences.securityMode);
              console.log("Settings Provider MODE",this.settingsProvider.activemode);
              let access = (val.data.Token != null);
              observer.next(access);
              observer.complete();
              console.log("POST call successful value returned in body",
                val);
              console.log("current user", this.currentUser);
            },
            response => {
              console.log("POST call in error", response);
              let access = false;
              observer.next(access);
            },
            () => {
              console.log("The POST observable is now completed.");
              observer.complete();
            });
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public changeInformation(credentials) {
    return Observable.create(observer => {
      this.currentUser.set(credentials.username, credentials.useremail);
      console.log("Info user", this.currentUser.username);
      observer.next(true);
      observer.complete();
    });
  }

  public changePassword(credentials) {
      return Observable.create(observer => {
        let httpParams = {
          oldPassword: credentials.oldpassword,
          newPassword: credentials.password
        };

        this.http.put<Response>("http://localhost:9000/common/user/change/password", httpParams, this.httpOptions)
          .subscribe(
            (val) => {
              observer.next(true);
              console.log("POST call successful value returned in body",
                val);
            },
            response => {
              console.log("POST call in error", response);
              observer.next(false);
            },
            () => {
              console.log("The POST observable is now completed.");
              observer.complete();
            });
      });
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.http.delete("http://localhost:9000/common/logout", this.httpOptions)
        .subscribe(
          (val) => {
            this.currentUser = null;
            observer.next(true);
            console.log("POST call successful value returned in body",
              val);
            console.log("current user", this.currentUser);
          },
          response => {
            console.log("POST call in error", response);
            this.currentUser = null;
            observer.next(true);
          },
          () => {
            console.log("The POST observable is now completed.");
            observer.complete();
          });
    });
  }
}