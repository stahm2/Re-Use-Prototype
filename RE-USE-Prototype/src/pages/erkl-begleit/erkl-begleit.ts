import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklBegleitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-begleit',
  templateUrl: 'erkl-begleit.html',
})
export class ErklBegleitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  leavePage(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklBegleitPage');
  }

  openNext(){
    this.navCtrl.push('BegleittherapiePage');
  }

}
