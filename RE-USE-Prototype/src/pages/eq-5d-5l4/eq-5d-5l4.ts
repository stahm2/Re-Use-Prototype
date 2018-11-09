import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Eq_5d_5l4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eq-5d-5l4',
  templateUrl: 'eq-5d-5l4.html',
})
export class Eq_5d_5l4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(eq4){
    this.storage.set('eq4', eq4);
    console.log("Data saved");
    this.storage.get('eq4').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Eq_5d_5l5Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Eq_5d_5l4Page');
  }

}
