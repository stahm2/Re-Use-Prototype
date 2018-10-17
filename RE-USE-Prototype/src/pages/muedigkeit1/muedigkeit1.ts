import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Muedigkeit1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muedigkeit1',
  templateUrl: 'muedigkeit1.html',
})
export class Muedigkeit1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openHome(){
    this.navCtrl.push('HomePage');
  }

  openNext(){
    this.navCtrl.push('Muedigkeit2Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Muedigkeit1Page');
  }

}
