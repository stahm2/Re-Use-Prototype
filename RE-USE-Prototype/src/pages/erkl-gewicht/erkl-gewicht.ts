import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklGewichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-gewicht',
  templateUrl: 'erkl-gewicht.html',
})
export class ErklGewichtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  leavePage(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklGewichtPage');
  }

  openNext(){
    this.navCtrl.push('GewichtPage');
  }

}
