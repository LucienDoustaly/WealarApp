import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirstCoChangeInfoPage } from '../first-co-change-info/first-co-change-info';

//Template : https://github.com/ionic-team/ionic-preview-app/tree/master/src/pages/slides/basic

@Component({
  selector: 'page-firstconnection',
  templateUrl: 'firstconnection.html',
})
export class FirstconnectionPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstconnectionPage');
  }

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-3.png",
    }
  ];

  goTofirstCoInfo(){
    this.nav.setRoot(FirstCoChangeInfoPage);
  }
}