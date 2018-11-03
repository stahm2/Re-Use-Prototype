import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GewichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gewicht',
  templateUrl: 'gewicht.html',
})
export class GewichtPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  goToHome() {
    this.navCtrl.popToRoot();
  }

  save() {
    console.log("Data saved");
    this.navCtrl.popToRoot();
  }


  back() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad GewichtPage');
  };

}
