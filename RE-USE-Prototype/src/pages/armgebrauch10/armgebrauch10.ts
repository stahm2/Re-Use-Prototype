import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Armgebrauch10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-armgebrauch10',
  templateUrl: 'armgebrauch10.html',
})
export class Armgebrauch10Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  goToHome(){
    this.navCtrl.popToRoot();
  }

  openNext(knobValue){
    this.storage.set('arm10', knobValue);
    console.log("Data saved");
    this.storage.get('arm10').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Aktivitaet7Page');
  }

  openLast(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Armgebrauch10Page');
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
