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

     /**
   * The leavePage function goes back to the root of the stack. In our Case this is the Home screen.
   */
  leavePage(){
    this.navCtrl.popToRoot();
  }

   /**
   * this function starts automaticly when this page is load.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad ErklBegleitPage');
  }

   /**
   * the openNext function opens the next page.
   * navCtrl.push opens the page in the ().
   * The name in the () is the name of the ts class, where it will link to.
   */
  openNext(){
    this.navCtrl.push('BegleittherapiePage');
  }

}
