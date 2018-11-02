import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Schlaf1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf1',
  templateUrl: 'schlaf1.html',
})
export class Schlaf1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(){
    this.navCtrl.push('Schlaf2Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf1Page');
  }

}
