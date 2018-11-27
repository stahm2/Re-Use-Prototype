import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklMuedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-mued',
  templateUrl: 'erkl-mued.html',
})
export class ErklMuedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklMuedPage');
  }

  openNext(){
    this.navCtrl.push('Muedigkeit1Page');
  }

  leavePage(){
    this.navCtrl.popToRoot();
  }


}
