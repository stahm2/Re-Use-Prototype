import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Aktivitaet10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aktivitaet10',
  templateUrl: 'aktivitaet10.html',
})
export class Aktivitaet10Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  goToHome() {
    this.navCtrl.popToRoot();
  }

  openNext(knobValue) {
    this.storage.set('aktiv10', knobValue);
    console.log("Data saved");
    this.storage.get('aktiv10').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('PainPage');
  }

  openLast() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Aktivitaet10Page');
    document.querySelector("body").style.cssText = "--color: #D68018";
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
