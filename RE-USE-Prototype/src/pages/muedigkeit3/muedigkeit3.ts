import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Muedigkeit3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muedigkeit3',
  templateUrl: 'muedigkeit3.html',
})
export class Muedigkeit3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('Muedigkeit4Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Muedigkeit3Page');
  }

  private knobValue = 0;
  onChange(data) {
    if (data == 0) {
      console.log('nichts');
      document.querySelector("body").style.cssText = "--color: #D68018";
    } else {
      document.querySelector("body").style.cssText = "--color: #25A33C";
    }
  }

}
