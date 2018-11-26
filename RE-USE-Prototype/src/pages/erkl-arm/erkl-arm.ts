import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklArmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-arm',
  templateUrl: 'erkl-arm.html',
})
export class ErklArmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openNext(){
    this.navCtrl.push('ArmbewegungPage');
  }

  leavePage(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklArmPage');
  }

}
