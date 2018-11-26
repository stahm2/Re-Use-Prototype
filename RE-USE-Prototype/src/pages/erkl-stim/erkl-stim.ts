import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ErklStimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erkl-stim',
  templateUrl: 'erkl-stim.html',
})
export class ErklStimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  leavePage(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('MoodPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklStimPage');
  }

}
