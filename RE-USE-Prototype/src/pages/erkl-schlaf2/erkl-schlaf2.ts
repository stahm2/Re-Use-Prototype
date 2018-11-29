import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklSchlaf2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-schlaf2',
  templateUrl: 'erkl-schlaf2.html',
})
export class ErklSchlaf2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  leavePage(){
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklSchlaf2Page');
  }

  openNext(){
    this.navCtrl.push('Schlaf1Page');
  }

}
