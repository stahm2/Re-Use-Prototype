import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlutdruckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blutdruck',
  templateUrl: 'blutdruck.html',
})
export class BlutdruckPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  save() {
    console.log("Data saved");
    this.navCtrl.popToRoot();
  }


  back(){
    this.navCtrl.pop();
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlutdruckPage');
  }

}
