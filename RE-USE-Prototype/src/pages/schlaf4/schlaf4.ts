import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Schlaf4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf4',
  templateUrl: 'schlaf4.html',
})
export class Schlaf4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(startTime){
    this.storage.set('schl4', startTime);
    console.log("Data saved");
    this.storage.get('schl4').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Schlaf5Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf4Page');
  }

}
