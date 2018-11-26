import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Eq_5d_5l1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eq-5d-5l1',
  templateUrl: 'eq-5d-5l1.html',
})
export class Eq_5d_5l1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public storage: Storage) {
  }

  leavePage() {
    let alert = this.alertCtrl.create({
      title: 'Eingabe abbrechen',
      message: 'Möchten Sie die eingabe wircklich abbrechen?',
      buttons: [
        {
          text: 'Ja',
          role: 'yes',
          handler: () => {
            this.goToHome();
            console.log('yes clicked');
          }
        },
        {
          text: 'Nein',
          handler: () => {
            console.log('no clicked');
          }
        }
      ]
    });
    alert.present();
  }

  goToHome() {
    this.navCtrl.popToRoot();
  }

  private disableButton = true;
  enableButton(eq1) {
    if (eq1 >= 1) {
      this.disableButton = false;
    }
  }
  openNext(eq1) {
    this.storage.set('eq1', eq1);
    console.log("Data saved");
    this.storage.get('eq1').then((val) => {
      console.log('The value was:', val, 'and the key was');
    });
    this.navCtrl.push('Eq_5d_5l2Page');
  }

  openLast() {
    this.navCtrl.pop();
    document.querySelector("body").style.cssText = "--color: #25A33C";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Eq_5d_5l1Page');
  }

}
