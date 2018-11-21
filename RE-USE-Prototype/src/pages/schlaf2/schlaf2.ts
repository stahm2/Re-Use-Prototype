import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Schlaf2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schlaf2',
  templateUrl: 'schlaf2.html',
})
export class Schlaf2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(radioSchlaf2,textSchlaf2){
    this.storage.set('schl2radio', radioSchlaf2);
    this.storage.set('textSchlaf2', textSchlaf2);
    console.log("Data saved");
    this.storage.get('schl2').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Schlaf3Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Schlaf2Page');
  }

}
