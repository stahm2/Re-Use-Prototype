import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Schlaf6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf6',
  templateUrl: 'schlaf6.html',
})
export class Schlaf6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(fallAsleepTime, wakeUpCount){
    this.storage.set('schl6fall', fallAsleepTime);
    this.storage.set('schl6wake', wakeUpCount);
    console.log("Data saved");
    this.storage.get('schl6fall').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.storage.get('schl6wake').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Schlaf7Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf6Page');
  }

}
