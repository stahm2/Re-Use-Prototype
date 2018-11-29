import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklBlutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-blut',
  templateUrl: 'erkl-blut.html',
})
export class ErklBlutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  leavePage(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklBlutPage');
  }


  openNext(){
    this.navCtrl.push('BlutdruckPage');
  }

}
