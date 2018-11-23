import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklEqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-eq',
  templateUrl: 'erkl-eq.html',
})
export class ErklEqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  leavePage(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('Eq_5d_5l1Page');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklEqPage');
  }

}
